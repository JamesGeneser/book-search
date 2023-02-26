var userInput = $("#textarea1");
var searchBtn = $("#searchbutton");
var searchInput = "";
var searchHistory = [];

$(document).ready(function () {
  var searchInput = "theBeatles";
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
        var searchArr = data.items;
        for (var i = 0; i < searchArr.length; i++) {


          console.log("volumeinfo.title" + titleResults);


          var authorResults = searchArr[i].volumeInfo.authors;
          console.log(authorResults);
          $("#author-" + i).text(authorResults);
        }
      });
  }
  getApiSearchResults();

  function setUserSearch() {} //function I think we will use to set the values of the users search in local storage as a JSON object.  I have the array for this already declared in global as searchHistory.  I believe we will want to pass this function an argument equal to the var we declare in the event listener at bottom of page.

  function renderUserSearch() {} //function I think we will use to retrieve user inputs from local storage parsed back into js.  This will not be passed an argument BUT it will call our createButton function.

  function createButton() {} //This function will dynamically create a button upon a user searching.  We can apply a class to this button so that they are all uniform in size and appearance.  Need to create an id in the dom to reference where we want all these buttons appended.

