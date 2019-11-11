function clickk()  {
    var userName =document.getElementById("user");
    var passWord =document.getElementById("pass");    
    var curUser="Yahia Ashraf";
    var curPass="12345678";
    if(userName.value == curUser){
        if(passWord.value == curPass){
            window.alert("You are logged in as " + user.value);
        }else {
			window.alert("Incorrect username or password!");
        }
        window.open("home.html") ;
    }else {
        window.alert("Incorrect username or password!");
    }
}