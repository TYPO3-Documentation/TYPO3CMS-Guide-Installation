.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _which-package-and-which-file-format:

Which Package and which File Format?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

TYPO3 is available in various "packages" and each package is available
in different formats.


.. _which-package-to-use:

Which Package to use
""""""""""""""""""""

For installing TYPO3 you should download one of these packages: the
introduction package, the government package or the blank package.

Do *not* use the source package or the dummy package - they are not
interesting for you now.

An overview of all available packages and versions can be found at
`http://typo3.org/download/
<http://typo3.org/download/>`_


.. _introduction-package:

Introduction Package
~~~~~~~~~~~~~~~~~~~~

The introduction package is a complete demo website. It contains the
contents of the source package, the dummy package and a lot of default
content for testing and learning. Please try this one, if you are
new to TYPO3!

This is what the filenames of the introduction package might be:

- introductionpackage-6.1.0.zip

- introductionpackage-6.1.0.tar.gz


.. _government-package:

Government Package
~~~~~~~~~~~~~~~~~~

The government package is another demo website. It is a collection of
best practices to enhance the level of web accessibility. The contents
are rendered in HTML5 based on the famous HTML5Boilerplate. Navigation
and content elements are defined to be accessible for screen readers
and keyboard navigation. HTML5 semantics are used to add more meaning
and structure to the accordant elements. Since web accessibility
guidelines are strict on contrast ratio and readability, an alternative
view to use a different, contrast enhanced stylesheet, has been
integrated as well.


.. blank-package:

Blank Package
~~~~~~~~~~~~~

The blank package is an empty TYPO3 website. It contains the source
files of TYPO3 CMS, which are mandatory in every TYPO3 system and which
are also part of the introduction and the government package. Apart
from the source, the blank package comes with a skeleton for a new
TYPO3 website. This is the ideal base to start a new TYPO3 site from
scratch! It is the same as source and dummy together.


.. _typo3-source:

TYPO3 Source
~~~~~~~~~~~~

The TYPO3 source contains only the source files of TYPO3 CMS. The
source files also are included in the introduction package, the
government package and the blank package. You can set up a new website
from scratch using the source package, but you will then also need the
dummy package. In that case better take the blank package, instead -
there you directly get source and dummy together.

The files and folders, which are part of the source package, remain
unchanged when you run TYPO3. When you do a TYPO3 update, these are the
files and folders, which must be replaced.


.. _typo3-dummy:

TYPO3 Dummy
~~~~~~~~~~~

This is a skeleton for a new TYPO3 website. You can use the dummy
package, when you *already have* a running TYPO3 system and want to set
up a new website. You can then use those source files, which you
already have, and just install an additional dummy package in order to
create a new website.

The contents of the dummy package are modified when you run TYPO3. They
will later contain the files, which are in that way only needed in
*your* installation, e.g. configuration files and images or documents
which you present the visitors of your website.


.. _recommendation:

Recommendation
~~~~~~~~~~~~~~

For testing and learning we recommend you to use the introduction
package.

If exactly adhering to web standards is especially important for you
(as it e.g. is for government bodies in the EU), you might want to try
the government package.

For building your own website from scratch, use the blank package. In
contrast to using the introduction package or the government package,
you will get a completely empty installation of TYPO3 then.


.. _which-file-format-to-use:

Which File Format to use
""""""""""""""""""""""""

Each package is normally available as a .zip or .tar.gz distribution.
The main difference is that the .tar.gz distribution contains
symlinks: The .tar.gz distribution of the dummy package contains
symlinks to link to the source package.

If you use a Windows server, you should use the .zip distribution,
because symlinks are not easy to use on Windows.

If you run TYPO3 on a Unix server, you can use both packages. Using
the .tar.gz distribution with symlinks generally is recommended, as it
e.g. makes updating easier. Use this only if you know how symlinks
work.

