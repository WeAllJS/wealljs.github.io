---
layout: pageminimal
title: "WeAllJS #pairing"
permalink: /rfc-pairing
---

# WeAllJS #pairing

[ratified 2016-09-17]
{: text-italic}

Learning is cool! Programming is hard! Learning with someone else is often way more productive than trying to learn alone. WeAllJS strives to be a community where people learning something new, no matter their level of skill, can find support. Here at WeAllJS, we recommend two different forms of cooperative programming.

## Code Review

Code review is an extremely useful medium for cooperative learning. A more experienced person reviewing code from a newcomer might find that new techniques and technologies have emerged that are out of their expertise. Newcomers can benefit from the knowledge of individuals who have put their experience to the test.

You are free to ask for code review in any way you like, but here is our suggestion:

  * Push your code to a Github repository.
  * Open a feature branch, and start coding away.
  * Push the feature branch upstream, and open a pull request from that feature branch into master. To do this, go to your project's homepage, and there should be a button that says **New pull request**. Click this button. Select master as your base branch, and your feature branch as the compare branch. Then, click the **Create pull request** button.
  * This should bring you to a page where you can write a description. Describe your problem, and what your pull request is aiming to solve. Indicate to reviewers the files and sections of code that you would like review on. After you are done, click **Create pull request.**
  * You should now be at a pull request page. Copy the link and paste it into the channel, asking for review. Indicate the languages and frameworks you are using.
  * Reviewers should go into the page, and select the Files changed tab. In this tab, one can see the diffs of the commits. Hovering your mouse over the diff should display a plus sign. Clicking on this plus sign will allow the reviewer to make line notes
  * As reviews come in, respond to code review by making appropriate code changes. You are also able to reply to inline comment by commenting on the same line. Talk it out, and don't be afraid to ask questions either on the pull request page, or on the `#pairing` channel. Push up any commits you make in the process.
  * Once reviewers feel good about the code, they can send a :+1: or a +1 to indicate the commit looks ready to be merged into master. They can do this by going to the main pull request page, scrolling to the bottom, entering text into the comment box, and pressing **Comment**.
  * Once you feel good about your pull request, you can feel free to merge it into master, either through the **Merge pull request** button on the pull request page, or through some other git interface of your choice; like, merging into master and pushing the changes back up on the command line.

In this process, we ask that you respect all WeAllJS rules during code review. Additionally, remember to be constructive with your review, and to not be combative when receiving review. We want to foster a place where less experienced coders can feel free to review and comment on the work of their more experienced peers.

When considering whether or not you should code review something, the only thing we ask is that you try your best to be constructive. You do not need to review an entire PR, but we ask that, until code review is complete, you try as best as possible to follow through on responding to any review you may have posted.

When considering posting a set of commits up for review, we ask that you try and remain focused in your commits. It is hard to review a massive set of changes, and review is most effective when reviewers are able to comprehensively review your code. When responding to code review, fear feature creep. Try your very best to not add any new features until code review is complete.

## Live Pairing
Live pairing involves two or more people on a call, looking at the same code. Feel free to make requests for live pairing in the channel. You can be someone looking to pair on someone else's work, or someone looking to pair on your own work.

We ask that, when searching for live pairing, that you please be open to working with people of all skill levels.
Additionally, we require that you respect all WeAllJS rules while pairing with other members of the Slack.

Here are a few suggestions for improving your experience:

  * Move slowly, if either member who is pairing does not understand something, it is beneficial to both people pairing to slow down, and explore it together. Pairing is excellent for deepening the knowledge of everyone involve.
  * Try diving deep in a topic. Pairing is great for getting work done, but it is even better for challenging any expectations one might have about the work that they do. If someone has a deep question you can't answer, you can both learn together.
  * Google Hangouts is a good enough tool to get pairing done, but Screenhero is an even better option that allows for people to remotely edit code on the same screen.

## How to Find a Partner
The slack will maintain a spreadsheet of individuals looking for live pairing or code review. Once you ask for review, we ask that you update the spreadsheet with contact information or a link to the pull request that requires review.
