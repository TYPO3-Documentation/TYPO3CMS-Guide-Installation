.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt
.. include:: Images.txt


.. _4-compare-and-update-the-database:

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

