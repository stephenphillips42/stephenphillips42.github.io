---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---
## Current projects
{% for post in site.projects %}
  {% include archive-single.html %}
{% endfor %}

## Publications:
{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

## Miscillaneous Projects:
{% for post in site.miscprojects %}
  {% include archive-single.html %}
{% endfor %}

## Undergraduate publications:
{% for post in site.undergradpublications reversed %}
  {% include archive-single.html %}
{% endfor %}


