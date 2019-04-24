.. include:: ../../Includes.txt
.. highlight:: shell

.. _reference-index:

===============
Reference Index
===============


With Command Line (Recommended)
===============================

.. sidebar:: Why CLI?

   As the reference index might take quite long, especially on instances not
   running it regularly, an update via CLI is recommended.

In a composer installation execute::

   ./vendor/bin/typo3 referenceindex:update

In a non-composer installation execute::

   php ./typo3/sysext/core/bin/typo3 referenceindex:update


Without Command Line
====================

Still in your old TYPO3 version, go to the "System" > "DB check" module and use
the "Check and update global reference index" function.

Click on "Update reference index" to update the reference index. In case there
is a timeout and you do not have CLI access (see above) you might have to run
the update multiple times.
