.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _possible-problems-with-the-cached-files:

Possible Problems with the cached Files
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


.. _changing-absolute-paths-to-typo3:

Changing absolute paths to TYPO3
""""""""""""""""""""""""""""""""

If you change the path of the TYPO3 installation, you might get a lot
of errors like "Failed opening ..." or "Unable to access ...". The
problem is that absolute file paths are hard coded inside the cached
files.

Fix: Manually remove the temp\_CACHED\_\*.php files via FTP or via the
file system. Then hit the page again.

