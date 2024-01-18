.. include:: /Includes.rst.txt
.. highlight:: bash

===============
Migration steps
===============

..  note::
    If you are not familiar with Composer, please read the following documents
    first:

    *   `Introduction to Composer <https://getcomposer.org/doc/00-intro.md>`__
    *   `Basic usage of Composer <https://getcomposer.org/doc/01-basic-usage.md>`__

Delete files
============

Yes, that's true. You have to delete some files, because they will be created by
Composer in some of the next steps.

You have to delete :file:`public/index.php`, :file:`public/typo3/` and all the
extensions inside :file:`public/typo3conf/ext/` you downloaded from TER or any
other resources like GitHub. You even have to delete your own extensions, if
they are available in a separate Git repository and, for example, included as
Git submodule.

Please keep only your sitepackage extension or any other extension, which was
explicitly built for your current project and does not have an own Git
repository.

Configure composer
==================

Create a file with name :file:`composer.json` in your project root, not inside
your web root.

You can use the :file:`composer.json` from typo3/cms-base-distribution as an
example. Use the file from the branch which matches your current version, for
example `12.x <https://github.com/typo3/TYPO3.CMS.BaseDistribution/tree/12.x/composer.json>`__.

However, this may require extensions you don't need or omit extensions you do
need, so be sure to update the required extensions as described in the next
sections.

You can also create the :file:`composer.json` file via a :bash:`composer init` command.
Or use the `TYPO3 Composer helper <https://get.typo3.org/misc/composer/helper>`__.
Also advanced project builders like `CPS-IT project-builder <https://github.com/CPS-IT/project-builder>`__
help you to easily initialize this most vital file of a Composer project.

.. hint::

   Versions prior to TYPO3 v12 may reference a `scripts` section that would make use of
   `helhum/typo3-console <https://packagist.org/packages/helhum/typo3-console>`__, and which
   also would need to be required as a package in your newly created :file:`composer.json`.

   You can look at previous versions of the :file:`composer.json` in the mentioned repository,
   if you want to migrate an older TYPO3 version to Composer.

   It is recommended to perform a Composer migration with the latest TYPO3 release to prevent
   facing issues that have been solved already in newer versions.


Add all required packages to your project
=========================================

..  note::
    Previously, the TYPO3 Composer repository was recommended to use for
    extensions not available on `Packagist <https://packagist.org>`__. This Composer repository is
    `deprecated <https://get.typo3.org/misc/composer/repository>`__ and should
    no longer be used.

You can add all your required packages with the Composer command `composer
require`. The full syntax is:

.. code-block:: shell
   :caption: typo3_root$

   composer require anyvendorname/anypackagename:version

**Example**:


.. code-block:: shell
   :caption: typo3_root$

   composer require "typo3/minimal:^12"

This will utilize the `Packagist <https://packagist.org>`__ repository by default,
which is the de-facto standard for any Composer package.


Composer packages usually rely on a concept called `SemVer` (semantic
versioning). This splits any version number into three parts:

*  Major version (1.x.x)
*  Minor version (x.1.x)
*  patch-level (x.x.1)

Only a major version should have intentional breaking changes (like new API,
changed configuration directives, removed functionality).

New features can only be introduced via a new minor version (unless it is breaking).

Patch-level releases only fix bugs and security issues and should never add
relevant features or even breaking changes.

By relying on this, the Composer version constraints of any installed package
allow you to continuously update involved packages with an expected outcome
(no breaking changes or non-working functionality).

There are different ways to define the version of the package you want
to install. The most common syntaxes start with `^` (e.g.
`^9.5`) or with `~` (e.g. `~9.5.0`). A full documentation can be
found at https://getcomposer.org/doc/articles/versions.md

In short:

*  `^9.5` or `^9.5.0` tells Composer to add newest package of
   version `9.\*` with at least `9.5.0`. When a package releases
   version `9.9.5`, you would receive that version. A version
   `10.0.1` would not be fetched. So this allows any new
   minor or patch-level version, but no new major version.

*  `~9.5.0` tells `composer` to add the newest package of version
   `9.5.\*` with at least `9.5.0`, but not version `9.6.0` or `10.0.1`.
   This would only fetch newer patch-level versions of a package.

You have to decide by yourself, which syntax fits best to your needs.

This applies to both the TYPO3 core packages as well as extension
packages, or even TYPO3-unrelated dependencies.

As a first step, you should only pick the TYPO3 core extensions to
ensure your setup works, and only later add in third-party dependencies.

.. _composer-migration-require-all:
.. _composer-migration-require-subtree-packages:

Install the Core
----------------

Once the :file:`composer.json` is updated accordingly, you can
install the system extensions:

.. code-block:: shell
   :caption: typo3_root$

   composer require typo3/minimal:^12
   composer require typo3/cms-scheduler:^12
   composer require ...

Or in one line:

