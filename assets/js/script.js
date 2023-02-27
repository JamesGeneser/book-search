$(document).ready(function () {
  if (localStorage.getItem("selectedSearch") === null) {
    var searchInput = localStorage.getItem("userSearch");
  } else {
    searchInput = localStorage.getItem("selectedSearch");
    localStorage.removeItem("selectedSearch");
  }

  var apiKey = "AIzaSyDyUh9tTZjRYDn1uNQbyK8fgrSAGsMKnW4";
  var apiURL =
    "https://www.googleapis.com/books/v1/volumes?q=" +
    searchInput +
    "&maxResults=19" +
    "&key=" +
    apiKey;



  //GOOGLE BOOKS API; returns data on titles that match user search//
  function getGoogleBooksApiSearchResults() {
    fetch(apiURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var searchArr = data.items;
        for (var i = 0; i < searchArr.length; i++) {
          console.log(data);
          var titleResults = searchArr[i].volumeInfo.title;
          $("#title-" + i).text(titleResults);
          console.log(titleResults);
          var authorResults = searchArr[i].volumeInfo.authors;
          $("#author-" + i).text(authorResults);
            var googleBookAddress = searchArr[i].volumeInfo.canonicalVolumeLink
            console.log(googleBookAddress)
            
          $("#googleLink-"+i).text("<a href"+googleBookAddress+"></a>")
        }
      });
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

          $("#wikiLinks").append(
            "<a href=" + wikiHyperlinks + ">" + wikiList + "<a>"
          );
        }
      });
  }
  getWikipediaApiSearchResults();
});

function backToSearch() {
  location.href = "index.html";
}

$("#backToSearch").on("click", backToSearch);

//function I think we will use to set the values of the users search in local storage as a JSON object.  I have the array for this already declared in global as searchHistory.  I believe we will want to pass this function an argument equal to the var we declare in the event listener at bottom of page.

function renderUserSearch() {} //function I think we will use to retrieve user inputs from local storage parsed back into js.  This will not be passed an argument BUT it will call our createButton function.

function createButton() {} //This function will dynamically create a button upon a user searching.  We can apply a class to this button so that they are all uniform in size and appearance.  Need to create an id in the dom to reference where we want all these buttons appended.
