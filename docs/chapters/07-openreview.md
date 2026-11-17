---
title: "7. OpenReview setup"
---

This chapter takes you from an empty OpenReview account to a venue that accepts papers, with reviewers invited and the review schedule set. It records what we did for 2027.

AfricaNLP runs two OpenReview venues:

- **Direct submissions** go to the main venue, a Conference Review Workflow venue. AfricaNLP reviewers review them.
- **ARR commitments** go to a separate ARR Commitment Workflow venue. See [ARR commitments](arr-commitments).

All OpenReview dates are in GMT. An AoE deadline at the end of day X is X+1 at 12:00 GMT.

## Before you start

- Note the host's dates for direct submission, ARR commitment, notification, camera-ready and proceedings.
- Collect every program chair's email exactly as it appears on their OpenReview profile, in lowercase.
- Check each chair has an OpenReview profile with that email confirmed. Institutional emails activate at once. Others go through moderation.
- Set up the contact address. See [Infrastructure](infrastructure).
- Publish the call page with AoE deadlines, submission types and page limits.
- Save last year's venue request. Open last year's PC console, for example `openreview.net/group?id=eacl.org/EACL/2026/Workshop/AfricaNLP/Program_Chairs`, click **Full venue configuration** at the bottom and save it as PDF. It holds every setting, form and email from last year.

## Step 1: Request the venue

OpenReview staff deploy the request within about a day, on US Eastern business days.

