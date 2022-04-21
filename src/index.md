---
title: home
layout: 'base.html'
---

Hello! My name is [Amy Churchwell]{.p-name} ([she]{.p-pronoun-nominative}/[her]{.p-pronoun-oblique}).
I work as a [{{ resume.title }}]{.p-job-title}, which I’ve been doing professionally for approximately {% year %}2017{% endyear %} years. Currently I work on {{ resume.experience[0].projects[0].title }} for {{ resume.experience[0].company }}.
