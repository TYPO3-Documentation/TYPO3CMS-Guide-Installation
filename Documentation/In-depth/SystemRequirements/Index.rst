.. include:: ../../Includes.txt
.. _system-requirements:

===================
System requirements
===================

.. note::
   The system requirements listed here are for the the current master version
   of TYPO3. Please head over to :ref:`version 10.4 of the guide
   <ltst3install:system-requirements>` for information
   regarding the system requirements of TYPO3 version 10.4.

TYPO3 requires a web server, PHP and a database system.

*  TYPO3 requires a **web server** which can run PHP (Apache httpd, Nginx,
   Microsoft IIS, Caddy Server).
   If you use an Apache web server, some modules (for example mod_rewrite) must be activated.
   `XAMPP <https://www.apachefriends.org/index.html>`__ is a software package which 
   includes Apache, MariaDB, PHP and Open SSL for Windows and Linux. 
   See :ref:`system-requirements-webserver` for details.

*  The current master of TYPO3 requires **PHP >= 7.4 <= 8.0**.
   For PHP, several PHP extensions are necessary, others recommended. You
   possibly want to adjust the memory limit. See :ref:`system-requirements-php`.

*  TYPO3 can be used with many **database** systems (MariaDB >= 10.2 <= 10.5,
   Microsoft SQL Server, MySQL 5.5+, PostgreSQL, SQLite).
   See :ref:`system-requirements-database` on this page for details.

*  If you want TYPO3 to automatically carry out **image processing** – for example
   scaling or cropping – you will need either GraphicsMagick (version 1.3 or newer) or
   ImageMagick (version 6 or newer) installed on the server. GraphicsMagick is recommended.
   
*  Open SSL. 
   Under Windows you must manually add the system environment variable - for example
   +OPENSSL_CONF = C:\Web\Xampp\Xamp-7.3.28\apache\conf\openssl.cnf*



For an overview see also `get.typo3.org
<https://get.typo3.org/version/11#system-requirements>`_.

Should you encounter problems, the ":ref:`troubleshooting`" chapter will help.

.. _system-requirements-database:

Database environment
====================

TYPO3 works with database management systems in the above mentioned versions.
The InnoDB engine is required to be enabled in MySQL.


Required database privileges
----------------------------

The database user needs at least the following privileges on the TYPO3
database:

*  SELECT, INSERT, UPDATE, DELETE

*  CREATE, DROP, INDEX, ALTER, CREATE TEMPORARY TABLES, LOCK TABLES

It is recommended to also grant the following privileges:

*  CREATE VIEW, SHOW VIEW

*  EXECUTE, CREATE ROUTINE, ALTER ROUTINE


.. _system-requirements-webserver:

Web server environment
======================

.. _system-requirements-apache:

Apache
------

*  Make sure `AllowOverride <https://httpd.apache.org/docs/current/mod/core.html#allowoverride>`__
   in the webserver configuration includes "Indexes" and "FileInfo" if you use Apache as
   webserver and override the default configuration with :file:`.htaccess` (as done by default).

