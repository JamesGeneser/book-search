var searchBtn = $("#searchbutton");
var searchHistory = []
var search = ""
var searchInput = ""

    function getUserInput(event){
        event.preventDefault()
        searchInput = $("#searchinput").val()
        localStorage.setItem("userSearch",searchInput)


        searchHistory.push(searchInput)

        localStorage.setItem("searchHistory", JSON.stringify(searchHistory))
    
        location.href = "bookpage.html"

        console.log(searchInput)
        
        
    }

    function createSearchHistoryButton(search){
    
        var savedSearches = $("#bookShelf")

    
    savedSearches.append("<button class='searchHistoryBtn'>"+search+"</button>")
        }
    
    

    function renderUserSearch(){
       
        var userSearchHistory = (localStorage.getItem("searchHistory"))
        if (userSearchHistory){
            searchHistory= JSON.parse(userSearchHistory)
            for(var i = 0; i<6; i++){
                search = searchHistory[i]
                console.log(search)
                createSearchHistoryButton(search)
        }}
    }

    function searchSavedHistory(event){
        var selectedSearch = $(event.target).text()
        console.log(selectedSearch)
        selectedSearch =  searchInput
        getUserInput()
    }



//createSearchHistoryButton() 
renderUserSearch()
searchBtn.click(getUserInput)
//when user clicks saved history buttons, searchSavedHistory populates the search input value
$(".searchHistoryBtn").click(searchSavedHistory)