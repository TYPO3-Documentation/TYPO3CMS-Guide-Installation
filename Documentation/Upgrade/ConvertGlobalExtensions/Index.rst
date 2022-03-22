.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: /Includes.rst.txt


.. _convert-global-extensions:

Convert global Extensions
^^^^^^^^^^^^^^^^^^^^^^^^^

If you use global extensions, convert them to local ones.

Global extensions used to be saved in folders inside
:file:`typo3/ext/`, such as :file:`typo3/ext/realurl`. In current
versions of TYPO3, this location should no longer be used. Instead,
use local extensions below :file:`typo3conf/ext/`.

To convert a global extension to a local one, do the following:

* Go to the Extension Manager.
* Uninstall the global extension.
* Delete the files of the extension from :file:`typo3/ext/`, including
  the directory of that extension itself.
* Reinstall the extension from TER, which will put it into
  :file:`typo3conf/ext/`.

