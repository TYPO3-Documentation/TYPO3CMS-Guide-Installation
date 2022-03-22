.. include:: /Includes.rst.txt


.. _upgrade:

Upgrade
=======

When a new version of TYPO3 is released, you should follow the
guideline in this chapter in order to do an upgrade. Also follow any
additional upgrade information carefully. You might e.g. want to skim
the :doc:`changelog <ext_core:Index>` to
see if any features affect the way your site works.

.. note::

   **Version specific upgrade notes**

   While most of this chapter is a general guideline to follow for a TYPO3
   Upgrade, some :ref:`version specific information for upgrading to 8.7 <upgradeToLts>`
   is available. Use this as an amendment to the general upgrading instructions!

.. note::

   **Think of active users**

   Think of users who might want to do any changes during your upgrading
   and/or fallback. Inform them **before** you start!

Basically these are the steps to be done to update your TYPO3 site:

.. toctree::
   :maxdepth: 5
   :titlesonly:
   :glob:

   Preparation/Index
   Backup/Index
   UpdateReferenceIndex/Index
   InstallTheNewSource/Index
   ConvertGlobalExtensions/Index
   UseTheUpgradeWizard/Index
   RunTheDatabaseAnalyzer/Index
   ClearCachesAndUserSettings/Index
   RemoveTemporaryCacheFiles/Index
   ChangelogAndNewsmd/Index
   UpdateExtensions/Index
   UpdateTranslations/Index
   UpgradeToLts/Index
