
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
  

  setTimeout(autoScroll, 1000)

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
    const mainDiv = document.getElementById('services');

    const changeServiceDivContent = (h1Text, imgSrc, paraText) => {
    
    
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
    }
    
    const createLuxAssetDiv = () => {
      mainDiv.innerHTML=""
      //YACHT
      const yachtAssetDiv = document.createElement('div')
      yachtAssetDiv.id="yachtAssetDiv"
      const h2 = document.createElement('h2')
      const p = document.createElement('p')
      const img=document.createElement('img')
      img.src="./assets/ferry-boat.png"
      img.id="yacht-icon"
      h2.innerText = "Yacht Financing"
      p.innerText = "$5MM min loan size domestic •  $15MM min loan size international • Term: 2 - 3 years • 3.5% - 5% interest only, no upfront fees, no prepayment penalty • Yacht specifications (model, year built, etc.) • Proof of docked location • Method of registration • Borrower financial info US clients • LTV dependent on loan size, age of yacht and borrower’s financials •"
      yachtAssetDiv.appendChild(h2)
      yachtAssetDiv.appendChild(img)
      yachtAssetDiv.appendChild(p) 
      mainDiv.appendChild(yachtAssetDiv)

      //ART FINANCING
      const artAssetDiv = document.createElement('div')
      artAssetDiv.id="artAssetDiv"
      const artH2 = document.createElement('h2')
      const artP = document.createElement('p')
      const artImg = document.createElement('img')
      artImg.src="./assets/painting.png"
      artImg.id="art-icon"
      artH2.innerText = "Art Financing"
      artP.innerText = "$5MM min loan size domestic • $15MM min loan size international • Term: 2 - 3 years • 3.5% - 5% interest only, no upfront fees, no prepayment penalty • List of all art being offered as collateral and their locations • Borrower financial info • LTV up to 50% •"

      artAssetDiv.appendChild(artH2)
      artAssetDiv.appendChild(artImg)
      artAssetDiv.appendChild(artP) 
      mainDiv.appendChild(artAssetDiv)
      
      //AIRCRAFT FINANCING
      const aircraftAssetDiv = document.createElement('div')
      aircraftAssetDiv.id="aircraftAssetDiv"
      const aircraftImg = document.createElement('img')
      aircraftImg.src = "./assets/small-plane.png"
      aircraftImg.id="aircraft-icon"
      const aircraftH2 = document.createElement('h2')
      const aircraftP = document.createElement('p')
      aircraftH2.innerText = "Aircraft Financing"
      aircraftP.innerText = "$4MM min loan size domestic • $15MM min loan size international • Lease or Lending (Lease is an option only for aircrafts) • Term: up to 5 years • 3.5% - 5% interest only, no upfront fees, no prepayment penalty • Model, year and tail number • Location based and registered • Entity that owns the plane • Borrower financial Info • LTV up to 75% •"
      aircraftAssetDiv.appendChild(aircraftH2)
      aircraftAssetDiv.appendChild(aircraftImg) 
      aircraftAssetDiv.appendChild(aircraftP)
      mainDiv.appendChild(aircraftAssetDiv)
    }
    
    const luxuryProgramStyling = () => {
      // luxury.addEventListener('click',function(){changeServiceDivContent("Luxury Asset-Based Financing", "https://via.placeholder.com/200", "Try our luxury services! They are great.")});
      luxury.addEventListener('click', createLuxAssetDiv)

    }

    luxuryProgramStyling();
    
   
    // hardMoney.addEventListener('click',function(){changeServiceDivContent()});
    // construction.addEventListener('click',function(){changeServiceDivContent()});
    // conventional.addEventListener('click',function(){changeServiceDivContent()});
    // churches.addEventListener('click',function(){changeServiceDivContent()});
    // medical.addEventListener('click',function(){changeServiceDivContent()});
   

   

