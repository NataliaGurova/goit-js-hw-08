const formElem = document.querySelector("form");

formElem.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  
  const email = formElem.elements.email.value.trim();
  const password = formElem.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    const obj = {
      email,
      password,
    }; 
    console.log(obj);
    formElem.reset();
  }
}

