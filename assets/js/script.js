var apiURL = "https://www.googleapis.com/books/v1/volumes?q=mobydick+inauthors:melville&key=AIzaSyDyUh9tTZjRYDn1uNQbyK8fgrSAGsMKnW4"



// fetch(apiURL)
// .then(function(response){
//     //console.log(response)
//     return response.json()

// })
// .then(function(data){
//     console.log(data)
// })

var apiURL =
  "https://www.googleapis.com/books/v1/volumes?q=universeinanutshell&key=YOURAPIKEY";

fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.items);
    var testArr = data.items;
    for (var i = 0; i < testArr.length; i++) {
      console.log(testArr[i].volumeInfo.authors);
      console.log(testArr[i].volumeInfo.title);
      console.log(testArr[i].volumeInfo.description);
    }
  });