.. include:: /Includes.rst.txt
.. highlight:: bash

.. _mig-composer-best-practices:

==============
Best Practices
==============

The sections specific to migrating to Composer are still here.

.. _mig-composer-clear-typo3conf-ext-folder:

Completely clear `typo3conf/ext` folder
=======================================

In the "Migration Steps" chapter, this tutorial explained, how you can
:ref:`keep your individual extension in "typo3conf/ext" <mig-composer-include-individual-extensions>`
and in the "Co-working" section, there was a part about how to add rules
to your :file:`.gitignore` file to exclude :file:`typo3conf/ext` from,
but keep your individual extensions in Git.

If you are searching for a solution to keep your :file:`typo3conf/ext` folder
clean and unify the extension handling even for your project's individual
extension, this section might be useful.

Define a local path repository
------------------------------

Create a directory :file:`packages` in your project root folder and define
this folder as a repository of type "path" in your :file:`composer.json`::

    {
        "repositories": [
            {
                "type": "path",
                "url": "./packages/*"
            }
        ]
    }

Include your individual extensions from `packages` folder
---------------------------------------------------------

In the next step, you move all your individual extensions from
:file:`public/typo3conf/ext` to :file:`packages`. And for this way to include them,
it's important, that each extension has it's own correct :file:`composer.json` file.
How this file should look in your extension, is documented in :ref:`Extension Development Documentation <t3coreapi:composer-json>` or
`this blog post from Helmut Hummel <https://insight.helhum.io/post/148886148725/composerjson-specification-for-typo3-extensions>`__.

Assumed, your package key is, ``foo/bar``, you can type the following command to include your extension to your project::

    composer require foo/bar:@dev

In this case, it's the easiest way to not define any composer version
number, but tell composer to use the latest ``dev`` state.

.. note::

    The ``autoload`` information now comes with the extension's
    :file:`composer.json` and can be removed from your project's
    :file:`composer.json`.

Exclude `typo3conf/ext` from version control system
---------------------------------------------------

To finish your cleanup of "typo3conf/ext", you should keep the line
``/public/typo3conf/ext/*`` in your :file:`.gitignore`, but remove all lines,
starting with ``!/public/typo3conf/ext/``.

