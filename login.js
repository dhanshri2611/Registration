let email = document.getElementById("email");
let password = document.getElementById("password");

function fetchLoginData(){

	let userCred = JSON.parse(localStorage.getItem("userData"));

	if (((email.value)==(userCred.userName))&&(password.value)==(userCred.password)) {
		open("home.html");
	}
	else{
		alert("Wrong Credentials!!");
	}
}