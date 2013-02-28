A Blog Template for Github 
====
* Do you have a Jekyll problem?
* Do you want a the Github Blog?
* Do you like the Markdown for your Blog?
* Do you want to update your Blog on line?
* Do you have no ruby environment?

Try TylerChen's Blog Template!
----
Just Checkout the template and Push to your gh-pages branch [https://github.com/tylerchen/tylerchen-blog-template.git](https://github.com/tylerchen/tylerchen-blog-template.git)

Or you can [fork me here](https://github.com/tylerchen/tylerchen-blog-template/fork).

No gh-pages branch? read the gitgub pages and create it first.

My Blog is here [Tyler Chen's Blog](http://tylerchen.github.com/Blogs/).

Send me email [iffiff1@gmail.com](mailto:iffiff1@gmail.com) if you have the problem on using it.

And Thanks those guys writing the markdown parse javascripts.


Tutorial
====

#### Add a new blog

1. First create a MD file on github, such as myblog.md
2. Find the section on index.html, this is the articles list

    `
        <ul class="nav nav-list">
    `

3. Add a article link, you can notice the "?md=myblog.md", the javascript will process the "md" parameter and read the md file "myblog.md" and translate the file to the html

    `
        <li><a href="?md=myblog.md"><i class="none"></i>My Blog</a></li>
    `

4. The content area

    `
        <div id="bodyColumn"  class="span9"></div>
    `

