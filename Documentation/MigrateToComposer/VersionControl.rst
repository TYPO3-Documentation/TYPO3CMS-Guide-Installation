..  include:: /Includes.rst.txt

===============
Version control
===============

Add to version control system
=============================

If you use a version control system such as Git (and you really should!), it is
important to add both files :file:`composer.json` and :file:`composer.lock`
(which were created automatically during the previous steps). The
:file:`composer.lock` file keeps track of the exact versions that are installed,
so that you are on the same versions as your co-workers (and when deploying to
the live system).

Additionally, some files and folders added by Composer should be excluded:

-   :file:`public/index.php`
-   :file:`public/typo3/`
-   :file:`public/typo3conf/ext/`
-   :file:`vendor/`

A :file:`.gitignore` file could look like this:

..  todo: Why should labels be versioned?

..  code-block:: none
    :caption: /.gitignore

    /var/*
    !/var/labels
    /vendor/*
    /public/index.php
    /public/typo3/*
    /public/typo3conf/ext/*

Checkout from version control system
====================================

All your co-workers should always run :bash:`composer install` after they have
checked out the files. This command will install the packages in the appropriate
versions defined in :file:`composer.lock`. This way, you and your co-workers
always have the same versions of the TYPO3 Core and the extensions installed.
