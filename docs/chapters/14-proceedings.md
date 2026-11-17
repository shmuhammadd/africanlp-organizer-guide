---
title: "14. Camera-ready and proceedings"
---

The proceedings deadline is hard. Miss it and the papers do not reach the ACL Anthology on time. For 2027 it is 9 February 2027.

## Camera-ready

1. Camera Ready Revision runs from notification to the camera-ready deadline (2027: 5–19 January).
2. Add a copyright form upload field to the camera-ready form. Write its readers as a list, such as `["eacl.org/EACL/2027/Workshop/AfricaNLP/Program_Chairs"]`. A plain string failed in 2026 with "readers must be array".
3. Ask authors to run [aclpubcheck](https://github.com/acl-org/aclpubcheck) before uploading. A [web version](https://huggingface.co/spaces/teelinsan/aclpubcheck) also exists.
4. Only archival papers go into the proceedings. Non-archival papers and extended abstracts appear only in the programme.

## Building the proceedings

1. Download the camera-ready PDFs and metadata from OpenReview.
2. Build the volume with [aclpub2](https://github.com/rycolab/aclpub2).
3. Get the ISBN from the host's workshop chairs. They create it once the proceedings title is confirmed in their shared spreadsheet.
4. Check the front matter: title, organisers, programme committee, table of contents.

## Delivering

Send the host:

- The generated proceedings as a `.zip` or `.tgz`, containing a folder named with the workshop acronym.
- A signed [copyright transfer form](https://github.com/acl-org/ACLPUB/blob/master/templates/copyright/acl-copyright-transfer-2021.pdf) for each paper. OpenReview does not collect these for you. Softconf does.

Deliver a few days early. In 2026 the host asked for files on 12 February so they could check them before the 13 February cut-off.

## The host's spreadsheet

Confirm the proceedings title and fill in the accepted papers in the host's shared spreadsheet. See [Information for the host's workshop chairs](host-chairs).

## TODO

- Name the 2027 publication chair who builds the volume.
- Add the 2027 Anthology volume link once published.
