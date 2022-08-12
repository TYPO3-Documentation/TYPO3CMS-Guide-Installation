.. include:: /Includes.rst.txt

.. _start:
.. _upgrading:

===================
TYPO3 Upgrade Guide
===================

:Version:
   |release|

:Language:
   en

:Author:
   TYPO3 contributors

:License:
   This document is published under the
   `Open Publication License <https://www.opencontent.org/openpub/>`__.

:Rendered:
   |today|

----

This document explains how to upgrade TYPO3 and migrate from Legacy to Composer
mode.

----

.. container:: row m-0 p-0

   .. container:: col-md-6 pl-0 pr-3 py-3 m-0

      .. container:: card px-0 h-100

         .. rst-class:: card-header h3

            .. rubric:: :ref:`Minor upgrades <Minor>`

         .. container:: card-body

            Minor updates contain bugfixes and/or security updates. This section details
            how to install minor updates using Composer.

   .. container:: col-md-6 pl-0 pr-3 py-3 m-0

      .. container:: card px-0 h-100

         .. rst-class:: card-header h3

            .. rubric:: :ref:`Major upgrades <Major>`

         .. container:: card-body

            This chapter details how major updates are installed using Composer and
            highlights what tasks need to be carried out before and after the core is updated.

   .. container:: col-md-6 pl-0 pr-3 py-3 m-0

      .. container:: card px-0 h-100

         .. rst-class:: card-header h3

            .. rubric:: :ref:`Upgrading extensions <UpgradingExtensions>`

         .. container:: card-body

            Just like TYPO3's core, extensions also need to be regularly updated.
            This chapter details how to upgrade extensions using Composer.

   .. container:: col-md-6 pl-0 pr-3 py-3 m-0

      .. container:: card px-0 h-100

         .. rst-class:: card-header h3

            .. rubric:: :ref:`Third-party Tools <Tools>`

         .. container:: card-body

            Tools and resources developed by the community that can assist with common
            upgrade and maintenance tasks.

   .. container:: col-md-6 pl-0 pr-3 py-3 m-0

      .. container:: card px-0 h-100

         .. rst-class:: card-header h3

            .. rubric:: :ref:`Legacy upgrade guide <Legacy>`

         .. container:: card-body

            Using TYPO3 without Composer? This chapter details how to upgrade TYPO3 manually.

   .. container:: col-md-6 pl-0 pr-3 py-3 m-0

      .. container:: card px-0 h-100

         .. rst-class:: card-header h3

            .. rubric:: :ref:`Applying Core patches <applying-core-patches>`

         .. container:: card-body

            Learn how to apply Core patches in a future proof way: Automatize
            patch application with `cweagans/composer-patches`. Download
            a patch for the Core.

   .. container:: col-md-6 pl-0 pr-3 py-3 m-0

      .. container:: card px-0 h-100

         .. rst-class:: card-header h3

            .. rubric:: :ref:`Migrate a TYPO3 installation to Composer <MigrateToComposer>`

         .. container:: card-body

            Information on how to migrate a legacy installation of TYPO3 to a Composer based installation.

   .. container:: col-md-6 pl-0 pr-3 py-3 m-0

      .. container:: card px-0 h-100

         .. rst-class:: card-header h3

            .. rubric:: :ref:`Migrate content <MigrateContent>`

         .. container:: card-body

            This chapter details how pages and content can be exported and then imported into another installation of TYPO3.

.. toctree::
   :hidden:

   Minor/Index
   Major/Index
   UpgradingExtensions/Index
   Tools/Index
   Legacy/Index
   ApplyingCorePatches/Index
   MigrateToComposer/Index
   MigrateContent/Index

.. Meta Menu

.. toctree::
   :hidden:

   Sitemap
   genindex
