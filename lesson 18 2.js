 




 
let title = document.getElementById("title")
let username = localStorage.getItem("username")

title.innerHTML = "ברוך הבא "+ username


if(username == null){
location.href = "index.html"
}


let total = 0
let amount = document.getElementById("amount")
let bruhcheck = localStorage.getItem("total")

 if (bruhcheck){
total = Number(bruhcheck)
amount.innerHTML = total
 }



function change(num){


total = total + num
amount.innerHTML = total
localStorage.setItem("total", total)
}

function logout(){
localStorage.removeItem("total", "username")
location.href = "index.html"
}


if (username == "עידו"){
total = 100000
amount.innerHTML = total
title.innerHTML = "מה מצב יגבגבר עידו"
}
else if (username == "פלג" ){
total = -1
amount.innerHTML = total
title.innerHTML = "פלגון השלגון"
}

