.. include:: Images.txt

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


4: Compare and Update the Database
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Go to the section "Database Analyser". There you can check, if the
database configuration is correct and correct it if needed.

|img-15| Click "Compare". Now all ext\_tables.sql files from core and
extensions are read and compared to your current database tables and
fields. Any discrepancies will be shown and you'll be able to execute
queries sufficient to upgrade your database so it corresponds to the
structure required for the new TYPO3 version.

|img-13| **Caution**

Be aware if you have deliberately added fields and/or tables to your
TYPO3 database for your own purposes! Those tables and fields are
removed only if you mark them to be deleted of course, but please be
alert that you don't overlook them!

In the next step the changes you applied don't show up again. If you
chose to delete some fields or tables, you will see that they have
only been renamed. Now you can consider to let them be and delete them
later when you're sure you're not going to need them. Or you can mark
them again and drop them finally.

If you made TYPO3 apply all changes, you should after clicking "Write
to database" see a notice like this:

|img-16| 
5: Install the new static Tables and Description Tables
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The table 'static\_template' (and some other "static\_" tables)
contains information that you should never alter yourself. These
tables contain static information distributed with TYPO3 releases.
Follow these steps to upgrade the tables with the newest information.

Go to the section " **Database Analyser** ".

Then click " **IMPORT** " in the line " **Dump static data** ":

|img-17| Then tick the check box "Import the whole file..." and click "Write to
database":

|img-18| ... and you should see this:

|img-19| 
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

