console.log("Extension script initiated");
const allInputs = document.querySelectorAll("input");
allInputs.forEach(fillInput);

function fillInput(input) {
  if (input.type == "text") input.value = "test text";
  else if (input.type == "email") input.value = "email@example.com";
  else if (input.type == "password") input.value = "pass1234";
  else if (input.type == "checkbox") input.checked = "true";

  // console.log(input, input.checked);
  // console.log(input, input.value);
}
