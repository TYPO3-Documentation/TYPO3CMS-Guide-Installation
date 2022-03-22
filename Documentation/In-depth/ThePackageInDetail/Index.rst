.. include:: /Includes.rst.txt


.. _the-distributions-in-detail:

=====================
The Package in Detail
=====================


.. _typo3-folders-and-documents:

TYPO3 Folders and Files on Root Level
=====================================

The following files and folders are part of the TYPO3 package in a Composer
based installation.

:file:`public/`
  is the document root and public entry point.

:file:`var/`
  contains system files, like caches, logs, sessions...

:file:`vendor/`
  the Composer vendor directory contains third-party packages, libraries etc.

The 'public' Folder
-------------------

The following files and folders will be created in the public folder during the
installation of TYPO3:

:file:`fileadmin/`
  contains your site assets and files, local to the website. You can e.g. put
  images, user uploads and other assets here. By default this folder is used to
  store files, which have been uploaded in the TYPO3 Backend
  (:file:`fileadmin/` is configured as the first default storage).
  :file:`fileadmin/` must be writable for the web server user. Files in
  :file:`fileadmin/` are for editors, you should not put any site configuration
  files here. Exclude the :file:`fileadmin/` folder from your version control
  to make sure not to mix development files and user files.

:file:`typo3conf/`
  contains configuration and extensions for the local site.

:file:`typo3conf/ext/`
  will hold the local extensions available for this installation, extensions
  can be required via Composer.

:file:`typo3conf/LocalConfiguration.php`
  is the main configuration file of your installation and the one the
  customized values of all the Install Tool options get written to. It has to
  be writable and will be updated automatically by the Maintenance Tools and
  the Extension Manager. You can edit this file manually, but make sure you
  keep the PHP syntax working.

:file:`typo3conf/PackageStates.php`
  contains information about the extensions, which are activated in your
  system.

:file:`typo3conf/AdditionalConfiguration.php`
  is an additional configuration file, which is executed on every request after
  the :file:`LocalConfiguration.php` has been loaded. It can be used to
  manipulate the configuration of
  :code:`$GLOBALS['TYPO3_CONF_VARS']`. This file is not created
  automatically; create it if you need it.

:file:`index.php`
  the main script for the website Frontend


.. _custom-folders:

The `var` Folder
----------------

:file:`cache/`
  is where file based caches will be stored.

:file:`charset/`
  contains charset conversion tables.

:file:`labels/`
  contains language labels for a translated TYPO3 backend. You can download
  more languages via "Maintenance" > "Manage language labels"

:file:`lock/`
  is where file based locks are created.

:file:`log/`
  the default location for TYPO3 log files. Can be configured via the TYPO3
  logging framework. See `Logging Framework
  <https://docs.typo3.org/typo3cms/CoreApiReference/ApiOverview/Logging/Index.html>`.

:file:`session/`
  is where sessions are stored.

:file:`transient/`
  acts as transient storage during file operations for example.


Custom Folders?
===============

Yes, just add whatever you like. Why not?

