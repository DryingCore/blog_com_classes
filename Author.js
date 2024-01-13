class Author {
    constructor(name, age, city) {
        this.name = name
        this.age = age
        this.city = city
    }

    makeOneLine() {
        return console.log(`Post by ${this.name}, ${this.age} years old, ${this.city}`)
    }
}

module.exports = Author