.. include:: ../../Includes.txt


.. _translating-the-backend:

Translating the Backend
^^^^^^^^^^^^^^^^^^^^^^^

In order to use translations in the TYPO3 Backend, you first need to
download the translations and then select them for the Backend users.


.. _download-translations-for-the-backend:

Download Translations for the Backend
"""""""""""""""""""""""""""""""""""""

Log in to the Backend and go to the Backend module "Language".

In the section "Languages" select the language(s), which you want to
have available for use in the Backend.

After that click "Update from repository" to update the translations.
This may take some time. Some extensions do not have translatable texts
and so also do not have translations available. If for an extension you
get an error message, wait until the update has finished and then press
"Update from repository" again.

When later you install new extensions you might see that those are
displaying in English only. In that case you can click on "Not checked"
next to the according extension to only download the translation for
*this one* extension. Alternatively you can repeat the steps above
to get the newest translations for *all* extensions.


.. _change-the-language-for-a-backend-user:

Change the Language for a Backend User
""""""""""""""""""""""""""""""""""""""

The Backend can be displayed in different languages for different
users. Go to the module "User settings". On the tab "Personal data" you
can choose between the languages, which you downloaded in the last
step. Select the language, which you want to use. Then click "Save
Configuration" and after that reload the Backend.

When you are logged in as an administrator, you can also modify user
settings of *other* users: In the module "User settings" go to the tab
"Admin functions" and select the Backend user, which you want to edit
from the list. After that you can set user settings for this user and
adjust *his* language as well.