.. code-block:: shell
   :caption: typo3_root$

   composer require typo3/minimal:^12 typo3/cms-scheduler:^12 ...

To find the correct package names, you can either take a look in the
:file:`composer.json` of the related system extension or follow the naming
convention
:file:`typo3/cms-<extension name with dash "-" instead of underscore "_">`,
e.g. :file:`typo3/cms-fluid-styled-content`.

.. note::

    To find out all TYPO3 Core packages, you can visit the TYPO3 Composer Helper website.
    https://get.typo3.org/misc/composer/helper
    From this website, you can select TYPO3 Core Packages you need and generate
    the composer command to require them.


Install extensions from packagist
---------------------------------

You already know the `TER <https://extensions.typo3.org>` and always used it to install extensions? Fine.
But with Composer, the **required way** is to install extensions
directly from `packagist.org <https://packagist.org>`__.

This is the usual way for most extensions used today. Alternatively, some extension
authors or commercial providers offer a custom Composer repository that you can
use (see below). The usage via :bash:`composer require` remains the same.

To install any TYPO3 extension, you need need to know the package name. There are multiple ways to find it:

Notice on extension's TER page
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Extension maintainers optionally can link their TYPO3 extension in TER with the
correct Composer key on `packagist.org <https://packagist.org>`__. Most maintainers already did that and if you
search the extension in TER, you will see a message, which command and Composer
key you can use to install this extension.

.. include:: /Images/ExternalScreenshots/TerComposerCommand.rst.txt

.. note::

    The command `composer req` is short for `composer require`. Both commands
    exactly do the same and are interchangeable.

Search on packagist.org
~~~~~~~~~~~~~~~~~~~~~~~

`packagist.org <https://packagist.org>`__ provides a flexible and quick search. Often you can simply
search for the known TYPO3 extension key or name of the extension, and you will most likely
find the package you are looking for.

Check manually
~~~~~~~~~~~~~~

This is the most exhausting way. But it will work, even if the extension maintainer
does not provide additional information.

#. Search and open the extension, you want to install, in
   `TER <https://extensions.typo3.org>`__.

#. Click button "Take a look into the code".

   .. include:: /Images/ExternalScreenshots/TerCodeLink.rst.txt

#. Open file :file:`composer.json`.

   .. include:: /Images/ExternalScreenshots/GithubComposerFile.rst.txt

#. Search for line with property `"name"`, it's value should be
   formatted like `vendor/package`.

   .. include:: /Images/ExternalScreenshots/GithubComposerName.rst.txt

#. Check, if the package can be found on
   `packagist.org <https://packagist.org>`__.

   .. include:: /Images/ExternalScreenshots/PackagistMask.rst.txt

**Example:**
To install the mask extension in version 4.1.\*, type:

.. code-block:: shell
   :caption: typo3_root$

   composer require mask/mask:~4.1.0


Install extension from version control system (e.g. GitHub, Gitlab, ...)
------------------------------------------------------------------------

In some cases, you will have to install a TYPO3 extension, which is not
available on packagist.org or in the TER. Examples could be:

*  non-public extension only used by your company.
*  you forked and modified an existing extension.
*  commercial plugin / licensed download / Early Access (EAP)

As first step, you have to define the repository in your
:file:`composer.json`'s `repositories` section. In this example, you find the
additional lines added to the :file:`composer.json` from above:

.. code-block:: json
   :caption: /composer.json

    {
        "repositories": [
            {
                "type": "vcs",
                "url": "https://github.com/foo/bar.git"
            }
        ],
        "extra": {
            "typo3/cms": {
                "web-dir": "public"
            }
        }
    }

.. note::
   `cms-package-dir` `is no longer supported <https://github.com/TYPO3/CmsComposerInstallers/issues/75#issuecomment-674998506>`__
   since subtree split. You will sometimes see composer.json files with this:

   .. code-block:: json
      :caption: /composer.json

      {
         "extra": {
            "typo3/cms": {
               "cms-package-dir": "{$vendor-dir}/typo3/cms"
            }
         }
      }

   There is no harm in having that, but it won't have any effect.

Ideally you should not manually edit a :file:`composer.json` file, but instead
utilize the Composer command to manipulate the file, like this:

.. code-block:: shell
   :caption: typo3_root$

   composer config repositories.foo-bar vcs https://github.com/foo/bar.git

The Git repository must point to a TYPO3 extension that provides a
:file:`composer.json` itself.

See `TYPO3 Explained Extension development <https://docs.typo3.org/m/typo3/reference-coreapi/main/en-us/ExtensionArchitecture/FileStructure/ComposerJson.html>`__
for details on how these files should look like.

Git tags of the repository will be used as version numbers.

Apart from only adding a single Git repository, you can also add Composer repositories
that aggregate multiple packages through tools like `Satis <https://github.com/composer/satis>`__,
or also private packagist repositories.

If you fulfill these requirements, you can add your extension in the
same way like the other examples:

