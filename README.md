### SoBA iOS Web Development

#### Node and Express

Please fork this repository to your GitHub account and clone it to your machine

##### Homework

Based on the sample code including in this repository, I'd like you to create a simple, read-only blog that contains posts and comments. You'll need to implement the front-end and back-end code for this using jQuery, Twitter Bootstrap and underscore for the interface and node for the server.

**Interface**

Your simple blog will be a single-page web application in which a user request to the server only ever loads the index.html file. From index.html you should make an immediate [AJAX](http://en.wikipedia.org/wiki/Ajax_(programming\)) request to the server's api for all the blog posts (see the $.getJSON() call commented out in the html). Use underscore templates and jQuery to create and inject html into the web page that shows all the blog posts.

Each post should have a comment link. You'll need to use jQuery to intercept the click event for this link to then make an AJAX request to the server api for the comments for that particular post. You should then replace the content on the web page with the comments for the post. Or for a challenge, use a show and hide animation to reveal the comments under the post and to hide them again.

Style the page however you like using Twitter bootstrap and additional custom CSS, but maybe at least give it a navigation bar and make it looke nice!

**Server**

Your server should implement two controllers for the posts and comments and support the standard RESTful routes for CRUD manipulation of these resources, although you won't need to implement every method. Refer to the sample code for templates. You will need to implement every file on the server. You have, however, been given some fake model data, but you will need to implement the model methods that access it.

##### Resources

1. [Node API Reference](http://nodejs.org/api/)
2. [Express API Reference](http://expressjs.com/api.html)
3. [Connect Middleware](http://www.senchalabs.org/connect/)
4. [Node Package Manager API Reference ](https://npmjs.org/doc/)
5. [Desigining Routes (Ruby on Rails)](http://guides.rubyonrails.org/routing.html#crud-verbs-and-actions)


