.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _lts-upgrade-introduction:

Introduction
^^^^^^^^^^^^

This chapter will give you a historical perspective on what happened
since TYPO3 4.5, why things changed the way they did and what to
expect from the migration from 4.5 to 6.2.


Deprecation Strategy
""""""""""""""""""""

With TYPO3 CMS up until version 4.5, users were used to be able to
upgrade from one version to the next one with little or very little effort.
By upgrading, users gained new functionality whilst ensuring that "old
technology" would usually continue to work. This is called *backwards compatibility*. 
TYPO3 CMS users are used to a high level of backwards compatibility.

With backwards compatibility come downsides: the code base gets
larger and larger; the old code still needs to be maintained
(security and testing when considering new or changed features and 
interfaces); users (developers, integrators) adapt slowly to newer technologies 
and best practices that emerge with newer versions.

This is why several years ago (during development of version 4.3 in 2009), 
the core team agreed to introduce a consistent deprecation policy.

TYPO3 CMS deprecation policy
  If a method or API in the Core is replaced by a new one and is
  no longer used by the Core itself, it can be marked as "deprecated" and
  can be removed two releases later. Deprecated API methods are
  marked in the PHP code using @deprecated annotation.

At the same time the "deprecation log" was introduced in order for
users to be able to identify potential old methods still being used by
an existing installation. At that time (2009) there were already many
methods marked as deprecated: some as early as "TYPO 3.5".

Until version 4.5 LTS (2011), the core team didn't practice the
"removal" part of the strategy consistently. With the release of 4.5 LTS, it
was decided to retain all methods for the last time which had been deprecated 
sufficiently long enough that they could have been removed already. 
The core team started removing them in 4.6 (and later), which is why TYPO3 4.6 is subtitled "rebase".

Four years later (with the releases 4.6, 4.7, 6.0 and 6.1 in 2014), lots of 
methods are finally really *gone*. Some users doing the first upgrade after 
4.5 LTS to 6.2 LTS may therefore face some major issues with their sites.

Smooth Migration
""""""""""""""""

To help and guide admins, integrators and developers for the challenges
posed by the mentioned changes in the Core, a "Smooth Migration" project
was created for TYPO3 6.2. This has the goal of smoothing the upgrade
process as much as possible. It is aiming for the following goals:

#. migration shall be possible in all areas
#. migration should be plannable and is quotable
#. migration should work out as planned

Read in the next chapters how you can plan, prepare and execute the
migration from TYPO3 CMS 4.5 (and also 4.7) to the latest 6.2 LTS
release.
