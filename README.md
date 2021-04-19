# coding-challenge
Make an api GET request (url:https://api.chucknorris.io/jokes/random?category=career)
at the interval of one second till five second.
● Store the result of all five responses in an array.but array should not store duplicate
jokes (HINT: In response, object id will always be different for different jokes).
● Add a field ‘isJokeUpdated’ in each joke object inside the array with the value as true if
the ‘updated_at’ is after ‘created_at’ and false if equals.
● Add a field ‘jokeLength’ in each joke object inside the array with value as the length of
joke(HINT: value in the response object is the actual joke)
● Sort the array in descending order of ‘jokeLength’
