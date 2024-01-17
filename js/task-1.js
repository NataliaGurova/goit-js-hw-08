
const categories = document.querySelectorAll("ul#categories li.item");
console.log("Number of categories: ", categories.length);

categories.forEach((elem) => {
  const h2 = elem.querySelector("h2").innerText;
  const count = elem.querySelectorAll("li").length;
  console.log("Category: ", h2);
  console.log("Elements: ", count);
});


