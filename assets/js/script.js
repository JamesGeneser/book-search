
$(document).ready(function () {


var searchInput = "universeinanutshell"
var apiKey = "AIzaSyDyUh9tTZjRYDn1uNQbyK8fgrSAGsMKnW4"
var apiURL =
  "https://www.googleapis.com/books/v1/volumes?q="+
  searchInput +
  "&key=" +
  apiKey;

function getApiSearchResults(){
    fetch(apiURL)
    .then(function (response) {
     return response.json();
     })
         .then(function (data) {
        console.log(data.items);
        var searchArr = data.items;
        for (var i = 0; i < searchArr.length; i++) {
        
        var titleResults = searchArr[i].volumeInfo.title;

        titleId = searchArr[i].id
        console.log("volumeinfo.title"+titleResults)
        console.log(titleId)
        $("#titleResults").append("<a href='' class='links' id="+titleId+" >" + titleResults + "</a>"+ "<br>").click(getIdApi)
        }
    }
    )
}
getApiSearchResults()  

function getIdApi(event){
        event.preventDefault()
        var idNum = event.target.id
        console.log(idNum)

        var titleSearchApiUrl = "https://www.googleapis.com/books/v1/volumes/"+
        idNum +
        "?key="+
        apiKey;
       
        fetch(titleSearchApiUrl)
        .then(function (response) {
            console.log(response.status)
          return response.json();
          
        })
        .then(function (data) {
          console.log(data);
          var bookTitle
          var bookSubTitle
          var bookAuthor
          var bookPublishDate
          var bookPublisher
          var bookPageCount

})
}

        // var authorResults = searchArr[i].volumeInfo.authors
        // // console.log("volumeinfo.authors"+authorResults);
        // $("#authorResults").append("<li>" + authorResults + "</li>")

    }
)


        



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
