.. include:: ../../Includes.txt


.. _preparation:

===========
Preparation
===========

Before you start
================

Before starting the upgrade check your system for compatibility with a newer
TYPO3 version.

-  Enable the deprecation log and let it run for a while while the website is
   used to catch all deprecations

-  Check installed extensions for versions compatible to the target TYPO3
   version

-  Try the upgrade on a development system first!


Handling deprecations
=====================

TYPO3 aims at providing a reliable backwards compatibility between versions:

-  Minor versions are always backwards compatible

-  Major versions may contain breaking changes - normally these are deprecated
   in the version before

-  Most breaking changes usually happen in the first Sprint Release

If PHP classes, methods, constants, functions or parameters should be removed,
they will be *marked as deprecated* first and not removed until the next major
release of TYPO3. For example: a method that gets deprecated in version 9.4.0
will remain fully functional in all 9.x.x releases, but will be removed in
version 10.

This strategy gives developers sufficient time to adjust their TYPO3 extensions,
assuming many agencies upgrade from one LTS release to the next (usually 1.5
years).

If you notice some API you are using is deprecated, you should look up the
corresponding changelog entry and see how to migrate your code corresponding to
the documentation.

Read where to find deprecation documentation in the chapter about
:ref:`check-the-changelog-and-news-md`.
