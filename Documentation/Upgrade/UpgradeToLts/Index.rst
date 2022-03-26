.. include:: /Includes.rst.txt

.. _upgradeToLts:

======================
Upgrade to v10 from v9
======================

Besides following the general upgrade guide, you can find some additional info on new v10
features here.

General Changes
===============

sys_template.sitetitle
----------------------

Defining the site title in the sys_template record (`sys_template.sitetitle` field)
has been deprecated and should not be used any longer.
This field (database and TCA) will be removed in v11.
In version 10 the site title in the sys_template will be used as a
fallback when no Site title is set in the site configuration.

Copy the site title to the new available field in the site module language configuration.

SystemLog API
-------------

The systemLog API has been changed in TYPO3 v9.0 to use the Logging API as a
breaking change. The relevant systemLog options have been kept in TYPO3 v9 for
backwards-compatibility of existing extensions, however have no use in TYPO3 v10
anymore.

The affected options are:

- :php:`$GLOBALS['TYPO3_CONF_VARS']['SYS']['systemLog']`
- :php:`$GLOBALS['TYPO3_CONF_VARS']['SYS']['systemLogLevel']`

The options have been removed from the TYPO3's default configuration. When the options have been set, they are
automatically removed in TYPO3 v10.0 when accessing the Install Tool or System Maintenance area.

For extension authors, the Logging API should be used starting with TYPO3 v9. The usage of the systemLog options
should then be removed from the extensions' code.


Feature Flags
=============

rearrangedRedirectMiddlewares
-----------------------------

A new feature switch :php:`rearrangedRedirectMiddlewares` has been introduced to rearrange the middlewares
:php:`typo3/cms-redirects/redirecthandler` and :php:`typo3/cms-frontend/base-redirect-resolver`. If enabled, the
middlewares are executed in reversed order, so the :php:`typo3/cms-redirects/redirecthandler` comes first.

The new ordering aims to be a better default shipped by the TYPO3 core but might still need adjustment due to specific
configuration setups.

If turned on, the new ordering has the following implications:

By putting the :php:`typo3/cms-frontend/base-redirect-resolver` last, redirects are always resolved even if no
configured base URL was requested. In most cases this is considered to be a bugfix. However, redirect behavior might
change.

Custom middlewares that have been put in between the two above mentioned middlewares most likely will lead to a circular
dependency exception now. Such custom middlewares have to be revisited and registered differently.

betaTranslationServer
---------------------

The feature switch `betaTranslationServer` makes it possible for installations to fetch translations from the new translation server (beta status).
The new translation server is building labels from Crowdin (https://crowdin.com/project/typo3-cms) instead of the current translation server based on Pootle (https://translation.typo3.org/).

The integration is currently work in progress but will be finished before the LTS release of version 10.
Once the work has been stabilized and tested well, the feature flag will be removed for 10 and backported for 9.

If you are interested in this topic, join the Crowdin Initiative. All information can be found at https://typo3.org/community/teams/typo3-development/initiatives/localization-with-crowdin/.

Be aware that using this translation server is currently experimental. This means:

- Translations are incomplete and might be removed and added anytime
- Translations of community extensions are currently not available

