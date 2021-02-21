.. include:: /Includes.txt

.. _breakingChangesExtbase6:

==========================================================
Breaking Changes in Extbase and Fluid in Version 1.1 - 6.2
==========================================================

Breaking Changes in Extbase and Fluid
=====================================

This is a list of the most important changes. It does not include all
changes.

For a more complete list please refer to the `Extbase Changelog for 6.2
and
below <https://git.typo3.org/Packages/TYPO3.CMS.git/blob/TYPO3_6-2:/typo3/sysext/extbase/ChangeLog.txt>`__
and the `Fluid Changelog for 6.2 and
below <https://git.typo3.org/Packages/TYPO3.CMS.git/blob/TYPO3_6-2:/typo3/sysext/fluid/ChangeLog.txt>`__

We try to keep breaking changes to a minimum. Nevertheless, there will
be some changes that might break your existing extensions, especially if
you interacted with classes/methods that are not part of the public API.

Version Matrix
--------------

This page handles Extbase 1.0.2 to 6.2 and some of the related Fluid
changes. The version span corresponds to TYPO3 versions 6.2 and older.
Later Extbase and Fluid versions (since TYPO3 version 4.7) have the same
version numbers as the TYPO3 version (at least for the first 2 digits,
e.g. 6.2).

============== =============== =============
Version Matrix
TYPO3 Version  Extbase Version Fluid Version
6.2.x (latest) 6.2.0           6.2.0
6.1.x (latest) 6.1.0           6.1.0
6.0.x (latest) 6.0.0           6.0.0
4.7.x (latest) 4.7.7           4.7.7
4.6.x (latest) 1.4.6           1.4.2
4.5.x (latest) 1.3.4           1.3.1
4.4.x (latest) 1.2.1           1.2.1
4.3.x (latest) 1.1.0           1.1.1
\
============== =============== =============

From Extbase 6.1 to Extbase 6.2
-------------------------------

Extbase
^^^^^^^

-  **Recursive object validation**: Validation of object structures in
   extbase is now done recursively. If a tree of objects is created by
   the new property mapper, not only the top level object is validated,
   but all objects.
-  **Allow empty validation**: In order to make a property required you
   now need to add the NotEmptyValidator to your property. The return
   value of validators is now optional.
-  **TypoScript Templates in the Backend**: In the Backend the
   TypoScript Templates are not read from the first found root page more
   for building the configuration. ATM the new way needs to be
   discussed.
-  **AbstractController::addFlashMessage()**: a convenience API for
   adding FlashMessages in controller actions has been added as *public
   function addFlashMessage()*. You might run into PHP fatal errors, if
   your extension has implemented a function with the same name but a
   different visibility (e.g. "protected"). The solution is to either
   change the visibility of your function to "public" or remove your
   function in favour of the one from extbase.

Fluid
^^^^^

-  **Image view helper does not render title tag by default**: In
   previous versions of fluid the image view helper always rendered the
   title attribute. If not set, the value of the required alt attribute
   was set as title. This fallback was removed with version 6.2. If not
   specifically set, title is not rendered anymore.
-  **BooleanNode::convertToBoolean()**: Negative integer values are now
   (correctly) recognized as "TRUE" boolean value. This might break in
   condition in IfViewHelper which performs checks with negative values.

From Extbase 6.0 to Extbase 6.1
-------------------------------

.. _extbase-1:

Extbase
^^^^^^^

-  **Introduce explicit saving of modified domain objects**: Modified
   objects now need to be passed through their repository update method
   in order to be scheduled for saving by the persistence managers
   persistAll method.
-  **Enable rewritten PropertyMapper as default**: After solving the
   missing security features and bugfixes the rewritten PropertyMapper
   is now ready to be used in production environments.
-  **Remove support for TCA setting 'foreign_selector'**: After this
   setting triggers the DataMapper to resolve the n:m relation on its
   own and therefore no access to the additional fields in the
   intermediate table is possible, the support for this setting was
   removed. Now usage of e.g. FAL features is possible.
