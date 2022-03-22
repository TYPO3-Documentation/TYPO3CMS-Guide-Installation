.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: /Includes.rst.txt


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
  the main script for the website Frontend

:file:`\_.htaccess`
  contains an example configuration for Apache web servers, which
  can improve performance. It is not used by default. To activate it,
  copy the file to :file:`.htaccess` in your document root.

:file:`NEWS.md`
  describes what has changed in the TYPO3 Source since the last major
  version. Read this carefully if you are going to update your system!

:file:`INSTALL.md`
  contains system requirements and a short installation how-to.

All these files are part of the TYPO3 Core. You should never change
them and you can make them write-protected, if you like! They are the
ones you must upgrade when you install a new version of TYPO3.


.. _site-specific-folders-and-documents:

Site specific Folders and Documents
"""""""""""""""""""""""""""""""""""

The following files and folders will be created during the
installation of TYPO3:

:file:`fileadmin/`
  contains your site assets and files, local to the website.
  You can e.g. put templates, user uploads, external scripts and
  images here. By default this folder is used to store files, which
  have been uploaded in the TYPO3 Backend (:file:`fileadmin/` is
  configured as the first default storage). :file:`fileadmin/` must
  be writable for the web server user.

:file:`typo3conf/`
  contains configuration, extensions and translations for the local
  site.

:file:`typo3conf/ext/`
  will hold the local extensions available for this installation. Can
  be managed through the Extension Manager.

:file:`typo3conf/l10n/`
  will hold translations for the TYPO3 Backend of this installation.

:file:`typo3conf/LocalConfiguration.php`
  is the main configuration file of your installation and the one the
  customized values of all the Install Tool options get written to. It
  has to be writable and will be updated automatically by the Install
  Tool and the Extension Manager. You can edit this file manually, but
  make sure you keep the PHP syntax working.

:file:`typo3conf/PackageStates.php`
  contains information about the extensions, which are available in your
  system.

:file:`typo3conf/AdditionalConfiguration.php`
  is an additional configuration file, which is executed on every
  request after the :file:`LocalConfiguration.php` has been loaded. It
  can be used to manipulate the configuration of
  :code:`$GLOBALS['TYPO3_CONF_VARS']`. This file is not created
  automatically; create it, if you need it.

:file:`typo3temp/`
  will be empty at the beginning. But gradually temporary
  files will appear here. The directory must be writable for the
  web server user.

:file:`uploads/`
  (deprecated) contains folders used to store documents attached to
  database records, hence must be writable by the web server. This folder
  is used for compatibility reasons with older TYPO3 releases and
  extensions. Newer extensions and the TYPO3 core do not use this
  folder anymore; instead files should be managed by the File
  Abstraction Layer inside the default storage (:file:`fileadmin`).


.. _custom-folders:

Custom folders?
"""""""""""""""

Yes, just add whatever you like. Why not?

