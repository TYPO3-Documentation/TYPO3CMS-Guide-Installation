.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt
.. include:: Images.txt


1-2-3
^^^^^

#. Download the matching package for your requirements from
   `http://typo3.org/download/packages/
   <http://typo3.org/download/packages/>`_ (If you are not sure which
   package you should choose read the section "Which package and which
   file format" in the in-depth part of the manual).

#. Upload the contents of this package to your webserver.

   |img-3| **Tip**

   The package contains thousands of files, so if you're able to unzip or
   untar the file on the server, better do that!

#. Hit the site with your browser and follow the Install Tool (
   `http://www.example.com/typo3/install/index.php?mode=123&step=1
   <http://www.example.com/typo3/install/index.php?mode=123&step=1>`_
   ).The Install Tool will help you to

   #. setup MySQL username/password/database,

   #. dump any default database content and

   #. check the configuration of your PHP installation for compatibility.
      This is outlined below.

#. After the Install Tool, you should seriously consider to protect the
   folder typo3/install/ with a password or simply delete the
   ENABLE\_INSTALL\_TOOL file. The file gets deleted automatically after
   one hour.

