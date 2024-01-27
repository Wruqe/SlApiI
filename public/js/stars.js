 
// To access the stars
let stars = 
    document.getElementsByClassName("star");
let output = 
    document.getElementById("output");
 
// Funtion to update rating
function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }

    output.innerText = "Rating is: " + n + "/5";

   //fetch for stars, working on???
//    const starHandler= async(event) => {
//     if (event.target.hasAttribute("data-id")) {
//         const id = event.target.getAttribute("data-id");
//         console.log(id);
     
//         const response = await fetch(`/api/ratings/${id}`, {
//           method: "PUT",
//         });
//         console.log(response);
//       }
// }
// document.getElementById('starBtn').addEventListener('click', starHandler())
}
// To remove the pre-applied styling
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}


