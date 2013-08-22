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
scripts in typo3temp/Cache/Code/cache_core/. Those look like these::

   -rw-r--r--   1 www-data   www-data   61555  2013-08-22 16:28   ext_localconf_8b0519db6112697cceedb50296df89b0ce04ff70.php
   -rw-r--r--   1 www-data   www-data   81995  2013-08-22 16:28   ext_tables_c3638687920118a92ab652cbf23a9ca69d4a6469.php

You can experience more than these files. In that case it will be
because of multiple paths, symlinks or just old files.

You can remove these files at any time; they will be re-written on the
next hit to the system. These files simply contain all ext\_tables.php
and ext\_localconf.php files from the installed extensions
concatenated in the order they are loaded. Therefore including one of
these files would be the same as including potentially hundred PHP-
files and that saves some milliseconds for the system.

Concerning these files you have to consider the following:

a) Making changes to these files does not make sense, because they can
be removed and recreated from the "originals" at any time. You should
instead change the "originals".

b) If you make changes to the original "ext\_tables.php" or
"ext\_localconf.php" files, you will have to clear the cached files
away for your changes to take effect!


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

Fix: Manually remove the temporary ext\_localconf\_*.php and
ext\_tables\_*.php files via FTP or via the file system. Then hit the
page again.


.. _changing-image-processing-settings:

Changing Image processing Settings
""""""""""""""""""""""""""""""""""

When you change the settings for Image Processing (in normal mode),
you must take into account that old images may still be in the
typo3temp/ folder and that they prevent new files from being
generated! This is especially important to know, if you are trying to
set up image processing for the very first time.

The problem is solved by clearing the files in the typo3temp/ folder.
Also make sure to clear the database table "cache\_pages".

