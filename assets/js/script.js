var apiURL = "https://www.googleapis.com/books/v1/volumes?q=mobydick+inauthors:melville&key=AIzaSyDyUh9tTZjRYDn1uNQbyK8fgrSAGsMKnW4"



fetch(apiURL)
.then(function(response){
    //console.log(response)
    return response.json()

})
.then(function(data){
    console.log(data)
})