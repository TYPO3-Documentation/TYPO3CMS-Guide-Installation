.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _the-distributions-in-detail:

The Distributions in Detail
^^^^^^^^^^^^^^^^^^^^^^^^^^^


.. _the-zip-distribution:

The .zip distribution
"""""""""""""""""""""

These are the contents of the introduction package .zip-file:

.. figure:: ../../Images/Zip-Distribution.png
   :alt: Files and folders of the .zip-file.

.. _the-targz-distribution:

The .tar.gz distribution
""""""""""""""""""""""""

The .tar.gz distribution is mainly targeted at Unix users as it
contains relative symlinks. The contents might look like this:

.. figure:: ../../Images/Tar.gz-Distribution.png
   :alt: Files and folders of the .tar.gz-file.

The main point is - compared to the .zip distribution - that the
source directory only needs to be stored in the file-structure of the
Unix server only once. Then every website using the same TYPO3 version
can use symlinks to the proper folders of the source. Thus you save
space, because you avoid redundant files and get easy maintenance,
e.g. when you want to do an upgrade.


.. _typo3-folders-and-documents:

TYPO3 Folders and Documents
"""""""""""""""""""""""""""

The following files and folders are part of the TYPO3 Source package.

**typo3/** contains the TYPO3 source code, files, images and scripts
distributed with TYPO3.

**index.php** is the main script for the website Frontend.

**NEWS.txt** describes what has changed in the TYPO3 Source since the
last major version. Read this carefully if you are going to update
your system!

**INSTALL.txt** contains system requirements and a short installation
how-to.

All these files are a part of the TYPO3 Core. You should never change
them and you can make them write-protected, if you like! They are the
ones you must upgrade when you install a new version of TYPO3.


.. _site-specific-folders-and-documents:

Site specific Folders and Documents
"""""""""""""""""""""""""""""""""""

The following files and folders are part of the TYPO3 Dummy package.

**fileadmin/** contains files of your choice, local to the website.
You can e.g. put templates, user uploads, external scripts, external
html and images here. By default this folder is also used to store
files, which were uploaded in TYPO3. It must be writable for the
webserver user.

**typo3temp/** should be empty from the beginning. But gradually
temporary files will appear here. The directory must be writable.

**uploads/** contains folders used to store documents attached to
database records - hence they should be writable!

**typo3conf/** contains configuration for the local site.

**\_.htaccess** contains configuration for Apache webservers, which
can improve performance. It is not used by default.

**clear.gif** is a 1x1 clear-pixel gif file. It is used in many places.

**typo3conf/LocalConfiguration.php** is the main configuration file of
your installation and the one all the install tool options get written
to. It therefore has to be writable.

**typo3conf/AdditionalConfiguration.php** is an additional
configuration file, which is executed on every request after
LocalConfiguration.php has been loaded. It can be used to manipulate
$GLOBALS['TYPO3_CONF_VARS'].


.. _custom-folders:

Custom folders?
"""""""""""""""

Yes, just add whatever you like. Why not?

