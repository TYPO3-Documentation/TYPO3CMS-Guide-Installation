.. include:: /Includes.txt


.. _project_composer.json:

=============
composer.json
=============

In Composer, everything is a package, but there are differences between
a "project" and a "library" and the best practices that are used within
the file :file:`composer.json` for a project or library.

This page explains the basics for your **project** (TYPO3 installation)
:file:`composer.json`, while :file:`composer.json` for libraries (or more
specifically for TYPO3 extensions) is handled in TYPO3 Explained
:ref:`t3coreapi:composer-json`

In a Composer based TYPO3 installation, we typically have a file structure
like this:


.. code-block:: none

   project-root/
   ├── composer.json
   ├── composer.lock
   └── public
       ├── fileadmin
       ├── typo3
       ├── typo3conf
       └── ...

You may have used the `typo3/cms-base-distribution` package (as explained in
:ref:`install-via-composer`) which created a :file:`composer.json`
for you or you may want to create a :file:`composer.json` for your project from
scratch.

.. _project_composer.json-example:

Example composer.json
=====================

.. code-block:: json

   {
      "name": "vendor/my-typo3-project",
      "description": "TYPO3 project",
      "license": ["GPL-2.0-or-later"],
      "type": "project",
      "authors": [
         {
            "name": "Author name",
            "email": "nouser@example.com"
         }
      ],
      "require": {
         "php": "^7.4",
         "helhum/typo3-console": "^6.4.0",
         "typo3/cms-backend": "^10.4",
         "typo3/cms-belog": "^10.4",
         "typo3/cms-beuser": "^10.4",
         "typo3/cms-core": "^10.4",
         "typo3/cms-dashboard": "^10.4",
         "typo3/cms-extbase": "^10.4",
         "typo3/cms-extensionmanager": "^10.4",
         "typo3/cms-felogin": "^10.4",
         "typo3/cms-filelist": "^10.4",
         "typo3/cms-fluid": "^10.4",
         "typo3/cms-fluid-styled-content": "^10.4",
         "typo3/cms-form": "^10.4",
         "typo3/cms-frontend": "^10.4",
         "typo3/cms-impexp": "^10.4",
         "typo3/cms-info": "^10.4",
         "typo3/cms-install": "^10.4",
         "typo3/cms-recordlist": "^10.4",
         "typo3/cms-rte-ckeditor": "^10.4",
         "typo3/cms-seo": "^10.4",
         "typo3/cms-setup": "^10.4",
         "typo3/cms-sys-note": "^10.4",
         "typo3/cms-t3editor": "^10.4",
         "typo3/cms-tstemplate": "^10.4",
         "typo3/cms-viewpage": "^10.4"
      },
      "autoload": {
         "psr-4": {},
         "classmap": []
      },
      "config": {
         "sort-packages": true
      },
      "extra": {
         "typo3/cms": {
            "web-dir": "public"
         }
      },
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

You may notice that we include the third party extension
`helhum/typo3-console` here. This is recommended and the
section `scripts` uses it (see below).

Commands for creating composer.json
===================================

It is possible to create a composer.json from scratch with
`composer init`. However, in practice, it may be a good idea
to have a general composer.json which you reuse for every project
and add individual requirements for your projects via command line
commands.

In general it is recommended to use the command line to modify
composer.json (as in `composer require ...`). If you modify
a :file:`composer.json` in an existing project directly, you must
execute a command like `composer install` or `composer require`
afterwards to make sure that your :file:`composer.lock` will be updated.

(Incomplete) example for creating above :file:`composer.json`
(scripts is missing):

.. code-block:: shell

   composer init --type project
   composer config platform.php 7.4.1
   composer config sort-packages true
   composer config extra.typo3/cms.web-dir public
   composer require helhum/typo3-console:^6.4.0 \
      typo3/cms-backend:^10.4 \
      typo3/cms-belog:^10.4 \
      typo3/cms-beuser:^10.4 \
      typo3/cms-core:^10.4 \
      typo3/cms-dashboard:^10.4 \
      typo3/cms-extbase:^10.4 \
      typo3/cms-extensionmanager:^10.4 \
      typo3/cms-felogin:^10.4 \
      typo3/cms-filelist:^10.4 \
      typo3/cms-fluid:^10.4 \
      typo3/cms-fluid-styled-content:^10.4 \
      typo3/cms-form:^10.4 \
      typo3/cms-frontend:^10.4 \
      typo3/cms-impexp:^10.4 \
      typo3/cms-info:^10.4 \
      typo3/cms-install:^10.4 \
      typo3/cms-recordlist:^10.4 \
      typo3/cms-rte-ckeditor:^10.4 \
      typo3/cms-seo:^10.4 \
      typo3/cms-setup:^10.4 \
      typo3/cms-sys-note:^10.4 \
      typo3/cms-t3editor:^10.4 \
      typo3/cms-tstemplate:^10.4 \
      typo3/cms-viewpage:^10.4
   composer validate



Reference
=========

config/platform/php
-------------------

*This setting is not TYPO3 specific.*

.. code-block:: json

   {
      "config": {
         "platform": {
            "php": "add PHP version here"
         }
      }
   }

It should correspond to the PHP version on your target system.

config/sort-packages
--------------------

*This setting is not TYPO3 specific.*

.. code-block:: json

   {
      "config": {
            "sort-packages": true
      }
   }

Keeps your composer.json neat by ordering the packages automatically.


repositories
------------

*This setting is not TYPO3 specific.*

You can add additional repositories, if necessary.

The previously often used repository composer.typo3.org is now
`deprecated <https://get.typo3.org/misc/composer/repository>`__. It is
recommended to get your packages from `Packagist <https://packagist.org/>`__
and only use composer.typo3.org if necessary:

.. code-block:: json

   {
      "repositories": [
         {
            "type": "composer",
            "url": "https://composer.typo3.org/"
         }
      ]
   }

.. _project_composer.json-scripts:

scripts
-------

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

The post-autoload-dump will automatically invoke the scripts after
autoloading.

As stated in the `Composer <https://getcomposer.org/doc/articles/scripts.md>`__ documentation:

   **post-autoload-dump**: occurs after the autoloader has been dumped,
   either during `install`/`update`, or via the `dump-autoload` command.

These commands are supplied by `helhum/typo3-console`:

`install:generatepackagestates <https://docs.typo3.org/p/helhum/typo3-console/master/en-us/CommandReference/InstallGeneratepackagestates.html>`__:

Generates the :file:`typo3conf/PackageStates.php`. This will automatically
scan the extension folders and add the extensions to :file:`PackageStates.php`, thus
marking them active.

`install:fixfolderstructure <https://docs.typo3.org/p/helhum/typo3-console/master/en-us/CommandReference/InstallFixfolderstructure.html>`__

This creates the required folder structure needed for TYPO3.

.. important::

   Should be executed after generatepackagestates.


More information
================

TYPO3 specific

*  `TYPO3/CmsComposerInstallers <https://github.com/TYPO3/CmsComposerInstallers>`__
*  `helhum/typo3-console Command reference <https://docs.typo3.org/p/helhum/typo3-console/master/en-us/CommandReference/Index.html>`__

Not TYPO3 specific

*  `Composer basic usage <https://getcomposer.org/doc/01-basic-usage.md>`__ (for beginners)
*  `composer.json schema <https://getcomposer.org/doc/04-schema.md>`__
*  `Composer cli <https://getcomposer.org/doc/03-cli.md>`__
*  `composer.json scripts <https://getcomposer.org/doc/articles/scripts.md>`__
*  `composer config <https://getcomposer.org/doc/03-cli.md#config>`__
