const stars = document.querySelectorAll(".star");
const rating = document.getElementById("rating");
const reviewText = document.getElementById("review");
const submitBtn = document.getElementById("submit");
const reviewsContainer = document.getElementById("reviews");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const value = parseInt(star.getAttribute("data-value"));
    rating.innerText = value;

    // Remove all existing classes from stars
    stars.forEach((s) =>
      s.classList.remove("one", "two", "three", "four", "five")
    );

    // Add the appropriate class to
    // each star based on the selected star's value
    stars.forEach((s, index) => {
      if (index < value) {
        s.classList.add(getStarColorClass(value));
      }
    });

    // Remove "selected" class from all stars
    stars.forEach((s) => s.classList.remove("selected"));
    // Add "selected" class to the clicked star
    star.classList.add("selected");
  });
});

submitBtn.addEventListener("click", (event) => {
  const userRating = parseInt(rating.innerText);

  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    console.log(id);

    if (userRating > 0) {
      const reviewElement = document.createElement("div");
      reviewElement.innerHTML = `<p><strong>Rating: ${userRating}/5</strong></p>`;
      reviewsContainer.appendChild(reviewElement);
      const starObj = {star_num: userRating, post_id:id}
      console.log(userRating);
      // Reset styles after submitting
      rating.innerText = "0";
      stars.forEach((s) =>
        s.classList.remove("one", "two", "three", "four", "five", "selected")
      );
      fetch("/api/posts/stars", {
        method: "POST",
        body: JSON.stringify(starObj),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    }
  }
});

function getStarColorClass(value) {
  switch (value) {
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    default:
      return "";
  }
}
