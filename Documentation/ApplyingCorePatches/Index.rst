.. include:: /Includes.rst.txt

.. _applying-core-patches:

==============================
Applying Core patches
==============================

At times you need to apply changes to the TYPO3 Core. **Never** change the code
of the Core directly. This includes all changes to files in the directory
:file:`typo3/sysext` and to files in directory :file:`vendor`.

.. attention::
   If you manually make changes in the code of your TYPO3 Core all changes will
   disappear with the next bugfix update!

All changes to be applied to the Core should be kept in :file:`*.diff` files
and be reapplied automatically after each update.

.. _cweagans-composer-patches:

Automatic patch application with `cweagans/composer-patches`
============================================================

.. seealso::
   *  https://github.com/cweagans/composer-patches
   *  https://sitegeist.de/blog/typo3-blog/typo3-version-9-core-patches-mit-composer-verwalten.html (German)
   *  https://typo3worx.eu/2017/08/patch-typo3-using-composer/

.. note::
   Automatic application of patches with this method only works with
   Composer. If you still run a legacy TYPO3 installation consider to
   :ref:`migrate to Composer <migratetocomposer>`.

To automatically apply patches first install `cweagans/composer-patches`:

.. code-block:: bash

   composer req cweagans/composer-patches

Choose a folder to store all patches in. This folder should ideally lie outside
of the webroot. Here we use the folder :file:`patches` on the same level like
the projects main :file:`composer.json`. Each patch can be applied to exactly
one composer package. The paths used in the patch must be relative to the
packages path.

Edit your projects main :file:`composer.json`. Add a section `patches`
within the section `extra`. If there is no section `extra` yet,
add one.

.. code-block:: json
   :lineos: 5-9
   :caption: project_root/composer.json

   "extra": {
     "typo3/cms": {
       "web-dir": "public"
     },
     "patches": {
       "typo3/cms-core": {
         "Bug #98106 fix something":"patches/Bug-98106.diff"
       }
     }
   }

The patch itself can look like this:

