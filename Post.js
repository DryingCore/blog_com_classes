const Author = require("./Author");
const Comment = require("./Comment");

class Post {
	constructor(post, name, age, city, ...comment) {
		this.post = [post];
		this.comment = new Comment(comment);
		this.author = new Author(name, age, city);
	}

	postSomething(postToUp) {
		this.post.push(postToUp);
	}
}