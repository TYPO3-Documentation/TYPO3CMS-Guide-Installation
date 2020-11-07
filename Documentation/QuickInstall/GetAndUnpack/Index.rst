.. include:: ../../Includes.txt
.. highlight:: shell

.. _get-and-unpack-the-typo3-package:
.. _install-typo3-without-composer:

==============================
Install TYPO3 Without Composer
==============================

.. attention::

   The recommended way of installing TYPO3 is :ref:`via Composer <install-via-composer>`.
   This page describes an alternative method of installing TYPO3 without Composer.

.. _installation-unix:

Installing on a Unix Server
===========================

#. Get the Source Package from `http://typo3.org/download/
   <http://typo3.org/download/>`_ and upload this package to your web server.
   Put it one level above the document root. In this example, we will use the
   :file:`.tar.gz` file format. (If you are not sure which package you should
   choose, read the section ":ref:`which-package-and-which-file-format`" in the
   in-depth part of the manual). Use the shell to execute the following
   commands::

      /var/www/site/public/$ cd ..
      /var/www/site/$ wget --content-disposition https://get.typo3.org/10


#. Unpack the :file:`typo3_src-10.0.x.tar.gz` file on your web server::

      /var/www/site/$ tar xzf typo3_src-10.4.x.tar.gz


   .. note::

      Be aware that the `x` in the extracted folder will be replaced with the
      latest bugfix version, e.g. typo3_src-10.4.1.

   .. tip::

      You can also unpack the package on your local PC and *then* upload the
      *unpacked* contents onto your web server. However, the package contains
      several thousand files which will then need to uploaded one at a time.
      This process is time intensive and not recommended.


#. Create these symlinks in your document root::

      cd public
      ln -s ../typo3_src-10.4.x typo3_src
      ln -s typo3_src/index.php index.php
      ln -s typo3_src/typo3 typo3


You end up with the following structure of files::

   typo3_src-10.4.x/
   public/typo3_src -> ../typo3_src-10.4.x/
   public/typo3 -> typo3_src/typo3/
   public/index.php -> typo3_src/index.php


The advantage of this setup is that all files from the TYPO3 Source package are
kept together in the :file:`typo3_src-10.0.x` folder and separated from other
files of your installation. This allows you to easily replace this folder when
a new patchlevel version of TYPO3 is released.


.. note::

   This setup allows the administrator to use the "Core Updater" feature in the
   Admin Tool / Maintenance area to update the TYPO3 installation.



.. _installation-windows:

Installing on a Windows Server
==============================

#. Get the Source Package from `http://typo3.org/download/
   <http://typo3.org/download/>`_ and extract it on your local PC. Use FTP,
   SFTP or similar to upload the contents of this package to your web server.
   Put them one level above the document root. For this manual, we will use the
   :file:`.zip` file. (If you are not sure which package you should choose,
   read the section ":ref:`which-package-and-which-file-format`" in the
   in-depth part of the manual).


#. Use the shell to create these symbolic links in your document root::

      cd public
      mklink /d typo3_src ..\typo3_src-10.4.x
      mklink /d typo3 typo3_src\typo3
      mklink index.php typo3_src\index.php


   You end up with the following structure of files::

      typo3_src-10.4.x/
      public/typo3_src -> ../typo3_src-10.4.x/
      public/typo3 -> typo3_src/typo3/
      public/index.php -> typo3_src/index.php


After extraction and symlink creation continue with the steps in
:ref:`the-install-tool`
