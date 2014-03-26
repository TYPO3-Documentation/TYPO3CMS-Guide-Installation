.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../Includes.txt


.. _lts-upgrade-process:

LTS Upgrade Process
^^^^^^^^^^^^^^^^^^^

When the preparations are done, the :ref:`upgrade process <upgrade>` itself
is the same as before for minor level releases like from 6.1 to 6.2.

You can even skip minor versions in between, so there is no need to do
any intermediate upgrades to upgrade from 4.5 (or 4.7) to 6.2.

.. note::
   You need to at least have upgraded to TYPO3 4.5 in order to
   upgrade to 6.2!

.. attention::

   Several things will automatically be done when you run the
   Install Tool of the new version for the first time. This will happen
   even *before* the Install Tool actually comes up.
   So don't forget to make a backup!

   - the file:`typo3conf/localconf.php` will be adapted to the new 6.x style of
     configuration :file:`LocalConfiguration.php`

   - information about installed extensions will be moved to
     :file:`PackageStates.php` file

   - saltedpasswords extension will be installed and activated if it
     was not used before

#. Make sure you have gone through ":ref:`lts_upgrade_preparation`".

#. Update the :file:`typo3\_src` symlink to point to the new release core.

#. Call the Install Tool.

#. Use the "System Environment" module to see if your system
   fullfills all required preconditions.

#. Use the "Important Actions", item "Check for broken Extensions". If
   there are extensions that might break your current installation (i.e.
   calling removed methods in their :file:`ext_localconf.php` or
   :file:`ext_table.php`), you will want to remove them until they are
   updated.

#. Use the "Upgrade Wizard" as usual to migrate your installation

Post Upgrade
""""""""""""

If you have not used DAM before and were just using regular files with
TYPO3 Content Elements, the "Upgrade Wizards" will have converted
your structure to FAL and you are all set and ready.

If you have been working with "DAM" (Digital Asset Management) in TYPO3
4.5 or 4.7, you will want to migrate your data to the core "FAL" (File
Abstraction Layer).

DAM and its related extensions no longer work with TYPO3 CMS 6.x.
For this, read on in the next chapter.

