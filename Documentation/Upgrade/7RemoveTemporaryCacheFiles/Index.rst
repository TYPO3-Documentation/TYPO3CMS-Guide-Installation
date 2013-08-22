.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _7-remove-temporary-cache-files:

7: Remove temporary cache files
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In typo3temp/Cache/Code/cache_core you will most likely find cached
files of ext\_localconf.php and ext\_tables.php files. These files must
be removed as well.

All files in the typo3temp/Cache/Code/cache_core directory which are
named "ext\_localconf\_\*.php" or "ext\_tables\_\*.php" should be
removed!

An easy way to clear these files is pressing the link which you find
at the top right side of the backend when you are logged in as an
admin user. Open the "Clear cache" menu and click "Clear configuration
cache":

.. figure:: ../../Images/Clear-Configuration-Cache.png
   :alt: The option "Clear configuration cache" in the Backend.

This method will remove all files from the folder
typo3temp/Cache/Code/cache_core.

