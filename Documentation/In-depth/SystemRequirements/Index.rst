.. include:: /Includes.rst.txt


.. _system-requirements:

System Requirements
^^^^^^^^^^^^^^^^^^^

TYPO3 requires a web server, PHP and a database system.

* TYPO3 requires a web server which can run PHP (Apache httpd, Nginx, Microsoft IIS).
* TYPO3 8 requires PHP >= 7.0.8 <= 7.4.99.
* TYPO3 can be used with a great many database systems (MariaDB >= 10.0.0 <= 10.2.26,
  Microsoft SQL Server, MySQL >= 5.0 <= 5.7, PostgreSQL).

If you use an Apache web server, the module mod_rewrite must be
activated. Certain PHP extensions are necessary, others recommended.
You possibly want to adjust the memory limit; at least 128 MB is
recommended.

If you want TYPO3 to automatically carry out image processing – for example
scaling or cropping – you will need GraphicsMagick or ImageMagick (version 6 or
newer) installed on the server.

A detailed list of these requirements is enclosed in the file
`INSTALL.md <https://github.com/TYPO3/TYPO3.CMS/blob/TYPO3_8-7/INSTALL.md>`_
inside the TYPO3 source package.

Should you encounter problems, the ":ref:`troubleshooting`" section at
the end of this document will help.
