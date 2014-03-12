.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _the-install-tool-in-depth:

The Install Tool
^^^^^^^^^^^^^^^^

The Install Tool provides tools around maintainance of your
installation: Upgrading, checking system environment, configuring
settings from `$TYPO3_CONF_VARS` and solving problems. Its usage is
not dependent of a working Backend, and you login with it using a
single password.

First go to your site and enter the install tool (http://www.example.com/typo3/install).

.. hint::
	If you see a message "The Install Tool is locked", create a new file
	named "ENABLE_INSTALL_TOOL" in the folder :file:`typo3conf/`. Then reload the
	page.


.. _important-actions:

Important actions
"""""""""""""""""

.. _configuration-presets:

Configuration presets
"""""""""""""""""""""

.. _all-configuration:

All configuration
"""""""""""""""""

Here you can configure *all* installation options concerning your TYPO3
installation. We suggest you go through the whole list and read the
description of the settings carefully at least once, so you get an
impression of what you can configure. Normally you can, but you don't
have to change anything here during installation as the steps before
already took care of the most important settings.

.. _upgrade-wizard:

Upgrade wizard
""""""""""""""

You don't need the upgrade wizard while *installing* TYPO3. It will be
explained in a later chapter about upgrading TYPO3.

.. _system-environment:

System environment
""""""""""""""""""

.. _folder-structure:

Folder structure
""""""""""""""""

.. _test-setup:

Test setup
""""""""""""""""

.. _clean-up:

Clean up
""""""""
