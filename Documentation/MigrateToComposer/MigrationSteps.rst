.. include:: ../Includes.txt
.. highlight:: bash

.. _mig-composer-migrate:

===============
Migration steps
===============

.. _mig-composer-sysext-list:

Get list of extensions
======================

If you use the subtree split mechanism (recommended), you might want to
get a list of installed system extensions from your working TYPO3
installation before you begin.

The extension `typo3_console <https://extensions.typo3.org/extension/typo3_console/>`__
can be used to get information about your installation from the command line.

Example: Get a list of all installed extensions:

.. code-block:: bash

   ./typo3cms extension:list --active --raw


Example: Get a list of all installed system extensions

.. code-block:: bash

   for i in `./typo3cms extension:list --active --raw`;do if [ ! -d typo3conf/ext/$i ];then echo "$i";fi;done | sort -u


For some extensions with underscores (`_`), the composer package name is different,
e.g. for *wizard_sortpages*, the package name is *typo3/cms-wizard-sortpages*.



Delete files
============

Yes, that's true. You have to delete some files, because they will be created by
composer in some of the next steps.

You have to delete, :file:`web/index.php`, :file:`web/typo3/` and all the
extensions inside :file:`web/typo3conf/ext/`, you downloaded from TER or any
other resources like GitHub. You even have to delete your own extensions, if
they are available in a separate Git repository and, for example, included as
Git submodule.

Please keep only your sitepackage extension or any other extension, which was
explicitly built for your current project and does not have an own Git
repository.

.. _mig-composer-configure-composer:

Configure composer
==================

Create a file with name :file:`composer.json` in your project root, not inside
your web root. At the moment, only these few lines are required:

.. code:: json

    {
        "repositories": [
            {
                "type": "composer",
                "url": "https://composer.typo3.org/"
            }
        ],
        "extra": {
            "typo3/cms": {
                "cms-package-dir": "{$vendor-dir}/typo3/cms",
                "web-dir": "web"
            }
        }
    }

You must set the correct name of your web root folder in property ``web-dir``.


.. _mig-composer-require:

Add all required packages to your project
=========================================

You can add all your required packages with the composer command ``composer
require``. The full syntax is::

    composer require anyvendorname/anypackagename:version

Example::

    composer require typo3/cms:~7.6.0

There are different ways to define the version of the package, you want
to install. The most common syntaxes start with ``^`` (e.g.
``^7.6``) or with ``~`` (e.g. ``~7.6.0``). A full documentation can be
found at https://getcomposer.org/doc/articles/versions.md

In short:

*  ``^7.6`` or ``^7.6.0`` tells composer to add newest package of
   version 7.\* with at least 7.6.0, but not version 8.

*  ``~7.6.0`` tells composer to add the newest package of version
   7.6.\* with at least 7.6.0, but not version 7.7.

You have to decide by yourself, which syntax fits best to your needs.

Install the core
----------------

The old way: add everything
~~~~~~~~~~~~~~~~~~~~~~~~~~~

As already written above, the line to install TYPO3 7 LTS would be::

    composer require typo3/cms:~7.6.0

While installing TYPO3 8 LTS works with this line::

    composer require typo3/cms:~8.7.0


.. _mig-composer-require-subtree-spit:

The new way: add only code, you need
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Since TYPO3 8.7.10 you **can** use a concept, called "subtree split". It
will be **mandatory** for TYPO3 9. The concept means, you will not copy
the full TYPO3 core package, including all system extensions, you will
never use. But only install what you really want. You will not be able
to install ``typo3/cms:^9``, but have to name each system extension::

    composer require typo3/cms-core:~9.0.0
    composer require typo3/cms-backend:~9.0.0
    composer require typo3/cms-frontend:~9.0.0
    composer require ... 

Or in one line::

    composer require typo3/cms-core:~9.0.0 typo3/cms-backend:~9.0.0 typo3/cms-frontend:~9.0.0 ... 

To find the correct package names, you can either take a look in the
``composer.json`` of any system extension or follow the naming
convention
``typo3/cms-<extension name with dash "-" instead of underscore "_">``,
e.g. ``typo3/cms-fluid-styled-content``.

If you obtained the list of sytem extensions earlier (as described in
:ref:`_mig-composer-sysext-list`), you can use this, for example::

   for i in `cat extention-list`;do composer require typo3/cms-$i:~8.7.0;done


Install extensions from packagist.org
-------------------------------------

You already know the TER and always used it to install extensions? Fine.
But with composer, the **preferred way** is to install extensions
directly from `packagist.org <https://packagist.org>`__. This works great, when the maintainer uploaded them
to there. Many well known extensions are already available.
You only need to known the package name. And here is a way to find it:

