
var jokes = [];
var i=0;
var interv = setInterval(function () {
  fetch("https://api.chucknorris.io/jokes/random")
  .then(res => res.json())
    .then(data => jokes.push(data));
    i++;  

    if (i > 4) {
      clearInterval(interv);
     console.log(jokes);
      var jokeLength 

     for (i = 0; i < jokes.length; i++) {
      jokeLength = jokes[i].value.length;
      
      console.log(jokeLength);
      if(jokes[i].updated_at == jokes[i].created_at){
        console.log("false");
      }else{
      console.log("true");

      }

    }

    }
  },1000);









    











    