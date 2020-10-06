.. include:: ../Includes.txt

.. _quick-installation:

================
Installing TYPO3
================

For those already familiar with running web software, get started quickly with
this quick install guide. For a more detailed description, take a look at the
section :ref:`in-depth-installation`.

The following instructions assume you are able to create symlinks on the target
machine (which needs elevated permissions on Windows machines).

.. rst-class:: bignums-xxl

1. Checkout out the system requirements

   Install required software, such as:

   * Web server (Apache, Nginx, IIS...)
   * PHP ≥ 7.2
   * Database server (MySQL, PostgreSQL, MariaDB ...)
   * ... more see :ref:`system-requirements`

   .. tip::
      Alternatively, you can use a container solution such as
      `DDEV <https://www.ddev.com/get-started/>`__ which comes with preconfigured
      configuration for TYPO3.

2. Install the TYPO3 core

   This can be done either using the package manager Composer or by unpacking
   a downloaded archive. Using Composer is the recommended way to install TYPO3.

   The installation steps are described in the subchapters:

   * :ref:`install-via-composer`
   * **or** :ref:`install-typo3-without-composer`

3. "Admin Tool"

   Once the source is installed, you must walk through the "Admin Tool" (formerly called
   "Install Tool"). This is described in:

   * :ref:`the-install-tool`

4. Install "Introduction Package" (optional)

   This is recommended if you wish to create a TYPO3 demo site.

   * :ref:`install-introduction-package`


.. toctree::
   :titlesonly:
   :hidden:

   Composer/Index
   GetAndUnpack/Index
   TheInstallTool/Index
   IntroductionPackage/Index
   NextSteps/Index