*  Enable Apache modules (see :ref:`enable-necessary-modules` in the Troubleshooting
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
   (for example URL rewriting due to missing `mod_rewrite`).

.. tip::

   Look for `<IfModule>` directives in the default :file:`.htaccess` file
   `EXT:install/Resources/Private/FolderStructureTemplateFiles/root-htaccess <https://github.com/TYPO3/TYPO3.CMS/blob/master/typo3/sysext/install/Resources/Private/FolderStructureTemplateFiles/root-htaccess>`__
   for more clues about which modules are used for what purpose. Not all used modules
   may have directives in the .htaccess file so do not necessarily expect :file:`.htaccess`
   to contain a complete list of modules.

*  During the installation process (first install) the default :file:`.htaccess` file is
   copied to the document root folder of the project, if the file does not exist already.


Microsoft Internet Information Services (IIS)
---------------------------------------------

*  During the installation process (first install) the default IIS web config file is
   copied to the document root folder of the project, if the file does not exist already.

*  Default IIS web config file with rewrite rules can be found in
   :file:`EXT:install/Resources/Private/FolderStructureTemplateFiles/root-web-config`

*  Make sure that the `URL Rewrite plugin <https://www.iis.net/downloads/microsoft/url-rewrite>`__ is installed on your system.

NGINX
-----

*  NGINX web server does not support any static file like htaccess in the document root by default.
   The NGINX configuration has to be setup manually.

Example Configuration:

.. code-block:: nginx

   # Compressing resource files will save bandwidth and so improve loading speed especially for users
   # with slower internet connections. TYPO3 can compress the .js and .css files for you.
   # *) Set $GLOBALS['TYPO3_CONF_VARS']['BE']['compressionLevel'] = 9 for the Backend
   # *) Set $GLOBALS['TYPO3_CONF_VARS']['FE']['compressionLevel'] = 9 together with the TypoScript properties
   #    config.compressJs and config.compressCss for GZIP compression of Frontend JS and CSS files.
   location ~ \.js\.gzip$ {
       add_header Content-Encoding gzip;
       gzip off;
       types { text/javascript gzip; }
   }
   location ~ \.css\.gzip$ {
       add_header Content-Encoding gzip;
       gzip off;
       types { text/css gzip; }
   }

   # TYPO3 - Rule for versioned static files, configured through:
   # - $GLOBALS['TYPO3_CONF_VARS']['BE']['versionNumberInFilename']
   # - $GLOBALS['TYPO3_CONF_VARS']['FE']['versionNumberInFilename']
   if (!-e $request_filename) {
       rewrite ^/(.+)\.(\d+)\.(php|js|css|png|jpg|gif|gzip)$ /$1.$3 last;
   }

   # TYPO3 - Block access to composer files
   location ~* composer\.(?:json|lock) {
       deny all;
   }

   # TYPO3 - Block access to flexform files
   location ~* flexform[^.]*\.xml {
       deny all;
   }

   # TYPO3 - Block access to language files
   location ~* locallang[^.]*\.(?:xml|xlf)$ {
       deny all;
   }

   # TYPO3 - Block access to static typoscript files
   location ~* ext_conf_template\.txt|ext_typoscript_constants\.txt|ext_typoscript_setup\.txt {
       deny all;
   }

   # TYPO3 - Block access to miscellaneous protected files
   location ~* /.*\.(?:bak|co?nf|cfg|ya?ml|ts|typoscript|tsconfig|dist|fla|in[ci]|log|sh|sql|sqlite)$ {
       deny all;
   }

   # TYPO3 - Block access to recycler and temporary directories
   location ~ _(?:recycler|temp)_/ {
       deny all;
   }

   # TYPO3 - Block access to configuration files stored in fileadmin
   location ~ fileadmin/(?:templates)/.*\.(?:txt|ts|typoscript)$ {
       deny all;
   }

   # TYPO3 - Block access to libraries, source and temporary compiled data
   location ~ ^(?:vendor|typo3_src|typo3temp/var) {
       deny all;
   }

   # TYPO3 - Block access to protected extension directories
   location ~ (?:typo3conf/ext|typo3/sysext|typo3/ext)/[^/]+/(?:Configuration|Resources/Private|Tests?|Documentation|docs?)/ {
       deny all;
   }

   location / {
       try_files $uri $uri/ /index.php$is_args$args;
   }

   # TYPO3 Backend URLs
   location = /typo3 {
       rewrite ^ /typo3/;
   }

   location /typo3/ {
       try_files $uri /typo3/index.php$is_args$args;
   }

   location ~ [^/]\.php(/|$) {
       fastcgi_split_path_info ^(.+?\.php)(/.*)$;
       if (!-f $document_root$fastcgi_script_name) {
           return 404;
       }
       fastcgi_buffer_size 32k;
       fastcgi_buffers 8 16k;
       fastcgi_connect_timeout 240s;
       fastcgi_read_timeout 240s;
       fastcgi_send_timeout 240s;
       fastcgi_pass         typo3:9000;
       fastcgi_index        index.php;
       include              fastcgi.conf;
   }


.. _system-requirements-php:

PHP environment
---------------

*  :php:`memory_limit` set to at least 256M recommended

*  :php:`max_execution_time` set to at least 30 (240 seconds recommended)

*  :php:`max_input_vars set` to at least 1500


PHP required extensions
~~~~~~~~~~~~~~~~~~~~~~~

Your PHP needs to support the following extensions. Install will check if these
are available.

*  These are usually part of the standard PHP package on most distributions and
   are mandatory for a proper function:

   *  PDO
   *  json
   *  pcre >= 8.38
   *  session
   *  xml
   *  filter
   *  hash
   *  SPL
   *  standard

*  These are optional but highly recommended:

   *  mbstring

*  These might have to be installed separately:

   *  fileinfo
   *  gd
   *  zip
   *  zlib
   *  openssl
   *  intl
   *  mysqli (if you use MySQL, MariaDB as DBMS)
   *  postgresql (if you use PostgreSQL as DBMS)
   *  sqlsrv (if you use SQL Server as DBMS)
   *  sqlite (if you use SQLite as DBMS)
