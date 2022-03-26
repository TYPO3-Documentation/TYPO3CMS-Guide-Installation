.. include:: /Includes.rst.txt


.. _install-the-new-source:

Install the new Source
^^^^^^^^^^^^^^^^^^^^^^

Upgrade the distributed source files to the new version. You can do
this either using the Core updater, via composer or manually.


.. _install-core-updater:

Using the Core Updater
""""""""""""""""""""""

The Install Tool in the section "Important Actions" provides a function
to update the TYPO3 Core. For this to work, the following setup is
required:

* It only works under Unix and MacOS (needs symlink support).
* :file:`typo3_src` must be a symlink.
* This symlink needs to be writable (and deletable) by the web server user.
* document root needs to be writable.
* One path above document root (:file:`../`) needs to be writable (new
  directories need to be allowed to be created).
* The :program:`tar` command must be available for extracting the Source package.

In the section "Important Actions" scroll down to "Core update" and
click the "Check for core updates" button. If above requirements are
met, TYPO3 will automatically install the new source code.

.. note::

   **Disabling the Core Updater**

   The Core Updater functionality can be disabled (in order to avoid users
   using it, i.e. if you use your own update mechanism). To disable the
   core updater, you can set this environment variable::

      TYPO3_DISABLE_CORE_UPDATER=1

   For example in Apache::

      SetEnv TYPO3_DISABLE_CORE_UPDATER 1

   or for nginx::

      server {
        location ~ path/to/it {
          include fastcgi_params;
          fastcgi_param TYPO3_DISABLE_CORE_UPDATER "1";
        }
      }

   This will disable the button and all related functionality in the
   Install Tool.

If you cannot use the Core Updater, you can still install the new
source code manually.


.. _install-manually:

Installing the source manually
""""""""""""""""""""""""""""""

Go to https://typo3.org/download/ and
download the Source package of the new TYPO3 version.

Extract the package on your web server and - in your TYPO3 document
root - adjust the :file:`typo3_src` symlink.


Upgrading a composer based system
"""""""""""""""""""""""""""""""""

Use composer to update your system via
`composer require typo3/cms:^8.7 --update-with-dependencies`

If you have extensions installed, you will have to find the corresponding
newer versions you want to install for your new major version and update them, too.

Example:

.. code-block:: shell

   composer require typo3/cms:^8.7 georgringer/news:^6.1 --update-with-dependencies


To find the matching extension versions you can go to `packagist.org <https://packagist.org/>`_,
search for your extension and take a look at the requires section.

.. figure:: ../../Images/ext-on-packagist.png
   :class: with-shadow
   :alt: extension on packagist

   The "News" extension on packagist

.. _install-next-step:

What's the next step?
"""""""""""""""""""""

In case you did a *minor update*, e.g. from TYPO3 8.7.6 to 8.7.7,
database updates are usually *not* necessary. All you still have to do
is to :ref:`remove the temporary cache files
<remove-temporary-cache-files>`. After that your update is finished.

In case of a *major update*, e.g. from TYPO3 7.6 to 8.7, go ahead with
the next step!

Also check out the breaking changes listed in :doc:`changelog <ext_core:Index>`
for the new version.
