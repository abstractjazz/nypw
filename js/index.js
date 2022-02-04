
const formContainer = document.getElementById("form-container");
const form = document.getElementById('form')

const inputArray = Array.from(document.getElementsByClassName('input'))
const textarea = document.getElementById('textarea')
function myFunction() {
    
  //controls menu behavior
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

  const submitButton = document.querySelector('button#form-button')

    
    
    inputArray.map(input=>
      input.addEventListener('click', function() {
    if(input.style.backgroundColor="rgba(252, 222, 222, 0.7)"){
    input.style.backgroundColor="";

          }
        })
      )
      

  // controls form validation   
  submitButton.addEventListener('click', function(e){
    e.preventDefault();
    let checkArray = []
    const select = document.getElementsByClassName('select')
    selectArray=Array.from(select)
    selectArray.map(select=>checkArray.push(select.value))
    inputArray.map(input=>{if(input.value === ""){
      input.style.backgroundColor="rgba(252, 222, 222, 0.7)";
      input.placeholder="This field is required"
      } else {
        form.submit()
      }
    })
  })

  const myLinks = document.getElementById("myLinks")
  myLinks.addEventListener('click', function(){
    bars.click();
  })

  const ec = document.getElementById("ec")
  ec.addEventListener('click', function(){
    bars.click();
  })
  

  setTimeout(autoScroll, 2000)

  function autoScroll(){
    window.scrollTo(0, 50)
  }
 

  
  /* 1. refactor to use for other pages
     2. add paragraph content of flexbox
  */
const fetchLuxury = () => {
    const leftDiv = document.getElementById('left-div');
    const luxury = document.getElementById('luxury');
    
    const populateLuxury = ()=> {
      const luxDiv = document.createElement('div');
      const luxH1 = document.createElement('h1');
      const luxImg = document.createElement('img')

      leftDiv.innerHTML=""
      luxDiv.id="luxury-container";
      luxH1.innerText="hello world!"
      luxImg.src="https://via.placeholder.com/200"
      luxDiv.appendChild(luxH1)
      leftDiv.appendChild(luxDiv);
      luxDiv.appendChild(luxImg)
     
      
      // const luxH1 = document.createElement('h1');
      // luxH1.innerText="Hello World";
      // luxDiv.append('luxH1');
    }

    luxury.addEventListener('click', populateLuxury);
   
}

fetchLuxury();
   

