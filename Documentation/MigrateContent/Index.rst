.. include:: /Includes.txt

.. _migrate-content:

===============
Migrate content
===============

Maybe you have already done a lot of work on your TYPO3 installation and even
built more than one homepage with it. Now you want to copy parts of one
homepage to another installation.

This method won't copy any of your installed extensions. You have to take care
of moving them yourself. Records stored on root level (such as sys_file) records
don't get exported automatically.

Prerequisites
=============

If the menu entries :guilabel:`Export` and :guilabel:`Import` are missing
from your page tree's context menu check that the system extension
:php:`impexp` is loaded and installed.

On composer based installations it can be required via

.. code-block:: bash

   composer req typo3/cms-impexp


Export your data
================

.. rst-class:: bignums

   1. Go to the export module

      On the page tree left click on the page from where you want to start the
      export. Select :guilabel:`More options ...`:

      .. figure:: /Images/ManualScreenshots/ImpExpContext.png
         :class: with-shadow
         :alt: Select "More options..." from the context menu of the page tree

         Select "More options..." from the context menu of the page tree

      Then select :guilabel:`Export` from the context menu.

      .. figure:: /Images/ManualScreenshots/ImpExpContext2.png
         :class: with-shadow
         :alt: Then select "Export"

         Select Then select "Export"

   2. Select the tables to be exported

      You can select the tables manually, from which
      you want to export the entries correlated with the selected page. It
      is also possible to include static relations to tables already present
      in the target installation.

      .. figure:: /Images/ManualScreenshots/ImpExpDialog.png
         :class: with-shadow
         :alt: Select the tables to be exported

         Select the tables to be exported

   3. Choose number of levels to be exported

      If you want to save all your data, including subpages,
      select 'Infinite' from the :guilabel:`Levels` select box and hit the
      :guilabel:`Update` Button at the end of the dialog.

      .. figure:: /Images/ManualScreenshots/ImpExpDialogInfinite.png
         :class: with-shadow
         :alt: Select the page levels to be exported

         Select the page levels to be exported

   4. Check the included records

      All included pages can be seen at the top of the dialog. Below the
      dialog there is a detailed list of all data to be exported. It is
      possible to exclude single records here. With some data types it
      is possible to make them manually editable.

      When the relation to records are lost these will be marked with an
      orange exclamation mark. Reasons for lost relations include records
      stored outside the page tree to be exported and excluded tables.

      .. figure:: /Images/ManualScreenshots/ImpExpCheckExport.png
         :class: with-shadow
         :alt: Check the exported data

         Check and adjust the exported data.

   5. Save or export the data

      You can save the exported data to your server or download it in the
      tab :guilabel:`File & Preset`.

      .. figure:: /Images/ManualScreenshots/ImpExpDownload.png
         :class: with-shadow
         :alt: Download the export data

         Download the export data

Import your data
================

.. note::

   Make sure all needed extensions are installed and the database scheme
   is up to date before starting the import. Otherwise the data related
   to non-existing tables will not get imported.

.. rst-class:: bignums

   1. Upload the export file

      Upload the file to your destination TYPO3 installation. Just like the
      export module you find the import module in the page tree context menu
      :guilabel:`More options... -> Import`. Choose the page whose subpage
      the imported page should be as starting point for the import. If you
      want to import the data at root-level, choose the

      .. figure:: /Images/ManualScreenshots/ImpExUpload.png
         :class: with-shadow
         :alt: Upload the export data

         Upload the export data

   2. Preview the data do be imported

      A tree with the records to be imported gets displayed
      automatically. If you change some options you can reload
      this display with the :guilabel:`preview` button.

      .. figure:: /Images/ManualScreenshots/ImpExImport.png
         :class: with-shadow
         :alt: Preview the data

         Preview the data

   3. Import

      Click the import button.


Importing data from old TYPO3 versions
======================================

The data structure for content exports has hardly changed since the early
ages of TYPO3. It is possible to export content from TYPO3 installations
that are 15 and more years old into modern TYPO3 Installations.

The following shows the export dialog of TYPO3 installation of version
3.8.0. It is often more feasible to use the Import / Export tool then to
attempt to update very old TYPO3 installations.

.. include:: /Images/ManualScreenshots/ImpExpV3.8.rst.txt
