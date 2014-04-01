.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _typo3-specific:

TYPO3-specific
^^^^^^^^^^^^^^


.. _cached-files-in-typo3temp:

Cached Files in typo3temp/
""""""""""""""""""""""""""

Generally you should know that TYPO3 generates temporary "cached"
files and PHP scripts in :file:`typo3temp/Cache/`. You can remove the
whole :file:`typo3temp/Cache` directory at any time; the directory
structure and all the caches will be re-written on the next hit to the
system.

A shortcut to remove these caches can be found in the Install Tool,
under "Important Actions". This might be handy in case some of your
cache files is damaged and your system is not running correctly. The
Install Tool won't load any of these caches or any extension, so it
should be safe to use regardless of the corrupt state of the Caches.

Amongst other caches, under :file:`typo3temp/Cache/Code/cache_core/`
you find files like these::

   -rw-rw----   1 www-data   www-data   61555  2014-03-26 16:28   ext_localconf_8b0519db6112697cceedb50296df89b0ce04ff70.php
   -rw-rw----   1 www-data   www-data   81995  2014-03-26 16:28   ext_tables_c3638687920118a92ab652cbf23a9ca69d4a6469.php

These files simply contain all :file:`ext\_tables.php` and
:file:`ext\_localconf.php` files of the installed extensions
concatenated in the order they are loaded. Therefore including one of
these files would be the same as including potentially hundred PHP-
files and that saves some milliseconds for the system.

Concerning these files you have to consider the following:

#. Making changes to these files does not make sense, because they can
   be removed and recreated from the "originals" at any time. You should
   instead change the "originals".

#. If you make changes to the original :file:`ext\_tables.php` or
   :file:`ext\_localconf.php` files in your extensions, you will have
   to clear the cached files away for your changes to take effect.


.. _possible-problems-with-the-cached-files:

Possible Problems with the cached Files
"""""""""""""""""""""""""""""""""""""""

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

Changing Image processing Settings
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

When you change the settings for Image Processing (in normal mode),
you must take into account that old images may still be in the
:file:`typo3temp/` folder and that they prevent new files from being
generated! This is especially important to know, if you are trying to
set up image processing for the very first time.

The problem is solved by clearing the files in the :file:`typo3temp/`
folder. Also make sure to clear the database table "cache\_pages".

