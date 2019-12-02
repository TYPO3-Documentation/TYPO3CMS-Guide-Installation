.. include:: ../Includes.txt

.. _upgradev10:

==============
Upgrade to v10
==============

Besides following the general upgrade guide, you can find some additional info on new v10 
features here.

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

