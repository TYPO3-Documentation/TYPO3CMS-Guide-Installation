.. include:: /Includes.rst.txt


.. _troubleshooting:

===============
Troubleshooting
===============

The following sections contain hints to help you solve common problems.
Note that you should also check the section
:guilabel:`"ADMIN TOOLS > Environment > Environment Status"` in the
Install Tool or TYPO3 backend. TYPO3 will inform you about errors and
warnings in your installation. Follow the advice given there to fix those issues.
This helps to solve or prevent most issues.

.. _troubleshooting_lost_password:

Lost passwords
==============

.. _troubleshooting_lost_password_admin:

Resetting lost admin passwords
------------------------------

If the admin password got lost you can create a new admin user from the admin
tools section :guilabel:`Maintenance`.

Directly from the TYPO3 backend the admin tools can only be accessed by admin users
with system maintainer rights. And such a user is lacking.

However the admin tools can be accessed as :guilabel:`Install tool` by calling::

   https://examle.com/typo3/install.php

The install tool expects the install tool password. If you have also lost this
one see :ref:`troubleshooting_lost_password_install_tool`.

Once in the admin tool go to :guilabel:`Maintenance > Create Administrative User`
and click on :guilabel:`Create Administrator`. In the following dialogue you
can enter a new username and password for the new administrator.

Use this new administrator to log into the TYPO3 backend. In the module
:guilabel:`Backend Users` you can change the passwords of existing users,
including admins.


.. _troubleshooting_lost_password_install_tool:

Resetting lost install tool passwords
-------------------------------------

As long as you have writing access to the file
:file:`typo3conf/LocalConfiguration.php` you can reset
the install tool password.

Just enter any desired password into the dialogue asking for your install tool
password. If it is not correct you will get a message like this one::

   "Given password does not match the install tool login password. Calculated hash:
   $argon2i$v=xyz"

Copy this hash including the :php:`$argon2i` part and any trailing dots. Then
open the file :file:`typo3conf/LocalConfiguration.php` and replace the following
array entry::

   'BE' => [
      'installToolPassword' => '$argon2i$v=xyz',
   ],

.. note::

   If the new install tool password does not work, check if it gets overridden
   later in the LocalConfiguration.php or in the AdditionalConfiguration.php
   if one exists. If you can still not log into the install tool check if
   there are errors in the logs when debugging is turned on.


Debug settings
==============

During troubleshooting, in the :guilabel:`"Settings > Configuration Presets"` section of the Install
Tool, under "Debug settings", you should select the "Debug" preset. This is
especially helpful, if e.g. in the Frontend you only see a blank page. With
debug settings activated, the PHP error message will be displayed, which will
help you narrow down the problem.

You may also have to enable this TypoScript setting:

.. code-block:: typoscript

   config.contentObjectExceptionHandler = 0

.. seealso::

   :ref:`t3coreapi:error-handling-configuration-examples-debug`

.. important::

   Do not permanently enable debug presets, but set it back to production ("Live")
   after you have fixed the problem (or analyze the problem on a test system).

If necessary, look in relevant logs for further clues:

* Webserver log files for general problems (e.g. :file:`/var/log/apache2` on
  Linux based system)
* TYPO3 Administration log in :guilabel:`SYSTEM > Log` (in the backend)
* TYPO3 logs writting by :ref:`Logging Framework <t3coreapi:logging>` in :file:`typo3temp/var/log`

What gets written where depends on how you have configured the error handling and logging.

.. _apache:

Apache
======

Some settings may require adjustment for TYPO3 to operate
correctly.


.. _enable-necessary-modules:
.. _enable-mod_rewrite:

Enable mod_rewrite
------------------

TYPO3 makes use of several Apache modules (see
:ref:`System Requirements <system-requirements-apache>` for more information).

If mod_rewrite is not enabled, the URL handling will not work
properly (specifically the mapping of the URLs TYPO3 uses internally
to "speaking URLs") and you might get 404 (page not found) errors.

.. tip::

   How Apache modules are enabled, depends on your system. Look in the
   documentation for your operating system distribution.

For example, the modules can be
enabled by editing your http.conf file, locating the required modules
and removing the preceding hash symbol::

   #LoadModule expires_module modules/mod_expires.so
   #LoadModule rewrite_module modules/mod_rewrite.so

Or, just do

.. code-block:: bash

   a2enmod rewrite expires

As usual, after changing configuration, you must reload / restart the
Apache service.

.. _adjust-threadstacksize-on-windows:

Adjust ThreadStackSize on Windows
---------------------------------

If you are running TYPO3 on top of Windows, the extension manager might not
appear. Instead you might only see a blank screen in the right frame.

This problem is caused by the value of ThreadStackSize, which on
Windows systems by default is set too low. To fix this, add the
following lines at the end of your httpd.conf file::

   <IfModule mpm_winnt_module>
     ThreadStackSize 8388608
   </IfModule>


.. _php:

PHP
===

.. _install-tool:

Install Tool
------------

The "System Environment" section of the Install Tool provides detailed
information about any missing PHP modules and any other settings that
may not be configured correctly.

