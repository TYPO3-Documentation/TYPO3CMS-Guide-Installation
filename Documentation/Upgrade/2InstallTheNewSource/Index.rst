.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _2-install-the-new-source:

2: Install the new Source
^^^^^^^^^^^^^^^^^^^^^^^^^

Upgrade the distributed source files to the new version.

Go to `http://typo3.org/download/ <http://typo3.org/download/>`_ and
download the Source package of the new TYPO3 version.

Extract the package on your web server and - in your TYPO3 Document
Root - adjust the typo3\_src symlink.

In case you did a *minor update*, e.g. from TYPO3 6.2.2 to 6.2.3,
database updates are usually *not* necessary. All you still have to do
is to :ref:`remove the temporary cache files 
<6-remove-temporary-cache-files>`. After that your update is finished.

In case of a *major update*, e.g. from TYPO3 6.1 to 6.2, go ahead with
the next step!

