.. include:: ../../Includes.txt

.. _which-package-and-which-file-format:

=========================
With Composer or without?
=========================

With Composer
=============

The recommended way of installing TYPO3 is via the PHP package manager `Composer`.
For detailed instructions on how to install TYPO3 **with** Composer, visit the
:ref:`install-via-composer` section of this manual.

When you install with Composer, you will install the core extensions and third
party extensions with the package manager Composer on the command line. You will
not be able to import extensions (e.g. from TER) in the TYPO3 backend via the browser!

Without Composer
================

If you do not have access to Composer, you can install TYPO3 by downloading
and then extracting its source package on your web server.

Directions for installing TYPO3 **without** Composer can be found in
:ref:`install-typo3-without-composer`.

.. _which-file-format-to-use:

Which File Format to Use
------------------------

.. tip::

   This is only relevant if you install TYPO3 **without** Composer!

The TYPO3 Source package is available as a :file:`.zip` or
:file:`.tar.gz` distribution. Their content is the same and you should
download the one that you will be able to extract directly on your
web server (Windows based systems are more likely to use the :file:`.zip`
file while Linux distributions tend to use the :file:`.tar.gz` file).