#. Search and open the extension, you want to install, in
   `TER <https://extensions.typo3.org>`__.

#. Click button "Take a look into the code".

   |TER screen shot|

#. Open file :file:`composer.json`.

   |file list|

#. Search for line with property ``"name"``, it's value should be
   formatted like ``vendor/package``.

   |file content|

#. Check, if the package can be found on
   `packagist.org <https://packagist.org>`__.

   |packagist screen shot|

| **Example:**
| To install the news extension in version 7.0.\*, type::

   composer require georgringer/news:~7.0.0

Install extension from TER
--------------------------

If the extension is not available on packagist, the good news is: All
TER extensions are available via composer! That's, why we added
``https://composer.typo3.org/`` as repository to our ``composer.json``
some lines above. There are little naming conventions:

*  Vendor name is ``typo3-ter``.

*  Underscores ``_`` are replaced by dash ``-``.

**Example:**
The well known extension ``static_info_table``'s auto generated
composer package name is ``typo3-ter/static-info-tables``. To add this
extension in version 6.5.\*, type::

   composer require typo3-ter/static-info-tables:~6.5.0

You can browse all available extensions and versions via
https://composer.typo3.org/satis.html.

Install extension from version control system (e.g. GitHub, Gitlab, ...)
------------------------------------------------------------------------

In some cases, you will have to install an TYPO3 extension, which is not
available on packagist.org or in the TER. Examples could be:

*  non-public extension only used by your company.

*  you forked and modified an existing extension.

As first step, you have to define the repository in your
``composer.json``'s "repository" section. In this example, you find the
additional lines added to the ``composer.json`` from above:

.. code:: json

    {
        "repositories": [
            {
                "type": "composer",
                "url": "https://composer.typo3.org/"
            },
            {
                "type": "vcs",
                "url": "https://github.com/foo/bar.git"
            }
        ],
        "extra": {
            "typo3/cms": {
                "cms-package-dir": "{$vendor-dir}/typo3/cms",
                "web-dir": "web"
            }
        }
    }

The Git repository must be a TYPO3 extension, with all the required
files (e.g. ``ext_emconf.php``) and must contain a valid
``composer.json`` itself. How this file should look in your extension,
can be found on https://composer.typo3.org/. Please note, that Git tags
are used as version numbers.

If you fulfill these requirements, you can add your extension in the
same way like the other examples::

    composer require foo/bar:~1.0.0

Include individual extensions like sitepackages
===============================================

It's not necessary to move your project's sitepackage to a dedicated
Git repository to re-include it in your project. You can keep the files
in your main project (e.g. ``web/typo3conf/my_sitepackage``). There is
only one thing to do; Because TYPO3's autoload feature works differently
in composer based installations, you have to register your PHP class
names in composer. This is very easy when you use PHP namespaces:

.. code:: json

        "autoload": {
            "psr-4": {
                "VendorName\\MySitepackage\\": "web/typo3conf/ext/my_sitepackage/Classes/",
                "VendorName\\AnyOtherExtension\\": "web/typo3conf/ext/any_other_extension/Classes/"
            }
        }

For extension without PHP namespaces, this section has to look a bit
differently. You can decide by yourself, if you want to list each PHP file
manually or if composer should search for them inside a folder:

.. code:: json

        "autoload": {
            "classmap": [
                "web/typo3conf/ext/my_old_extension/pi1/",
                "web/typo3conf/ext/my_old_extension/pi2/class.tx_myoldextension_pi2.php"
            ]
        }

To complete our example ``composer.json``, it would look like this:

.. code:: json

    {
        "repositories": [
            {
                "type": "composer",
                "url": "https://composer.typo3.org/"
            },
            {
                "type": "vcs",
                "url": "https://github.com/foo/bar.git"
            }
        ],
        "extra": {
            "typo3/cms": {
                "cms-package-dir": "{$vendor-dir}/typo3/cms",
                "web-dir": "web"
            }
        },
        "autoload": {
            "psr-4": {
                "VendorName\\MySitepackage\\": "web/typo3conf/ext/my_sitepackage/Classes/",
                "VendorName\\AnyOtherExtension\\": "web/typo3conf/ext/any_other_extension/Classes/"
            },
            "classmap": [
                "web/typo3conf/ext/my_old_extension/pi1/",
                "web/typo3conf/ext/my_old_extension/pi2/class.tx_myoldextension_pi2.php"
            ]
        }
    }

.. |TER screen shot| image:: ../Images/ter-code-link.png
.. |file list| image:: ../Images/github-composer-file.png
.. |file content| image:: ../Images/github-composer-name.png
.. |packagist screen shot| image:: ../Images/packagist-news.png
