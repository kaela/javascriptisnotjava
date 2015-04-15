---
layout: page
title: Snippets
permalink: /snippets/
---

[CSS]({{ site.baseurl }}/snippets/css)
<ul>
	{% for post in site.categories.css %}
	<li>
		<a href="{{post.permalink}}">{{post.title}}</a>
	</li>
	{% endfor %}
</ul>

[WordPress]({{ site.baseurl }}/snippets/wordpress)
<ul>
	{% for post in site.categories.wordpress %}
	<li>
		<a href="{{post.permalink}}">{{post.title}}</a>
	</li>
	{% endfor %}
</ul>