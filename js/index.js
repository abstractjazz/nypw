
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
  


   

