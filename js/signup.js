function sinupFuction() {
    var signup = document.getElementById("msg");
    signup.className = "show";
    setTimeout(function(){signup.className = signup.className.replace("show", " "); }, 3000);
}