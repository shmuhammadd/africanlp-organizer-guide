---
title: "17. Lessons learned"
---

Each row is a mistake we made and the fix. Add yours at the bottom of the table.

| Pitfall | Year | Fix |
|---|---|---|
| Too few reviewers. We needed a second invitation round and sent 159 reminders. | 2026 | Invite on the day the venue deploys. Aim for one reviewer per expected paper. |
| A reviewer without a profile blocked paper matching. | 2026 | Remove reviewers without profiles before matching. |
| The decisions CSV was rejected four times. | 2026 | Three columns only (`paper_number`, `decision`, `comment`), no header row. |
| The camera-ready stage failed with "readers must be array". | 2026 | Write readers as a list in the copyright field. |
| We expected 50 submissions and got 56. | 2026 | Estimate high. 2027 planned for 75. |
| The default timeline ran a month past the host's deadlines. | 2027 | Rewrite every step's dates. See [OpenReview](openreview#step-5-fix-the-review-timeline). |
| Reduced load was empty by default. | 2027 | Set options 1, 2 in Reviewers Recruitment Response. |
| Fields left out of the form JSON stayed on the form. | 2027 | Use `{"delete": true}` for fields to remove. |
| Two separate fields let authors pick an archival extended abstract. | 2027 | One combined field with only valid choices. |
| A chair was invited as a reviewer. | 2027 | Remove chairs from the list before inviting. |
| Chairs got an email for every submission. | 2027 | Notify `submission_authors` only. |
| A bot check blocked scripted reviewer checks. | 2027 | Use OpenReview's matching log instead. |
| Templates copied from last year kept the old edition number and contact address. | 2027 | Search every template for last year's number, year, city and email before sending. |

## Working with OpenReview staff

Staff work Monday to Friday, US Eastern hours. Put deadlines on Monday to Thursday. Send anything that needs staff, such as ARR review release or fixes, before the December holidays.