-  **Remove forced STI settings from extbase configuration**: The
   tx_extbase_type setting for fe_users and fe_groups was introduced as
   a demonstration of Single Table Inheritance handled in extbase. The
   forced setting brings more problems then doing good in real live
   scenarios though. So the typoscript is dropped, but TCA and sql kept
   for backwards compatibility reasons. Since 6.1 all fe_users and
   fe_groups are therefore returned if you don't set the TypoScript
   setting on your own.

.. _fluid-1:

Fluid
^^^^^

-  **Allow Fluid arrays only in ViewHelper arguments**: This change
   greatly enhances the JavaScript compatibility of Fluid.

Fluid Arrays are a subset of the JavaScript object syntax, making it
hard to work with them in mixed HTML/JavaScript documents. For example
before this change, the following JavaScript Object was parsed by Fluid:

::

      var uris = {
         endPoint1: '{f:uri.action(.)}',
         endPoint2: '{f:uri.action(.)}',
      };

Before this change, the above snippet resulted in the following
template, as the generated array was casted to a string:

::

     var uris = 'Array'

With this change, Fluid only parses arrays which are used inside
ViewHelper arguments, such that an array inside normal text is not
converted anymore. This change is only breaking in very rare cases where
one relied on the inner contents of the ViewHelper being an array, f.e.
if one used the debug ViewHelper as follows:

::

   <f:debug>{key1: 'value1', key2: 'value2'}</f:debug>

or if anybody wrote custom ViewHelpers which use this convention.
ViewHelpers which were written like this should be re-written to take
the array as ViewHelper argument:

::

   <f:debug value="{key1: 'value1', key2: 'value2'}" />

From Extbase 4.7 to Extbase 6.0
-------------------------------

.. _extbase-2:

Extbase
^^^^^^^

-  **FrontendUser->isOnline**: The property isOnline of FrontendUser
   with its getter and setter was removed, because there is no TCA
   definition for column is_online.

Thus the property was not getting filled with data from database in
mappping process.

.. _fluid-2:

Fluid
^^^^^

-  **Naming of Fluid Templates**: As of version 6.0 all Fluid template
   filenames must begin with an uppercase letter. So if your action is
   called sendEmail the corresponding Fluid template needs to be named
   SendEmail.html. Lowercase Fluid template filenames were deprecated
   for a long time and finally removed in 6.0.
-  **Removed RenderFlashMessagesViewHelper**: The Fluid ViewHelper
   RenderFlashMessagesViewHelper was removed after being deprecated for
   some versions. Please use FlashMessagesViewHelper instead.

From Extbase 1.4 to Extbase 4.7
-------------------------------

.. _extbase-3:

Extbase
^^^^^^^

-  A registered slot now gets the signal's information (classname::name)
   by default set as last parameter in the arguments array. You can
   avoid this by setting passSignalInformation to FALSE in your
   connect()-call.

From Extbase 1.3.x to Extbase 1.4.0
-----------------------------------

.. _extbase-4:

Extbase
^^^^^^^

-  The **Property Mapper** of FLOW3 has been reworked and backported to
   Extbase. The new property mapper is very `configurable and
   extensible <http://flow3.typo3.org/documentation/guide/partiii/propertymapping.html>`__
   [not available anymore]. Because this is a breaking change, the new
   behavior is **disabled** by default. You can activate it for your new
   Extensions with
   *plugin.tx_[yourExtensionName].features.rewrittenPropertyMapper = 1*
-  The **Validation API** has also changed, but this is only a breaking
   change if you do NOT subclass **AbstractValidator**, but implement
   **ValidatorInterface** yourself. In this case, you need to adjust
   your custom validator to support the new API.
-  The action resolving mechanism has been adjusted slightly and an
   exception is thrown when a controller/action is requested that is not
   configured to be supported by the current plugin. With the option
   *plugin.tx_[yourExtensionName].mvc.throwPageNotFoundExceptionIfActionCantBeResolved
   = 1* you can force Extbase to display the TYPO3 404 page not found
   page instead.

With Extbase 1.4.1 there will be a new option
*mvc.callDefaultActionIfActionCantBeResolved* that can be set in order
to **disable** the exception and fall back to the default
controller/action if an invalid action was requested.

