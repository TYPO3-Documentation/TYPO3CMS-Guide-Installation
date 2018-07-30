.. include:: ../Includes.txt
.. highlight:: bash

Best practices
==============

Run composer locally
--------------------

You should not run composer on your live webspace. You always should run
composer on your local machine, so you can test if everything worked
fine. After running your tests, you can deploy the :file:`vendor` and
:file:`web` folder you your webserver.

To avoid conflicts between your local and your server's PHP version, you
can define your server's PHP version in your :file:`composer.json` file
(e.g. ``{"platform": {"php": "7.2"}}``), so composer will always check
the correct dependencies.

Update packages
---------------

After updating any packages, you always should commit your
:file:`composer.lock` to your version control system and your co-workers
should run ``composer install`` after checking out the updates.

Update all packages
~~~~~~~~~~~~~~~~~~~

Run ``composer update`` without any other attributes, to update all
packages. Composer will always try to install the newest packages that
match the defined version constraints.

Update single packages
----------------------

When you want to update single packages, you can call the ``update``
command with the package name. You should alway add
``--with-dependencies`` attribute to also update the required third
party packages.

Update TYPO3 core
~~~~~~~~~~~~~~~~~

**Without "subtree split"**

::

    composer update typo3/cms --with-dependencies

**With "subtree split"**

::

    composer update typo3/cms-* --with-dependencies

Update extensions like "news"
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

    composer update georgringer/news --with-dependencies

Use "dev requirements"
----------------------

Add packages with ``--dev`` attribute to add packages only to your local
development environment. This is very useful for packages, you do not
need or do not want to have on your live server, e.g. PHPUnit or
Testing-Frameworks:

::

    composer require typo3/testing-framework:^2.0 --dev

During your deployment routine, you should run ``composer install`` with
attribute ``--no-dev``. So the dev requirements are not installed.

::

    composer install --no-dev

Remove extensions
-----------------

You can use the composer command ``remove`` to uninstall extensions or
other composer packages.

::

    composer remove georgringer/news 

Don't forget to commit your updated :file:`composer.lock` to your version
control system.

Check for available updates
---------------------------

Run ``composer outdated`` to see a list of available updates.

Simplify "subtree split" installations
--------------------------------------

Instead of explicitly requiring each core extension, you can require
`typo3/minimal <https://packagist.org/packages/typo3/minimal>`__, which
brings the minimal required set of system extensions.
