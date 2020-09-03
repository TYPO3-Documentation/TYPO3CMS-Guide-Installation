.. include:: ../../Includes.txt
.. highlight:: shell


.. _install-via-composer:

==========================
Install TYPO3 via composer
==========================

The recommended way of installing TYPO3 is via Composer, as described on
this page. If you do not want to use Composer, follow the :ref:`package installation
guide <get-and-unpack-the-typo3-package>`.

You have more ways to install TYPO3 via composer:
* Install regular via loading the needed packages. Use `Composer helper <https://get.typo3.org/misc/composer/helper/>`_ to generate the composer command.
* Install the cms-base-distribution package. This is helpful when you are use ddev, because it configures your database and mailserver for Mailhog.

To create a new TYPO3 project using the TYPO3 Base Distribution::

	# Download the Base Distribution, the latest "sprint" release (10)
	composer create-project typo3/cms-base-distribution YourNewProjectFolder
   
To create a new TYPO3 project using the TYPO3 Base Distribution in a ddev environment::

   # Download the Base Distribution, the latest "LTS" release (10)
   ddev composer create "typo3/cms-base-distribution:^10" --prefer-dist


.. note::

   **For Windows users:** To install TYPO3 via the `composer` command, it should be started as admin
   or explicitly given the right to create symlinks (use for example a
   powershell or git bash started with admin rights).


After `composer create project ...` executed, you should have the following folder structure:
 
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
   
Point the document root of your web server to the `public` folder.


Tutorial from the official TYPO3 YouTube channel
================================================

.. youtube:: M4imQOUKDe4

Next Steps
==========

Continue with :ref:`the-install-tool`.