1. Log in and open [openreview.net/group?id=OpenReview.net/Support](https://openreview.net/group?id=OpenReview.net/Support).
2. Click **OpenReview Support Venue Request Conference Review Workflow**. Not the ARR form, not the Journal form.
3. Fill in the fields below, tick all eight Venue Organizer Agreement boxes, and submit.
4. The request appears under the **Conference Review Workflow Requests** tab. Staff reply there with "Your venue is available in OpenReview".

| Field | 2027 value |
|---|---|
| Official Venue Name | 8th Workshop on African Natural Language Processing |
| Abbreviated Venue Name | AfricaNLP 2027 |
| Venue Website Url | https://africanlp.github.io/2027 |
| Location | Athens, Greece (city and country only, no full stop) |
| Venue Start Date | 2027-03-09, the host's first day, until the workshop day is known |
| Program Chair Emails | All chairs, lowercase, comma separated, no trailing comma, including you |
| Contact Email | The Google Group |
| Submission Start Date | When submissions should open (GMT) |
| Submission Deadline | 2026-12-16 12:00 GMT (= 15 Dec AoE) |
| Full Submission Deadline | Empty |
| Reviewer and Area Chair group names | Empty (defaults) |
| Area Chairs, Senior Area Chairs | Unchecked |
| Colocated | EACL 2027 |
| Previous Venue | https://openreview.net/group?id=eacl.org/EACL/2026/Workshop/AfricaNLP |
| Expected Submissions | 75 (2026 received 56) |
| Release Role Participation | Yes, so reviewers get credit on their profiles |

The form no longer asks about anonymity or the venue ID. Put them in **Other Important Information**:

```text
This is the 8th edition of the AfricaNLP workshop, co-located with EACL 2027
(Athens, Greece, 9-14 March 2027). The previous edition was
eacl.org/EACL/2026/Workshop/AfricaNLP.

Requested venue ID: eacl.org/EACL/2027/Workshop/AfricaNLP

Configuration (same as 2026):
- Double-blind review; reviewer identities visible to Program Chairs only
- Reviewers only (no area chairs), automatic assignment
- Submissions private during review; accepted papers made public after decisions
- Submission license: CC BY 4.0
- We also have Publication Chairs who need access for the camera-ready stage

We will additionally accept ARR commitments (deadline 22 December 2026 AoE) and will
submit a separate ARR Commitment Workflow request for those.
```

## Step 2: Configure the venue

The deployment comment gives three links:

| Page | 2027 link | Use |
|---|---|---|
| Venue home page | `group?id=eacl.org/EACL/2027/Workshop/AfricaNLP` | Authors submit here. Put it in the call. |
| Program Chairs console | `.../AfricaNLP/Program_Chairs` | Submissions and statistics |
| Venue Timeline | `group/edit?id=eacl.org/EACL/2027/Workshop/AfricaNLP` | Every setting: dates, forms, emails |

The new OpenReview interface has no Revision button. Every stage is a step in the Venue Timeline under **Workflow Configurations**. Click a step's arrow to expand it, then the blue **Edit** beside a setting.

Three tasks under **Program Chairs Configuration Tasks** must be done before submissions open. All three sit inside the **Submission** step.

1. **Submission Dates.** Set the opening and due dates in GMT and submit. You must open and submit this even if the values are already right, or the task stays red.
2. **Submission Form Fields.** Replace the content with the JSON below. Keep the CC BY 4.0 licence.
3. **Submission Notifications.** Keep `submission_authors` only. Adding `program_chairs` emails every chair on every submission and every edit.

### Submission form fields

Two rules we learned the hard way:

- Leaving a field out of the JSON does not remove it. Remove a field with `"field_name": {"delete": true}`.
- OpenReview cannot make one field depend on another. Combine linked choices into one field, so nobody can pick an archival extended abstract.

For 2027 we removed TLDR and added one `submission_type` field after the PDF. Keep every other default field as OpenReview wrote it: title, authors, keywords, abstract, pdf, email_sharing, data_release, venue, venueid.

```json
"TLDR": { "delete": true },
"archival_status": { "delete": true },
"submission_type": {
  "order": 8,
  "description": "Select the type of submission. Full papers can be archival (published in the ACL Anthology) or non-archival. Extended abstracts are always non-archival.",
  "value": {
    "param": {
      "type": "string",
      "enum": [
        "Paper (4-8 pages), archival",
        "Paper (4-8 pages), non-archival",
        "Extended abstract (up to 2 pages), non-archival"
      ],
      "input": "radio"
    }
  }
}
```

The `archival_status` line matters only if an earlier edit added that field, as one did in 2027. After saving, click **Show all** under Form Fields and check the list.

## Step 3: Recruit reviewers

Invite reviewers on the day the venue goes live. Aim for one accepted reviewer per expected paper, 75 for 2027. Each paper needs three reviews, and many reviewers choose a load of one or two.

### Build the list

1. Open last year's reviewer group, Members tab: `openreview.net/group/edit?id=eacl.org/EACL/2026/Workshop/AfricaNLP/Reviewers`. Copy every member.
2. Optionally add people from `.../Reviewers/Invited` who never answered. Never add anyone from `.../Reviewers/Declined`.
3. Clean the list:
   - One entry per line. Prefer profile IDs (`~Firstname_Lastname1`) to emails.
   - Remove email duplicates of people already listed by profile ID, or they get two invitations.
   - Remove this year's program chairs. They already see every paper and review.
   - Flag anyone listed under "Without Publication" in last year's Paper Matching Setup log.
4. Add new reviewers, such as last year's authors. The organiser agreement allows only people known to have relevant publications. Never use an open sign-up form.

2027 invited 118 people this way.

### Send the invitations

1. Open `openreview.net/group/edit?id=eacl.org/EACL/<YEAR>/Workshop/AfricaNLP/Reviewers`.
2. Click **Recruitment Request**.
3. Paste the list. Edit the email if you like, but keep `{{fullname}}`, `{{invitation_url}}` and `{{contact_info}}`.
4. In the Venue Timeline, open **Reviewers Recruitment Response** and click Edit beside **Reduced Load**. Set **Allow Accept With Reduced Load** to Yes and **Reduced Load Options** to `1, 2`. It was empty by default in 2027.
5. Check that `.../Reviewers/Invited` shows the right count.

### Follow up

- Accepted reviewers appear in the Members tab of `.../Reviewers`. Decliners appear in `.../Reviewers/Declined`.
- After about two weeks, send a **Recruitment Request Reminder** to non-responders. If fewer than about 60 have accepted, invite more.
- To remove someone invited by mistake: if they accepted, remove them from `.../Reviewers`. Otherwise message them to ignore the invitation and ask OpenReview Support, in a comment on the venue request, to remove them from Invited.

### Check reviewers have publications

OpenReview blocks scripted bulk profile lookups. Use the built-in check instead. After submissions close, the **Affinity Score** step (Paper Matching Setup) lists every reviewer with no profile or no publications. Remove them before running assignments.

## Step 4: Open submissions and test

Submissions open on the Submission step's activation date. To open earlier, edit the Dates and set the activation a few minutes ahead. A past time may be rejected. 2027 moved opening from 19 to 17 November this way.

Open submissions only after the form fields are saved, or early authors get the default form.

1. Post a test submission from a non-chair account, titled "Test submission - Ignore".
2. Check the form shows only the intended fields, the submission type offers exactly the valid choices, and the confirmation email arrives.
3. If anything is wrong, fix the form fields and test again.
4. Withdraw or delete the test paper.
5. Update the call page: venue link, AoE deadlines, and the profile moderation note.
6. Announce on the mailing lists, Masakhane and social media.

## Step 5: Fix the review timeline

OpenReview fills the Venue Timeline with a default schedule. In 2027 it ran about a month past the host's dates. Change each step through **Edit** beside **Dates**.

| Step | Default | 2027 setting |
|---|---|---|
| Desk Rejection, Withdrawal | 16 Dec, no deadline | Keep |
| Create Reviewers Affinity Score, Conflict | 19 Dec | 17 Dec |
| Reviewers Bid | 20–23 Dec | Disable |
| Create Reviewers Assignment | 31 Dec | 18 Dec |
| Assignment Deployment, Submission Change Before Reviewing | 1 and 6 Jan | 21 Dec |
| Official Review | 10–20 Jan | 22 Dec – 2 Jan |
| Official Review Release, Author Reviews Notification | 20–21 Jan | 5 Jan |
| Author Rebuttal | 24–31 Jan | Disable |
| Decision | 27 Jan – 3 Feb | 3–5 Jan |
| Decision Release, Accept/Reject Notifications | 1–3 Feb | 5 Jan |
| Camera Ready Revision | 3–17 Feb | 5–19 Jan |
| Accept/Reject Submission Change After Decision | 10 Feb | 6 Jan |

## TODO

- Mark the timeline changes done once they are made for 2027 (open as of 17 Nov 2026).
- Record the final reviewer count and how many accepted with a reduced load.

Sources: [OpenReview: Creating a New Venue](https://docs.openreview.net/getting-started/hosting-a-venue-on-openreview), OpenReview: New Venue UI.
