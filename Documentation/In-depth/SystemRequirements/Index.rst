.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _system-requirements:

System Requirements
^^^^^^^^^^^^^^^^^^^

TYPO3 requires a web server, PHP and a database system.

* TYPO3 requires a web server which can run PHP (e.g. Apache or IIS).
* TYPO3 6.2 requires PHP 5.3.7 - 5.6.x
* TYPO3 can be used with a great many database systems. If you use
  MySQL, you will need to implement at least MySQL 5.1.

If you use the Apache web server, the module mod_rewrite must be
activated. Certain PHP extensions are necessary, others recommended.
You possibly want to adjust the memory limit; at least 128 MB is
recommended.

If you want TYPO3 to automatically carry out image processing – for example 
scaling or cropping – you will need GraphicsMagick or ImageMagick (version 6 or 
newer) installed on the server.

A detailed list of these requirements is enclosed in the file
:file:`INSTALL.md` inside the TYPO3 source package.

Should you encounter problems, the ":ref:`troubleshooting`" section at
the end of this document will help.
