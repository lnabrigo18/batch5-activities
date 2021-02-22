      const loginForm = document.querySelector("form.calculator");
      const loginBtn = document.querySelector("label.login");
      const signupBtn = document.querySelector("label.signup");
      signupBtn.onclick = (()=>{
        loginForm.style.marginLeft = "-50%";
      });
      loginBtn.onclick = (()=>{
        loginForm.style.marginLeft = "0%";
      });

// Calculator Code
document.querySelector("#submit-calculate").addEventListener("click",function(){
  let nameP = document.getElementById("inputName").value;
  let age = document.getElementById("inputAge").value;
  var obj = document.getElementById("inputGender");
  let gender= obj.options[obj.selectedIndex].text;
  let weight = document.getElementById("inputHeight").value;
  let height = document.getElementById("inputWeight").value;  

 var result=0;
    if (gender == 'Female' ){
      result = 447.593 + (9.247 * weight) + (3.098 * height) - (4.33 * age);
          }  
          else {
           result = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
          }

  document.getElementById("disName").innerHTML= nameP;
  document.getElementById("disMaintain").innerHTML= Math.round(result);
  document.getElementById("disLoss").innerHTML= Math.round(result * 0.77);
  document.getElementById("disGain").innerHTML= Math.round(result * 1.23);
  document.getElementById("inputName").value = "";
  document.getElementById("inputAge").value = "";
  document.getElementById("inputGender").value = "Gender";
  document.getElementById("inputHeight").value = "";
  document.getElementById("inputWeight").value = "";  

})


// Counter Code
  var x = 0;
  var array = Array();

function newElement()
{

  var inputValue = document.getElementById("text1").value;
  
fetch(`https://calorieninjas.p.rapidapi.com/v1/nutrition?query=${inputValue}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "7c81038a54msh9fd81f6daff31a7p19df82jsn0e55f37ed9df",
		"x-rapidapi-host": "calorieninjas.p.rapidapi.com"
  }
})
.then(response => response.json())
.then(data => {

array[x] = Math.round(data.items[0].calories);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    var li = document.createElement("li");
    document.getElementById("myUL").appendChild(li);
  }
  li.innerHTML = inputValue + " - " + array[x];x++;

  var e = "";   
    
   for (var y=0; y<array.length; y++)
   {
     e += array[y] + "+" + "0";
   }
   
   console.log(e);
   let total = eval(e);
   
   document.getElementById("sumCal").innerHTML = 'Total Calories: ' + Math.round(total) + ' cal';
   document.getElementById("text1").value = "";
   
}
)
.catch(err => {
	console.error(err);
}); }

function clearData() {
  document.getElementById("disName").innerHTML = "";
  document.getElementById("disMaintain").innerHTML = "";
  document.getElementById("disLoss").innerHTML = "";
  document.getElementById("disGain").innerHTML = "";
}

function clearData2() {
  document.getElementById("myUL").innerHTML = "";
  document.getElementById("sumCal").innerHTML = "";
}
