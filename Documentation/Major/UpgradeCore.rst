.. include:: /Includes.rst.txt

.. Use syntax highlighting for shell commands by default on this page

.. highlight:: shell

.. _upgradecore:

================
Upgrade the core
================

Upgrading to a major release using composer
===========================================

This example details how to upgrade from one LTS release to another. In this example,
the installation is running TYPO3 version 10.4.22 and the new LTS release is version 11.5.0.

Check which TYPO3 packages are currently installed
--------------------------------------------------

TYPO3's core contains a mix of required and optional packages. For example, `typo3/cms-backend`
is a required package. `typo3/cms-sys-note` is not a required package and does not need to be installed
for TYPO3 to work correctly.

Prior to upgrading, check which packages are currently installed and make a note of them.

Running `composer info typo3/*` will output a list of all TYPO3 packages that are currently installed.

Running Composer require
------------------------

To upgrade a Composer package, run `Composer require` with the package name and version number.

For example, to upgrade `typo3/cms-backend` run `composer require typo3/cms-backend:~11.5`.

When upgrading to a new major release, each of TYPO3's packages will need to be upgraded.

Given that a typical installation of TYPO3 will consist of a number of packages,
it is recommended that the `Composer Helper Tool <https://get.typo3.org/go/composer-helper>`_
be used to help generate the Composer upgrade command.

Assuming that the packages below are installed locally, the following example would upgrade each of them to version `11.5`.

.. code::

   $ composer require --update-with-all-dependencies "typo3/cms-adminpanel:^11.5" \
   "typo3/cms-backend:^11.5" "typo3/cms-belog:^11.5" "typo3/cms-beuser:^11.5" \
   "typo3/cms-core:^11.5" "typo3/cms-dashboard:^11.5" "typo3/cms-felogin:^11.5" \
   "typo3/cms-filelist:^11.5" "typo3/cms-filemetadata:^11.5" "typo3/cms-fluid:^11.5" \
   "typo3/cms-form:^11.5" "typo3/cms-frontend:^11.5" "typo3/cms-info:^11.5" \
   "typo3/cms-install:^11.5" "typo3/cms-linkvalidator:^11.5" "typo3/cms-lowlevel:^11.5" \
   "typo3/cms-recordlist:^11.5" "typo3/cms-recycler:^11.5" "typo3/cms-rte-ckeditor:^11.5" \
   "typo3/cms-setup:^11.5" "typo3/cms-t3editor:^11.5" "typo3/cms-tstemplate:^11.5" \
   "typo3/cms-viewpage:^11.5"

As most installations use additional extensions this command might still create dependency errors. 
E.g. during an upgrade from 10LTS to 11LTS there could be warning that the current dependency 
`"helhum/typo3-console": "^6.7"` is only compatible with 10LTS, while the new version `^7.1.2` would support 11LTS. 
For each of these extension dependency errors, just add the new version like 
`"helhum/typo3-console:^7.1.2"` at the end of your :bash:`composer require` string and retry the command 
until everything is resolved.

Monitoring changes to TYPO3's core
----------------------------------

The system extensions that are developed and exist within TYPO3's core
are likely to change over time. Some extensions are merged into others, new system extensions
are added and others abandoned.
These changes are published :doc:`here <t3home:Home/SystemExtensions>` and can
also be found by searching in the :doc:`breaking changes <ext_core:Index>`
for the extension by its key name.


.. _install-next-step:

Next steps
==========

Once the upgrade is complete, there are a set of tasks that need to actioned to complete the process.
