const result = document.getElementById("result");
const submit = document.getElementById("submit");

function binary(e) {
  e.preventDefault();

  const num = document.getElementById("number").value;
  if (num == "") {
    alert("Please enter a number");
  } else if (num < 0) {
    alert("Please enter a Valid number");
  } else {
    result.style.visibility = "visible";
  }

  // converting
  let binaryNumber = Number(num).toString(2);
  result.innerText = binaryNumber;
}

submit.addEventListener("click", binary);
