// create parent class Media
class Media {
    // create constructor for parent class
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    // create getters
    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    // create setter
    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }

    // create methods
    // create method toggleCheckOutStatus that changes the value saved to the _isCheckedOut property
    toggleCheckOutStatus() {
        if (this_.isCheckedOut === true) {
            return (this._isChecekedOut = false);
        } else {
            return (this._isCheckedOut = true);
        }
    }

    getAverageRating() {
        let ratingsSum = this.ratings.reduce(
            (currentSum, rating) => currentSum + rating,
            0
        );
        const ratingsLength = this.ratings.length;
        ratingsAvg = ratingsSum / ratingsLength;
        return ratingsAvg;
    }

    addRating(value2) {
        this.addRating.push(value2);
    }
}

// create child class Book
class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author;
        this._pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

// create child class Movie
class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director;
        this._runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}
// create a Book instance
const historyOfEverything = new Book(
    'Bill Bryson',
    'A Short History of Nearly Everything',
    544
);


historyOfEverything.toggleCheckOutStatus;

console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4,5,5)*3;

historyOfEverything.getAverageRating();
// create a Book instance
const speed = new Movie("Jan de Bont", "Speed", 116);

speed.toggleCheckOutStatus;

console.log(speed.isCheckedOut);

speed.addRating(1,1,5)*3;

speed.getAverageRating();
