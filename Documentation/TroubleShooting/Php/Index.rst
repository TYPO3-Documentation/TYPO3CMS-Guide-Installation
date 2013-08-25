.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _php:

PHP
^^^


.. install-tool_:

Install Tool
""""""""""""

In the Install Tool the section "System environment" informs about
missing PHP modules and problematic settings.

E.g. the PHP extensions openssl and fileinfo must be enabled. This can
be done by adding (or uncommenting) the following lines in the [PHP]
section in php.ini::

   extension=fileinfo.so
   extension=openssl.so

On a Windows-based server, these are the extension files::

   extension=php_fileinfo.dll
   extension=php_openssl.dll


.. _php-caches-extension-classes-etc:

PHP Caches, Extension Classes etc.
""""""""""""""""""""""""""""""""""

There are some situations, which can cause what looks like totally
illogical problems after an upgrade:

- If extensions override classes in which functions have
  changed.
  Solution: Try to disable all extensions and enable them one by
  one again until the error occurs again.

- If a PHP cache somehow fails to re-cache scripts, in particular if a
  change happened to a parent class overridden by a child class which
  was not updated.
  Solution: Remove ALL cached PHP files (for PHP-
  Accelerator, remove "/tmp/phpa\_\*") and restart Apache.

