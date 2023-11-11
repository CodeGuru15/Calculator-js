const displayResult = document.querySelector("#display");
const formula = document.querySelector("#formula");
const operator = ["+", "-", "*", "/", "%"]

document.querySelector("#one").addEventListener("click", () => {
  if (formula.innerHTML !== "") {
    formula.innerHTML = "";
    displayResult.innerHTML = displayResult.innerHTML + "1";
  }
  else {
    displayResult.innerHTML = displayResult.innerHTML + "1";
  }
});

document.querySelector("#two").addEventListener("click", () => {
  if (formula.innerHTML !== "") {
    formula.innerHTML = "";
    displayResult.innerHTML = displayResult.innerHTML + "2";
  }
  else {
  displayResult.innerHTML = displayResult.innerHTML + "2";
  }
});

document.querySelector("#three").addEventListener("click", () => {
  if (formula.innerHTML !== "") {
    formula.innerHTML = "";
    displayResult.innerHTML = displayResult.innerHTML + "3";
  }
  else {
  displayResult.innerHTML = displayResult.innerHTML + "3";
  }
});

document.querySelector("#four").addEventListener("click", () => {
  if (formula.innerHTML !== "") {
    formula.innerHTML = "";
    displayResult.innerHTML = displayResult.innerHTML + "4";
  }
  else {
  displayResult.innerHTML = displayResult.innerHTML + "4";
  }
});

document.querySelector("#five").addEventListener("click", () => {
  if (formula.innerHTML !== "") {
    formula.innerHTML = "";
    displayResult.innerHTML = displayResult.innerHTML + "5";
  }
  else {
  displayResult.innerHTML = displayResult.innerHTML + "5";
  }
});

document.querySelector("#six").addEventListener("click", () => {
  if (formula.innerHTML !== "") {
    formula.innerHTML = "";
    displayResult.innerHTML = displayResult.innerHTML + "6";
  }
  else {
  displayResult.innerHTML = displayResult.innerHTML + "6";
  }
});

document.querySelector("#seven").addEventListener("click", () => {
  if (formula.innerHTML !== "") {
    formula.innerHTML = "";
    displayResult.innerHTML = displayResult.innerHTML + "7";
  }
  else {
  displayResult.innerHTML = displayResult.innerHTML + "7";
  }
});

document.querySelector("#eight").addEventListener("click", () => {
  if (formula.innerHTML !== "") {
    formula.innerHTML = "";
    displayResult.innerHTML = displayResult.innerHTML + "8";
  }
  else {
  displayResult.innerHTML = displayResult.innerHTML + "8";
  }
});

document.querySelector("#nine").addEventListener("click", () => {
  if (formula.innerHTML !== "") {
    formula.innerHTML = "";
    displayResult.innerHTML = displayResult.innerHTML + "9";
  }
  else {
  displayResult.innerHTML = displayResult.innerHTML + "9";
  }
});

document.querySelector("#zero").addEventListener("click", () => {
  if (formula.innerHTML !== "") {
    formula.innerHTML = "";
    displayResult.innerHTML = displayResult.innerHTML + "0";
  }
  else {
  displayResult.innerHTML = displayResult.innerHTML + "0";
  }
});

document.querySelector("#dzero").addEventListener("click", () => {
  if (formula.innerHTML !== "") {
    formula.innerHTML = "";
    displayResult.innerHTML = displayResult.innerHTML + "00";
  }
  else {
  displayResult.innerHTML = displayResult.innerHTML + "00";
  }
});



document.querySelector("#point").addEventListener("click", () => {
  if (displayResult.innerHTML.includes(".")) {
    return (displayResult.innerHTML = displayResult.innerHTML);
  } else {
    displayResult.innerHTML += ".";
  }
});

document.querySelector("#ac").addEventListener("click", () => {
  displayResult.innerHTML = "";
  formula.innerHTML = "";
});


document.querySelector("#del").addEventListener("click", () => {
  const myArr = displayResult.innerHTML.split("");
  myArr.splice(-1, 1);
  displayResult.innerHTML = myArr.join("");
});



document.querySelector("#add").addEventListener("click", () => {
  let x = displayResult.innerHTML.split("");
  let y = x[x.length - 1];
  if (operator.includes(y))  {
    return (displayResult.innerHTML);
  }
  else if (formula.innerHTML == "") {
    displayResult.innerHTML == ""
      ? displayResult.innerHTML
      : (displayResult.innerHTML += "+");
  } else {
    displayResult.innerHTML = formula.innerHTML + "+";
  }
});

document.querySelector("#sub").addEventListener("click", () => {
  let x = displayResult.innerHTML.split("");
  let y = x[x.length - 1];
  if (operator.includes(y))  {
    return (displayResult.innerHTML);
  }
  else if (formula.innerHTML == "") {
    displayResult.innerHTML == ""
      ? displayResult.innerHTML
      : (displayResult.innerHTML += "-");
  } else {
    displayResult.innerHTML = formula.innerHTML + "-";
  }
});

document.querySelector("#mul").addEventListener("click", () => {
  let x = displayResult.innerHTML.split("");
  let y = x[x.length - 1];
  if (operator.includes(y))  {
    return (displayResult.innerHTML);
  }
  else if (formula.innerHTML == "") {
    displayResult.innerHTML == ""
      ? displayResult.innerHTML
      : (displayResult.innerHTML += "*");
  } else {
    displayResult.innerHTML = formula.innerHTML + "*";
  }
});

document.querySelector("#divide").addEventListener("click", () => {
  let x = displayResult.innerHTML.split("");
  let y = x[x.length - 1];
  if (operator.includes(y))  {
    return (displayResult.innerHTML);
  }
  else if (formula.innerHTML == "") {
    displayResult.innerHTML == ""
      ? displayResult.innerHTML
      : (displayResult.innerHTML += "/");
  } 
  else {
    displayResult.innerHTML = formula.innerHTML + "/";
  }
});

document.querySelector("#percent").addEventListener("click", () => {
  let x = displayResult.innerHTML.split("");
  let y = x[x.length - 1];
  if (operator.includes(y))  {
    return (displayResult.innerHTML);
  }
  else {
    displayResult.innerHTML = eval(displayResult.innerHTML / 100) ;
  }
});

document.querySelector("#equal").addEventListener("click", () => {
  if (displayResult.innerHTML == "") {
      return ;
  }
  else {
    formula.innerHTML = eval(displayResult.innerHTML);
    displayResult.innerHTML = "";
  }
});





