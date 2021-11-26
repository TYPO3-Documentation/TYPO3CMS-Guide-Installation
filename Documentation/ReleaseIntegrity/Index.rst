.. include:: ../Includes.txt
.. highlight:: bash
.. highlight:: text

=======================
TYPO3 Release Integrity
=======================

TYPO3 Release Packages (the downloadable tarballs and zip files) as well as
Git tags are signed using PGP signatures during the automated release process.
Besides that, MD5 and SHA2-256 hashes are being generated for these files.

Release package contents
------------------------

TYPO3 Release packages contain the following files:

.. code-block:: bash
   :caption: `TYPO3 CMS 7.6.4 contents`_ as an example
   :name: release-package-contents

   typo3_src-7.6.4.tar.gz
   typo3_src-7.6.4.tar.gz.sig
   typo3_src-7.6.4.zip
   typo3_src-7.6.4.zip.sig
   RELEASE-7.6.4.txt

* ``*.tar.gz`` and ``*.zip`` files are the actual release packages, containing
  the source code of the TYPO3 CMS Core
* ``*.sig`` files contain accordant signatures for each release package file
* ``RELEASE.txt`` is the signed "delivery note" of the whole release

.. _TYPO3 CMS 7.6.4 contents: https://sourceforge.net/projects/typo3/files/TYPO3%20Source%20and%20Dummy/TYPO3%207.6.4/


Checking file hashes
--------------------

File hashes are used to check that a downloaded file was transferred and stored
correctly on the local system. TYPO3 uses the cryptographic hash methods `MD5`_
and `SHA2-256`_ which are created by accordant tools like ``md5sum`` or
``shasum``.

The ``RELEASE.txt`` file contains these hash sums that have been created during
the release process.

.. code-block:: text
   :caption: `TYPO3 CMS 7.6.4 RELEASE.txt file`_ as an example
   :name: release-file

   -----BEGIN PGP SIGNED MESSAGE-----
   Hash: SHA256

   ================================================================================================
   Release of TYPO3 CMS 7.6.4
   ================================================================================================

   MD5 checksums:
   400d5f8808c1377034ddc35165ccbb18  typo3_src-7.6.4.tar.gz
   d9b4ec13fdc935445f6e85c3e3c7fdc8  typo3_src-7.6.4.zip

   SHA256 checksums:
   6d65008f4a71036cc6c90648f3c4019422904ff7c7d3c0f84a1695d64b8f615b  typo3_src-7.6.4.tar.gz
   04fe21245a0881ed3be1219092cc86bcba1d2fb28554e33d425814bfa5bc347e  typo3_src-7.6.4.zip

   Further details on the signing and hashing process of TYPO3 releases:
   https://docs.typo3.org/typo3cms/drafts/github/TYPO3Incubator/InfrastructureGuide/Releases/
   ================================================================================================

   -----BEGIN PGP SIGNATURE-----
   ...
   -----END PGP SIGNATURE-----


To check values, either one of the the names tools, ``md5sum`` or ``shasum`` has
to be used to locally create these hash values which you then use to compare
them to the values published with the release.

.. code-block:: bash

   ~$ md5sum typo3_src-*.tar.gz typo3_src-*.zip
   400d5f8808c1377034ddc35165ccbb18  typo3_src-7.6.4.tar.gz
   d9b4ec13fdc935445f6e85c3e3c7fdc8  typo3_src-7.6.4.zip

.. code-block:: bash

   ~$ shasum -a 256 typo3_src-*.tar.gz typo3_src-*.zip
   6d65008f4a71036cc6c90648f3c4019422904ff7c7d3c0f84a1695d64b8f615b  typo3_src-7.6.4.tar.gz
   04fe21245a0881ed3be1219092cc86bcba1d2fb28554e33d425814bfa5bc347e  typo3_src-7.6.4.zip

