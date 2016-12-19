# RFC - Unify CoC and Enforcement policies

## Summary

* Move the enforcement steps to the top of the CoC.
* Keep the separate enforcement document as a detailed policy that includes lessons/values/nuance.
* Stop directing people to both the CoC and enforcement policy: on the signup page, on docs, etc.
* Put a link to the full enforcement values doc in the CoC.

## Intro

The first thing people should see when they go to the CoC is how it affects them. The bulk of the stuff on the CoC itself amounts to legalese that most users won't read -- so in the interest of conveying information that matters right away, it's best to lead with how CoC violations are handled. I would argue that's the main thing people even care about.

Hopefully, these changes will make expectations even clearer for everyone!

## Changes

### Move enforcement steps to CoC

There's two sections of enforcement steps in the enforcement doc. Combine them, reword them, and put them on the very top of the main CoC.

```
## When Something Happens

If you see a Code of Conduct violation, follow these steps:

1. Let the person know that what they did is not appropriate and ask them to stop and/or edit their message(s).
2. That person should immediately stop the behavior and correct the issue.
3. If this doesn’t happen, or if you're uncomfortable speaking up, [contact admins](#contacting-admins).
4. As soon as available, an admin will join, identify themselves, and take [further action (see below)](#further-enforcement), starting with a warning, then temporary deactivation, then long-term deactivation.

When reporting, please include any relevant details, links, screenshots, context, or other information that may be used to better understand and resolve the situation.

**The Admin team will prioritize the well-being and comfort of the recipients of the violation over the comfort of the violator.** See [some examples below](#enforcement-examples).
```

The `Enforcement` section in the CoC should be replaced with the following:

```
## Admin Enforcement Process

Once the admins get involved, they will follow a documented series of steps and do their best to preserve the well-being of WeAllJS members. This section covers actual concrete steps. For further information/details on values and practices that admins will generally apply when enforcing the Code of Conduct, refer to [the full enforcement document](http://wealljs.org/enforcement).

### Contacting Admins

You may get in touch with the WeAllJS admin team through any of the following methods:

  * Use the `/admin` command in the WeAllJS Slack to send a message directly to the admin channel.
  * Directly message any admin in private (through either Twitter, Slack, or email, as available) if it is a preferred or more comfortable avenue.
  * Use the `/join-private #wealladmin` command for a private conversation with all admins.
  * Email the admins directly at [coc@wealljs.org](mailto:coc@wealljs.org)
  * Direct Message [@WeAllJS](https://twitter.com/wealljs) on Twitter with the details and any relevant links.

In Slack, `?admins` will list the names of all current admins.

### Further Enforcement

If you've already followed the [initial enforcement steps](#enforcement), these are the steps admins will take for further enforcement, as needed:

  1. Repeat the request to stop.
  2. If the person doubles down, they will be removed from the channel and given an official warning.
  3. If the behavior continues or is repeated later, the person will be deactivated for 24 hours.
  4. If the behavior continues or is repeated after the temporary deactivation, a long-term (6-12mo) deactivation will be used.

On top of this, admins may remove any offending messages, images, contributions, etc, as they deem necessary.

Admins reserve full rights to skip any of these steps, at their discretion, if the violation is considered to be a serious and/or immediate threat to the health and well-being of members of the community. These include any threats, serious physical or verbal attacks, and other such behavior that would be completely unacceptable in any social setting that puts our members at risk.

Members expelled from events or venues with any sort of paid attendance will not be refunded.

### Who Watches the Watchers?

Admins and other leaders who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the community's leadership. These may include anything from removal from the admin team to a permanent ban from the community.

### Enforcement Examples

#### The Best Case

The vast majority of situations work out like this, in our experience. This interaction is common, and generally positive.

> Alex: "Yeah I used X and it was really crazy!"

> Patt: "Hey, could you not use that word? What about 'ridiculous' instead?"

> Alex: "oh sorry, sure." -> edits old message to say "it was really confusing!"

#### The Admin Case

Sometimes, though, you need to get admins involved. Admins will do their best to resolve conflicts, but people who were harmed by something **will take priority**.

> Patt: "Honestly, sometimes I just really hate using $library and anyone who uses it probably sucks at their job."

> Alex: "Whoa there, could you dial it back a bit? There's a CoC thing about attacking folks' tech use like that."

> Patt: "I'm not attacking anyone, are you deaf?"

> Alex: "/admin hey uh. Can someone look at #javascript? Patt is getting a bit aggro. I tried to nudge them about it, but nope."

> MxAdmin1: *joins #javascript* "Hey Patt, admin here. Could you tone it down? This sort of attack is really not okay in this space."

> Patt: "Leave me alone I haven't said anything bad wtf is wrong with you."

> MxAdmin1: "/remove @patt", "/msg @patt I mean it. Please refer to the CoC over at wealljs.org/code-of-conduct if you have questions, but you can consider this an actual warning. I'd appreciate it if you reworded your messages in #javascript, since they made folks there uncomfortable. Let's try and be kind, yeah?"

> Patt: "/msg @mxadmin1 Okay sorry. I'm just frustrated and I'm kinda burnt out and I guess I got carried away. I'll DM Alex a note apologizing and edit my messages. Sorry for the trouble."

> MxAdmin1: "/msg @patt Thanks for that. I hear you on the stress. Burnout sucks :/.  Have a good one!"

#### The Nope Case

> PepeTheFrog🐸: "Hi, I am a literal actual nazi and I think white supremacists are quite fashionable."

> Patt: "NOOOOPE. OH NOPE NOPE."

> Alex: "JFC NO. NOPE. `/admin nope nope nope @ #javascript`"

> MxAdmin1: "👀 Nope. NOPE NOPE NOPE. 🔥"

> PepeTheFrog🐸 has been deactivated.
```

### Edit redundant sections out of the CoC

* The `Our Responsibilities` section is no longer necessary.

### Keep the enforcement doc

Remove the enforcement steps, and keep all the "values".

### Remove references that refer to both CoC and enforcement docs

* Home/signup page
* Others??? (need to list them all)
