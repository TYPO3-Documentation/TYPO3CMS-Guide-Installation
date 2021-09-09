.. include:: ../../Includes.txt


.. _convert-global-extensions:

==================================
Convert Global or Local Extensions
==================================

If you use global extensions, convert them to local ones.

Global extensions used to be saved in folders inside
:file:`typo3/ext/`, such as :file:`typo3/ext/news`. Also the 
local extensions folder :file:`typo3conf/ext/` should not be used any more.
All extensions must be migrated to a local path repository.

To convert a global extension to a local one, make a backup of it,
then do the following:

* Go to the Extension Manager.
* Deactivate the global extension.
* Delete the directory of that extension and its subfolders and files from the folder :file:`typo3/ext/`.
* Install the extension into the folder :file:`typo3conf/ext/` and activate it.


.. note::

   In earlier versions of TYPO3 global extensions were an easy way of sharing
   extensions between multiple TYPO3 instances. Nowadays the recommended way of
   installing and maintaining extensions is via composer, where you may use
   different strategies to achieve the same goal. One example would be to use
   `"path repositories" <https://getcomposer.org/doc/05-repositories.md#path>`__
   in your composer.json file
