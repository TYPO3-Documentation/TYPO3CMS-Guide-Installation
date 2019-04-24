.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _system-requirements:

===================
System Requirements
===================

TYPO3 requires a web server, PHP and a database system.

* TYPO3 requires a **web server** which can run PHP (e.g. Apache or IIS).

   * If you use the Apache web server, the module mod_rewrite must be
     activated.

* TYPO3 7.6 requires **PHP** 5.5 - 7.2.

   * Certain PHP extensions are necessary, others recommended. See file :file:`INSTALL.md` as mentioned below.
   * You possibly want to adjust the memory limit; at least 128 MB is
     recommended:
     
     php.ini:
     
     .. code-block:: none
     
        memory_limit = 128M

* MySQL >= 5.5 <= 5.7 (or compatible such as Percona or MariaDB)
* If you want TYPO3 to automatically carry out image processing – for example 
  scaling or cropping – you will need GraphicsMagick or ImageMagick (version 6 or 
  newer) installed on the server.

A detailed list of these requirements is enclosed in the file
:file:`INSTALL.md` inside the TYPO3 source package.

Should you encounter problems, the ":ref:`troubleshooting`" chapter will help.
