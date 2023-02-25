// var apiURL = "https://www.googleapis.com/books/v1/volumes?q=mobydick+inauthors:melville&key=AIzaSyDyUh9tTZjRYDn1uNQbyK8fgrSAGsMKnW4"



// fetch(apiURL)
// .then(function(response){
//     //console.log(response)
//     return response.json()

// })
// .then(function(data){
//     console.log(data)
// })
var searchInput = "universeinanutshell"
var apiKey = "AIzaSyDyUh9tTZjRYDn1uNQbyK8fgrSAGsMKnW4"
var apiURL =
  "https://www.googleapis.com/books/v1/volumes?q="+
  searchInput +
  "&key=" +
  apiKey;

fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.items);
    var searchArr = data.items;
    for (var i = 0; i < searchArr.length; i++) {
        
        var titleResults = searchArr[i].volumeInfo.title;
        // console.log("volumeinfo.title"+titleResults)
        $("#titleResults").append("<a href='' >" + titleResults + "</a>")
        

        var authorResults = searchArr[i].volumeInfo.authors
        // console.log("volumeinfo.authors"+authorResults);
        $("#authorResults").append("<li>" + authorResults + "</li>")

    //   console.log("volumeinfo.description"+searchArr[i].volumeInfo.description);


      

        var linkEl = $("#titleResults")
        console.log(linkEl)
        linkEl.on("click",showBookData)

//Specific book search 
        // var bookApiURL = "https://www.googleapis.com/books/v1/volumes?q="+
        // selectedTitle +
        // "&key=" +
        // apiKey;
        // fetch(bookApiURL)
        //  .then(function (response) {
        //     return response.json();
        //  })
        // .then(function (data) {
        //     console.log(data.items);
         
        // })

    }
  }
  )
var selectedTitle = ""
  function showBookData(event){
    event.preventDefault()
    selectedTitle = event.target.textContent
    console.log(selectedTitle)
  }
  ////Book Results

//   var eTag = searchArr[j].etag
// var bookTitle = array 
// var authorName =
