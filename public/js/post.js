const rateButton = document.querySelector(".rate")
const rateHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    console.log(id);
    const response = await fetch(`/api/ratings/${id}`, {
      method: "PUT",
    });
    console.log(response);
    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to rate post");
    }
  }
};
if (rateButton){
    rateButton.addEventListener("click", rateHandler);
}