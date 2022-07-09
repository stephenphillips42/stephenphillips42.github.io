---
layout: archive
title: "Teaching"
permalink: /teaching/
author_profile: true
---
You can find my full teaching statement [here](/files/stephen-phillips-teaching-statement.md)

{% include base_path %}

{% for post in site.teaching reversed %}
  {% include archive-single.html %}
{% endfor %}
