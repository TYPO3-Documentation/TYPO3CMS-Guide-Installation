﻿.. include:: ../../Includes.txt


.. _the-install-tool:

================
The Admin Tool
================

.. tip::

   The "Admin Tool" is also called "Install Tool".


#. Hit the start page of your freshly created site with your browser and you
   should see the "thank you for downloading"-message.

   .. include:: /Images/AutomaticScreenshots/QuickInstall/EnableFirstInstall.rst.txt


#. Create an empty file :file:`FIRST_INSTALL` in your web root directory (e.g. `public` folder).
   Then reload the page. You will be redirected to the installation process. It will
   guide you through the steps for installing TYPO3. The Install Tool is
   located in 'typo3/install.php' in your installation which for example would be
   `http://www.example.com/typo3/install.php
   <http://www.example.com/typo3/install.php>`_.


#. This is what you should see:

   .. include:: /Images/AutomaticScreenshots/QuickInstall/Step1SystemEnvironment.rst.txt


#. In case you have problems in your Environment, you will get warnings or
   hints in this screen. In this case, you should try to fix them; the
   ":ref:`troubleshooting`" section might help you.


#. *Choose database connection.* In this step, you can choose the database
   management system TYPO3 should run with. Via the GUI you can choose between
   MySQL (compatible to MariaDB), PostGres or SQLite if available. SQLite
   requires no further configuration and is a good choice for testing TYPO3,
   but you should choose one of the others for running production grade web
   sites.

   .. include:: /Images/AutomaticScreenshots/QuickInstall/Step2DatabaseConnection.rst.txt


#. *Choose Database.* If you did not select SQLite in the previous step, you
   have to select an empty database for TYPO3 now (or create one if your user
   is allowed to).

   .. include:: /Images/AutomaticScreenshots/QuickInstall/Step3ChooseDb.rst.txt


#. Enter a username and password for your first TYPO3 administrator account.
   (For security reasons, it's best not to use the name *admin*.) This password
   will also be used for the Install Tool. The "site name" will identify this
   installation (in the page tree and browser title).

   .. include:: /Images/AutomaticScreenshots/QuickInstall/Step4AdminUserSitename.rst.txt


#. In the last step you can choose whether you want to start with an empty
   TYPO3 or if you want to have a basis to start from.


   .. include:: /Images/AutomaticScreenshots/QuickInstall/Step5LastStep.rst.txt

   .. tip::

      If you wish to install the "Introduction Package" in order to create a
      demo site, choose:

      * With Composer: :guilabel:`"Take me straight to the backend"`
      * Without Composer: :guilabel:`"Get preconfigured distributions"`

      Proceed with :ref:`install-introduction-package`


If you do not wish to install the "Introduction Package", choose
:guilabel:`"Take me straight to the backend"` or
:guilabel:`"Create empty starting page"`

**The installation is now complete.**

Find some more tips in :ref:`install-next-steps`.

