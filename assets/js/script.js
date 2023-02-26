
$(document).ready(function () {


var searchInput = "theBeatles"
var apiKey = "AIzaSyDyUh9tTZjRYDn1uNQbyK8fgrSAGsMKnW4"
var apiURL =
  "https://www.googleapis.com/books/v1/volumes?q="+
  searchInput +
  "&key=" +
  apiKey;

//GOOGLE BOOKS API; returns data on titles that match user search//
function getGoogleBooksApiSearchResults(){
    fetch(apiURL)
    .then(function (response) {
     return response.json();
     })
         .then(function (data) {

        var searchArr = data.items;
        for (var i = 0; i < searchArr.length; i++) {
       
        var titleResults = searchArr[i].volumeInfo.title;
        $("#title-"+i).text(titleResults)
        
        var authorResults = searchArr[i].volumeInfo.authors;
        $("#author-"+i).text(authorResults)
    }
    })
}
getGoogleBooksApiSearchResults()  



//WIKIPEDIA API; returns data on the subjects that match user search//
var wikiEndPoint = "https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search="
var wikiFetchUrl = wikiEndPoint+searchInput

function getWikipediaApiSearchResults(){
fetch(wikiFetchUrl)
    .then(function(response) {
        console.log(response.status);
    return response.json()
    })
    .then(function(data) {
        console.log(data);
    var wikiNamesArr = data[1]
    var wikiLinksArr = data[3]

    for(var i=0; i < wikiNamesArr.length; i++ ){
    wikiList = wikiNamesArr[i]  
        console.log(wikiList)
    wikiHyperlinks = wikiLinksArr[i]
        console.log(wikiHyperlinks)
    
    
    $("#wikiLinks").append("<a href="+wikiHyperlinks+">"+ wikiList +"<a>");
    }
    }
    )
}
getWikipediaApiSearchResults()
})
