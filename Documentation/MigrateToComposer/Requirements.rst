.. include:: ../Includes.txt
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
https://getcomposer.org.

Folder structure
================

If your project root folder is identical to your web root folder, you
must change that.

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
a later step. I will use ``web`` in my example, because it's used in
many other TYPO3 related tutorials.

**Good:**

::

    /
      web/
        index.php
        fileadmin/
        typo3/
        typo3conf/
        typo3temp/

If you do not have such a web root directory, you must refactor your
project before continuing.

Code integrity
==============

Your project must have the TYPO3 core and all installed extensions in
original state. If you changed files, like templates or configurations
directly in core or the extensions, you have a problem. That's not how
TYPO3 works.


