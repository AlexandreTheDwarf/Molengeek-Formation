let codingSchoolX = []

function push(x)  {
    codingSchoolX.push(x)
    console.log(codingSchoolX)
}

function remove(x)  {
  if (codingSchoolX.includes(x)){
      codingSchoolX.pop(x)
      console.log(codingSchoolX)
  }
  else{
    console.log(x + " ne se trouve pas dans la liste")
  }
  
}

push("Alexandre")
push("Jordan")

remove("Jordan")
remove("Pierre")

