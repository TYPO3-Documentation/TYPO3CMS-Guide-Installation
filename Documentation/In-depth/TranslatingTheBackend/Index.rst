.. include:: ../../Includes.txt


.. _translating-the-backend:

Translating the Backend
^^^^^^^^^^^^^^^^^^^^^^^

In order to use translations in the TYPO3 Backend, you first need to
download the translations and then select them for the Backend users.


.. _download-translations-for-the-backend:

Download Translations for the Backend
"""""""""""""""""""""""""""""""""""""

Log in to the Backend and go to the Backend module "Maintenance".

In the section "Manage Language Packs" click "Manage Languages".
In the modal window click "Add Language" to add a new language to 
TYPO3. 

After that click "Update all" to update the translations.
This may take some time. Some extensions do not have translatable texts
and so also do not have translations available. If for an extension you
get an error message, wait until the update has finished and then press
"Update from repository" again.

.. hint::
    After installing new extensions, you'll have to update the language 
    packs again to get translations for the newly installed packages.


.. _change-the-language-for-a-backend-user:

Change the Language for a Backend User
""""""""""""""""""""""""""""""""""""""

The Backend can be displayed in different languages for different
users. Go to the module "User settings". On the tab "Personal data" you
can choose between the languages, which you downloaded in the last
step. Select the language, which you want to use. Then click "Save
Configuration" and after that reload the Backend.

When you are logged in as an administrator, you can also modify user
settings of *other* users: Go to the module "Backend Users" and switch 
to the Backend user, which you want to edit. 
After that you can set user settings for this user and adjust *his/her* 
language as well.

