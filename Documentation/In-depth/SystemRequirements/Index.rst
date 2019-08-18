.. include:: ../../Includes.txt


.. _system-requirements:

===================
System Requirements
===================

TYPO3 requires a web server, PHP and a database system.

* TYPO3 requires a web server which can run PHP (e.g. Apache, Nginx or IIS).

* TYPO3 9 requires at least PHP 7.2.x

* TYPO3 can be used with a great many database systems (e.g. MySQL or
  Postgres). If you use MySQL, you will need to install at least MySQL 5.5. and maximum MySQL 5.7

If you use an Apache web server, the module mod_rewrite must be activated.
Certain PHP extensions are necessary, others recommended. You possibly want to
adjust the memory limit; see below.

If you want TYPO3 to automatically carry out image processing – for example
scaling or cropping – you will need GraphicsMagick (version 1.3 or newer) or ImageMagick (version 6 or
newer) installed on the server. (GraphicsMagick should be prefered.)

For an overview see also `get.typo3.org
<https://get.typo3.org/version/9#system-requirements>`_.

Should you encounter problems, the ":ref:`troubleshooting`" section at the end
of this document will help.


Database Environment
====================

TYPO3 works with database management systems in various versions - see  `get.typo3.org
<https://get.typo3.org/version/9#system-requirements>`_ for details. 

The InnoDB engine is required in case you are using MySQL.

If you are creating the database yourself, you should use `utf8mb4` as charset and 
(naming depending on your dbms) `utf8mb4_unicode_ci` as collation.


Required Database Privileges
----------------------------

The database user needs at least the following privileges on the TYPO3
database:

* SELECT, INSERT, UPDATE, DELETE

* CREATE, DROP, INDEX, ALTER, CREATE TEMPORARY TABLES, LOCK TABLES

It is recommended to also grant the following privileges:

* CREATE VIEW, SHOW VIEW

* EXECUTE, CREATE ROUTINE, ALTER ROUTINE


Web Server Environment
======================

Apache
------

* Make sure AllowOverride in the webserver configuration includes "Indexes" and
  "FileInfo" if you use Apache as webserver.

* Enabled modules "mod_expires" and "mod_rewrite" (to enable human readable
  urls)

* During the installation process (first install) the default htaccess file is copied to the document root folder of the project, if the file does not exist already.

* Default htaccess file with rewrite rules can be found in EXT:install/Resources/Private/FolderStructureTemplateFiles/root-htaccess

Microsoft Internet Information Services (IIS)
---------------------------------------------

* During the installation process (first install) the default IIS web config file is copied to the document root folder of the project, if the file does not exist already.

* Default IIS web config file with rewrite rules can be found in EXT:install/Resources/Private/FolderStructureTemplateFiles/root-web-config

NGINX
-----

* NGINX web server does not support any static file like htaccess in the document root by default. The NGINX configuration has to be setup manually.

* Examples of NGINX vHost config files with rewrite rules can be found in TYPO3 Forge. `Provide a Nginx server configuration <https://forge.typo3.org/issues/54316>`__.


PHP Environment
---------------

* memory_limit set to at least 256M recommended

* max_execution_time set to at least 30 (240 seconds recommended)

* max_input_vars set to at least 1500


PHP Required Extensions
~~~~~~~~~~~~~~~~~~~~~~~

Your PHP needs to support the following extensions. Install will check if these
are available.

* These are usually part of the standard PHP package on most distributions:

  * PDO
  * json
  * pcre >= 8.38
  * session
  * xml
  * filter
  * hash
  * mbstring
  * SPL
  * standard

* These might have to be installed separately:

  * fileinfo
  * gd
  * zip
  * zlib
  * openssl
  * intl
  * mysqli (if you use MySQL, MariaDB as DBMS)
  * postgresql (if you use PostgreSQL as DBMS)
  * sqlsrv (if you use SQL Server as DBMS)
  * sqlite (if you use SQLite as DBMS)