.. _fluid-3:

Fluid
^^^^^

-  **AbstractViewHelper::arguments** are no longer an object but an
   array. If you used *$this->arguments->hasArgument()* in your custom
   ViewHelpers, you'll have to replace this with $this->hasArgument().
-  With Fluid 1.4 you can use *{_all}* inside your template to access
   all variables available right now. This is only a breaking change if
   you used a variable \_all inside your own templates.
-  Fluid templates, layouts and partials are now **compiled** with the
   first rendering. This increases performance and decreases memory
   consumption extensively. This should not be a breaking change as the
   cache is automatically regenerated whenever the Fluid file changes.

If you still want to disable Fluid compilation for debugging purposes,
you can do so by disabling the cache with
*$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['fluid_template']['backend']
= 't3lib_cache_backend_NullBackend';*

From Extbase 1.2.x to Extbase 1.3.0
-----------------------------------

-  We now have **Dependency Injection** in Extbase. This should work
   seamlessly in most cases. However, if you used your own Dependency
   Injection approach within your extension, you might have to adjust
   the code slightly.
-  **Tx_Extbase_Dispatcher** is now **deprecated**. The new entry point
   for Extbase extensions is *Tx_Extbase_Core_Bootstrap* (analogical to
   \\F3\FLOW3\Core\Bootstrap in FLOW3). Nevertheless, in order to stay
   backwards compatible Tx_Extbase_Dispatcher will stay in Extbase until
   version 1.5.0.
-  **Tx_Extbase_Persistence_QueryInterface::execute()** now returns an
   object of type **QueryResultInterface** instead of an array. The
   QueryResult implements the interfaces **Countable**, **Iterator** and
   **ArrayAccess** and should therefore behave like an array (you can
   use it in loops and use the count() function on it).

Due to a bug in PHP you can't use the *array_\** functions on the
QueryResult though. That applies to the *current()* function too, which
people used to return the first result. Instead you should use the
method *getFirst()* on the QueryResult. See
`QueryResult <queryresult>`__.

-  The **ConfigurationManager** has been reworked. As it was not part of
   the Public API this should not be a breaking change to you. Anyways,
   if you were referring to the ConfigurationManager in your extensions,
   you most probably have to adjust your code.
-  **Flashmessages** are now stored in the improved
   *t3lib_FlashMessageQueue* internally. The API is still the same, but
   a side-effect is, that the message queue is now handled **globally**
   per request. This probably won't affect a lot of users though as
   Flashmessages are usually only outputted as result of some user
   input.
-  The **UriBuilder** now uses the current cObject instead of creating a
   new instance in the constructor. This is a breaking change if you
   instantiated the UriBuilder in your code and passed in a cObject.
   Please use the Extbase ObjectManager or inject the
   ConfigurationManager manually.
-  the *link.external* now adds by default HTTP:// in front of links, if
   missing. This is a breaking change if you have links to HARD Coded
   Pages on the same Server and your uri was like
   "/some/other/stuff.html" without Domainname. Fix it by adding
   defaultScheme= *to your <f:link.external /> command.*

From Extbase 1.0.2 to Extbase 1.2.0
-----------------------------------

-  *$query->execute()* now returns a **plain array** of row-arrays
   instead of an *RowIterator*. This is a breaking change if you use
   your own Query object in combination with
   *$querySettings->getRawQueryResult = TRUE*.
-  It's now possible to edit **localized domain models** in the FE.
   Changes will be stored to the correct database row. This changes the
   behavior of mapping the uid to DomainObjects. The uid is now the
   "real" uid of the localized database tuple instead of the
   sys_language_parent. This may influence the $_GET parameters of
   cached pages as the uid is often part of the URI.
-  Fluid template filenames are expected to be **UpperCamelCased** from
   now on. For a grace period (until version 1.5.0) there is still a
   fallback mechanism, so that your old template filenames will still
   work. But you should rename your templates from "myaction.html" to
   "MyAction.html" to make sure, that it still works in upcoming
   versions of Fluid!
