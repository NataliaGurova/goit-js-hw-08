
const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", onInput);
  
  function onInput(evt) {
  const textName = evt.target.value.trim();
 
 output.textContent = textName || "Anonymous";
};

