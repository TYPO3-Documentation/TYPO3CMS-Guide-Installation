.. include:: ../../Includes.txt

.. highlight:: bash

.. _upgradeToLts:
.. _lts-upgrade:

===============
Upgrade to v7.6
===============

You should follow the :ref:`general upgrade instructions <upgrade>`.

This page gives additional information about upgrading that is specific for upgrading
from 6.2 to 7.6.

Important changes
=================

We do not list all changes here. You may also want to browse the
`7.6 Changelogs <https://docs.typo3.org/c/typo3/cms-core/master/en-us/Changelog-7.html>`__
before updating. All changes listed for 7.0 to 7.6 and 7.6.x. are relevant
for upgrading from 6.2 to 7.6.

* The possibility of having a file called :file:`typo3conf/extTables.php` has been deprecated.
  Instead of having code in this file, use extensions!
* If you are using content elements with CType media or multimedia, the extension mediace will be
  added to your installation to handle these CTypes. Alternatively, in TYPO3 7, you can install
  the system extension fluid_styled_content, which is an experimental replacement for css_styled_content.
  For media content elements you can then use the "Text & Media" content element type of this extension.
  Note that fluid_styled_content will remove a number of CTypes, among them text ("Text") and textpic
  ("Text & Images"), from the "New Content Element wizard". When fluid_styled_content is installed and
  css_styled_content is not, there will be an upgrade wizard to migrate content elements, which use
  CTypes originally provided by css_styled_content. Note that you will most likely have to adjust
  your CSS styles in order to again get the frontend output you want! For videos on YouTube, Vimeo
  and so on, another option is the "online media" feature of the Core; see
  :doc:`t3core:Changelog/7.5/Feature-61799-ImprovedHandlingOfOnlineMedia`.


.. _lts-upgrade-precondition:

Before upgrade
==============

Check that all requirements for upgrading are met:

* You must use TYPO3 6.2 or newer before you upgrade to TYPO3 7.6 LTS!
* Make sure that before you upgrade to TYPO3 7.6, you have run all Upgrade Wizards in TYPO3 6.2.
* Check the :ref:`system-requirements`!

.. _lts-upgrade-process:

During upgrade
==============

.. tip::

   If you get an Exception in the backend, you can go directly to the Install Tool (/typo3/install.php).
   Create typo3conf/ENABLE_INSTALL_TOOL first!

Upgrade wizards
---------------

- The upgrade wizard, which installs extension compatibility6 from TER, is
  not necessarily needed. It provides a compatibility layer for extensions,
  which are compatible with TYPO3 6.2, but not yet with TYPO3 7.6, e.g. because
  they are still using old class names. If you are not using such extensions,
  you do not need to install the compatibility6 extension.

- The upgrade wizard, which install the mediace extension, makes sure that the
  Media Content Element still is available in your installation. If you have not
  used this Content Element and if you do not want to use it in the future, you
  do not need this extension. Otherwise install it!

- There is an Upgrade Wizard, which changes the startup modules of your Backend
  users. After you have run through the Upgrade Wizards, you might want to change
  the startup module for the Backend users again.

.. _lts-upgrade-after:

After upgrade
=============

When you insert content elements into your website, you have the content elements
"Regular Text Element", "Text & Images" and "Images Only". These content elements
are provided by the extension css_styled_content.

In TYPO3 CMS 7, a replacement called fluid_styled_content is available. If you
install this extension instead of css_styled_content, other content elements
will be available, namely the one called "Text and Media". With this content
element, you can combine text with any type of media, e.g. a PDF file, a video
or an image. fluid_styled_content has the advantage that Fluid templates can
be used. It is not necessary to write TypoScript
rendering definitions. Note however that some options no longer are available in
fluid_styled_content, e.g. image processing options. If you use
fluid_styled_content, your old content elements can be/have to be migrated to it.

For 7.6 it is no problem to continue using css_styled_content.



