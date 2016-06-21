.. include:: ../../Includes.txt


.. _lts_upgrade_preparation:

Preparation in 4.x
^^^^^^^^^^^^^^^^^^

Preconditions
"""""""""""""

#. TYPO3 Version

   Make sure your installation is running at least TYPO3 4.5 LTS.
   The TYPO3 6.2 upgrade process is possible from any version from 4.5 
   (i.e. 4.6, 4.7, 6.0 or 6.1). 
   
   If you are running a lower version of TYPO3, please upgrade to 4.5 first.

#. New system requirements

   Make sure the new environment fulfills the necessary system
   requirements: especially PHP. (PHP 5.2 is no longer supported.)
   For details on the specific requirements, check the "INSTALL.md" 
   file bundled with the TYPO3 Source package.


Preparation steps
"""""""""""""""""

In the original 4.x TYPO3 installation, do the following:


Extensions
~~~~~~~~~~

#. Upgrade the extensions in use to the latest possible version that
   is available for your old installation. Check if any extension that
   you are using is not compatible with TYPO3 6.2.

#. Uninstall extensions that you are not using, in order to clean up your
   installation and remove deprecated and potentially dangerous code.

#. Physically remove unnecessary extensions from the :file:`typo3conf/ext`
   directory.

.. note::

   There are many extensions which provide compatibility with both TYPO 4.5
   and 6.2, which are able to run perfectly fine in both TYPO3 releases.


Reference Index
~~~~~~~~~~~~~~~

Go to the "Admin Tools" > "DB check" module and use the "Manage
Reference Index" function.

Click on "Update Reference Index" to update the index in sys\_refindex.
This is especially important for later migrating references to files
in the 6.2 FAL Upgrade Wizard.


Compatibility Check
~~~~~~~~~~~~~~~~~~~

Install the extension `smoothmigration`__ in your old installation. This
extension provides a module in the Backend that is able to analyze your
current installation – in particular the installed extensions – and give
you hints on compatibility problems.

__ http://typo3.org/extensions/repository/view/smoothmigration

The following checks will be carried out, with more to come as the extension will be updated regularly.

- Calls to deprecated and removed static methods: Some of these can be migrated automatically!

- Calls to deprecated Fluid view helpers

- Calls to PHP mysql\_* methods (removed since PHP 5.5)

- Usages of removed constants (like PATH\_t3lib, etc)

- Usages of require\_once calls to core files that were moved or renamed.
  Simply remove the require\_once call in your extensions and use
  the necessary classes. TYPO3 will take care of loading these namespaced classes
  by means of the auto-loader. This can be automatically migrated by
  this extension!

- Usages of XCLASS: The XCLASS concept was removed in TYPO3 6.x. There is 
  now is a new method for registering replacement classes instead.

- Calls to DAM classes or methods, since DAM no longer works in TYPO3 6.2. 
  Use FAL instead and adapt your extensions to using the new technology.

- Usage of a UTF-8 database. In the TYPO3 4.5 database, character sets other
  than UTF-8 were deprecated but could still be used. This is no longer
  possible in TYPO3 6.2, so this check will make sure you are using UTF-8
  already in your database. The smoothmigration extension provides an
  automatic migration routine for this issue.
