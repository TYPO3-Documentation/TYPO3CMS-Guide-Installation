.. include:: /Includes.rst.txt
.. highlight:: bash

==========
Co-working
==========

Add to version control system
=============================

If you use a version control system like Git, it's important to add
both files, the :file:`composer.json` and :file:`composer.lock` (which
automatically was created during the previous steps).

On the other side, some files and folders, which are added by
composer, should be excluded:

-  :file:`public/index.php`
-  :file:`public/typo3/`
-  :file:`vendor/`
-  The extensions, you added via composer

A :file:`.gitignore` file could look like this:

.. code-block:: none
   :caption: /.gitignore

   /var/*
   !/var/labels
   /vendor/*
   /public/index.php
   /public/typo3/*
   /public/typo3conf/ext/*
   # allow some extensions
   !/public/typo3conf/ext/my_sitepackage/
   !/public/typo3conf/ext/prefix_*

Checkout from version control system
====================================

All your co-workers should always run ``composer install`` after they
checked out the files. This command will install the packages and
versions, defined in :file:`composer.lock`. So you and your co-workers
always can be sure to have installed the same versions of the TYPO3 core
and the extensions.
