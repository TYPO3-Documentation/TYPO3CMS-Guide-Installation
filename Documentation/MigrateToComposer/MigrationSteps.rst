.. include:: /Includes.rst.txt
.. highlight:: bash

===============
Migration Steps
===============

Delete Files
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

Configure Composer
==================

Create a file with name :file:`composer.json` in your project root, not inside
your web root.

You can use the :file:`composer.json` from typo3/cms-base-distribution as an
example. Use the file from the branch which matches your current version, for
example `10.x <https://github.com/typo3/TYPO3.CMS.BaseDistribution/tree/10.x/composer.json>`__.

However, this may require extensions you don't need or omit extensions you do
need, so be sure to update the required extensions as described in the next
sections.

The :file:`composer.json` in the Base distribution includes a scripts section:

.. code-block:: json

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


Add All Required Packages to Your Project
=========================================

..  note::
    Previously, the TYPO3 Composer repository was recommended to use for
    extensions not available on Packagist. This Composer repository is
    `deprecated <https://get.typo3.org/misc/composer/repository>`__ and should
    no longer be used.

You can add all your required packages with the Composer command `composer
require`. The full syntax is::

    composer require anyvendorname/anypackagename:version

**Example**::

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

.. hint::

   Since version 9 TYPO3 must be installed using individual `typo3/cms-*` packages
   (see "subtree split" for details). This means that you will only install the
   system extensions you really need. This, among others, increases security. The
   former `typo3/cms` package cannot be installed anymore.

Install the system extensions::

    composer require typo3/minimal:^9.5
    composer require typo3/cms-scheduler:^9.5
    composer require ...

Or in one line::

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


Install Extensions from Packagist
---------------------------------

You already know the TER and always used it to install extensions? Fine.
But with Composer, the **preferred way** is to install extensions
directly from `packagist.org <https://packagist.org>`__. This works great, when the maintainer uploaded them
to there. Many well known extensions are already available.
You only need to known the package name. There are multiple ways to find it:

Notice on Extension's TER Page
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Extension maintainers optionally can link their TYPO3 extension in TER with the
correct Composer key on `packagist.org <https://packagist.org>`__. Some maintainers already did that and if you
search the extension in TER, you will see a message, which command and Composer
key you can use to install this extension.

|TER Composer command|

.. note::

    The command `composer req` is short for `composer require`. Both commands
    exactly do the same and are interchangeable.

Check manually
~~~~~~~~~~~~~~

This is the most exhausting way. But it will work, even if the extension maintainer
does not provide additional information.

#. Search and open the extension, you want to install, in
   `TER <https://extensions.typo3.org>`__.

#. Click button "Take a look into the code".

   |TER screen shot|

#. Open file :file:`composer.json`.

   |file list|

#. Search for line with property `"name"`, it's value should be
   formatted like `vendor/package`.

   |file content|

#. Check, if the package can be found on
   `packagist.org <https://packagist.org>`__.

   |packagist screen shot|

**Example:**
To install the mask extension in version 4.1.\*, type::

   composer require mask/mask:~4.1.0


Install Extension from Version Control System (e.g. GitHub, Gitlab, ...)
------------------------------------------------------------------------

In some cases, you will have to install a TYPO3 extension, which is not
available on packagist.org or in the TER. Examples could be:

*  non-public extension only used by your company.
*  you forked and modified an existing extension.

As first step, you have to define the repository in your
:file:`composer.json`'s "repositories" section. In this example, you find the
additional lines added to the :file:`composer.json` from above:

.. code-block:: json

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

      {
         "extra": {
            "typo3/cms": {
               "cms-package-dir": "{$vendor-dir}/typo3/cms"
            }
         }
      }

   There is no harm in that, but it won't have any effect.


The Git repository must be a TYPO3 extension, with all the required
files (e.g. :file:`ext_emconf.php`) and must contain a valid
:file:`composer.json` itself. How this file should look in your extension,
can be found on
`this blog post from Helmut Hummel <https://insight.helhum.io/post/148886148725/composerjson-specification-for-typo3-extensions>`__.
Please note, that Git tags are used as version numbers.

If you fulfill these requirements, you can add your extension in the
same way like the other examples::

    composer require foo/bar:~1.0.0

.. _mig-composer-include-individual-extensions:

Include Individual Extensions like Site Packages
================================================

It's not necessary to move your project's site package to a dedicated
Git repository to re-include it in your project. You can keep the files
in your main project (e.g. :file:`public/typo3conf/ext/my_sitepackage`). There is
only one thing to do; Because TYPO3's autoload feature works differently
in Composer based installations, you have to register your PHP class
names in Composer. This is very easy when you use PHP namespaces:

.. this is json but results in warnings if lex "json" is used

.. code-block:: none

        "autoload": {
            "psr-4": {
                "VendorName\\MySitepackage\\": "public/typo3conf/ext/my_sitepackage/Classes/",
                "VendorName\\AnyOtherExtension\\": "public/typo3conf/ext/any_other_extension/Classes/"
            }
        }

For extension without PHP namespaces, this section has to look a bit
differently. You can decide by yourself, if you want to list each PHP file
manually or if Composer should search for them inside a folder:

.. this is json but results in warnings if lex "json" is used

.. code-block:: none

        "autoload": {
            "classmap": [
                "public/typo3conf/ext/my_old_extension/pi1/",
                "public/typo3conf/ext/my_old_extension/pi2/class.tx_myoldextension_pi2.php"
            ]
        }

To complete our example :file:`composer.json`, it would look like this:

.. code-block:: json

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

.. |TER composer command| image:: ../Images/ter-composer-command.png
   :scale: 65 %
.. |TER screen shot| image:: ../Images/ter-code-link.png
   :scale: 65 %
.. |file list| image:: ../Images/github-composer-file.png
   :scale: 80 %
.. |file content| image:: ../Images/github-composer-name.png
   :scale: 80 %
.. |packagist screen shot| image:: ../Images/packagist-mask.png
   :scale: 65 %


New file locations
==================

As final steps, you should move some files because the location will have
changed for your site since moving to Composer.

You should at least move the site configuration and the translations.

Move files::

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
   :ref:`"Secure Web" <secure-web>` extension which is a way to split up the "public"
   and "private" files.
