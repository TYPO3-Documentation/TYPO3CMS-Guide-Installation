.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _lts-upgrade-process:

LTS Upgrade Process
^^^^^^^^^^^^^^^^^^^

When the preparations are complete, the :ref:`upgrade process <upgrade>`
is the same as before for minor level releases. (E.g. 6.1 to 6.2.)

You can skip intermediate minor versions, so there is no need to do
an intermediate upgrade to upgrade from 4.5 (or 4.7) to 6.2.

.. attention::

   You need to have upgraded to at least TYPO3 4.5 in order to upgrade to 6.2!

   Several things will be done automatically when you run the
   Install Tool of the new version for the first time. Some actions 
   will even happen *before* the Install Tool opens. So *don't forget to make a backup*!

   - The file:`typo3conf/localconf.php` will be adapted to the new 6.x style of
     configuration and saved as :file:`LocalConfiguration.php`.

   - Information about installed extensions will be moved to
     :file:`PackageStates.php` file.

   - The ''saltedpasswords'' extension will be installed and activated if it
     was not previously used.

#. Make sure you have gone through ":ref:`lts_upgrade_preparation`".

#. Update the :file:`typo3\_src` symlink to point to the new release core.

#. Open the Install Tool in the browser.

#. Use the "System Environment" module to see if your system
   fullfills all required preconditions.

#. Use the "Important Actions", item "Check for broken Extensions". If
   there are extensions that might break your current installation (i.e.
   calling removed methods in their :file:`ext_localconf.php` or
   :file:`ext_table.php`), you must remove them until they are
   updated.

#. Use the "Upgrade Wizard" as usual to migrate your installation.

After the upgrade
"""""""""""""""""

If you have not used DAM before and were just using regular files with
TYPO3 Content Elements, the "Upgrade Wizards" will have converted
your structure to FAL and you are all set and ready.

If you were working with "DAM" (Digital Asset Management) in TYPO3
4.5 or 4.7, you will want to migrate your data to the core "FAL" (File
Abstraction Layer).

DAM and its related extensions no longer work with TYPO3 CMS 6.x.
For this, read on in the next chapter.