---
layout: page
title: WordPress
permalink: /snippets/wordpress/
---

Back to [Snippets]({{ site.baseurl }}/snippets)
<ul>
	{% for post in site.categories.wordpress %}
	<li>
		<a href="{{post.permalink}}">{{post.title}}</a>
	</li>
	{% endfor %}
</ul>