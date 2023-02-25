.. include:: /Includes.rst.txt
.. highlight:: bash

===============
Migration steps
===============

Delete files
============

Yes, that's true. You have to delete some files, because they will be created by
Composer in some of the next steps.

You have to delete, :file:`public/index.php`, :file:`public/typo3/` and all the
extensions inside :file:`public/typo3conf/ext/`, you downloaded from TER or any
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
example. Use the file from the branch which matches your current version, e.g.
`10.x <https://github.com/typo3/typo3.BaseDistribution/blob/10.x/composer.json>`__.

However, this may require extensions you don't need or omit extensions you do
need, so be sure to update the required extensions as described in the next
sections.

If some of your extensions are not available on packagist, but are available in
TER, you can add composer.typo3.org as repository:

.. code-block:: json
   :caption: /composer.json

   {
       "repositories": [
           {
               "type": "composer",
               "url": "https://composer.typo3.org/"
           }
       ]
   }

The :file:`composer.json` in the Base distribution includes a scripts section:

.. code-block:: json
   :caption: /composer.json

   {
      "scripts": {
         "typo3-cms-scripts": [
            "typo3cms install:generatepackagestates",
            "typo3cms install:fixfolderstructure"
         ],
         "post-autoload-dump": [
            "@typo3-cms-scripts"
         ]
      }
   }


This requires helhum/typo3-console (so be sure to require that too) and is essential
for generating the file :file:`typo3conf/PackageStates.php`.


.. hint::

   The script section may not be available in current master of the Base Distribution.
   Look at the previous versions.


Add all required packages to your project
=========================================

You can add all your required packages with the Composer command `composer
require`. The full syntax is:

.. code-block:: shell
   :caption: typo3_root$

   composer require anyvendorname/anypackagename:version

**Example**:


.. code-block:: shell
   :caption: typo3_root$

   composer require typo3/minimal:^9.5

There are different ways to define the version of the package, you want
to install. The most common syntaxes start with `^` (e.g.
`^9.5`) or with `~` (e.g. `~9.5.0`). A full documentation can be
found at https://getcomposer.org/doc/articles/versions.md

In short:

*  `^9.5` or `^9.5.0` tells Composer to add newest package of
   version 9.\* with at least 9.5.0, but not version 10.

*  `~9.5.0` tells `composer` to add the newest package of version
   9.5.\* with at least 9.5.0, but not version 9.6.

You have to decide by yourself, which syntax fits best to your needs.

.. _composer-migration-require-all:
.. _composer-migration-require-subtree-packages:

Install the Core
----------------

Install the system extensions:

.. code-block:: shell
   :caption: typo3_root$

   composer require typo3/minimal:^9.5
   composer require typo3/cms-scheduler:^9.5
   composer require ...

Or in one line:

.. code-block:: shell
   :caption: typo3_root$

   composer require typo3/cms-minimal:^9.5 typo3/cms-scheduler:^9.5 ...

To find the correct package names, you can either take a look in the
:file:`composer.json` of any system extension or follow the naming
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

You already know the TER and always used it to install extensions? Fine.
But with Composer, the **preferred way** is to install extensions
directly from `packagist.org <https://packagist.org>`__. This works great, when the maintainer uploaded them
to there. Many well known extensions are already available.
You only need to known the package name. There are multiple ways to find it:

Notice on extension's TER page
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Extension maintainers optionally can link their TYPO3 extension in TER with the
correct Composer key on `packagist.org <https://packagist.org>`__. Some maintainers already did that and if you
search the extension in TER, you will see a message, which command and Composer
key you can use to install this extension.

.. include:: /Images/ExternalScreenshots/TerComposerCommand.rst.txt

.. note::

    The command `composer req` is short for `composer require`. Both commands
    exactly do the same and are interchangeable.

Check in TER satis
~~~~~~~~~~~~~~~~~~

If you search the extension in https://composer.typo3.org/satis.html and it's linked to
`packagist.org <https://packagist.org>`__, they are marked as "abandoned" and you
will see a message, which Composer key should be used to install this extension.

.. include:: /Images/ExternalScreenshots/SatisAbandoned.rst.txt

See warning during `composer require` command
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you still install one of the abandoned extensions via its `typo3-ter` package key,
you will also see a warning during the `composer require` command.

.. include:: /Images/ExternalScreenshots/ComposerTerAbandoned.rst.txt

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

Install extension from TER
--------------------------

If the extension is not available on packagist, the good news is: All
TER extensions are available via Composer! That's, why we added
:samp:`https://composer.typo3.org/` as repository to our :file:`composer.json`
some lines above. There are little naming conventions:

*  Vendor name is `typo3-ter`.

*  Underscores `_` are replaced by dash `-`.

**Example:**

The extension `any_fancy_extension`'s auto generated Composer package
name would be `typo3-ter/any-fancy-extension`. To add this extension in
version 1.2.\*, type:

.. code-block:: shell
   :caption: typo3_root$

   composer require typo3-ter/any-fancy-extension:~1.2.0

You can browse all available extensions and versions via
https://composer.typo3.org/satis.html.

.. note::

    If you do not include any packages this way, you can remove the
    repository block named :samp:`https://composer.typo3.org` from your
    :file:`composer.json` to improve speed.

Install extension from version control system (e.g. GitHub, Gitlab, ...)
------------------------------------------------------------------------

In some cases, you will have to install a TYPO3 extension, which is not
available on packagist.org or in the TER. Examples could be:

