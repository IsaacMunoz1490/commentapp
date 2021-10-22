function todoList() {
	var username = document.getElementById("username").value
	var comment = document.getElementById("input").value  
  
	var userNameText = document.createTextNode(username)
	var commentText = document.createTextNode(comment)

	var newListItem = document.createElement("h1")
	newListItem.className = "comments"
	var newUserName = document.createElement("p")
	newUserName.appendChild(userNameText)
	var newComment = document.createElement("p")
	newComment.appendChild(commentText)

	newListItem.appendChild(newUserName)
	newListItem.appendChild(newComment)
	document.getElementById("commentList").appendChild(newListItem)
}
