.. include:: ../../Includes.txt
.. highlight:: shell


.. _install-via-composer:

==========================
Install TYPO3 via Composer
==========================

.. attention::

   The recommended way of installing TYPO3 is via Composer as described on this
   page.


Using Composer
==============

*NIX Environment
----------------

In *NIX shells the Asterisk character ``*`` has a special meaning and has to be
properly escaped by surrounding double quotes ``"``:: shell

   composer create-project vendor/package YourNewProjectFolder "*"
   composer create-project "vendor/package:*" YourNewProjectFolder


Windows Environment
-------------------

To install TYPO3 via the ``composer`` command on Windows, it should be started
as admin or explicitly given the right to create symlinks (use for example a
powershell or git bash started with admin rights).

The Caret character ``^`` is the escape character in a Windows command line
(cmd.exe). To be able to use it in version constraints, every occurance has to
be escaped by prepend a Caret character ``^`` or by enclosing the whole
argument in double quotes ``"``:: shell

   # Escaping by prepend the escape character
   composer create-project typo3/cms-base-distribution:^^9 YourNewProjectFolder

   # Escaping by enclosing in double quotes
   composer create-project "typo3/cms-base-distribution:^9" YourNewProjectFolder


Install a TYPO3 LTS Release
===========================

To create a new TYPO3 project use the TYPO3 Base Distribution including a
version constraint::

	# Download the Base Distribution using TYPO3 LTS release version 9.5.x
	composer create-project typo3/cms-base-distribution:^9 YourNewProjectFolder

	# Download the Base Distribution using TYPO3 LTS release version 8.7.x
	composer create-project typo3/cms-base-distribution:^8 YourNewProjectFolder

All available versions are listed on `Packagist
<https://packagist.org/packages/typo3/cms-base-distribution>`__. Using the
MAJOR version, the first number of the version see `Semantic Versioning
<https://semver.org>`__, normally is sufficient.


Install a TYPO3 Sprint Release
==============================

To create a new TYPO3 project use the TYPO3 Base Distribution without a version
constraint::

	# Download the Base Distribution using the latest TYPO3 sprint release
	composer create-project typo3/cms-base-distribution YourNewProjectFolder

.. note::

   A sprint release is not always available. If not the last LTS release will
   be installed.


Installation Result
===================

After ``composer create-project ...`` is executed, you should have the
following folder structure:
 
.. code-block:: none

    .
    ├── .gitignore  
    ├── composer.json
    ├── composer.lock
    ├── LICENSE
    ├── public
    ├── README.md
    ├── var
    └── vendor   
   
Point the document root of your web server to the ``public`` folder.

If you do not want to use Composer, follow the :ref:`package installation
guide <get-and-unpack-the-typo3-package>`.


Tutorial from the official TYPO3 YouTube Channel
================================================

.. youtube:: M4imQOUKDe4


Next Steps
==========

Continue with :ref:`the-install-tool`.
