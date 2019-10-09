.. include:: ../../Includes.txt


.. _known-problems:

==============
Known Problems
==============



.. _php-73-pcre-mac:

PHP 7.3 / PCRE / macOS
======================

With **PHP 7.3** in combination with **macOS** 10.13.6 (and probably also 10.14 - unconfirmed)
pcre causes problems with brew as well as native or MAMP installations. It is
recommended to use PHP 7.2. More information can be found here:

More information:


* `Not working after upgrading to 7.3 <https://github.com/bobthecow/psysh/issues/540>`_
* `Bug #77260	preg_match_all(): JIT compilation failed: no more memory <https://bugs.php.net/bug.php?id=77260>`_

Solution / workaround:


* use PHP 7.2 in combination with macOS


.. _flock-nfs:

TYPO3 Locking in Combination With NFS
=====================================

*Since TYPO3 8*

TYPO3 uses a :ref:`locking API <t3coreapi:locking-api>` internally to
handle concurrent access to the page cache.

This uses the :php:`FileLockStrategy` by default which internally uses :php:`flock`
to acquire locks using a file in the :file:`typo3temp/var/lock` directory. This may
fail on NFS storage.

More information:


* :ref:`t3coreapi:locking-api-caveats`
* `Forge Issue: FileLockStrategy fails on NFS folders <https://forge.typo3.org/issues/72074>`__

Solution / workaround:

* Use a different storage or map the :file:`typo3temp` directory to a local
  storage by using symbolic links or mounts
* Use a different lock strategy, for example one provided by an external extension based on
  Redis.



.. _page-tree-performance:

Page Tree Performance in Backend
================================

*Since TYPO3 9*

On installations with a large number of pages (e.g. > 20 000 - this of course depends on
your resources, caching and optimizations) the loading of the page tree may be slow in the
backend. This affects basic editing tasks.

More information:

* Stack Overflow: `How can the typo3 backend page tree be constructed asynchronously in TYPO3 v9.x?
  <https://stackoverflow.com/a/57353167/2444812>`__.

Solution / workaround:

* You can use the extension bp_pagetree (as described in the Stack Overflow answer with the
  mentioned drawback)
