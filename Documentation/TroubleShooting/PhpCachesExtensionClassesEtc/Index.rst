.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _php-caches-extension-classes-etc:

PHP Caches, Extension Classes etc.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

There are some situations, which can cause what looks like totally
illogical problems after an upgrade:

- If extensions override classes in which functions have
  changed.Solution: Try to disable all extensions and enable them one by
  one again until the error occurs again.

- If a PHP-cache somehow fails to re-cache scripts, in particular if a
  change happened to a parent class overridden by a child class which
  was not updated.Solution: Remove ALL cached PHP files (for PHP-
  Accelerator, remove "/tmp/phpa\_\*") and restart Apache.

