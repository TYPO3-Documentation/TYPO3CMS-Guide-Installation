.. include:: ../Includes.txt


.. _lts-upgrade:

Upgrade from LTS to LTS
-----------------------

This chapter provides in depth information about how to update from 
TYPO3 6.2 LTS to the TYPO3 CMS 7.6 LTS version. 

This chapter will give you a perspective on relevant changes since 
TYPO3 6.2 and what to expect from the migration from 6.2 to 7.6.


.. _lts-upgrade-precondition:

Precondition
""""""""""""

#. TYPO3 Version

   Make sure your installation is running at least TYPO3 6.2 LTS. 
   The TYPO3 7.6 upgrade process is possible from version 6.2 - not 
   from older versions. 
   
   If you are running a lower version of TYPO3, please upgrade to 6.2 first. 


.. _lts-upgrade-process:

LTS Upgrade Process
"""""""""""""""""""

Do the upgrade as described in the previous chapter. When you use the 
"Upgrade Wizards" note the following:

- The upgrade wizard, which installs extension compatibility6 from TER, is 
  not necessarily needed. It provides a compatibility layer for extensions, 
  which are compatible with TYPO3 6.2, but not yet with TYPO3 7.6, e.g. because 
  they are still using old class names. If you are not using such extensions, 
  you do not need to install the compatibility6 extension. 

- The upgrade wizard, which install the mediace extension, makes sure that the 
  Media Content Element still is available in your installation. If you have not 
  used this Content Element and if you do not want to use it in the future, you 
  do not need this extension. Otherwise install it! 


.. _lts-upgrade-after:

After the Upgrade
"""""""""""""""""

When you insert content elements into your website, you have the content elements 
"Regular Text Element", "Text & Images" and "Images Only". These content elements 
are provided by the extension css\_styled\_content. 

In TYPO3 CMS 7, a replacement called fluid\_styled\_content is available. If you 
install this extension instead of css\_styled\_content, other content elements 
will be available, namely the one called "Text and Media". With this content 
element, you can combine text with any type of media, e.g. a PDF file, a video 
or an image. fluid\_styled\_content has the advantage that Fluid templates can 
directly be edited to influence rendering; it is not necessary to write TypoScript 
rendering definitions. Note however that some options no longer are available in 
fluid\_styled\_content, e.g. image processing options. If you use 
fluid\_styled\_content, your old content elements can be/have to be migrated to it. 

Note that fluid\_styled\_content is in an early phase. At this time it is no 
problem to continue using css\_styled\_content. If and how fluid\_styled\_content 
will replace css\_styled\_content is not clear. 

