.. include:: ../../Includes.txt
.. highlight:: bash

.. _install-via-composer:

Install TYPO3 via composer
================================

The recommended way of installing TYPO3 is via Composer.

To create a new TYPO3 project use the TYPO3 Base Distribution:

.. code-block:: bash

	# Download the Base Distribution, the latest "stable" release (8.7)
	composer create-project typo3/cms-base-distribution:^8 YourNewProjectFolder

.. note::
	To install TYPO3 via Composer on Windows Composer should be started as
	admin or explicitly given the permission to create symlinks.

After installation continue with the steps in :ref:`the-install-tool`
