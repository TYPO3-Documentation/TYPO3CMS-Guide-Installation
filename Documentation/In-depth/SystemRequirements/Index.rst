.. include:: ../../Includes.txt


.. _system-requirements:

===================
System Requirements
===================

TYPO3 requires a web server, PHP and a database system.

* TYPO3 requires a **web server** which can run PHP (Apache httpd, Nginx,
  Microsoft IIS, Caddy Server).
  If you use an Apache web server, some module (e.g. mod_rewrite) must be activated.
  See :ref:`system-requirements-webserver` for details.

* TYPO3 10 requires **PHP >= 7.2 <= 7.4** (Mac users: see warning at the end of this document).
  For PHP, several PHP extensions are necessary, others recommended. You possibly want to
  adjust the memory limit. See :ref:`system-requirements-php`.

* TYPO3 can be used with a great many **database** systems (MariaDB >= 10.2 <= 10.3,
  Microsoft SQL Server, MySQL >= 5.7 <= 8.1, PostgreSQL, SQLite).
  See :ref:`system-requirements-database` on this page for details.

* If you want TYPO3 to automatically carry out **image processing** – for example
  scaling or cropping – you will need GraphicsMagick (version 1.3 or newer) or
  ImageMagick (version 6 or
  newer) installed on the server. (GraphicsMagick should be preferred.)

For an overview see also `get.typo3.org
<https://get.typo3.org/version/10#system-requirements>`_.

Should you encounter problems, the ":ref:`troubleshooting`" chapter will help.

.. _system-requirements-database:

Database Environment
====================

TYPO3 works with database management systems in the above mentioned versions.
The InnoDB engine is required to be enabled in MySQL.


Required Database Privileges
----------------------------

The database user needs at least the following privileges on the TYPO3
database:

* SELECT, INSERT, UPDATE, DELETE

* CREATE, DROP, INDEX, ALTER, CREATE TEMPORARY TABLES, LOCK TABLES

It is recommended to also grant the following privileges:

* CREATE VIEW, SHOW VIEW

* EXECUTE, CREATE ROUTINE, ALTER ROUTINE


.. _system-requirements-webserver:

Web Server Environment
======================

.. _system-requirements-apache:

Apache
------

* Make sure `AllowOverride <https://httpd.apache.org/docs/current/mod/core.html#allowoverride>`__
  in the webserver configuration includes "Indexes" and "FileInfo" if you use Apache as
  webserver and override the default configuration with :file:`.htaccess` (as done by default).

* Enable Apache modules (see :ref:`enable-necessary-modules` in the Troubleshooting
  section). The following modules are used by the default :file:`.htaccess`:

mod_alias:
    Block access to vcs directories
    (strongly recommended for security reasons).

mod_authz_core:
    Block access to specific files and directories
    (strongly recommended for security reasons).

mod_autoindex:
    Used for disabling directory listings
    (strongly recommended for security reasons).

mod_deflate:
    Used for compression, better performance.

mod_expires:
    Adds HTTP headers for browser caching and better
    performance

mod_filter:
    Used with mod_deflate. For Apache versions below
    version 2.3.7 you don't need to enable `mod_filter`.

mod_headers:
    Used in combination with `mod_deflate`.

mod_rewrite:
    Enable human readable urls.

mod_setenvif:
    Also used with `mod_deflate`.

.. important::

    If the modules are not active, the corresponding directives in :file:`.htaccess` will
    not be activated (due to the `<IfModule` conditions). This leaves you with a system,
    which is less secure, slower and / or where some things will simply not work
    (e.g. URL rewriting due to missing `mod_rewrite`).

.. tip::

   Look for `<IfModule>` directives in the default :file:`.htaccess` file
   `EXT:install/Resources/Private/FolderStructureTemplateFiles/root-htaccess <https://github.com/TYPO3/TYPO3.CMS/blob/master/typo3/sysext/install/Resources/Private/FolderStructureTemplateFiles/root-htaccess>`__
   for more clues about which modules are used for what purpose. Not all used modules
   may have directives in the .htaccess file so do not necessarily expect :file:`.htaccess`
   to contain a complete list of modules.

* During the installation process (first install) the default :file:`.htaccess` file is
  copied to the document root folder of the project, if the file does not exist already.


Microsoft Internet Information Services (IIS)
---------------------------------------------

* During the installation process (first install) the default IIS web config file is
  copied to the document root folder of the project, if the file does not exist already.

* Default IIS web config file with rewrite rules can be found in
  :file:`EXT:install/Resources/Private/FolderStructureTemplateFiles/root-web-config`

NGINX
-----

* NGINX web server does not support any static file like htaccess in the document root by default.
  The NGINX configuration has to be setup manually.

* Examples of NGINX vHost config files with rewrite rules can be found in
  TYPO3 Forge. `Provide a Nginx server configuration <https://forge.typo3.org/issues/54316>`__.


.. _system-requirements-php:

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
  * pcre >= 8.38 (Mac users: see warning a the end of this document)
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

.. warning::

    With **PHP 7.3** in combination with **macOS** 10.13.6 (and probably also 10.14 - unconfirmed)
    pcre causes problems with brew as well as native or MAMP installations. It is
    recommended to use PHP 7.2. More information can be found here:

    * `Not working after upgrading to 7.3 <https://github.com/bobthecow/psysh/issues/540>`_
    * `Bug #77260	preg_match_all(): JIT compilation failed: no more memory <https://bugs.php.net/bug.php?id=77260>`_
