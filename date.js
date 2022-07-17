var selectyear = document.getElementById("year")
var selectmonth = document.getElementById("month")
var selectdate = document.getElementById("date")
console.log(selectmonth)
function findmonth() {
    var m = selectmonth.value
    console.log(m)
    if (m == 2) {
        if (selectyear.value % 4 == 0) {
            selectdate.innerHTML = ''
            for (i = 1; i <= 29; i++) {
                var option = document.createElement("option");
                option1.setAttribute("value", i)
                option.innerText = i
                selectdate.append(option)
            }
        }
        else {
            selectdate.innerHTML = ''
            for (i = 1; i <= 28; i++) {
                var option = document.createElement("option");
                option1.setAttribute("value", i)
                option.innerText = i
                selectdate.append(option)
            }
        }
    }
    else if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
        selectdate.innerHTML = ''
        for (i = 1; i <= 31; i++) {
            var option = document.createElement("option");
            option1.setAttribute("value", i)
            option.innerText = i
            selectdate.append(option)
        }
    }
    else {
        selectdate.innerHTML = ''
        for (i = 1; i <= 30; i++) {
            var option = document.createElement("option");
            option1.setAttribute("value", i)
            option.innerText = i
            selectdate.append(option)
        }
    }
    var selectyear1=parseInt(selectyear.value)
     
    console.log(selectyear.value)
    var dob = new Date(selectyear.value, m - 1, 7)
    var newdate = new Date()
    var remain1 = newdate.getFullYear()
   var  remainmon=newdate.getMonth()
    var remain = new Date(remain1, m - 1, 6)
   var remainmon1= remainmon -parseInt(m)
   console.log(remainmon1)
    var button1 = document.getElementById("go")
button1.addEventListener("click", go)
function go() {
    x = findmonth()
     console.log(newdate)
    reamia1=remain.getFullYear()
     years=remain1 -selectyear1
  var final=document.getElementById("final")
  var final1=document.getElementById("final1")
 console.log( years)
m1=remainmon-m;


var yearsp2= (selectyear1+(retainment1.value))+reamia1;

console.log(yearsp2)
typeof(yearsp2)
for(i=0;i<yearsp2;i++){
    var balanceyear=document.createElement("button")
    balanceyear.style.backgroundColor = "yellow";
    final1.append(balanceyear)
}
 for(i=0;i<years;i++){

    var finishedyear=document.createElement("button")
    finishedyear.style.backgroundColor = "red";
    final.append(finishedyear)

 }
  gmonth=12-parseInt(m) ;
  console.log(gmonth)
 for(i=1;i<=gmonth;i++){
    var finishedmonths=document.createElement("button")
     finishedmonths.style.backgroundColor = "blue";
     final.append(finishedmonths)
  }
  for(i=0;i< remainmon1;i++){
    var balancemonth=document.createElement("button")
    balancemonth.style.backgroundColor = "green";
    final1.append(balancemonth)
  }
  
}
 

}


for (i = 40; i < 65; i++) {
    var option1 = document.createElement("option");
    option1.setAttribute("value", i)
    option1.innerText = i
    retainment1.append(option1)
}


// retainment.addEventListener("change",store)
// function store(){

// }