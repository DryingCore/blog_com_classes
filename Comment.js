class Comment {
    constructor(comment) {
        this.comment = comment
    }

    addComment(...comment) {
        this.comment.push(...comment)
    }
}

module.exports = Comment