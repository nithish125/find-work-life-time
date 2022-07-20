var selectyear = document.getElementById("year")
var selectmonth = document.getElementById("month")
var selectdate = document.getElementById("date")
var retainment1 = document.getElementById("retainment1")
for (i = 40; i < 65; i++) {
    var option1 = document.createElement("option");
    option1.setAttribute("value", i)
    option1.innerText = i
    retainment1.append(option1)
}

function findmonth() {
    var m = selectmonth.value
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
            option.setAttribute("value", i)
            option.innerText = i
            selectdate.append(option)
        }

    }
    else {
        selectdate.innerHTML = ''
        for (i = 1; i <= 30; i++) {
            var option = document.createElement("option");
            option.setAttribute("value", i)
            option.innerText = i
            selectdate.append(option)

        }
    }
    var selectyear1 = parseInt(selectyear.value)
    var dob = new Date(selectyear.value, m - 1, 7)
    var crrentdate = new Date()
    var crrentyear = crrentdate.getFullYear()
    var crrentmon = crrentdate.getMonth()
    var crrentdates = crrentdate.getDate()

    var crrentmon1 = crrentmon - parseInt(m)

    var button1 = document.getElementById("go")
    button1.addEventListener("click", go)
    function go() {


        years = ((selectyear1 + parseInt(retainment1.value)) - crrentyear)
        var final = document.getElementById("final")
        var final1 = document.getElementById("final1")
        console.log(years)

       
var finddates=(parseInt(selectdate.value))
        if (years < 0) {
            final1.append("already rataied person")
        }
        var balancemonth = ((11 - crrentmon) +parseInt(m))
        console.log(balancemonth)
        var balancedates
        //Date
        var div2 = document.createElement("div")
        if(finddates<crrentdates){
        if (m == 2) {
            if (selectyear.value % 4 == 0) {
                balancedates = (28 - crrentdates) +finddates;
            }
            else {
                balancedates = (27 -crrentdates) +finddates;
            }
        }
        else if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
            balancedates = (30 - crrentdates) +finddates;
        }
        else {
            balancedates = (29 - crrentdates) +finddates;
        }
        console.log(balancedates)
    }
    else if( finddates>crrentdates){
        balancedates=finddates-crrentdates;
        console.log(balancedates)
    }
        for (i = 0; i < balancedates; i++) {
            var balancedate = document.createElement("button")
            balancedate.setAttribute("class", "circle3")
            balancedate.innerText="d"
            div2.append(balancedate)
            final1.append(div2)
        }
        

        //mon
         if(m<crrentmon){
            balancemonth = ((10 - crrentmon) +parseInt(m))
       }
       else if(m>crrentmon){
            years =parseInt(years)+ 1
            balancemonth -=13;
            
        }
       
        var divi = document.createElement("div")
        for (i = 0; i <= balancemonth; i++) {

            var balancemonths = document.createElement("button")
            balancemonths.setAttribute("class", "circle1")
            balancemonths.innerText="m"
            divi.append(balancemonths)
            final1.append(divi)
        }
        var div1 = document.createElement("div")
        for (i = 0; i < years; i++) {
            var balanceyear = document.createElement("button")
            balanceyear.setAttribute("class", "circle2")
            balanceyear.innerText="y"
            div1.append(balanceyear)
            final1.append(div1)
        }
       
       console.log (typeof(crrentdates))
       console.log(crrentdates)
       
    }
    selectyear.addEventListener("change" ,rese)
    console.log(final1)
}
function rese(){
    final1.append('')
}