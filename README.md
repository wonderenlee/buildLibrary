# Build a Library
Congratulations, you’ve become head librarian at your local Books-‘N-Stuff, which is in dire need of your help. They’re still using index cards to organize their content! Yikes.

But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.

Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

Book
Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
Movie
Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
CD
Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

### To recognize when to create a setter, consider the following:

1. **Property Privacy**: If a property is private (often indicated by a leading underscore, e.g., `_property`), and you want to allow controlled updates, a setter is useful.

2. **Validation Needs**: If changes to a property require validation or constraints (e.g., ensuring a number is positive), a setter can enforce these rules.

3. **Side Effects**: If updating a property should trigger additional actions (e.g., logging, updating related properties), a setter can handle these.

4. **Encapsulation**: If you want to maintain control over how a property is modified, use a setter to encapsulate the logic. 

Setters help manage how properties are updated, ensuring data integrity and consistency.