*  non-public extension only used by your company.
*  you forked and modified an existing extension.

As first step, you have to define the repository in your
:file:`composer.json`'s "repositories" section. In this example, you find the
additional lines added to the :file:`composer.json` from above:

.. code-block:: json
   :caption: /composer.json

    {
        "repositories": [
            {
                "type": "composer",
                "url": "https://composer.typo3.org/"
            },
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

   There is no harm in that, but it won't have any effect.


The Git repository must be a TYPO3 extension with a
:file:`composer.json` itself. How this file should look in your extension,
can be found on `composer.typo3.org <https://composer.typo3.org/>`__ or
`this blog post from Helmut Hummel <https://insight.helhum.io/post/148886148725/composerjson-specification-for-typo3-extensions>`__.
Please note, that Git tags are used as version numbers.

If you fulfill these requirements, you can add your extension in the
same way like the other examples:

.. code-block:: shell
   :caption: typo3_root$

   composer require foo/bar:~1.0.0

.. _mig-composer-include-individual-extensions:

Include individual extensions like site packages
================================================

.. todo:: This is not allowed anymore. The sitepackage has to go to another
   directory and be included via composer properly

It's not necessary to move your project's site package to a dedicated
Git repository to re-include it in your project. You can keep the files
in your main project (e.g. :file:`public/typo3conf/ext/my_sitepackage`). There is
only one thing to do; Because TYPO3's autoload feature works differently
in Composer based installations, you have to register your PHP class
names in Composer. This is very easy when you use PHP namespaces:

.. code-block:: json
   :caption: EXT:my_sitepackage/composer.json

   {
        "autoload": {
            "psr-4": {
                "VendorName\\MySitepackage\\": "public/typo3conf/ext/my_sitepackage/Classes/",
                "VendorName\\AnyOtherExtension\\": "public/typo3conf/ext/any_other_extension/Classes/"
            }
        }
   }

For extension without PHP namespaces, this section has to look a bit
differently. You can decide by yourself, if you want to list each PHP file
manually or if Composer should search for them inside a folder:

.. code-block:: json
   :caption: EXT:my_sitepackage/composer.json

   {
        "autoload": {
            "classmap": [
                "public/typo3conf/ext/my_old_extension/pi1/",
                "public/typo3conf/ext/my_old_extension/pi2/class.tx_myoldextension_pi2.php"
            ]
        }
   }

To complete our example :file:`composer.json`, it would look like this:

.. code-block:: json
   :caption: typo3_root/composer.json

   {
       "repositories": [
           {
               "type": "composer",
               "url": "https://composer.typo3.org/"
           },
           {
               "type": "vcs",
               "url": "https://github.com/foo/bar.git"
           }
       ],
       "extra": {
           "typo3/cms": {
               "web-dir": "public"
           }
       },
       "autoload": {
           "psr-4": {
               "VendorName\\MySitepackage\\": "public/typo3conf/ext/my_sitepackage/Classes/",
               "VendorName\\AnyOtherExtension\\": "public/typo3conf/ext/any_other_extension/Classes/"
           },
           "classmap": [
               "public/typo3conf/ext/my_old_extension/pi1/",
               "public/typo3conf/ext/my_old_extension/pi2/class.tx_myoldextension_pi2.php"
           ]
       }
   }

After adding paths to the autoload you should run `composer dumpautoload`. This command will re-generate the autoload info and should be run anytime you add new paths to the autoload portion in the :file:`composer.json`.

.. note::

    If you want to keep your :file:`typo3conf/ext` directory empty and `autoload` information only
    in extensions' :file:`composer.json`, but not in your project's :file:`composer.json`,
    there is an alternative way to include your individual extensions in the chapter
    :ref:`completely clear "typo3conf/ext" folder <mig-composer-clear-typo3conf-ext-folder>`
    in the :ref:`Best practices <mig-composer-best-practices>` section.


New file locations
==================

As final steps, you should move some files because the location will have
changed for your site since moving to Composer.

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

These locations have changed:

+--------------------------------+-----------------------+
| Before                         | After                 |
+================================+=======================+
| :file:`public/typo3conf/sites` | :file:`config/sites`  |
+--------------------------------+-----------------------+
| :file:`public/typo3temp/var`   | :file:`var`           |
+--------------------------------+-----------------------+
| :file:`public/typo3conf/l10n`  | :file:`var/labels`    |
+--------------------------------+-----------------------+


Have a look at :ref:`t3coreapi:directory-structure` in "TYPO3 Explained". As
developer, you should also be familiar with the
:ref:`Environment API <t3coreapi:Environment>`.

These file locations have **not** changed:

+------------------------------------------------------+
| :file:`public/typo3conf/LocalConfiguration.php`      |
+------------------------------------------------------+
| :file:`public/typo3conf/AdditionalConfiguration.php` |
+------------------------------------------------------+
| :file:`public/typo3conf/PackageStates.php`           |
+------------------------------------------------------+
| :file:`public/typo3conf/ext`                         |
+------------------------------------------------------+


This means, the :file:`config` directory does not exactly replace the
:file:`public/typo3conf` directory. This may change in the future.

.. tip::

   You can take additional measures to move :file:`public/typo3conf/ext` out of the web
   root too. Have a look at :ref:`mig-composer-clear-typo3conf-ext-folder` in the
   "Best practices" section. You may also want to look at the
   `Secure Web <https://packagist.org/packages/helhum/typo3-secure-web>`__
   package which is a way to split up the "public" and "private" files.