.. _MD5: https://en.wikipedia.org/wiki/MD5
.. _SHA2-256: https://en.wikipedia.org/wiki/SHA-2
.. _TYPO3 CMS 7.6.4 RELEASE.txt file: https://prdownloads.sourceforge.net/typo3/RELEASE-7.6.4.txt?download


Checking file signatures
------------------------

TYPO3 uses `Pretty Good Privacy`_ to sign release packages and Git release tags.
To validate these signatures we suggest to use `The GNU Privacy Guard`_, however
any `OpenPGP`_-compliant tool should be working as well.

The release packages are using a detached binary signature. This means that
the file ``typo3_src-7.6.4.tar.gz`` has an additional signature file
``typo3_src-7.6.4.tar.gz.sig`` which is the detached signature. The
``RELEASE.txt`` file that has been mentioned in the previous section
is signed as well - however it contains the signature inline in the same file.

.. code-block:: bash

   gpg --verify RELEASE-7.6.4.txt

Output:

.. code-block:: none

   gpg: Signature made Tue 23 Feb 2016 12:18:26 PM CET using RSA key ID 59BC94C4
   gpg: Can't check signature: public key not found

The warning means that the public key ``59BC94C4`` is not yet available on the
local system and cannot be used to validate the signature. The public key can be
obtained by any key server - a popular one is `pgpkeys.mit.edu`_.

.. code-block:: bash

   wget -qO- https://get.typo3.org/KEYS | gpg --import

Output:

.. code-block:: none

   gpg: requesting key 59BC94C4 from hkp server pgpkeys.mit.edu
   gpg: key 59BC94C4: public key "TYPO3 Release Team (RELEASE) <typo3cms@typo3.org>" imported
   gpg: key FA9613D1: public key "Benjamin Mack <benni@typo3.org>" imported
   gpg: key 16490937: public key "Oliver Hader <oliver@typo3.org>" imported
   gpg: no ultimately trusted keys found
   gpg: Total number processed: 3
   gpg:               imported: 3  (RSA: 3)

Once the public key has been imported, the previous command on verifying the
signature of the ``RELEASE.txt`` file can be repeated.

.. code-block:: bash

   gpg --verify RELEASE-7.6.4.txt

Output:

.. code-block:: none

   gpg:  Signature made Tue 23 Feb 2016 12:18:26 PM CET using RSA key ID 59BC94C4
   gpg: Good signature from "TYPO3 Release Team (RELEASE) <typo3cms@typo3.org>"
   gpg: WARNING: This key is not certified with a trusted signature!
   gpg:          There is no indication that the signature belongs to the owner.
   Primary key fingerprint: 7AF5 1AAA DED9 D002 4F89  B06B 9B9C B92E 59BC 94C4

The new warning is expected since everybody could have created the public key
and uploaded it to the key server. The vital aspect here is to validate the key
fingerprint ``7AF5 1AAA DED9 D002 4F89  B06B 9B9C B92E 59BC 94C4`` which is in
this case the correct one for TYPO3 CMS release packages.

.. code-block:: bash

   gpg --fingerprint 59BC94C4

Output:

.. code-block:: none

   pub   4096R/59BC94C4 2016-02-21 [expires: 2021-02-22]
         Key fingerprint = 7AF5 1AAA DED9 D002 4F89  B06B 9B9C B92E 59BC 94C4
   uid                  TYPO3 Release Team (RELEASE) <typo3cms@typo3.org>
   sub   4096R/0752FD79 2016-02-21

Verifying the release packages works almost similar with a detacted signature
which has to be downloaded as well.

.. code-block:: bash

   gpg --verify typo3_src-7.6.4.tar.gz.sig typo3_src-7.6.4.tar.gz

Output:

.. code-block:: none

   gpg: Signature made Tue 23 Feb 2016 12:18:24 PM CET using RSA key ID 59BC94C4
   gpg: Good signature from "TYPO3 Release Team (RELEASE) <typo3cms@typo3.org>"

