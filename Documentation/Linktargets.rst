.. include:: /Includes.rst.txt

.. highlight:: bash

.. _linktargets:

===========
Linktargets
===========


Explanation
===========

If you place a `.. _This-is-ABC:` in front of a headline,
you are defining a linktarget that you can later link to
(from the same manual)::

   :ref:`This-is-ABC`


If you link from another manual, you need to prepend the
shortcut for this manual, e.g. `t3install`::

   :ref:`t3install:This-is-ABC`

For this to work, you must define the intersphinx shortcut
in the file :ref:`Settings.cfg <h2document:settings-cfg>`
in the manual you are linking from, e.g.:

.. code-block:: none

   [intersphinx_mapping]

   t3install     = https://docs.typo3.org/m/typo3/guide-installation/main/en-us/

The directive `ref-targets-list` below creates an overview of the
linktargets defined in this manual.

More information: :ref:`About Intersphinx
<h2document:intersphinx>` and :ref:`h2document:cheat-sheet-intersphinx`
in "ReST & Sphinx Cheat Sheet".



Targets for Cross-Referencing
=============================

.. only:: html

   .. ref-targets-list::



