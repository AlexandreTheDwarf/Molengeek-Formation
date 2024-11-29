function capitalize (word){
    if (isNaN(word)){
        word = word.toLowerCase()
        result = (word[0]).toUpperCase() + word.slice(1)
        console.log(result)
    }
    else{
        console.log("it's not a word")
    }
}

capitalize("alexandre")
capitalize(3)

