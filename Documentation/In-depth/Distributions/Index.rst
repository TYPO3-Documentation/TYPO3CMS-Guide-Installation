﻿.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _the-distributions:

The Distributions
^^^^^^^^^^^^^^^^^

Several Distributions are available for TYPO3 for use in your installation. In essence,
a Distribution is an extension which sets up and configures TYPO3 to get you started.
A Distribution often creates an example page structure and content elements, as
well as automatically handling the installation and activation of useful extensions like `RealURL`__.

__ https://typo3.org/extensions/repository/view/realurl/

If you selected the option to load preconfigured Distributions during the final step of
the installation process (in the Install Tool), you will be redirected to the
"Get preconfigured distribution" screen of the Extension Manager after logging
in to the backend. (You can also navigate there manually, of course.)

Amongst non-core options, the following Core Distributions are available:

.. _introduction-package:

Introduction Package
""""""""""""""""""""

The Introduction Package is a complete demo website. It it based on a
responsive design and contains a lot of default content for testing and
learning. Try this one if you are new to TYPO3.


.. _government-package:

Government Package
""""""""""""""""""

The Government Package is a demo website. It contains a collection of
best practices to enhance the level of web accessibility. The contents
are rendered in HTML5 based on the famous HTML5Boilerplate. Navigation
and content elements are defined to be accessible for screen readers
and keyboard navigation. HTML5 semantics are used to add more meaning
and structure to the appropriate elements. Since web accessibility
guidelines are strict on contrast ratio and readability, an alternative
view has been integrated, which allows you to use an alternative,
contrast-enhanced stylesheet.

.. note::

   The Government Package is currently unmaintained and is not
   compatible with recent versions of TYPO3 CMS.

.. _installing-distributions:

Installing Distributions
""""""""""""""""""""""""

For testing and learning we recommend that you use the Introduction Package,
but several other distributions are available.

Move to the **ADMIN TOOLS > Extensions** module and choose
"Get preconfigured distribution" from the menu in the docheader.
Just choose the Distribution you would like to use and hit the "Install"
button.

If you want to build your web site from scratch, just go ahead *without*
using a Distribution. You can then start with a completely empty
installation of TYPO3.
