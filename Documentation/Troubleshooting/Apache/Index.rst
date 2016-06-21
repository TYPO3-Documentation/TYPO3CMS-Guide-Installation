.. include:: ../../Includes.txt


.. _apache:

Apache
^^^^^^

There are some settings in the server setup, which might need
adjustment.


.. _enable-necessary-modules:

Enable necessary Modules
""""""""""""""""""""""""

TYPO3 relies on a number of Apache modules. Especially the modules
mod_expires and mod_rewrite should be enabled in the Apache
configuration. This can be done in the Apache configuration files,
e.g. in httpd.conf, with these lines::

   LoadModule expires_module modules/mod_expires.so
   LoadModule rewrite_module modules/mod_rewrite.so


.. _adjust-threadstacksize-on-windows:

Adjust ThreadStackSize on Windows
"""""""""""""""""""""""""""""""""

If your server is running on Windows, the extension manager might not
show up. Instead you might only see a blank screen in the right frame.

This problem is caused by the value of ThreadStackSize, which on
Windows systems by default is way too low. To fix this, add the
following lines at the end of httpd.conf::

   <IfModule mpm_winnt_module>
     ThreadStackSize 8388608
   </IfModule>

