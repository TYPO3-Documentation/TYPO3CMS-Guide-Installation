.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _6-clear-caches-and-user-settings:

6: Clear Caches and User Settings
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You should always clear the cache tables. Go to "Database Analyser",
click "Clear tables" and select the tables beginning with "cache\_".
Then press "Write to database".

You might also consider clearing the Backend user preferences. This
can avoid problems, if something in the upgrade requires this. Go to
"Database Analyser", click "Reset user preferences" and write to
database.

