function getData(url, callback) {
    fetch(url)
        .then(raw => raw.json())
        .then(result =>{callback(result)

        })
    }
getData("https://randomuser.me/api/",function(result){
        console.log(result.results[0].gender)
        console.log(result.results[0].name.first)
        console.log(result.results[0].location.city)
        console.log(result.results[0].email)
        console.log(result.results[0].phone)
        console.log(result.results[0].dob.age)
        console.log(result.results[0].picture.large)
    
})

//output =
//male
//Albert
//Askeby
//albert.hansen@example.com
//74626659
//36