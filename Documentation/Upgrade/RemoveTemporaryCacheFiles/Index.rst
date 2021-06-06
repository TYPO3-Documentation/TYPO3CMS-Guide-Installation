.. include:: ../../Includes.txt


.. _remove-temporary-cache-files:

============
Clear Caches
============

You should also clear all caches when upgrading.

Go to "Maintenance" and click "Flush":

.. include:: /Images/AutomaticScreenshots/AdminTools/ClearAllCache.rst.txt

Additionally, after an upgrade to a new major version, you should also delete
the other temporary files, which TYPO3 saves in :file:`typo3temp/`. In the
Install Tool go to "Clean up" to do so.

.. include:: /Images/AutomaticScreenshots/AdminTools/RemoveTemporaryAssets.rst.txt
