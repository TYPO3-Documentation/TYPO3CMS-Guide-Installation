.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _remove-temporary-cache-files:

Remove temporary cache files
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In typo3temp/Cache/Code/cache_core you will most likely find files
named "ext\_localconf\_\*.php" or "ext\_tables\_\*.php". These files
must be removed as well.

Go to "Important actions" and click "Clear all cache":

.. figure:: ../../Images/Important-Actions-Clear-All-Cache.png
   :alt: The option "Clear all Cache" in the Install Tool.

This method will remove all files from the folder
typo3temp/Cache/Code/cache_core.

Additionally, after an upgrade to a new major version, you should also
delete the other temporary files, which TYPO3 saves in typo3temp/. In
the Install Tool go to "Clean up" to do so.

