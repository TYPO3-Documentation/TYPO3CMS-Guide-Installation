.. include:: ../Includes.txt

.. highlight:: bash

.. _update:

==================
TYPO3 Patch Update
==================


Updating major and minor versions is handled in :ref:`upgrade`. A major update
requires running the Upgrade Wizards and database analyzer, as well as other
procedures.

An update to a TYPO3 version with only a higher patch number does not require
the extensive handling of a major update. The patch update is handled here.

.. important::

   Always check the release notes for the version you are updating to.
   Some updates may require additional steps.

Because most of the steps are already documented elsewhere, we simply show
a quick summary and provide links to the sections where the steps are explained
in detail.

.. tip::

   You may want to optimize your update procedure or for example add a
   deployment toolchain.
   Here, we only show the most basic steps.



Go to https://get.typo3.org and select your version, click on "Release
Notes".

.. _update-with-composer:

Steps for Patch Update With Composer
------------------------------------

To check for available updates, do::

   composer outdated


See :ref:`composer-check-for-available-updates`


.. rst-class:: bignums


1. Update TYPO3 core

   .. code-block:: bash

      composer update typo3/cms-* --with-all-dependencies

   See :ref:`update-typo3-core-with-composer`

2. Run DB Analyzer

   In case the release notes indicated database changes (this is usually
   not the case), :ref:`run the DB analyzer <run-the-database-analyzer>`.

3. Update Extensions

   See :ref:`update-exensions-with-composer`

4. Clear cache

   See :ref:`clear-cache`


.. _update-without-composer:

Steps for Patch Update Without Composer
---------------------------------------


.. rst-class:: bignums


1. Update TYPO3 core


   Download and extract the archive, replace the symbolic link:

   See :ref:`install-manually`

2. Run DB Analyzer

   In case the release notes indicated database changes (this is usually
   not the case), :ref:`run the DB analyzer <run-the-database-analyzer>`.

3. Update Extensions

   See :ref:`update-extensions-without-composer`

4. Clear cache

   See :ref:`clear-cache`