.. code-block:: shell
   :caption: typo3_root$

   composer require foo/bar:~1.0.0

.. _mig-composer-include-individual-extensions:

Include individual extensions like site packages
================================================

A project will often contain custom extensions, and at the least a `sitepackage`
that provides the TYPO3-related project templates and configuration.

Previously, this was stored in a directory like :file:`typo3conf/ext/my_sitepackage`.
In Composer mode, you can easily add a custom repository within your project
of the type `path`, so that you can require your sitepackage as if it was
a normal package. You would not need to put it into a distinct Git or remote
composer repository.

Usually these extensions are saved in a directory like :file:`<root>/packages/`
or :file:`<root>/extensions/` (and no longer in `typo3conf/ext/`), so you would use:

.. code-block:: shell
   :caption: typo3_root$

   composer config repositories.your-project-name path './packages/*'
   composer require yourvendor/sitepackage

This also means that your sitepackage needs to be contained in its own directory like
:file:`<root>/packages/my_sitepackage/` and provide the right :file:`composer.json` file
within that directory. That :file:`composer.json` file would also list all the possible
autoloading-Information of PHP classes that your sitepackage uses:

.. code-block:: json
   :caption: EXT:my_sitepackage/composer.json

   {
        "autoload": {
            "psr-4": {
                "VendorName\\MySitepackage\\": "Classes/"
            }
        }
   }

For extensions without PHP namespaces, this section has to look a bit
differently. You can decide by yourself, if you want to list each PHP file
manually or if Composer should search for them inside a folder:

.. code-block:: json
   :caption: EXT:my_sitepackage/composer.json

   {
        "autoload": {
            "classmap": [
                "pi1/",
                "pi2/class.tx_myoldextension_pi2.php"
            ]
        }
   }

Directory locations are always relative to where the extension-specific :file:`composer.json` is
stored.

Do not mix up the root-level :file:`composer.json` file with this package-specific :file:`composer.json`
file. Since autoloading information is specific to an extension, you usually do not list it in the
root file.

Note if you do specify autoloading information in the root file, you need to specify the paths relative
to that location.

To complete our example root :file:`composer.json`, it would look like this:

.. code-block:: json
   :caption: typo3_root/composer.json

   {
       "repositories": [
           {
               "type": "vcs",
               "url": "https://github.com/foo/bar.git"
           },
           {
               "type": "path",
               "url": "./packages/*"
           },
       ],
       "extra": {
           "typo3/cms": {
               "web-dir": "public"
           }
       }
   }

After adding or changing paths to the autoload you should run :bash:`composer dumpautoload`. This command
will re-generate the autoload info and should be run anytime you add new paths to the autoload portion
in the :file:`composer.json`.

After all custom extensions are moved away from :file:`typo3conf/ext/` you can remove the directory
from your project. You may also want to adapt your :file:`.gitignore` file remove pointers to that
old directory.

New file locations
==================

As final steps, you should move some files because the location will have
changed for your site since moving to Composer.

Those directories are internal files that should not be exposed to the
Webserver, so they are moved outside the :file:`public/` structure,
in parallel to `vendor/`.

You should at least move the site configuration and the translations.

Move files:

.. code-block:: shell
   :caption: typo3_root$

   mv public/typo3conf/sites config/sites
   mv public/typo3temp/var var
   mv public/typo3conf/l10n var/labels

.. important::

   The :file:`var` directory may already exist. In that case, move the files
   individually. You can also delete the "old" files in
   :file:`public/typo3temp/var`, unless you need to keep the log files
   or anything else that may still be relevant.

These locations have changed, note that TYPO3 v12+ moved some more configuration
files to a new directory than TYPO3 v11:

+------------------------------------------------------+--------------------------------------+
| Before                                               | After                                |
+======================================================+======================================+
| :file:`public/typo3conf/sites`                       | :file:`config/sites`                 |
+------------------------------------------------------+--------------------------------------+
| :file:`public/typo3temp/var`                         | :file:`var`                          |
+------------------------------------------------------+--------------------------------------+
| :file:`public/typo3conf/l10n`                        | :file:`var/labels`                   |
+------------------------------------------------------+--------------------------------------+
| :file:`public/typo3conf/LocalConfiguration.php`      | :file:`config/system/settings.php`   |
+------------------------------------------------------+--------------------------------------+
| :file:`public/typo3conf/AdditionalConfiguration.php` | :file:`config/system/additional.php` |
+------------------------------------------------------+--------------------------------------+
| :file:`public/typo3conf/PackageStates.php`           | removed                              |
+------------------------------------------------------+--------------------------------------+
| :file:`public/typo3conf/ext`                         | removed                              |
+------------------------------------------------------+--------------------------------------+

Have a look at :ref:`t3coreapi:directory-structure` in "TYPO3 Explained". As
developer, you should also be familiar with the
:ref:`Environment API <t3coreapi:Environment>`.

