.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _7-remove-temporary-cache-files:

7: Remove temporary cache files
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In typo3temp/Cache/Code/cache_core you will most likely find files
named "ext\_localconf\_\*.php" or "ext\_tables\_\*.php". These files
must be removed as well.

An easy way to clear these files is pressing the link which you find
in the top right-hand corner of the Backend when you are logged in as
an administrator. Open the "Clear cache" menu and click "Clear
configuration cache":

.. figure:: ../../Images/Clear-Configuration-Cache.png
   :alt: The option "Clear configuration cache" in the Backend.

This method will remove all files from the folder
typo3temp/Cache/Code/cache_core.

Additionally, after an upgrade to a new major version, you should also
delete the other temporary files, which TYPO3 saves in typo3temp/. In
the Install Tool go to "Clean up" to do so.

