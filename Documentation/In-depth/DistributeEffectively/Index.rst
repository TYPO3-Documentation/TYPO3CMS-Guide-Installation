.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _using-the-source-distribution-effectively:

Using the Source Distribution effectively
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The .tar.gz distributions have the advantage over the .zip distribution
that - if used intelligently - they provide a minimum of space usage
and maintenance. Using them is our suggestion:

#. Extract the .tar.gz file somewhere on your server.

#. From the directory holding the root-directory of your website, create
   a symlink to the source folder. Call this symlink 'typo3\_src':

   .. figure:: ../../Images/Extracted-TYPO3-Package.png
      :alt: File and folder structure with symlink typo3_src.

   .. note::

      Current packages of TYPO3 already *have* this symlink in place.
      You need to change it only, if you want to use TYPO3 source
      files, which are stored at another place.


.. _the-upgrade-advantage:

The upgrade advantage
"""""""""""""""""""""

One advantage of this approach apparently is that when you wish to
upgrade to a new TYPO3 version, you simply change one symlink and
every distributed TYPO3 file is upgraded instantly!


.. _remember-the-install-tool:

Remember the Install Tool!
""""""""""""""""""""""""""

After switching the sources around you *have to* enter the Install
Tool of *every single site* that is sharing the upgraded source and do
any changes that are required in the database and clear the cache
tables.

