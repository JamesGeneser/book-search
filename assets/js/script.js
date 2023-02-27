


var searchHistory = [];

$(document).ready(function () {
  function setUserSearch(event) {
    event.preventDefault();

    searchInput = $("#searchinput").val();
    console.log(searchInput);

<<<<<<< HEAD
    var apiKey = "AIzaSyDyUh9tTZjRYDn1uNQbyK8fgrSAGsMKnW4";
    var apiURL =
      "https://www.googleapis.com/books/v1/volumes?q=" +
      searchInput +
      "&key=" +
      apiKey;
=======
    var searchInput = localStorage.getItem("userSearch");
        
        
  var apiKey = "AIzaSyDyUh9tTZjRYDn1uNQbyK8fgrSAGsMKnW4";
  var apiURL =
    "https://www.googleapis.com/books/v1/volumes?q=" +
    searchInput +
    "&maxResults=19"+
    "&key=" +
    apiKey;
>>>>>>> main

    //GOOGLE BOOKS API; returns data on titles that match user search//
    function getGoogleBooksApiSearchResults() {
      fetch(apiURL)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          var searchArr = data.items;
          for (var i = 0; i < searchArr.length; i++) {
            var titleResults = searchArr[i].volumeInfo.title;
            $("#title-" + i).text(titleResults);

<<<<<<< HEAD
            var authorResults = searchArr[i].volumeInfo.authors;
            $("#author-" + i).text(authorResults);
          }
        });
=======
//GOOGLE BOOKS API; returns data on titles that match user search//
function getGoogleBooksApiSearchResults(){
    fetch(apiURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var searchArr = data.items;
        for (var i = 0; i < searchArr.length; i++) {
       console.log(data)
        var titleResults = searchArr[i].volumeInfo.title;
        $("#title-"+i).text(titleResults)
        console.log(titleResults)
        var authorResults = searchArr[i].volumeInfo.authors;
        $("#author-"+i).text(authorResults)
>>>>>>> main
    }
    getGoogleBooksApiSearchResults();

    //WIKIPEDIA API; returns data on the subjects that match user search//
    var wikiEndPoint =
      "https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=";
    var wikiFetchUrl = wikiEndPoint + searchInput;

    function getWikipediaApiSearchResults() {
      fetch(wikiFetchUrl)
        .then(function (response) {
          console.log(response.status);
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          var wikiNamesArr = data[1];
          var wikiLinksArr = data[3];

          for (var i = 0; i < wikiNamesArr.length; i++) {
            wikiList = wikiNamesArr[i];
            console.log(wikiList);
            wikiHyperlinks = wikiLinksArr[i];
            console.log(wikiHyperlinks);

<<<<<<< HEAD
            $("#wikiLinks").append(
              "<a href=" + wikiHyperlinks + ">" + wikiList + "<a>"
            );
          }
        });
    }
    getWikipediaApiSearchResults();
=======
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
    }}
    )
}
getWikipediaApiSearchResults()
>>>>>>> main

    // function resultsPageLoad(){
    //     setTimeout(location.href = "bookpage.html",)

<<<<<<< HEAD
    // }
    // resultsPageLoad()
  }
  searchBtn.click(setUserSearch);
});
=======
})
        
>>>>>>> main

//function I think we will use to set the values of the users search in local storage as a JSON object.  I have the array for this already declared in global as searchHistory.  I believe we will want to pass this function an argument equal to the var we declare in the event listener at bottom of page.

function renderUserSearch() {} //function I think we will use to retrieve user inputs from local storage parsed back into js.  This will not be passed an argument BUT it will call our createButton function.

function createButton() {} //This function will dynamically create a button upon a user searching.  We can apply a class to this button so that they are all uniform in size and appearance.  Need to create an id in the dom to reference where we want all these buttons appended.
