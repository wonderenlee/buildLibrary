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
    set isCheckedOut() {
      return this._isCheckedOut;
    }
  
    getAverageRating() {
      return this._getAverageRating;
    }
  
    toggleCheckOutStatus() {
      return this.toggleCheckOutStatus;
    }
  
    addRating() {
      return this.addRating;
    }
  }
  
  // create child class Book
  class Book extends Media {
    constructor(author, pages) {
      super(title, ratings, isCheckedOut);
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
    constructor(director, runTime) {
      super(title, ratings, isCheckedOut);
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
  
  // create child class CD
  class CD extends Media {
    constructor(artist, pages) {
      super(title, ratings, isCheckedOut);
      this._artist;
      this._pages;
    }
  
    get artist() {
      return this._artist;
    }
  
    get pages() {
      return this._pages;
    }
  }
  