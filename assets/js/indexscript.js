$()



    
        
       
        searchInput = $("#searchinput").val()
        console.log(searchInput)



function resultsPageLoad(){
    var resultsPageUrl = "bookpage.html"
    location.assign(resultsPageUrl)
    
}
resultsPageLoad()

searchBtn.click(setUserSearch)