.. _Pretty Good Privacy: https://en.wikipedia.org/wiki/Pretty_Good_Privacy
.. _The GNU Privacy Guard: https://www.gnupg.org/
.. _OpenPGP: https://www.openpgp.org/
.. _pgpkeys.mit.edu: https://pgpkeys.mit.edu/


Checking tag signature
----------------------

Checking signatures on Git tags works similar to verifying the results using the
``gpg`` tool, but with using the ``git tag --verify`` command directly.

.. code-block:: bash

   git tag --verify 7.6.4

Output:

.. code-block:: none

   object bd0c7f6ca9cb3093bd647e85035e9f36bf1e9e86
   type commit
   tag 7.6.4
   tagger TYPO3 Release Team <typo3cms@typo3.org> 1456226245 +0100

   Tagged version 7.6.4
   gpg: Signature made Tue 23 Feb 2016 12:17:25 PM CET using RSA key ID 59BC94C4
   gpg: Good signature from "TYPO3 Release Team (RELEASE) <typo3cms@typo3.org>"

The ``git show`` command on the name of the tag reveals more details.

.. code-block:: bash

   git show 7.6.4

Output:

.. code-block:: none

   tag 7.6.4
   Tagger: TYPO3 Release Team <typo3cms@typo3.org>
   Date:   Tue Feb 23 12:17:25 2016 +0100

   Tagged version 7.6.4
   -----BEGIN PGP SIGNATURE-----
   ...
   -----END PGP SIGNATURE-----

   commit bd0c7f6ca9cb3093bd647e85035e9f36bf1e9e86
   Author: TYPO3 Release Team <typo3cms@typo3.org>
   Date:   Tue Feb 23 12:16:38 2016 +0100

       [RELEASE] Release of TYPO3 7.6.4

       Change-Id: Ibc16ad8989398404e277236bed6ae5a0f7f6a29f
       Reviewed-on: https://review.typo3.org/46839
       Reviewed-by: TYPO3 Release Team <typo3cms@typo3.org>
       Tested-by: TYPO3 Release Team <typo3cms@typo3.org>


Public Keys
-----------

.. note::

   Through June 2017 TYPO3 releases have been cryptographically signed by
   ``TYPO3 Release Team <typo3cms@typo3.org>`` with a dedicated public key.
   Since July 2017 releases are signed by individual members of the TYPO3
   Release Team directly, namely ``Benni Mack <benni@typo3.org>`` and
   ``Oliver Hader <oliver@typo3.org>``.

You can download the used public keys from `get.typo3.org.keys`_

* TYPO3 Release Team <typo3cms@typo3.org>
   + 4096 bit RSA key
   + Key ID `0x9B9CB92E59BC94C4`_
   + Fingerprint ``7AF5 1AAA DED9 D002 4F89  B06B 9B9C B92E 59BC 94C4``
* Benni Mack <benni@typo3.org>
   + 4096 bit RSA key
   + Key ID `0x3304BBDBFA9613D1`_
   + Fingerprint ``E7ED 29A7 0309 A0D1 AE34  DA73 3304 BBDB FA96 13D1``
* Oliver Hader <oliver@typo3.org>
   + 4096 bit RSA key
   + Key ID `0xC19FAFD699012A5A`_, subkey of `0xA36E4D1F16490937`_
   + Fingerprint ``0C4E 4936 2CFA CA0B BFCE  5D16 A36E 4D1F 1649 0937``

...............................

.. _0x9B9CB92E59BC94C4: https://pgpkeys.mit.edu/pks/lookup?search=0x9B9CB92E59BC94C4
.. _0x3304BBDBFA9613D1: https://pgpkeys.mit.edu/pks/lookup?search=0x3304BBDBFA9613D1
.. _0xC19FAFD699012A5A: https://pgpkeys.mit.edu/pks/lookup?search=0xC19FAFD699012A5A
.. _0xA36E4D1F16490937: https://pgpkeys.mit.edu/pks/lookup?search=0xA36E4D1F16490937
.. _get.typo3.org.keys: https://get.typo3.org/KEYS
