.. include:: ../../Includes.txt


.. _preparation:

===========
Preparation
===========


Before You Start
================

Before starting the upgrade check your system for compatibility with a newer
TYPO3 version.

*  Enable the deprecation log and let it run for a while while the website is
   used to catch all deprecations

*  Check installed extensions for versions compatible to the target TYPO3
   version

*  Try the upgrade on a development system first or create a parallel instance

*  Run the extension scanner (see below)

.. _handling-deprecations:

Handling Deprecations
=====================

If you notice some API you are using is deprecated, you should look up the
corresponding `ChangeLog <https://docs.typo3.org/typo3cms/extensions/core/>`_
entry and see how to migrate your code corresponding to the documentation.

Since TYPO3 v9 an extension scanner is included, that provides basic scanning
of your extensions for deprecated code. While it does not catch everything, it
can be used as a base for an upgrade. You can either access the extension
scanner via the TYPO3 admin tools (Backend > Module "Upgrade" > "Scan Extension
Files") or as a standalone tool (https://github.com/tuurlijk/typo3scan)

Read where to find deprecation documentation in the chapter about
:ref:`check-the-changelog-and-news-md`.

.. note::

   TYPO3 aims at providing a reliable backwards compatibility between versions:

   *  Minor versions are always backwards compatible - unless explicitly stated 
      otherwise (for example in case of security updates)

   *  Major versions may contain breaking changes - normally these are
      deprecated one major version in advance

   *  Most breaking changes usually happen in the first Sprint Release

   If PHP classes, methods, constants, functions or parameters are to be
   removed, they will be *marked as deprecated* first and not removed until the
   next major release of TYPO3. For example: a method that gets deprecated in
   version 9.4.0 will remain fully functional in all 9.x.x releases, but will
   be removed in version 10.

   This strategy gives developers sufficient time to adjust their TYPO3
   extensions, assuming many agencies upgrade from one LTS release to the next
   (usually 1.5 years).

Upgrade Hints for version 9
===========================

Database Collation and Charset
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

If upgrading instances, admins may change :file:`LocalConfiguration.php` to use `utf8mb4` collation 
and charset for allowing multibyte characters like emojis to be used in TYPO3.
The core does not provide mechanisms to update the collation of existing tables
from `utf8_unicode_ci` to `utf8mb4_unicode_ci` for existing instances, though. Admins need
to manage that on their own if needed, the reports module shows an information if the
table schema uses mixed collations. This should be fixed after manually configuring
`utf8mb4` to avoid SQL errors when joining tables having different collations.

.. warning::
      Note that manually upgrading to `utf8mb4` may lead to index length issues: The maximum key
      length on InnoDB tables is often 767 bytes and options to increase that have even been actively
      removed, for instance in recent MariaDB versions.
      A typical case is an index on a varchar(255) field: The DBMS assumes the worst case for the index
      length, which is 3 bytes per character for a utf8 (utf8mb3), but 4 bytes for utf8mb4: With utf8,
      the maximum index length is 3*255 + 1 = 766 bytes which fits into 767, but with utf8mb4, this
      is 4*255 + 1 = 1021 bytes, which exceeds the maximum length and leads to SQL errors when setting
      such an index.
      This scenario gets more complex with combined indices and may need manual investigation when
      upgrading an existing instance from from `utf8` to `utf8mb4`. One solution is to restrict the
      index length in ext_tables.sql of the affected extension: :php:`KEY myKey (myField(191))`, which
      in this case leads to 4*191 + 1 = 764 bytes as maximum used length.

The basic settings to use `utf8mb4` in :file:`LocalConfiguration.php` are:

.. code-block:: php

   'DB' => [
       'Connections' => [
           'Default' => [
               'driver' => 'mysqli',
               ...
               'charset' => 'utf8mb4',
               'tableoptions' => [
                    'charset' => 'utf8mb4',
                    'collate' => 'utf8mb4_unicode_ci',
               ],
           ],
       ],
   ],
