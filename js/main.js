const articleForm = document.querySelector(".rating_form");
const articleHeader = document.querySelector(".rating_header");
const articleSection = document.querySelector(".rating_section");
const finalView = document.querySelector(".final");
const finalRating = document.querySelector(".final_rating");

articleForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let formChecked = document.querySelector("input[type=radio]:checked");
  if (!formChecked) {
    alert("Please select a rating");
    return;
  }
  switchView(formChecked.value);
});

function switchView(rating) {
  finalView.classList.add("show");
  articleHeader.classList.add("hide");
  articleSection.classList.add("hide");

  finalRating.innerHTML = `You selected ${rating} out of 5`;
}
