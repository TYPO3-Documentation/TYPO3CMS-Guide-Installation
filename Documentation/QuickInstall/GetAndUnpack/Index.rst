.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt
.. highlight:: bash

.. _get-and-unpack-the-typo3-package:

Get and Unpack the TYPO3 Package
================================

.. _installation-unix:

Installing on a Unix server
"""""""""""""""""""""""""""

#. Get the Source Package from `http://typo3.org/download/
   <http://typo3.org/download/>`_ and upload this package to your
   web server. Put it one level above the document root. For this
   manual, we will use the :file:`.tar.gz` file. (If you are not sure
   which package you should choose, read the section
   ":ref:`which-package-and-which-file-format`" in the in-depth part of
   the manual). Use the shell to execute the according commands::

       /var/www/site/htdocs/$ cd ..
       /var/www/site/$ wget get.typo3.org/7.6 -O typo3_src-7.6.x.tar.gz

#. Unpack the :file:`typo3_src-7.6.x.tar.gz` file on your web server::

       /var/www/site/$ tar -xzf typo3_src-7.6.x.tar.gz

   .. tip::

      You can also unpack the package on your local PC and *then* upload the
      *unpacked* contents. However, the package contains thousands of files,
      so if you're able to unzip or untar the package on the server, better
      do that!

#. Create these symlinks in your document root::

       cd htdocs
       ln -s ../typo3_src-7.6.x typo3_src
       ln -s typo3_src/typo3 typo3
       ln -s typo3_src/index.php index.php

.. note::
    Some servers installations do not allow a symlink on a php file, especially on shared hosting environments. Here you should copy the index.php like this:

        cp typo3_src/index.php index.php
    

#. Create an empty file :file:`FIRST_INSTALL` to enable the Install Tool
   to set up and configure the instance in the next step::

       touch FIRST_INSTALL


#. In case you use the Apache web server, copy the :file:`.htaccess` file to
   your document root::

       cp typo3_src/_.htaccess .htaccess


   You end up with the following structure of files::

       typo3_src-7.6.x/
       htdocs/typo3_src -> ../typo3_src-7.6.x/
       htdocs/typo3 -> typo3_src/typo3/
       htdocs/index.php -> typo3_src/index.php
       htdocs/.htaccess

The advantage of this setup is that all files from the TYPO3 Source
package are kept together in the :file:`typo3_src-7.6.x` folder and
separated from other files of your installation. This allows you to
easily exchange this folder when a new patchlevel version of TYPO3 is
released.

.. note::
   This setup allows the administrator to use the "Core Updater"
   feature in the Install Tool to later easily update the TYPO3
   Source files.


.. _installation-windows:

Installing on a Windows server
""""""""""""""""""""""""""""""

#. Get the Source Package from `http://typo3.org/download/
   <http://typo3.org/download/>`_ and extract it on your local PC.
   Use FTP, SFTP or similar to upload the contents of this package to
   your web server. Put them one level above the document root. For this
   manual, we will use the :file:`.tar.gz` file. (If you are not sure
   which package you should choose, read the section
   ":ref:`which-package-and-which-file-format`" in the in-depth part of
   the manual).

#. Use the shell to create these symbolic links in your document root::

       cd htdocs
       mklink /d typo3_src ..\typo3_src-7.6.x
       mklink /d typo3 typo3_src\typo3
       mklink index.php typo3_src\index.php

#. In case you use the Apache web server, copy the :file:`.htaccess` file to
   your document root::

       copy typo3_src/_.htaccess .htaccess

   You end up with the following structure of files::

       typo3_src-7.6.x/
       htdocs/typo3_src -> ../typo3_src-7.6.x/
       htdocs/typo3 -> typo3_src/typo3/
       htdocs/index.php -> typo3_src/index.php
       htdocs/.htaccess

