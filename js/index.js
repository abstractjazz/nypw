// document.addEventListener('DOMContentLoaded', function() {
//     setTimeout(()=>{addToHeadline()}, 3000)
// })

// const addToHeadline = () => {
//     const h1 = document.querySelector('#mast-container > h1')
//     h1.style.color="black"
    
// }


function myFunction() {
    
    const links = document.getElementById("myLinks");
    const blur = document.getElementById("blur-wrapper")
    const nav = document.getElementById('nav')
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }

    if (links.style.display === "block") {
      blur.style.filter="blur(9px)";
      nav.style.height = "100vh";
      nav.style.fontSize="3em";
      } else {
        blur.style.filter=""
        nav.style.height=""
        nav.style.fontSize="1.25em"
      }
    }

    