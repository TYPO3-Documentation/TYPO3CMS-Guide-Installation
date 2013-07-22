.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _changing-image-processing-settings:

Changing Image processing Settings
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

When you change the settings for Image Processing (in normal mode),
you must take into account that old images may still be in the
typo3temp/ folder and that they prevent new files from being
generated! This is especially important to know, if you are trying to
set up image processing for the very first time.

The problem is solved by clearing the files in the typo3temp/ folder.
Also make sure to clear the database table "cache\_pages".


