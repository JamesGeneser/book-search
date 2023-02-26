$(document).ready(function () {
  var searchInput = "universeinanutshell";
  var apiKey = "AIzaSyDyUh9tTZjRYDn1uNQbyK8fgrSAGsMKnW4";
  var apiURL =
    "https://www.googleapis.com/books/v1/volumes?q=" +
    searchInput +
    "&key=" +
    apiKey;

  var searchInput = "infinitejest";
  var apiKey = "AIzaSyDyUh9tTZjRYDn1uNQbyK8fgrSAGsMKnW4";
  var apiURL =
    "https://www.googleapis.com/books/v1/volumes?q=" +
    searchInput +
    "&key=" +
    apiKey;

  function getApiSearchResults() {
    fetch(apiURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data.items);
        var searchArr = data.items;
        for (var i = 0; i < searchArr.length; i++) {
          var titleResults = searchArr[i].volumeInfo.title;

          titleId = searchArr[i].id;
          console.log("volumeinfo.title" + titleResults);
          console.log(titleId);
          $("#titleResults").append(
            "<li href='bookpage.html' class='links' id=" +
              titleId +
              " >" +
              titleResults +
              "</li>" +
              "<br>"
          );

          var authorResults = searchArr[i].volumeInfo.authors;
          console.log(authorResults);
          $("#authorResults").append("<li>" + authorResults + "</li>" + "<br>");
        }
      });
  }
  getApiSearchResults();

  function getWikiMediaApi() {
    var wikiQuery = "komodo";
    var wikiApiURL =
      "http://en.wikipedia.org/w/api.php" +
      "?action=query" +
      "&list=search" +
      "&srsearch=" +
      "&origin=*";
    wikiQuery + "&format=json";
    fetch(wikiApiURL)
      .then(function (response) {
        console.log(response.status);
        return response;
      })
      .then(function (data) {
        console.log(data);
      });
  }
  getWikiMediaApi();
});
// function getSpecificVolumeApi(event){
//         // event.preventDefault()
//         var idNum = event.target.id
//         console.log(idNum)

//         var titleSearchApiUrl = "https://www.googleapis.com/books/v1/volumes/"+
//         idNum +
//         "?key="+
//         apiKey;

//         fetch(titleSearchApiUrl)
//         .then(function (response) {
//             console.log(response.status)
//           return response.json();

//         })
//         .then(function (data) {
//         console.log(data);
//         var bookTitle = data.volumeInfo.title
//         console.log(bookTitle)
//         var bookAuthorArr = data.volumeInfo.authors
//         console.log(bookAuthorArr)
//         var bookMainAuthor = bookAuthorArr[0]
//         console.log(bookMainAuthor)
//         var bookPublishDate = data.volumeInfo.publishedDate
//         console.log(bookPublishDate)
//         var bookPublisher = data.volumeInfo.publisher
//         console.log(bookPublisher)
//         var bookDescription = data.volumeInfo.description
//         console.log(bookDescription)

//     })
//     }

// var authorResults = searchArr[i].volumeInfo.authors
// // console.log("volumeinfo.authors"+authorResults);

//   function showBookData(event){
//     event.preventDefault()
//     var idNum =
//     console.log(idNum)
//}

// selectedTitle = event.target.textContent
// var idNum = selectedTitle.attr("id")
// console.log(idNum)
//Specific book search
// var bookApiURL = "https://www.googleapis.com/books/v1/volumes/"+
//  +

// "&key=" +
// apiKey;
// fetch(bookApiURL)
//  .then(function (response) {
//     return response.json();
//  })
// .then(function (data) {
//     console.log(data.items);

// })

////Book Results

//   var eTag = searchArr[j].etag
// var bookTitle = array
// var authorName =
