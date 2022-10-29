function wrapper() {
  let allInputs = document.querySelectorAll("input");

  allInputs?.forEach(fillInput);

  function fillInput(input) {
    console.log("running");
    if (input?.type == "text") input.value = "test text";
    else if (input?.type == "email") input.value = "email@example.com";
    else if (input?.type == "number") input.value = "9560586929";
    else if (input?.type == "password") input.value = "pass1234";
    else if (input?.type == "checkbox") input.checked = "true";
    else if (input?.type == "radio") input.checked = true;
    else if (input?.type == "date") input.value = "2018-07-22";
    // console.log(input, input.checked);
    // console.log(input, input.value);
  }
}

wrapper();
