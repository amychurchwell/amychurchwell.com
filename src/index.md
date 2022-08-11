---
title: home
layout: 'base.html'
---

## hello!

♡ My name is [Amy Churchwell]({{ site.url }}){.p-name .u-url}{rel=me} ([she]{.p-pronoun-nominative}/[her]{.p-pronoun-oblique}), welcome to my website. ♡

I work remotely in the [Pacific Northwest]{.p-region}, [U.S.A]{.p-region} as a [{{ resume.title }}]{.p-job-title}, which I’ve been doing professionally for approximately {% year %}2018{% endyear %} years. Currently, I work on {{ resume.experience[0].projects[0].title }} for [{{ resume.experience[0].company }}]({{ resume.experience[0].companyWebsite }}).

---

elsewhere:

-   [Mastodon](https://tech.lgbt/@amy){.icon-mastodon}{rel=me}
-   [Twitter](https://twitter.com/amychurchwell){.icon-twitter}{rel=me}
-   [GitHub](https://github.com/amychurchwell){.icon-github-circled}{rel=me}
    {.social}

{% include "tweets.html" ignore missing %}
