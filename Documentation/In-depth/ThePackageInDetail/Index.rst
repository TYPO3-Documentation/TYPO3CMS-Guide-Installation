.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _the-distributions-in-detail:

The Package in Detail
^^^^^^^^^^^^^^^^^^^^^

.. _typo3-folders-and-documents:

TYPO3 Folders and Files
"""""""""""""""""""""""

The following files and folders are part of the TYPO3 Source package.

:file:`typo3/`
  contains the TYPO3 source code, files, images and scripts
  distributed with TYPO3.

:file:`index.php`
  the main script for the website frontend

:file:`\_.htaccess`
  contains an example configuration for Apache webservers, which
  can improve performance. It is not used by default. To activate it,
  rename to :file:`.htaccess`

:file:`NEWS.md`
  describes what has changed in the TYPO3 Source since the last major
  version. Read this carefully if you are going to update your system!

:file:`INSTALL.md`
  contains system requirements and a short installation how-to.

All these files are a part of the TYPO3 Core. You should never change
them and you can make them write-protected, if you like! They are the
ones you must upgrade when you install a new version of TYPO3.


.. _site-specific-folders-and-documents:

Site specific Folders and Documents
"""""""""""""""""""""""""""""""""""

The following files and folders will be created during the
installation of TYPO3:

:file:`fileadmin/`
  contains your site assets and files, local to the website.
  By default this folder is used to store files which are uploaded
  in TYPO3 (the first default Storage). It must be writable for the
  webserver user.

:file:`typo3temp/`
  will be empty at the beginning. But gradually temporary
  files will appear here. The directory must be writable.

:file:`uploads/`
  (deprecated) contains folders used to store documents attached to
  database records, hence writable by the webserver. This folder is
  used for compatibility reasons with older TYPO3 releases and
  extensions. Newer extensions and the TYPO3 core do not use this
  folder anymore, instead files should be managed by the File
  Abstraction Layer inside the default storage (:file:`fileadmin`).

:file:`typo3conf/`
  contains configuration and extensions for the local site.

:file:`typo3conf/ext/`
  will hold the local extensions available for this installation. Is
  managed automatically by the Extension Manager.

:file:`typo3conf/LocalConfiguration.php`
  is the main configuration file of your installation and the one all
  the install tool options get written to. It has to be writable and
  will be automatically updated by the Install Tool and the Extension
  Manager. You might edit this file manually, but make sure you keep
  the PHP syntax working.

:file:`typo3conf/AdditionalConfiguration.php`
  is an additional configuration file, which is executed on every
  request after the :file:`LocalConfiguration.php` has been loaded. This file
  is not created automatically. Create if if you need it. It can be
  used to manipulate ``$GLOBALS['TYPO3_CONF_VARS']`` configuration.


.. _custom-folders:

Custom folders?
"""""""""""""""

Yes, just add whatever you like. Why not?

