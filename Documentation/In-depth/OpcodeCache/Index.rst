.. include:: /Includes.rst.txt

============
Opcode Cache
============

Introduction
============

An opcode cache is a system to cache the result of the PHP code
compilation to bytecode. This allows to use the bytecode instead of
compiling on every request. Different opcode cache systems are
available, mostly depending on used PHP version. Currently usually
OPcache is used.

Every opcode cache system has its own pitfalls, which we want to show
here, so you can configure your system as good as possible and to get
the message "This opcode cache should work correctly and has good
performance." in your TYPO3 installer. Opcode caching systems which
aren't listed here are not supported by TYPO3 CMS.

In general, PHP opcode caches can lead to a massive performance
improvement of bigger PHP frameworks like TYPO3 CMS and can be seen as a
must-have in professional production environments. All existing opcode
cache solutions give a similar performance gain, the differences are
insignificant. But the performance gain between using one and not using
a opcode cache can be a factor of 3 in typical TYPO3 CMS installations.
A well configured PHP environment on decent hardware usually delivers a
full cached TYPO3 CMS frontend page in around 50 milliseconds or less.
Enabling an opcode cache reduces this to 18ms or less! This gain is not
so big for pages that are not delivered from cache, since the actual
calculation time and database stuff has a bigger share than the compile
time of PHP scripts. Still, opcode caches can lead to a massive
performance gain and can make the website and the TYPO3 CMS backend more
snappy.

General opcode cache considerations
===================================

Using opcode cache in CLI
-------------------------

The implementation of opcode cache system is done by using Shared
Memory. This means only the same user from same process have access to
it. The options apc.enable_cli or opcache.enable_cli do not give the
ability to change/reset the opcode cache of the webserver. So for
example package installation via CLI can lead to problems on the website
as the opcode cache does not correlate to the new settings. This issue
isn't easy fixable and an outstanding
`issue <https://forge.typo3.org/issues/57258>`__.

(!) This issue applies to CLI scheduler tasks.

(!) Using ApcBackend, WincacheBackend, XcacheBackend as caching backend
in your TYPO3 CMS installation will lead to the same problem. You can't
change the data from the website.

Using PHP code on an NFS share
------------------------------

NFS Clients normally are using a transparent cache to the server, so they
don't need to gather directory or file data and content every time. This
leads to the issue that the server do not see every change on the NFS
Server by deployings or in caches. This issue affects not only PHP and
the opcode cache, you need to have this in mind if you use such multi
webserver installations. Disabling the NFS caching resolves this issue,
but slows down your server systems. If you use an opcode cache on such
an installation makes the issue more worse and clearing the opcode cache
may not only help as the NFS Client cache may again deliver outdated
file content. This tends to throw funny issues like "class already
declared" on PHP file changes (eg. after deployment).

In general, it is often better to have all PHP code (typo3/, typo3conf/,
typo3temp/Cache) on local file systems deployed to the single servers,
than to share that on a network filesystem. While this strategy makes
deployment a bit harder, it usually improves performance and reduces
network load.

Also using other systems without the NFS caching issue like DRBD helps.

Opcode caches and PHP file changes
----------------------------------

In a perfect world, opcode caches are fully transparent. That means, if
PHP code is changed that is covered by an opcode cache, the opcode cache
detects this change and invalidates its cache entry of the file. This
works pretty well but it comes with overhead, since the opcode cache
needs to check change times on files on every request. If you need
maximum performance in production, disk load can be reduced by turning
those checks off. If PHP files are changed then, the opcode cache must
be explicitly hinted to invalidate its entries. Most opcode cache
systems default to stat file changes everytime, OPcache defaults to only
every 5 seconds, but this default behavior depends on your distribution.

Opcode caches and symlinked pathes/files
----------------------------------------

Especially APC before 3.1.13 have the issue to detect that a file is the
same one if included with a path which includes a symlink. This may lead
to the issue that it tries to include same class twice which leads to
the fatal error "class already declared". Also APC tends to the issue
that it doesn't clear his cache if you change a file by changing a
symlink, even if the usual file change detections are turned on, and
delivers old opcache data. This seems to happen frequently for double
linked directories, for example if typo3/ is a link to typo3-src which
themself is a link to typo3-src-6.2.4 (this strategy is often used for
nice deployments since it allows to activate a full build by just
changing exactly one symlink). If then typo3/index.php is requested, APC
sometimes struggles to detect those link changes and throws funny
issues. This issue was also reported with older versions of
ZendOptimizerPlus.

Opcode caches and amount of shared memory
-----------------------------------------

To fully benefit from opcode caching, it is important to give the opcode
cache enough shared memory to work with. Typical base configurations
give 32MB or 64MB of RAM, and that is usually not enough for a single
TYPO3 CMS instance. If not enough memory is left, the opcode cache needs
to throw out scripts, so those need to be compiled again if requested.
All opcode caches have some diagnoses scripts to monitor the amount of
used memory. It is advisable to monitor the memory usage and tune the
according memory setting until it fits needs.


What do the messages mean in installer
======================================

See :ref:`troubleshooting Opcode Cache messages <php-troubleshooting_opcode>`.


OPcache
=======

This opcode caching system comes mostly with your PHP 5.5 (or newer)
installation. It is derived from Zend Optimizer+ and maintained by the
PHP developers.

Never set
---------

Do not set opcache.save_comments and opcache.load_comments to false.
Some internet pages mention this speeds up the website, but the code
information which will be removed with this options is needed by Extbase
and Fluid and therefore for TYPO3 CMS.

Optimization
------------

On live systems you can set the option opcache.validate_timestamps to
false to gain a speedup. This prevents the cache from looking up every
opcache.revalidate_freq seconds if there is a changed PHP file. If you
update your system or an extension you should use the "clear opcode
cache" button in the install tool to clear the complete opcode cache so
the new files will be used.

Please open an issue report if you experience issues with the
PhpCacheBackend and option opcache.validate_timestamps set to false.
