
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

    const luxury = document.getElementById('luxury');
    const hardMoney = document.getElementById('hard-money');
    const construction = document.getElementById('construction');
    const conventional = document.getElementById('conventional');
    const churches = document.getElementById('churches');
    const medical = document.getElementById('medical');
    

    const changeServiceDivContent = (h1Text, imgSrc, paraText) => {
    const mainDiv = document.getElementById('service-div');
    
      const div = document.createElement('div');
      const h1 = document.createElement('h1');
      const img = document.createElement('img')
      const paragraph = document.createElement('p')

      mainDiv.innerHTML=""
      div.id = 'service-container';
      h1.innerText = h1Text
      img.src = imgSrc
      paragraph.innerText = paraText
      mainDiv.appendChild(div);
      div.appendChild(h1)
      div.appendChild(img)
      div.appendChild(paragraph)

      
      
      // const luxH1 = document.createElement('h1');
      // luxH1.innerText="Hello World";
      // luxDiv.append('luxH1');
    }

    luxury.addEventListener('click',function(){changeServiceDivContent("hello world!", "https://via.placeholder.com/200", "Try our luxury services! They are great.")});
    // hardMoney.addEventListener('click',function(){changeServiceDivContent()});
    // construction.addEventListener('click',function(){changeServiceDivContent()});
    // conventional.addEventListener('click',function(){changeServiceDivContent()});
    // churches.addEventListener('click',function(){changeServiceDivContent()});
    // medical.addEventListener('click',function(){changeServiceDivContent()});
   

   

