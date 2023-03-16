..  include:: /Includes.rst.txt
..  highlight:: bash

============
Requirements
============

TYPO3 version
=============

Composer packages for TYPO3 can be found on `packagist.org`_ down to version
6.2.0: `typo3/cms-*`_.

..  _packagist.org: https://packagist.org/
..  _typo3/cms-*: https://packagist.org/search/?query=typo3%2Fcms-%2A

Composer
========

Composer is a program that is written in PHP. Instructions for downloading and
installing Composer can be found on `getcomposer.org`_.

..  _getcomposer.org: https://getcomposer.org/

Folder structure
================

If the root folder of your project is identical to your web root folder, you
need to change this. Composer will add a :file:`vendor/` folder to your project
root, and if your project root and your web root are identical, this can
be a security issue: files in the :file:`vendor/` folder could be directly
accessible via HTTP request.

**Bad:**

..  code-block:: none
    :caption: Page tree of directory typo3_root

    $ tree typo3_root
    ├── index.php
    ├── fileadmin/
    ├── typo3/
    ├── typo3conf/
    └── typo3temp/

You will need a web root folder in your project. You can find many
tutorials with different names for your web root folder. The truth is:
the name does not matter because we can configure it in the settings in
a later step. We will use :file:`public/` in our example.

**Good:**

..  code-block:: none
    :caption: Page tree of directory typo3_root

    $ tree typo3_root
    └── public/
        ├── index.php
        ├── fileadmin/
        ├── typo3/
        ├── typo3conf/
        └── typo3temp/

..  todo: What does refactor concrete mean?

If you do not have such a web root directory, you will have to refactor your
project before proceeding. Please be aware that you may need to tell your web
server about the changed web root folder if necessary.

Code integrity
==============

Your project must have the TYPO3 Core and all installed extensions in their
original state. If you applied manual changes to the files, these will
be lost during the migration steps.

..  note::
    If you need to apply hotfixes or patches to system extensions or publicly
    available extensions, this `tutorial about applying patches via Composer`_
    could help, but requires some advanced steps.


..  _tutorial about applying patches via Composer: https://typo3worx.eu/2017/08/patch-typo3-using-composer/
