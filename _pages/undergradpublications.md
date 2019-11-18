---
layout: archive
title: "Undergraduate Publications"
permalink: /undergradpublications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

These were the publications I did while working for [Professor Aydogan Ozcan](https://www.ee.ucla.edu/aydogan-ozcan/) duing my undergrad at UCLA.

{% for post in site.undergradpublications reversed %}
  {% include archive-single.html %}
{% endfor %}


