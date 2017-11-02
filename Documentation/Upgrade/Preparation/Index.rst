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

TYPO3 promises a certain amount of backwards-compatibility between versions:

-  Minor versions are always backwards-compatible

-  Major versions may contain breaking changes - normally these are deprecated
   in the version before

Here is an example. If the TYPO3 team decides that an API method is no longer
useful and should be removed they will first add a deprecation notice for the
next major version and will remove that method only in the major version after
that. So for example a method getting deprecated in version 9 will only be
removed in version 10.

This methodology gives you one major version (usually 1 1/2 years) advance
notice of any changes you need to make to your code to stay compatible to
coming TYPO3 versions.

If you notice some API you are using is deprecated, you should look up the
corresponding changelog entry and see how to migrate your code corresponding to
the documentation.

Read where to find deprecation documentation in the chapter about
:ref:`check-the-changelog-and-news-md`.
