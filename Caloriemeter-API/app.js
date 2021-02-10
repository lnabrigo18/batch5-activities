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


// Calculator End Code

// Counter Code
var main = document.querySelector('.name');
var calories= document.querySelector('.calories');
document.querySelector("#submit").addEventListener("click",function(){
let inputValue = document.getElementById("inputValue").value;
fetch(`https://calorieninjas.p.rapidapi.com/v1/nutrition?query=${inputValue}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "7c81038a54msh9fd81f6daff31a7p19df82jsn0e55f37ed9df",
		"x-rapidapi-host": "calorieninjas.p.rapidapi.com"
  }
})
.then(response => response.json())
.then(data => { //console.log(data);
	main.innerHTML = "Name:" + data.items[0].name + " " + "Calories:" + data.items[0].calories + "cal";
})
.catch(err => {
	console.error(err);
});

})
// Counter Code End