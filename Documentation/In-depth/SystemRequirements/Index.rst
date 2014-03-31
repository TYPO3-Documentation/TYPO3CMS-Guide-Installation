.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _system-requirements:

System Requirements
^^^^^^^^^^^^^^^^^^^

TYPO3 requires a webserver, PHP and a database system.

* TYPO3 requires a webserver, which can run PHP (e.g. Apache or IIS).
* TYPO3 6.2 requires at least PHP 5.3.7.
* It can be used with a great many of database systems. If you use
  MySQL, you will need MySQL 5.1 at least.

If you use the Apache webserver, you the module mod_rewrite should be
activated. Certain PHP extensions are necessary, others recommended.
You possibly want to adjust the memory limit; at least 128 MB are
recommended. If you want TYPO3 to automatically do image processing
(scaling, cropping), you will need GraphicsMagick or ImageMagick 6 or
newer installed on the server.

A detailed list of these requirements is enclosed in the file
:file:`INSTALL.md` inside the TYPO3 source package.

Should you encounter problems, the ":ref:`troubleshooting`" section at
the end of this document helps you.
