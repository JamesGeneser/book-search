var searchBtn = $("#searchbutton");

    function getUserInput(event){
        event.preventDefault()
        searchInput = $("#searchinput").val()
        localStorage.setItem("userSearch",searchInput)
       
        location.href = "bookpage.html"

        console.log(searchInput)
    }


// function resultsPageLoad(){
//     var resultsPageUrl = "bookpage.html"
//     location.assign(resultsPageUrl)
    
// }
// resultsPageLoad()

searchBtn.click(getUserInput)