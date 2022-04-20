---
title: home
layout: 'base.html'
---

My name is Amy Churchwell. I’m a {{ resume.title }}. I’ve been working
at {{ resume.experience[0].company }} since {{ resume.experience[0].startDate }}
(approximately {% year %}{{ resume.experience[0].startDate }}{% endyear %} years).

