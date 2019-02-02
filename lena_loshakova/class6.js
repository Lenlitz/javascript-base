var STATE = { // STATE object
student: {}, // student object
prepod: {}
}
runMyApp();


function runMyApp(){
    showMessage();
    askNextCommand();
}
function showMessage(){
 document.write("Hello!");
    var WelcomeText = `
     <div class = "container"> 
     <p>Hello</p>
      </div> `
    showAll( showStyle() + WelcomeText);
}
function showAll(text){
    document.write(text);
}

function showStyle(){
var STYLE = `
<style>
.container {
padding: 10px;
border: 1px;
}
</style>
`;
 return STYLE;
}

function askNextCommand(){
    var command = prompt("Enter the command :");
    if(command == 0){
        showByeMessage();
    } else {
        askNextCommand();
    }
    }
 function showByeMessage(){
     var ByeText = `
     <div class = "container"> 
     <p>Bye</p>
      </div> `
 ClearScreen();
 showAll(showStyle() + ByeText);
 }

 function ClearScreen(){
     document.body.innerHTML ="";
 }
