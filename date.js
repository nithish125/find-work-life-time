var selectyear=document.getElementById("year")
var selectmonth=document.getElementById("month")
var selectdate=document.getElementById("date")
console.log(selectmonth)


//console.log( selectdate)
function findmonth(){
     var m=selectmonth.value
     console.log(m)
     
     
 if( m==2){
    
    if(selectyear.value%4==0){
        selectdate.innerHTML=''
        for(i=1;i<=29;i++){
            var option = document.createElement("option");
            option.innerText=i
            selectdate.add(option)
            
            
        }
        
    }
    else{
        selectdate.innerHTML=''
        for(i=1;i<=28;i++){
            var option = document.createElement("option");
            option.innerText=i
            selectdate.add(option)
            
        }
    }
    
 }
 else if(m==1||m==3||m==5||m==7||m==8||m==10||m==12){
    selectdate.innerHTML=''
    for(i=1;i<=31;i++){
        var option = document.createElement("option");
            option.innerText=i
            selectdate.add(option)
    }
 }
 else{
    selectdate.innerHTML=''
    for(i=1;i<=30;i++){
        var option = document.createElement("option");
            option.innerText=i
            selectdate.add(option)
        
    }  
 }
 console.log(selectyear.value)
} 
//  var x=function myF(k) {
    
//     var option = document.createElement("option");
//     option.value = "k";
//     console.log(option.value);
//     option.text = "k";
//     selectdate.add(option);
//   }

