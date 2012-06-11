

.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. ==================================================
.. DEFINE SOME TEXTROLES
.. --------------------------------------------------
.. role::   underline
.. role::   typoscript(code)
.. role::   ts(typoscript)
   :class:  typoscript
.. role::   php(code)


Cached Files in typo3conf/
^^^^^^^^^^^^^^^^^^^^^^^^^^

Generally you should know that TYPO3 generates temporary "cached"
scripts in typo3conf/. Those look like these:

::

   -rw-r--r--   1 www-data   www-data   61555  2011-01-11 16:28   temp_CACHED_ps3f58_ext_localconf.php
   -rw-r--r--   1 www-data   www-data   81995  2011-01-11 16:28   temp_CACHED_ps3f58_ext_tables.php
   -rw-r--r--   1 www-data   www-data   47098  2011-01-11 16:28   temp_CACHED_FE_ps3f58_ext_localconf.php
   -rw-r--r--   1 www-data   www-data   45517  2011-01-11 16:28   temp_CACHED_FE_ps3f58_ext_tables.php

You can experience more than these files. In that case it will be
because of multiple paths, symlinks or just old files.

You can remove these files at any time; they will be re-written on the
next hit to the system. These files simply contain all ext\_tables.php
and ext\_localconf.php files from the installed extensions
concatenated in the order they are loaded. Therefore including one of
these files would be the same as including potentially hundred PHP-
files and that saves some milliseconds for the system.

The "temp\_CACHED\_FE" files have been introduced in TYPO3 v4.3. They
contain only the ext\_tables.php and ext\_localconf.php files of
*those* extensions which are needed to render frontend output. Since
these files are smaller than the temp\_CACHED files with the
configuration of  *all* extensions, this should save some additional
milliseconds.

Concerning these files you have to consider the following:

a) Making changes to these files does not make sense, because they can
be removed and recreated from the "originals" at anytime. You should
instead change the "originals".

b) If you make changes to the original "ext\_tables.php" or
"ext\_localconf.php" files, you will have to clear the cached files
away for your changes to take effect!

