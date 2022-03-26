.. include:: /Includes.rst.txt
.. highlight:: bash

============
Requirements
============

TYPO3 version
=============

TYPO3 composer packages on `packagist.org <https://packagist.org>`__ can
be found down to version 6.2.0:
`typo3/cms <https://packagist.org/packages/typo3/cms>`__

Composer
========

Of course, you need ``composer``. It's a program, written in PHP.
Because you already use TYPO3, you should know how to install PHP.
Instructions how to download and install ``composer`` can be found on
`getcomposer.org <https://getcomposer.org>`__.

Folder structure
================

If your project root folder is identical to your web root folder, you
must change that. ``composer`` will add a :file:`vendor` folder to your project
root and if your project root and your web root are identical, this can
be a security issue, because files in the :file:`vendor` could be accessible
directly via HTTP request.

**Bad:**

::

    /
      index.php
      fileadmin/
      typo3/
      typo3conf/
      typo3temp/

You need a web root folder inside your project. You can find many
tutorials with different names for your web root folder. The truth is:
the name does not matter, because we can configure it in the settings in
a later step. I will use ``public`` in my example.

**Good:**

::

    /
      public/
        index.php
        fileadmin/
        typo3/
        typo3conf/
        typo3temp/

If you do not have such a web root directory, you must refactor your
project before continuing. Please be aware to tell your web server
about the changed web root folder, if necessary.

Code integrity
==============

Your project must have the TYPO3 core and all installed extensions in
original state. If you applied manual changes to the files, these will
be lost during the migration steps.

.. note ::

    If you need to apply hotfixes or patches to the TYPO3 core or public
    available extensions, this `tutorial about applying patches via composer
    <https://typo3worx.eu/2017/08/patch-typo3-using-composer/>`__ could help,
    but requires some advanced steps.


