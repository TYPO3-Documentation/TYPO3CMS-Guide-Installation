.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt
.. include:: Images.txt


.. _1-2-3:

1-2-3
^^^^^

#. Download the matching package for your requirements from
   `http://typo3.org/download/
   <http://typo3.org/download/>`_ (If you are not sure which
   package you should choose read the section "Which package and which
   file format" in the in-depth part of the manual).

#. Upload the contents of this package to your webserver.

   |img-3| **Tip**

   The package contains thousands of files, so if you're able to unzip or
   untar the file on the server (instead of on your local PC), better do
   that!

#. Hit the site with your browser and follow the Install Tool (
   `http://www.example.com/typo3/install/index.php?mode=123&step=1
   <http://www.example.com/typo3/install/index.php?mode=123&step=1>`_
   ).The Install Tool will help you to

   #. setup MySQL username/password/database,

   #. dump any default database content and

   #. check the configuration of your PHP installation for compatibility.
      This is outlined below.

#. The file ENABLE\_INSTALL\_TOOL gets deleted automatically after one
   hour. However, after you finished work in the Install Tool, you
   should log out from the Install Tool to delete the file directly.

