.. include:: ../../Includes.txt

.. highlight:: bash

.. _upgradeToLts:

===============
Upgrade to v9.5
===============

You should follow the :ref:`general upgrade instructions <upgrade>`.

This page gives additional information about upgrading that is specific for upgrading
from 8.7 to 9.5.

You may also want to browse the
`9.x Changelogs <https://docs.typo3.org/c/typo3/cms-core/master/en-us/Changelog-9.html>`__
before updating. All changes listed for 9.0 to 9.5 and 9.5.x. are relevant
for upgrading from 8.7 to 9.5.

Before Upgrade
==============

Check that all requirements for Upgrading are met:

* You must use TYPO3 8.7 or newer before you upgrade to TYPO3 9 LTS!
* Make sure that before you upgrade to TYPO3 9.5, you have run all Upgrade Wizards in TYPO3 8.7.
  Upgrade wizards from before 8.7 LTS are not available anymore in 9, which makes it impossible
  to update from a version older than TYPO3 8.7.
* You need PHP 7.2 at least! (see :ref:`system-requirements`)

During Upgrade
==============

.. important::

   Make sure to not remove tables in the Database Analyzer if they are still required for the Upgrade
   Wizards. Examples:

   * realurl tables are required to migrate existing path information with the upgrade wizard
     "Introduce URL parts ("slugs") to all existing pages".
   * pages_language_overlay is required for "Migrate content from pages_language_overlay to pages"
     upgrade wizard.

.. tip::

   If you get an Exception in the backend, you can go directly to the Install Tool (/typo3/install.php).
   Create typo3conf/ENABLE_INSTALL_TOOL first!

Upgrade Wizards
---------------

We do not explicitly list all upgrade wizards here.

"Introduce URL parts ("slugs") to all existing pages"
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For the new handling of "speaking URLs", the new field `pages.slug` is used and
an Upgrade Wizard is available, which can transfer page paths e.g. from
`tx_realurl_pathcache` / `tx_realurl_pathdata`
and from the `pages.alias` field to said column.
This will however not work for deleted pages. It should be checked
if pages paths stayed the same before RealURL data gets deleted.



Running the Upgrade Wizard for migrating the Slugs from realurl may take
long on large sites. You may want to do this from the command line instead of from the backend::

   <cli-cmd> upgrade:run pagesSlugs


Additional Steps
----------------

Because of new :ref:`site handling <t3coreapi:sitehandling>`, languages (in sites) and
:ref:`speaking URLs <t3coreapi:routing>`, the following **additional** steps are necessary:

#. Create a :ref:`sites configuration <t3coreapi:sitehandling>` for each site and
   :ref:`additional language configurations <t3coreapi:sitehandling-addingLanguages>` for each language
   in the :guilabel:`SITE MANAGEMENT > Sites` module
#. Migrate existing URLs (e.g. use Upgrade Wizard to upgrade realurl paths)
#. Create additional configuration for URLs (e.g. Route Enhancers), see
   :ref:`t3coreapi:routing-advanced-routing-configuration`


More Information on New Features
================================

Administration / Configuration:

* Sites, languages and URL configuration are now handled in the new :ref:`Sites module <t3coreapi:sitehandling>`
* Learn more about how TYPO3 9 now handles :ref:`readable URLs <t3coreapi:routing>` out of the box
  so that extensions like RealURL become unnecessary.
* TYPO3 9 has a new redirects Module (no documentation yet)
* The old "Install Tool" has been integrated into the Backend (:guilabel:`ADMIN TOOLS`)
  but is still available under
  /typo3/install.php.
* An admin user must be :ref:`"system maintainer" <t3start:system-maintainer>` as well to have access to install tool
  modules in the backend.
* pages_language_overlay has been deprecated. The language information has moved to pages (e.g.
  pages.sys_language_overlay).
* "Settings > Configure Installation-Wide Options" can be used to toggle usage of pages_language_overlay on or off.
  For new installations, it defaults to off.

Extension Development

* The constant PATH_site is now deprecated. Instead, the new TYPO3\CMS\Core\Core\Environment::getPublicPath() . '/'
  should be used to get the same result, see :ref:`t3coreapi:Environment`.
* The :ref:`Extension Scanner <t3coreapi:extension-scanner>` (which is found in in :guilabel:`Upgrade > Scan Extension Files`
  in the backend) can be used to check extensions for usages of deprecated functions.
  It directly links to the associated documentation with migration hints.

.. tip::

   Extension Developers should regularly check the `Changelog <https://docs.typo3.org/c/typo3/cms-core/9.5/en-us/>`__
   for Deprecations and Breaking Changes.

TypoScript

* The `old TypoScript condition syntax is deprecated <https://docs.typo3.org/c/typo3/cms-core/master/en-us/Changelog/9.5/Deprecation-86068-OldConditionSyntax.html>`__
  and will be removed in TYPO3 CMS 10.
  The new syntax is based on the symfony expression language. It is described
  at :ref:`t3coreapi:typoscript-syntax-conditions`
  "Global Configuration" setting `[SYS][features][TypoScript.strictSyntax]` can be used to toggle
  support for the old syntax on and off.
* Amongst others, `cObject FILE <https://docs.typo3.org/c/typo3/cms-core/master/en-us/Changelog/9.5/Deprecation-85970-FileContentObject.html>`__
  got deprecated and will be removed in TYPO3 10. This
  e.g. influences cObject TEMPLATE which now gives a deprecation message, if used with cObject FILE.
