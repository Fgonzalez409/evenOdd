let userWord = ""

let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")

function updateWord(element) {
    userWord = element.value

  }

  function handleSubmit() {
    let newListItem = document.createElement('LI')
    newListItem.innerText = userWord
    console.log('length', userWord.length)
  
    if(userWord.length === 0){
        alert("Please enter text!")
    }

    if(userWord.length % 2 === 0) { 
        /*put word in even lists*/
        evenList.appendChild(newListItem)
      } else {
        /*put word in odd list*/
        oddList.appendChild(newListItem)
      }

    
    userWord = ""
    document.getElementById("even-odd-form").reset()
  }