---
layout: pageminimal
title: "RFC Process"
permalink: /rfc-process
---

# RFC Process

[ratified 2016-09-03]
{: .text-italic}

WeAllJS was originally created as an experiment in building inclusive, open, and valuable community. As such, its founders and members greatly value documenting the various processes that go into making the community effective in its mission. This documentation, as a whole, is meant to be a sort of "product" that the community can offer, for free, to other communities and organizations, such that they can learn from both the successes and failures that we have worked through.

This policy documentation, and the discussion and review process that goes into drafting, reviewing, and finalizing it, is called the WeAllJS RFC Process.

<div class="bordered-divider bordered-bottom"></div>

## What's an RFC?

The name itself is a reference to the IETF's Request For Comments process, and basically involves a document or series of documents which are drafted, reviewed, and eventually ratified (approved) by the WeAllJS community through discussion among those interested.

An RFC can extend, modify, or alter any part of the WeAllJS community policy, whether or not it's been documented. This includes the Code of Conduct, the Enforcement process, the Channel policy, and anything else that affects a significant part of the community. It can also propose entirely new policies and community agreements.

<div class="bordered-divider bordered-bottom"></div>

## How do I create an RFC?

* https://github.com/wealljs/wealljs.github.io
* Create a PR with a new RFC document:
  * Must be in `_pages`.
  * Must be prefixed by `rfc-` and be a `.md` file.
  * Must use the standard page header (refer to other RFCs)
  * The first line should be `# RFC - <title of RFC>`
* If the RFC involves existing or new documents on the website, include those changes in the same PR for review. They will be merged alongside the RFC when accepted.
* Tag at least one member of the [Admin Team](https://github.com/orgs/WeAllJS/teams/admins) for review on the PR.
* Join `#meta` in the WeAllJS Slack and announce the PR.
* Pin the link to the PR to `#meta`.

<div class="bordered-divider bordered-bottom"></div>

## How does review work?

All comments on a particular RFC should be done directly on the PR: An RFC will not be accepted until reviewers are satisfied with changes. Admins hold ultimate authority over whether or not to accept an RFC, if there's ever conflict about it.

Side discussion can happen externally, but the `#meta` on the WeAllJS Slack is the preferred place to talk through things outside of PR reviews/comments. Furthermore, any decisions/suggestions that are decided on externally should be recorded in the RFC itself, for record keeping.

<div class="bordered-divider bordered-bottom"></div>

## How do RFCs get ratified?

RFCs have a minimum 24 hour waiting period before being accepted or rejected. Once an RFC has been reviewed on Github and at least one admin has signed off on the changes, the PR will be accepted and all its connected changes merged.

If it's specifically requested, or if admins determine that the topic of the RFC demands extra attention and care because of its potential impact, an RFC's "ratification period" may be extended for as long as the participants and admins feel is a reasonable length of time for consideration.

The RFC may be rejected altogether at the discretion of admins, or based on consensus among WeAllJS members.

<div class="bordered-divider bordered-bottom"></div>

## What happens after ratification?

Once an RFC is ratified, it is considered Official WeAllJS Community Policy, and will be marked as ratified. Any related changes should either be merged directly with the RFC PR, or done elsewhere after ratification.

Once everything is wrapped up, remember to unpin the ratified PR from `#meta`.

<div class="bordered-divider bordered-bottom"></div>

## How do I change an RFC after ratification?

RFCs themselves cannot be modified after ratification, but new RFCs can be proposed and ratified to amend or remove a policy previously ratified through the RFC process. These amendments will involve the exact same process as a regular RFC.
