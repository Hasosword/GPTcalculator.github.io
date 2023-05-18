function appendToResult(value) {
  document.getElementById("result").value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function deleteLastChar() {
  var currentResult = document.getElementById("result").value;
  document.getElementById("result").value = currentResult.slice(0, -1);
}

function calculateResult() {
  var result = document.getElementById("result").value;
  try {
    var finalResult = eval(result);
    document.getElementById("result").value = finalResult;
  } catch (error) {
    alert("Invalid input");
  }
}
