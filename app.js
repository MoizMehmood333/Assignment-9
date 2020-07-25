var list = document.getElementById('list')

function addTodo() {
    var todo_item = document.getElementById('todo-item')
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
          
    // var liText = document.createTextNode("Moiz")
    // var liText ="Moiz"                  //same as above
    // liTag.innerHTML = liText
    li.appendChild(liText)
    list.appendChild(li)
    todo_item.value= ""

    var deleteButton = document.createElement('button')
    var delteText = document.createTextNode("DELETE")
    deleteButton.appendChild(delteText)

    li.appendChild(deleteButton)
    deleteButton.setAttribute("class", "btn")
    deleteButton.setAttribute("onclick", "deleteItem(this)")
    li.setAttribute("class", "li")
    console.log(li)

    //create edit buttom
    var editButton = document.createElement('button')
    var editText = document.createTextNode('EDIT')
    editButton.appendChild(editText)
    li.appendChild(editButton)
    editButton.setAttribute("class", "btn")
    editButton.setAttribute("onclick", "editItem(this)")


}




function deleteItem(e) {
    // console.log("Ane diya chal raha hay ye cusmelun")
    // console.log(e.parentNode)
    e.parentNode.remove()
}

function deleteAll() {
    list.innerHTML = ""
}

function editItem(e) {
    // e.parentNode.childNodes[0].nodeValue = "ahmed"
    // console.log(e.parentNode.childNodes[0] )
    // e.parentNode.firstChild = "Ali"
    var val = e.parentNode.firstChild;
    var editValue = prompt("Enter edit Value" , e.parentNode.firstChild.nodeValue)
    val.nodeValue = editValue
    // console.log(e.parentNode.firstChild )

}