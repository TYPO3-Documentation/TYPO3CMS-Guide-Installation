.. include:: /Includes.rst.txt

.. highlight:: bash

.. _upgradeToLts:

===============
Upgrade to v8.7
===============

You should follow the :ref:`general upgrade instructions <upgrade>`.

This page gives additional information about upgrading that is specific for upgrading
from 7.6 to 8.7.

Important changes
=================

We do not list all changes here. You may also want to browse the
:doc:`changelogs <ext_core:Index>`
before updating. All changes listed for 8.0 to 8.7 and 8.7.x. are relevant
for upgrading from 7.6 to 8.7.

TypoScript
----------

If you used your TypoScript template to modify the output of `tt_content` or `lib.stdheader`, you will have to
adjust these changes. For example, if you used `tt_content.stdWrap.innerWrap2` to modify the link "to top", you will
now have to define a path with `lib.contentElement.partialRootPaths` and you will have to modify the file
`Footer/All.html`, which contains the according partial in fluid_styled_content.


RTE
---

The old Rich Text Editor *rtehtmlarea* has been removed from the TYPO3 Core. Its replacement is
:doc:`rte_ckeditor <ext_rte_ckeditor:Index>`. If you for now still want to continue using the old editor,
you can use the Upgrade Wizard in the Install Tool to import it from TER.

In v8 the RTE link syntax has changed. Before, `<link ...` was used, now the syntax is `<a href="t3://...`.
TYPO3 Core ships an upgrade wizard which takes care of converting the links. However there might be
cases when the link wizard will not be able to pick the correct new syntax (e.g. in case of exotic
realurl configuration or when linkhandler configuration is wrong). To be sure that all links have been
converted correctly, check all tables containing RTE fields which contain `<link`.


CLI
---

The path for the CLI binary and all CLI commands have changed:

Scheduler:

Old::

   typo3/cli_dispatch.phpsh scheduler

New::

   typo3/sysext/core/bin/typo3 scheduler:run

Reference index:

Old::
   typo3/cli_dispatch.phpsh lowlevel_refindex -e

New::
   typo3/sysext/core/bin/typo3 referenceindex:update

css_styled_content
------------------

The system extension css_styled_content has been marked as deprecated and will be removed in TYPO3 CMS 9.
Consider using fluid_styled_content instead!


Before upgrade
==============

Check that all requirements for Upgrading are met:

* You must use TYPO3 7.6 or newer before you upgrade to TYPO3 8.7 LTS!
* Make sure that before you upgrade to TYPO3 8.7, you have run all Upgrade Wizards in TYPO3 7.6.
* You need PHP 7.0.8 at least! (see :ref:`system-requirements`)

During upgrade
==============

.. tip::

   If you get an Exception in the backend, you can go directly to the Install Tool (/typo3/install.php).
   Create typo3conf/ENABLE_INSTALL_TOOL first!

Database credentials
--------------------

Like all configuration in AdditionalConfiguration.php, database configuration in that file must be upgraded
manually - in this case from :php:`$GLOBALS['TYPO3_CONF_VARS']['DB']`
to :php:`$GLOBALS['TYPO3_CONF_VARS']['DB']['Connections']['Default']`:

Old::

   $GLOBALS['TYPO3_CONF_VARS']['DB']['database']
   $GLOBALS['TYPO3_CONF_VARS']['DB']['host']
   $GLOBALS['TYPO3_CONF_VARS']['DB']['username']
   $GLOBALS['TYPO3_CONF_VARS']['DB']['password']
   $GLOBALS['TYPO3_CONF_VARS']['DB']['port']

New::

   $GLOBALS['TYPO3_CONF_VARS']['DB']['Connections']['Default']['charset']
   $GLOBALS['TYPO3_CONF_VARS']['DB']['Connections']['Default']['driver']
   $GLOBALS['TYPO3_CONF_VARS']['DB']['Connections']['Default']['dbname']
   $GLOBALS['TYPO3_CONF_VARS']['DB']['Connections']['Default']['host']
   $GLOBALS['TYPO3_CONF_VARS']['DB']['Connections']['Default']['user']
   $GLOBALS['TYPO3_CONF_VARS']['DB']['Connections']['Default']['password']
   $GLOBALS['TYPO3_CONF_VARS']['DB']['Connections']['Default']['port']

Upgrade wizards
---------------

Do the upgrade as described in this chapter. When you use the
:ref:`"Upgrade Wizards" <use-the-upgrade-wizard>` note the following:

- The upgrade wizard, which installs extension *compatibility7* from TER, is
  not necessarily needed. It provides a compatibility layer for extensions,
  which are compatible with TYPO3 7.6, but not yet with TYPO3 8.7, e.g. because
  they are still using old class names. If you are not using such extensions,
  you do not need to install the *compatibility7* extension.

- The upgrade wizard, which migrates *css_styled_content* and *fluid_styled_content*, allows
  parallel installation of both extensions in the system, making it possible to
  smoothly migrate from the now deprecated *css_styled_content* to *fluid_styled_content*.

- The extension *form_legacy* contains the old form content element. The complete form
  element was replaced by a new form builder in the TYPO3 backend. If you are currently
  using forms, you should install *form_legacy* - and think about migrating your forms
  to the new extension.

- The extension *rtehtmlarea* contains the old rich text editor which was replaced by
  *rte_ckeditor*. Before installing you should check whether the new editor is already fulfilling
  all your requirements. CKEditor is easier to configure and runs smoother.


After upgrade
=============

An overview of all major changes in TYPO3 CMS is available in the new Upgrade Analysis section in the Install Tool.

