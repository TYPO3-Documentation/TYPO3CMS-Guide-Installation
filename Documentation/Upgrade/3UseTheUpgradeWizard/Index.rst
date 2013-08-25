.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _3-use-the-upgrade-wizard:

3: Use the upgrade wizard
^^^^^^^^^^^^^^^^^^^^^^^^^

Enter the Install Tool at '.../typo3/install/' on your TYPO3 site.

(If you don't know the current Install Tool password, you can set a new
one by setting the value of ['BE']['installToolPassword'] in
typo3conf/LocalConfiguration.php to the md5() hash value of the
password you desire.)

.. figure:: ../../Images/Upgrade-Wizard.png
   :alt: The Upgrade Wizard in the Install Tool.

TYPO3 provides an upgrade wizard for easy upgrading. Go to the
"Upgrade Wizard" section and take a look at the different wizards
provided. You should go them through one by one. Start by using the
"Version Compatibility" wizard, which sets the compatibility version of
your TYPO3 installation to the new version. This allows your Frontend
output to use new features of the new TYPO3 version and might affect
how your website is rendered. Afterwards you will get redirected to the
next wizard. Please note that some wizards provide optional features,
like installing system extensions (for example simulate static or open
docs) that you may not need in your current installation, so take care
to only apply those wizards, which you really need.

