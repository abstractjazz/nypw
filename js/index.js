// document.addEventListener('DOMContentLoaded', function() {
//     setTimeout(()=>{addToHeadline()}, 3000)
// })

// const addToHeadline = () => {
//     const h1 = document.querySelector('#mast-container > h1')
//     h1.style.color="black"
    
// }


function myFunction() {
    const links = document.getElementById("myLinks");
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  }