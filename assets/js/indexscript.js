var searchBtn = $("#searchbutton");
var searchHistory = [];
var search = "";

function getUserInput(event) {
  event.preventDefault();
  searchInput = $("#searchinput").val();
  localStorage.setItem("userSearch", searchInput);

  searchHistory.push(searchInput);

  localStorage.setItem("searchHistory", JSON.stringify(searchHistory));

  location.href = "bookpage.html";

  console.log(searchInput);
}

function createSearchHistoryButton(search) {
  var savedSearches = $("#bookShelf");

  savedSearches.append("<button>" + search + "</button>");
}

function renderUserSearch() {
  var userSearchHistory = localStorage.getItem("searchHistory");
  if (userSearchHistory) {
    searchHistory = JSON.parse(userSearchHistory);
    for (var i = 0; i < searchHistory.length; i++) {
      search = searchHistory[i];
      console.log(search);
      createSearchHistoryButton(search);
    }
  }
}

//   } else if ((userSearchHistory = "")) {
//     var errorMessage = "No search criteria provided.  Please try again.";
//     $("searchinput").append(errorMessage);
//     return errorMessage;
//createSearchHistoryButton()
renderUserSearch();
searchBtn.click(getUserInput);
