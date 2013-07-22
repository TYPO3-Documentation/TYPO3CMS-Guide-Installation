.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt
.. include:: Images.txt


.. _using-the-source-distribution-effectively:

Using the Source Distribution effectively
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The .tar.gz distribution of the Source has an advantage over the .zip
distribution: It provides a minimum of space usage and maintenance, if
used intelligently. This is our suggestion:

#. Extract the .tar.gz file somewhere on your server.

#. From the directory holding the root-directory of your website, create
   a symlink to the source folder. Call this symlink 'typo3\_src':

   |img-11|

#. Afterwards create links to the index.php file and the t3lib/ and
   typo3/ folder as shown. Note that those just link to the typo3\_src
   link created before. (In most Dummy packages currently available these
   symlinks are already included by default, so you just have to
   create/change the typo3\_src link to point to your source directory,
   if needed.)


.. _the-upgrade-advantage:

The upgrade advantage
"""""""""""""""""""""

The advantages of this approach apparently is that when you wish to
upgrade to a new TYPO3 version, you simply change one symlink and
every distributed TYPO3 file is upgraded instantly!


.. _remember-the-install-tool:

Remember the Install Tool!
""""""""""""""""""""""""""

After switching the sources around  *you have to* enter the Install
Tool of every single site that is sharing the upgraded source and do
any changes that are required in the database and clear the cache
tables.

