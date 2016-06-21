.. include:: ../../Includes.txt


.. _mysql:

MySQL
^^^^^


.. _character-sets:

Character Sets
""""""""""""""

Current versions of TYPO3 use UTF-8 encoding. You should make sure
that MySQL uses UTF-8 as well. This is done most easily by checking
that the new, empty database uses the character set UTF-8. In a
database *with* content, all tables and those columns, which *have* a
character set, must use UTF-8.