For example, the PHP extensions openssl and fileinfo must be enabled. This can
be achieved by adding (or uncommenting) the following lines in the [PHP]
section of your php.ini file::

   extension=fileinfo.so
   extension=openssl.so

On a Windows-based server, these are the extension files::

   extension=php_fileinfo.dll
   extension=php_openssl.dll


.. _php-caches-extension-classes-etc:

PHP Caches, Extension Classes etc.
----------------------------------

There are some situations which can cause what appear to be totally
illogical problems after an upgrade:

- If extensions override classes in which functions have changed.
  Solution: Try disabling all extensions and then enable them one by
  one until the error recurs.

- If a PHP cache somehow fails to re-cache scripts: in particular, if a
  change happened to a parent class overridden by a child class which was not updated.
  Solution: Remove ALL cached PHP files (for PHP-Accelerator, remove :file:`/tmp/phpa_*`)
  and restart Apache.


.. _php-troubleshooting_opcode:

Opcode cache messages
---------------------

No PHP opcode cache loaded
~~~~~~~~~~~~~~~~~~~~~~~~~~

You do not have an opcode cache system installed or activated. If you
want better performance for your website, then you should use one. The
best choice is OPcache for PHP 5.5 onwards.

This opcode cache is marked as malfunctioning by the TYPO3 CMS Team.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This will be shown if an opcode cache system is found and activated,
which is known to have "too many" errors and won't be supported by TYPO3
CMS (no bugfixes, security fixes or anything else). In current TYPO3
versions only OPcache is supported

This opcode cache may work correctly but has medium performance.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This will be shown if an opcode cache system is found and activated,
which has some nitpicks. For example we cannot clear the cache for one
file (which we changed) but only can reset the complete cache itself.
This will happen with:

-  OPcache before 7.0.2 (Shouldn't be out in the wild.)
-  APC before 3.1.1 and some mysterious configuration combinations.
-  XCache
-  ZendOptimizerPlus

This opcode cache should work correctly and has good performance.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Well it seems that all is ok and working. Maybe you can tweak something
more but this is out of our knowledge of your user scenario.


.. _mysql:

MySQL
=====


.. _character-sets:

Character Set
-------------

TYPO3 uses UTF-8 encoding, you will need to ensure that your
instance of MySQL also uses UTF-8. When installing TYPO3 for
the first time, you can select UTF-8 encoding when you create
the database for the first time. For an existing database, you
will have to set each table and column to use UTF-8.


.. _typo3-specific:

TYPO3
=====


.. _cached-files-in-typo3temp:

Cached Files in typo3temp/
--------------------------

Generally you should know that TYPO3 generates temporary "cached"
files and PHP scripts in :file:`<var-path>/cache/` (usually either
`typo3temp/var/cache` or `var/cache`). You can remove the
whole :file:`<var-path>/cache` directory at any time; the directory
structure and all the caches will be re-written on the next hit to the
system.

A shortcut to remove these caches can be found in the Install Tool,
under "Important Actions". This might be useful in the event your
cache files become damaged and your system is not running correctly. The
Install Tool won't load any of these caches or any extension, so it
should be safe to use regardless of the corrupt state of the Caches.

Amongst other caches, under :file:`<var-path>/cache/code/core/`
you find files like these::

   -rw-rw----   1 www-data   www-data   61555  2014-03-26 16:28   ext_localconf_8b0519db6112697cceedb50296df89b0ce04ff70.php
   -rw-rw----   1 www-data   www-data   81995  2014-03-26 16:28   ext_tables_c3638687920118a92ab652cbf23a9ca69d4a6469.php

These files simply contain all :file:`ext\_tables.php` and
:file:`ext\_localconf.php` files of the installed extensions
concatenated in the order they are loaded. Therefore including one of
these files would be the same as including potentially hundreds of PHP
files and should improve performance.

Concerning these files you have to consider the following:

#. Making changes to these files does not make sense, because they can
   be removed and recreated from the "originals" at any time. You should
   instead change the "originals".

#. If you make changes to the original :file:`ext\_tables.php` or
   :file:`ext\_localconf.php` files in your extensions, you will have
   to clear the cached files away for your changes to take effect.


.. _possible-problems-with-the-cached-files:

Possible Problems With the Cached Files
---------------------------------------

.. _changing-the-absolute-path-to-typo3:

Changing the absolute path to TYPO3
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you change the path of the TYPO3 installation, you might get a lot
of errors like "Failed opening ..." or "Unable to access ...". The
problem is that absolute file paths are hard-coded inside the cached
files.

Fix: Clean the cache using the Install Tool: Go to "Important Actions"
and use the "Clear all caches" function. Then hit the page again.


.. _changing-image-processing-settings:

Changing Image Processing Settings
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

When you change the settings for Image Processing (in normal mode),
you must take into account that old images may still be in the
:file:`typo3temp/` folder and that they prevent new files from being
generated! This is especially important to know, if you are trying to
set up image processing for the very first time.

The problem is solved by clearing the files in the :file:`typo3temp/`
folder. Also make sure to clear the database table "cache\_pages".
