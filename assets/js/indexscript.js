var searchBtn = $("#searchbutton");
var searchHistory = [];
var search = "";
var searchInput = "";

function getUserInput(event) {
  event.preventDefault();
  searchInput = $("#searchinput").val().trim();
  if (!searchInput) {
    M.toast({ html: "Please enter a valid Title" });
    return;
  }
  localStorage.setItem("userSearch", searchInput);

  searchHistory.push(searchInput);

  localStorage.setItem("searchHistory", JSON.stringify(searchHistory));

  location.href = "bookpage.html";
}

function createSearchHistoryButton(search) {
  var savedSearches = $("#bookShelf");

  savedSearches.append(
    "<button class='searchHistoryBtn waves-effect waves-light btn-small'>" + //don't forget to unedit if this doesnt work.
      search +
      "</button>"
  );
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

function searchSavedHistory(event) {
  var selectedSearch = $(event.target).text();
  console.log(selectedSearch);
  localStorage.setItem("selectedSearch", selectedSearch);
  location.href = "bookpage.html";
}

//createSearchHistoryButton()
renderUserSearch();
searchBtn.click(getUserInput);
//when user clicks saved history buttons, searchSavedHistory populates the search input value
$(".searchHistoryBtn").click(searchSavedHistory);
