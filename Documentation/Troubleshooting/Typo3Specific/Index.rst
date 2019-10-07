.. include:: ../../Includes.txt


.. _typo3-specific:

=====
TYPO3
=====

Broken Extensions
=================

In case there are severe problems with an extension throwing exceptions,
you may have to deactivate it.

As a last resort, you can remove the extension from :file:`typo3conf/PackageStates.php`
as described in

* :ref:`composer-remove-extension` (for Composer based installations)
* :ref:`install-extension-manually` (for non Composer based installations)


.. _cached-files-in-typo3temp:

Cached Files in typo3temp/
==========================

Generally you should know that TYPO3 generates temporary "cached"
files and PHP scripts in :file:`typo3temp/Cache/`. You can remove the
whole :file:`typo3temp/Cache` directory at any time; the directory
structure and all the caches will be re-written on the next hit to the
system.

A way to flush these caches can be found in :guilabel:`"ADMIN TOOLS > Maintenance >Flush
TYPO3 and PHP Cache"`.

Flushing the caches might be useful in the event your
cache files become damaged and your system is not running correctly.

If this is the case and you can no longer access the TYPO3 backend, you
can create a file :file:`ENABLE_INSTALL_TOOL` in the directory
:file:`typo3conf` and directly access the Install Tool with /typo3/install.php
(for example https://example.com/typo3/install.php).
The Install Tool won't load any of these caches or any extension, so it
should be safe to use regardless of the corrupt state of the Caches.

.. important::

   Flushing the TYPO3 cache will require the entire cache to rebuild
   on the next load of a web page and will result in higher load on
   your system and impede performance. Do not do this unless you must.

Amongst other caches, under :file:`typo3temp/Cache/Code/cache_core/`
you find files like these::

   -rw-rw----   1 www-data   www-data   61555  2014-03-26 16:28   ext_localconf_8b0519db6112697cceedb50296df89b0ce04ff70.php
   -rw-rw----   1 www-data   www-data   81995  2014-03-26 16:28   ext_tables_c3638687920118a92ab652cbf23a9ca69d4a6469.php

The files in :file:`typo3temp/Cache/` simply contain all :file:`ext\_tables.php` and
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
=======================================

.. _changing-the-absolute-path-to-typo3:

Changing the absolute path to TYPO3
-----------------------------------

If you change the path of the TYPO3 installation, you might get a lot
of errors like "Failed opening ..." or "Unable to access ...". The
problem is that absolute file paths are hard-coded inside the cached
files.

Fix: Clean the cache using the Install Tool: Go to "Important Actions"
and use the "Clear all caches" function. Then hit the page again.


.. _changing-image-processing-settings:

Changing Image Processing Settings
----------------------------------

When you change the settings for Image Processing (in normal mode),
you must take into account that old images may still be in the
:file:`typo3temp/` folder and that they prevent new files from being
generated! This is especially important to know, if you are trying to
set up image processing for the very first time.

The problem is solved by clearing the files in the :file:`typo3temp/`
folder. Also make sure to clear the database table "cache\_pages".

