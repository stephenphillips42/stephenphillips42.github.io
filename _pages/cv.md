---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* In Progress: Ph.D in Computer Science, University of Pennsylvania, 2020 (expected)
* M.S. in Robotics, University of Pennsylvania, 2016
* B.S. in Computer Science, UCLA, 2014

Work experience
======
* Summer 2013: Google Software Engineering Intern
  * Worked improving Google’s Video Search quality, helping locate with higher accuracy video play pages on the web
  * Researched various techniques to determine their effectiveness in increasing video search quality

* Summer 2017: Google Software Engineering Intern
  * Github University
  * Duties included: Merging pull requests
  * Supervisor: Professor Hub

Publications
======
  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Skills
======
* Programming Languages: Python (adept), MATLAB (experienced), C++ (experienced), Bash (experienced), Lua (capable), Java (capable)
* Libraries: Tensorflow, Pytorch, Numpy, Scipy, OpenCV, Blender, ROS
