// })

const { INTERRUPTION_MODE_IOS_DO_NOT_MIX } = require("expo-av/build/Audio");

// const addToHeadline = () => {
  //     const h1 = document.querySelector('#mast-container > h1')
  //     h1.style.color="black"
  
  // }
  

  //     setTimeout(()=>{addToHeadline()}, 3000)
  // document.addEventListener('DOMContentLoaded', function() {
const form = document.getElementById("form-container");
  
const inputArray = Array.from(document.getElementsByClassName('input'))

function myFunction() {
    
    const links = document.getElementById("myLinks");
    const blur = document.getElementById("blur-wrapper")
    const nav = document.getElementById('nav')
    const bars = document.getElementById('bars')
    if (links.style.display === "block") {
      links.style.display = "none";
      bars.className="fa fa-bars"
    } else {
      links.style.display = "block";
      bars.className="fa fa-times"
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

    
    
    
    
   
    form.addEventListener('click', mobileFormFocus)

    function mobileFormFocus() {
      const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
      const hasFocus = inputArray.map(input=>input === document.activeElement)
      const para = document.getElementById('lead-para');
      const subhead = document.getElementById('subhead');
   if (isMobile && hasFocus) {
     form.style.width = "100%";
    // form.style.position = "absolute";
    // form.style.top = "0vh";
    // form.style.zIndex="200";
    // subhead.style.opacity="0";
    // para.style.opacity="0";
      } else {
        
      }    
    }
