.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _6-clear-caches-temporary-files-and-user-settings:

6: Clear Caches, temporary Files and User Settings
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You should always clear the cache tables. Go to "Database Analyser" →
"Clear tables" and select the tables beginning with "cache\_". Then
press "Write to database".

After an upgrade to a new major version you should also delete the
temporary files, which TYPO3 saves in typo3temp/. Go to "Clean up" to
do so.

You might also consider clearing the backend user preferences. This
can avoid problems, if something in the upgrade requires this. Go to
"Database Analyser" → "Reset user preferences" and write to database.

