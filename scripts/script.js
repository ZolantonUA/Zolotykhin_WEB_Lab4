const num =document.getElementById("number");
const btnPls = document.getElementById("buttonPlus");
const btnMns = document.getElementById("buttonMinus");
const btnRst = document.getElementById("buttonReset");
const btnGrn = document.getElementById("buttonGreen");
const btnRd = document.getElementById("buttonRed");
const btnBl = document.getElementById("buttonBlue");
const btnEql = document.getElementById("buttonEqual");


btnPls.addEventListener("click", () =>{
  num.innerHTML++;
})

btnMns.addEventListener("click", () =>{
  num.innerHTML--;
})

btnRst.addEventListener("click", () =>{
  num.innerHTML = 1;
})

btnGrn.addEventListener("click", () =>{
  num.style.color='Green';
})

btnRd.addEventListener("click", () =>{
  num.style.color = 'Red';
})

btnBl.addEventListener("click", () =>{
  num.style.color='Blue';
})

btnEql.addEventListener("click", () =>{
  const inptN = parseInt(document.getElementById("inputNumber").value);
  const arthmOp = document.getElementById("arithmeticOperation");
  const oprtn = arthmOp.options[arthmOp.selectedIndex].text;

  if(oprtn == '+'){
    num.innerHTML = parseInt(num.innerHTML) + inptN;
  }
  if(oprtn == '-'){
    num.innerHTML = parseInt(num.innerHTML) - inptN;
  }
  if(oprtn == '*'){
    num.innerHTML = parseInt(num.innerHTML) * inptN;
  }
  if(oprtn == '/'){
    num.innerHTML = parseInt(num.innerHTML) / inptN;
  }

})
