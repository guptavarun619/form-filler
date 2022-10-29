function wrapper() {
  const allTextArea = document.querySelectorAll("textarea");
  const allSelectTags = document.querySelectorAll("select" || "datalist");
  function Textarea(el) {
    el.value = `lNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
            There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...`;
  }
  function select(el) {
    if (el.value !== "") {
      el.value = el.firstChild.innerText;
    } else if (el.value === "") {
      el.value = 1;
    }
  }
  if (document.querySelector("select")) {
    allSelectTags?.forEach(select);
  }
  if (document.querySelector("textarea")) {
    allTextArea.forEach(Textarea);
  }

  let allInputs = document.querySelectorAll("input");

  allInputs?.forEach(fillInput);

  function fillInput(input) {
    console.log("running");

    switch (input.type) {
      case "text":
        input.value = "test text";
        break;
      case "email":
        input.value = "email@example.com";
        break;
      case "number":
        input.value = "1234567";
        break;
      case "password":
        input.value = "pass1234";
        break;
      case "checkbox":
        input.checked = "true";
        break;
      case "radio":
        input.checked = true;
        break;
      case "date":
        input.value = "2018-07-22";
        break;
      case "tel":
        input.value = 9560586929;
        break;
      case "color":
        input.value = "#bc3f40";
        break;
      case "url":
        input.value = "http://form-filler.com/something";
        break;
      case "range":
        input.value = input.max;
        break;
      case "time":
        input.value = "04:20";
        break;
    }

    //     if (input?.type == "text") input.value = "test text";
    //     else if (input?.type == "email") input.value = "email@example.com";
    //     else if (input?.type == "number") input.value = "1234567";
    //     else if (input?.type == "password") input.value = "pass1234";
    //     else if (input?.type == "checkbox") input.checked = "true";
    //     else if (input?.type == "radio") input.checked = true;
    //     else if (input?.type == "date") input.value = "2018-07-22";
    //     else if (input?.type == "tel") input.value = 9560586929;
    //     else if (input?.type == "color") input.value = "#bc3f40";
    //     else if (input?.type == "url")
    //       input.value = "http://form-filler.com/something";
    //     else if (input?.type == "range") input.value = input.max;
    //     else if (input?.type == "time") input.value = "04:20";
    //     // console.log(input, input.checked);
    //     // console.log(input, input.value);
    //   }
  }
}

wrapper();
