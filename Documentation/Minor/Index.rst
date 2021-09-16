.. include:: /Includes.rst.txt

.. _minor:

=============
Minor upgrade
=============

What are minor upgrades
=======================

Minor upgrades contain bugfixes and security updates. They never contain new features and do not break backwards compatibility.

For example, upgrading from TYPO3 version `11.5.2` to `11.5.3` is a minor upgrade.

Before upgrading
================

The :ref:`pre-upgrade tasks <preupgradetasks>` chapter contains a list of tasks that should be actioned prior to upgrading
to a major release.

The only tasks that need to actioned for a minor upgrade are :ref:`making a backup <make_a_backup>` and :ref:`updating the reference index <update_reference_index>`.

Check if updates are available
===============================

There are two ways to check if a minor update is available for an installation of TYPO3.

All supported versions of TYPO3 and their version numbers are published on `get.typo3.org <https://get.typo3.org>`_.

Alternatively, running `composer outdated "typo3/*"` will present a list of any packages that have updates.

Execute the upgrade
===================

To execute the upgrade, run `composer update -W typo3/*`.

This will upgrade all TYPO3 packages, the `-W` (`--with-all-dependencies`) signals that any dependencies should also be upgraded.

Post upgrade
============

Once Composer has finished upgrading the installation of TYPO3, log in to the backend and clear all caches.

:guilabel:`Admin Tools > Maintenance > Flush TYPO3 and PHP Cache`
