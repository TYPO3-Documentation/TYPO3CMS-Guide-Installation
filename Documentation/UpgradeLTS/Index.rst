.. include:: ../Includes.txt


.. _lts-upgrade:

Upgrade from LTS to LTS
-----------------------

This chapter provides in depth information about how to update from 
TYPO3 7.6 LTS to the TYPO3 CMS 8.7 LTS version.

This chapter will give you a perspective on relevant changes since 
TYPO3 7.6 and what to expect from the migration from 7.6 to 8.7.


.. _lts-upgrade-precondition:

Precondition
""""""""""""

#. TYPO3 Version

   Make sure your installation is running at least TYPO3 7.6 LTS.
   The TYPO3 8.7 upgrade process is possible from version 7.6 - not
   from older versions. 
   
   If you are running a lower version of TYPO3, please upgrade to 7.6 first.


.. _lts-upgrade-process:

LTS Upgrade Process
"""""""""""""""""""

Do the upgrade as described in the previous chapter. When you use the 
"Upgrade Wizards" note the following:

- The upgrade wizard, which installs extension `compatibility7` from TER, is
  not necessarily needed. It provides a compatibility layer for extensions, 
  which are compatible with TYPO3 7.6, but not yet with TYPO3 8.7, e.g. because
  they are still using old class names. If you are not using such extensions, 
  you do not need to install the `compatibility7` extension.

- The upgrade wizard, which migrates `css_styled_content`/`fluid_styled_content`, allows
  parallel installation of both extensions in the system, making it possible to
  smoothly migrate from the now deprecated `css_styled_content` to `fluid_styled_content`.

- The extension `form_legacy` contains the old form content element. The complete form
  element was replaced by a new form builder in the TYPO3 backend. If you are currently
  using forms, you should install `form_legacy` - and think about migrating your forms
  to the new extension.

- The extension `rtehtmlarea` contains the old rich text editor which was replaced by
  `rte_ckeditor`. Before installing you should check whether the new editor is already fulfilling
  all your requirements. CKEditor is easier to configure and runs smoother.
