
$(document).ready(function () {


var searchInput = "theBeatles"
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

        var searchArr = data.items;
        for (var i = 0; i < searchArr.length; i++) {
        console.log(data.items)
        var titleResults = searchArr[i].volumeInfo.title;
        
        
        console.log("volumeinfo.title"+titleResults)
   
        $("#title-"+i).text(titleResults)
        
        var authorResults = searchArr[i].volumeInfo.authors;
        console.log(authorResults)
        $("#author-"+i).text(authorResults)
    }
    }
    )
}
getApiSearchResults()  


// function getWikiMediaApi(){
//     // var wikiQuery = "komodo"
//     var wikiEndPointURL = "http://en.wikipedia.org/w/api.php"
//     var wikiParameters = "?action=query"
//     +"&list=search"
//     +"&srsearch=Craig%20Noone"
    
//     +"&origin=*"
//     +"&format=json"
//     var wikiApiLink = wikiEndPointURL + wikiParameters



    
//     fetch(wikiApiLink)
//     .then(function(response) {
//         console.log(response.status)
//         return response ;
//     })
//         .then(function (data){
//             console.log(data)
//         })
// }
// getWikiMediaApi()


var wikiEndPoint = "https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search="
var wikiQuery = "komodo"
var wikiFetchUrl = wikiEndPoint+wikiQuery
fetch(wikiFetchUrl)
.then(function(response) {
    console.log(response.status);
    return response.json()
})
.then(function(data) {
    console.log(data);
}
)
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
})