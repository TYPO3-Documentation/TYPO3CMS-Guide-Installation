.. include:: ../../Includes.txt


.. _apache:

Apache
^^^^^^

Some settings may require adjustment for TYPO3 to operate
correctly.


.. _enable-necessary-modules:

Enable necessary Modules
""""""""""""""""""""""""

TYPO3 makes use of several Apache modules, two modules that will need
to be enabled are mod_expires and mod_rewrite. Apache modules can be
enabled by editing your http.conf file, locating the required module
and removing the preceding hash symbol.

   #LoadModule expires_module modules/mod_expires.so
   #LoadModule rewrite_module modules/mod_rewrite.so


.. _adjust-threadstacksize-on-windows:

Adjust ThreadStackSize on Windows
"""""""""""""""""""""""""""""""""

If you are running TYPO3 on top of Windows, the extension manager might not
appear. Instead you might only see a blank screen in the right frame.

This problem is caused by the value of ThreadStackSize, which on
Windows systems by default is set too low. To fix this, add the
following lines at the end of your httpd.conf file::

   <IfModule mpm_winnt_module>
     ThreadStackSize 8388608
   </IfModule>

