.. include:: ../../Includes.txt


.. _the-distributions:

=================
The Distributions
=================

Several Distributions are available for TYPO3 for use in your installation. In
essence, a Distribution is an extension which sets up and configures TYPO3 to
get you started. A Distribution often creates an example page structure and
content elements, as well as automatically handling the installation and
activation of useful extensions. 

For testing and learning TYPO3 we recommend to start with the introduction package
(see below).

If you want to build your web site from scratch, just go ahead *without*
using a Distribution. You can then start with a completely empty
installation of TYPO3.

The following distribution is available from the Core directly:

.. _introduction-package:

Introduction Package
====================

The Introduction Package is a complete demo website. It it based on a
responsive design using bootstrap templates and contains a lot of default
content for testing and learning. Try this one if you are new to TYPO3.

.. figure:: ../../Images/IntroductionPackage.png
   :alt: Introduction Package
   :class: with-shadow

   The Introduction Package provides a full website based on bootstrap.


Installing Distributions with composer
======================================

To install the introduction package or any other distribution on a composer
based installation use `composer require typo3/cms-introduction` (change
the package name to the distribution you want). Afterwards use the
following commands to activate the extension(s) via command line:

.. code-block:: shell

   ./vendor/bin/typo3 extension:activate bootstrap_package
   ./vendor/bin/typo3 extension:activate introduction

In this case, the introduction package depends on the bootstrap_package, so
both packages have to be activated.

.. _installing-distributions:

Installing Distributions without composer
=========================================

Move to the **ADMIN TOOLS > Extensions** module and choose
"Get preconfigured distribution" from the menu in the docheader.
Just choose the Distribution you would like to use and hit the "Install"
button.
