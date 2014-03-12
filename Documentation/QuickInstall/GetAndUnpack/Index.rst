.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt
.. highlight:: bash

.. _get-and-unpack-the-typo3-package:

Get and Unpack the TYPO3 Package
================================

#. Download the matching package for your requirements from
   `http://typo3.org/download/ <http://typo3.org/download/>`_
   (If you are not sure which package you should choose read the
   section ":ref:`which-package-and-which-file-format`" in the in-depth
   part of the manual).

#. Upload this package to your webserver.

#. Unpack the :file:`typo3_src-6.2.x.tar.gz` file one level above the
   Document Root of your Web server::

       /var/www/site/htdocs/$ cd ..
       /var/www/site/$ tar xzf typo3_src-6.2.x.tar.gz


   .. tip::

      You can also unpack the package on your local PC and *then* upload the
      *unpacked* contents. However, the package contains thousands of files,
      so if you're able to unzip or untar the package on the server, better
      do that!

#. Create the symlinks in your Document Root::

       cd htdocs
       ln -s ../typo3_src-6.2.x typo3_src
       ln -s typo3_src/index.php index.php
       ln -s typo3_src/typo3 typo3


#. In case you use Apache, copy the .htaccess to your Document Root::

       cp typo3_src/_.htaccess .htaccess


   You end up with the follow structure of files::

       typo3_src-6.2.x/
       htdocs/typo3_src -> ../typo3_src-6.2.x/
       htdocs/typo3 -> typo3_src/typo3/
       htdocs/index.php -> typo3_src/index.php
       htdocs/.htaccess

The advantage of this setup, is that all files from the TYPO3 Source
package are kept together and separated in the :file:`typo3_src-6.2.x`
folder. This allows easily to exchange this folder when a new patchlevel
version is released.

.. note::
   This setup allows the administrator to use the "Core Updater"
   feature from the Install Tool to later easily update the TYPO3
   Source files.