.. code-block:: diff
   :caption: patches/Bug-98106.diff (Simplified)

   diff --git a/Classes/Utility/GeneralUtility.php b/Classes/Utility/GeneralUtility.php
   index be47cfe..08fd6fc 100644
   --- a/Classes/Utility/GeneralUtility.php
   +++ b/Classes/Utility/GeneralUtility.php
   @@ -2282,17 +2282,24 @@
         */
        public static function createVersionNumberedFilename($file)
        {
   +        $isFrontend = ($GLOBALS['TYPO3_REQUEST'] ?? null) instanceof ServerRequestInterface
   +            && ApplicationType::fromRequest($GLOBALS['TYPO3_REQUEST'])->isFrontend();
            $lookupFile = explode('?', $file);
            $path = $lookupFile[0];

   -        if (($GLOBALS['TYPO3_REQUEST'] ?? null) instanceof ServerRequestInterface
   -            && ApplicationType::fromRequest($GLOBALS['TYPO3_REQUEST'])->isFrontend()
   -        ) {
   +        if ($isFrontend) {
                $mode = strtolower($GLOBALS['TYPO3_CONF_VARS']['FE']['versionNumberInFilename']);
                if ($mode === 'embed') {
                    $mode = true;


Apply the patch by running the following command:

.. code-block:: bash

   composer install

.. note::
   Changes to the patch file after the patch was applied successfully once will
   not be automatically applied. In that case delete the installed sources
   then execute :bash:`composer install` once more.

If applying the patch fails you will often get a cryptic error message like:

.. code-block:: none
   Example error message

   Could not apply patch! Skipping. The error was: Cannot apply patch patches/Bug-98106.diff

You can get a more verbose error message by calling:

.. code-block:: bash
   :caption: Very, very verbose error message

   composer install -vvv

Creating a diff from a Core change
==================================

You can choose between two methods:

-  :ref:`Apply a core patch manually <apply-core-patch-manually>`
-  :ref:`Apply a core patch automatically via gilbertsoft/typo3-core-patches <apply-core-patch-automatically>`

.. _apply-core-patch-manually:

Apply a core patch manually
---------------------------

In case a new Core version has not been released yet, but your urgently need
to apply a certain patch, you can download that patch from the according Change
on https://review.typo3.org/.

Choose :guilabel:`Download patch` from the option menu (3 dots on top of each
other):

.. figure:: /Images/ManualScreenshots/ReviewDownloadChange.png
   :class: with-shadow
   :alt: Download patch

   :guilabel:`Download patch` in the option menu

Then choose your preferred format from the section :guilabel:`Patch file`.


.. figure:: /Images/ManualScreenshots/ReviewDownloadDiff.png
   :class: with-shadow

   Download :guilabel:`Patch file`

Unzip the diff file and put it into the folder :file:`patches` of your project.

Core diff files are by default relative to the typo3 `web-dir` directory.
And they can contain changes to more then one system extension. Furthermore
they often contain changes to files in the directory :file:`Tests` that is not
present in a Composer-based installation.

Therefore when you plan to apply the diff by :ref:`cweagans-composer-patches`
you will need to manually adjust the patch file:

Remove all changes to the directory :file:`Tests` and other files or directories
that are not present in your installations source. Change all paths to be
relative to the the path of the extension that should be changed. If more then
one extension needs to be changed split up the patch in several parts, one for
each system extension.

For example the following patch contains links relative to the web root and
contains a test:

.. code-block:: diff
   :caption: patches/ChangeFromCore.diff (Simplified)

   diff --git a/typo3/sysext/core/Classes/Utility/GeneralUtility.php b/typo3/sysext/core/Classes/Utility/GeneralUtility.php
   index be47cfe..08fd6fc 100644
   --- a/typo3/sysext/core/Classes/Utility/GeneralUtility.php
   +++ b/typo3/sysext/core/Classes/Utility/GeneralUtility.php
   @@ -2282,17 +2282,24 @@
         */
        public static function createVersionNumberedFilename($file)
        {
   +        $isFrontend = ($GLOBALS['TYPO3_REQUEST'] ?? null) instanceof ServerRequestInterface
   +            && ApplicationType::fromRequest($GLOBALS['TYPO3_REQUEST'])->isFrontend();
            $lookupFile = explode('?', $file);
            $path = $lookupFile[0];
   -        if (($GLOBALS['TYPO3_REQUEST'] ?? null) instanceof ServerRequestInterface
   -            && ApplicationType::fromRequest($GLOBALS['TYPO3_REQUEST'])->isFrontend()
   -        ) {
   +        if ($isFrontend) {
                $mode = strtolower($GLOBALS['TYPO3_CONF_VARS']['FE']['versionNumberInFilename']);
                if ($mode === 'embed') {
                    $mode = true;
   diff --git a/typo3/sysext/core/Tests/Unit/Utility/GeneralUtilityTest.php b/typo3/sysext/core/Tests/Unit/Utility/GeneralUtilityTest.php
   index 68e356e..0ef4b80 100644
   --- a/typo3/sysext/core/Tests/Unit/Utility/GeneralUtilityTest.php
   +++ b/typo3/sysext/core/Tests/Unit/Utility/GeneralUtilityTest.php
   @@ -4099,4 +4102,42 @@

            self::assertMatchesRegularExpression('/^.*\/tests\/' . $uniqueFilename . '\.[0-9]+\.css/', $versionedFilename);
        }
   +
   +    /**
   +     * @test
   +     */
   +    public function createVersionNumberedFilenameKeepsInvalidAbsolutePathInFrontendAndAddsQueryString(): void
   +    {
   +        doSomething();
   +    }

Remove the tests and adjust the paths to be relative to the system extension
Core:

.. code-block:: diff
   :caption: patches/Bug-98106.diff (Simplified)

   diff --git a/Classes/Utility/GeneralUtility.php b/Classes/Utility/GeneralUtility.php
   index be47cfe..08fd6fc 100644
   --- a/Classes/Utility/GeneralUtility.php
   +++ b/Classes/Utility/GeneralUtility.php
   @@ -2282,17 +2282,24 @@
         */
        public static function createVersionNumberedFilename($file)
        {
   +        $isFrontend = ($GLOBALS['TYPO3_REQUEST'] ?? null) instanceof ServerRequestInterface
   +            && ApplicationType::fromRequest($GLOBALS['TYPO3_REQUEST'])->isFrontend();
            $lookupFile = explode('?', $file);
            $path = $lookupFile[0];

   -        if (($GLOBALS['TYPO3_REQUEST'] ?? null) instanceof ServerRequestInterface
   -            && ApplicationType::fromRequest($GLOBALS['TYPO3_REQUEST'])->isFrontend()
   -        ) {
   +        if ($isFrontend) {
                $mode = strtolower($GLOBALS['TYPO3_CONF_VARS']['FE']['versionNumberInFilename']);
                if ($mode === 'embed') {
                    $mode = true;


.. _apply-core-patch-automatically:

Apply a core patch automatically via `gilbertsoft/typo3-core-patches`
---------------------------------------------------------------------

With the help of the Composer package `gilbertsoft/typo3-core-patches` a core
patch can by applied automatically. It works on top of
:ref:`cweagans/composer-patches <cweagans-composer-patches>`. You need at least
PHP 7.4 and composer 2.0.

First, install the package:

.. code-block:: bash

   composer req gilbertsoft/typo3-core-patches

Then look up the change ID on `review.typo3.org <https://review.typo3.org/>`.
You can find it in the URL or left of the title of the change. In the example
it is `75368`.

.. figure:: /Images/ManualScreenshots/ReviewChangeId.png
   :class: with-shadow
   :alt: Look up of the change id

   Look up of the change id

Now execute the following command with your change ID:

.. code-block:: bash

   composer typo3:patch:apply <change-id>

You can find more information about the package and its usage in the
`documentation <https://packagist.org/packages/gilbertsoft/typo3-core-patches>`__.
