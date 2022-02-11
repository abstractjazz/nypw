
const formContainer = document.getElementById("form-container");
const form = document.getElementById('form')

const inputArray = Array.from(document.getElementsByClassName('input'))
const textarea = document.getElementById('textarea')
const replacementMainDiv = document.getElementById('services').cloneNode(true)


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
    mainDiv.innerHTML=""
    mainDiv.appendChild(replacementMainDiv)
    secondLuxStyle()
  })

  setTimeout(autoScroll, 1000)

  function autoScroll(){
    window.scrollTo(0, 50)
  }
 

  
 //SPA-TYPE SECTION TO SIMULATE NAVIGATING THROUGH SERVICE PAGES

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
    

    const createHardMoneySubDiv = () => {
      const containerDiv = document.getElementById('service-container')
      const subH1 = document.createElement('h1')
      subH1.innerText = "Loan Types and Purpose"
      const subP = document.createElement('p')  
      subP.innerText = "Bridge Loans - Cashouts • Joint Venture -  Rehab •\n Mezzanine Finance -  Bank Workout, Development and Construction, Acquisition and Refinance, Distressed Properties, Balloon Notes"
      const subH12 = document.createElement('h1')
      subH12.innerText = "Lending Parameters"
      const subP2 = document.createElement('p')
      subP2.innerText  = "Interest Reserves- If needed up to 1 year • Interest Only loans • Interest Rates:  8% - 12% • Amortization: Interest Only • Loan to Value: Up to 65% on income producing properties • Points: 3% taken at closing from loan proceeds • Loan Term:  Up to 3 years • Closing Times: 7 – 10 days • Loan Size: $500k to $100 million"
      const subH13 = document.createElement('h1')
      subH13.innerText  = "Some collateral types we are interested in"
      const subP3 = document.createElement('p')
      subP3.innerText= "Multi-family Apartments • Industrial Properties • Grocery Anchored Retail • Mixed Use Shopping Centers • Hospitality Properties (Flagged and non-flagged) • Office Building • Medical Office • Student Housing • Warehouses/Distribution/Flex • Parking Garage • Self Storage • Condo Unit Inventory Loans • Single Tenant + Owner/user • Mobile Home Parks • Assisted Living"
      
      containerDiv.appendChild(subH1)
      containerDiv.appendChild(subP)
     
      containerDiv.appendChild(subH12)
      containerDiv.appendChild(subP2)
      
      containerDiv.appendChild(subH32)
      containerDiv.appendChild(subP3)

    }
    
    
    const createChurchSubDiv = () => {
      const containerDiv = document.getElementById('service-container')
      const subH1 = document.createElement('h1')
      subH1.innerText="Conventional Financing"
      const subP = document.createElement('p')  
      subP.innerText="Edgewood Capital has a wide array of programs available from low-interest rates, with major institutions. If you are a church, charter school, or non-profit organization that has a financing need to either acquire, refinances, or construct a new facility we can help. When credit is less than perfect or time is an issue, we can also offer bridge loans or hard money financing for those hard to place loans. If your church is looking for a loan to purchase, refinance, renovate or construct a building we want to help you achieve your goal."
      const subH12 = document.createElement('h1')
      subH12.innerText="Hard Money For Churches"
      const subP2 = document.createElement('p')
      subP2.innerText  = "Hard money loans start at 9.99% to 11% this program is suitable for a church that has a considerable amount of equity in the church and are behind on the mortgage payments or credit payments and you need cash fast."
      const subH13 = document.createElement('h1')
      subH13.innerText  = "Conventional Bank Parameters"
      const subP3 = document.createElement('p')
      subP3.innerText= "Rates: May vary from prime + based or treasury with a floor 4.50% to 5.00% • Loan Size: $500k to $25 million • Property Types: Church, charter school, or non-profit organization • Special Note: The amount to be financed cannot exceed three and on half (3.5%) times the churches '2016 Fiscal years gross Plate income or Tithes'  • Debt Coverage Ratio: 1.4% debt serviced • Minimum average Sunday morning worship attendance of 200 to 500 adults • Maximum loan: of up to 3.0 times recurring gross income • Monthly payment: should not exceed 30% to 35% of recurring first gross income • Audited Statements: Are required for loans over $1 million • Territory: Nationwide Tier 1 markets • Lien: First Lien mortgage only • LTV: The maximum loan To Value is 80% LTV • Prepayment: No prepayment penalty • Amortization: 15 to 20 years amortization • Term: 3-year arm or 5-year arm\n\n Tax Statements required: The last three (3) years fiscal years of church financial information is required including; plate income other income, expenses details, balance sheet, cash flows and current year YTD budget and actual comparison"
      
      containerDiv.appendChild(subH1)
      containerDiv.appendChild(subP)
     
      containerDiv.appendChild(subH12)
      containerDiv.appendChild(subP2)
      
      containerDiv.appendChild(subH13)
      containerDiv.appendChild(subP3)

    }

    const luxuryProgramStyling = () => {
      hardMoney.addEventListener('click',function(){changeServiceDivContent("Hard Money Loans", "./assets/bank.jpg", "For Income Producing Properties that need to fund fast, special attention to New York Commercial Income Producing Properties.  Our product is a 1-3 year commercial bridge-financing, interest only, no prepayment penalty loan. We specialize in nationwide time-sensitive deals that must close within 7-20 days.")});
      hardMoney.addEventListener('click', createHardMoneySubDiv)
      construction.addEventListener('click',function(){changeServiceDivContent("Construction Loans", "./assets/construction.jpg", "We are excited to offer New Ground Up Construction and Fix and Flip programs at Edgewood Capital. The last several years have been very challenging for construction in the United States, however things have changed dramatically, we are now in a brand new world with a very strong real estate market.\n\n Today’s real estate market consist of very low inventory, low interest rates  and high demand creating a shortage of homes nationwide. This high demand is causing builders and developers, to fill that void of low inventory by building  more multifamily and single family homes at extraordinary rate. We offer the builders, land loans and land development, from the ground up construction, or fix and flip programs. This housing season is  complicated by the sky high raw material prices of lumber and labor costs that may be three (3) times higher than normal.\n\n We offer construction programs for all  major asset classes including residential, multi-family, condominium, rental housing, hotel, industrial , office , mixed use, and retail. Our loans can be tailor made with interest reserves to to reduce the stress level of the builder as he completes his project without the constant worry of the loans monthly payments. This year is full of new and exciting opportunities, for the home builder, the fix and flip or the big multifamily developer, whatever your size we have a program that will fit your needs.")});
      conventional.addEventListener('click',function(){changeServiceDivContent("Conventional Loans", "./assets/conventional.jpg", "Edgewood Capital offers commercial real estate loans and structured finance solutions for a variety of circumstances, with loan amounts as low as $2MM, with no maximum loan limits. Edgewood Capital advises clients on a wide range of capital structures available to ensure the most favorable financial solution is achieved. Edgewood Capital's approach consists of a clear identification of the client's requirements and possible structures, resulting in an optimal financial solution.\n\n Our programs include permanent finance for both commercial and residential properties in all 50 states. Loan terms range from 1 to 30 years and amortization periods up to 30 years, with interest only options available. Strong projects maybe leveraged up to 95% of market value, where the Edgewood Capital mezzanine finance and equity programs are included.\n\n Bridge & Construction financing through Edgewood Capital allows developers and real estate owners to acquire or refinance properties that are not yet ready for permanent finance. Needs for Bridge financing may vary widely, from repositioning a property to acquiring a property at auction. Edgewood Capital is sensitive and accustom to abbreviated due diligence periods and tight closing deadlines.\n\n Funds may be used for equity recapture, tenant improvements, leasing commissions, property improvements, interest reserves or other applicable needs.\n\n Edgewood Capital's construction finance program provides developers with an non-recourse option for development finance, when local banks fall short. The Edgewood construction program is often combined with the non-recourse permanent finance program, to create a 'one-stop shopping' the solution for today's modern developer.")});
      churches.addEventListener('click',function(){changeServiceDivContent("Churches", "./assets/church.jpg", "Our church and synagogue program is well suited to help finance all types of church needs including; property acquisition, refinance notes, debt reduction, and construction. Church financing is a highly specialized area of commercial real estate finance.")});
      churches.addEventListener('click', createChurchSubDiv)
      medical.addEventListener('click',function(){changeServiceDivContent("Medical Programs", "./assets/steth.jpg", " We have innovative financing for health care practitioners, including:\n\n\n New office Startups – get started with up to 100% project financing, including design construction, equipment, and working capital • Practice sales and purchases – a team of specialists can provide the experience and industry knowledge you need for buying and selling • Business debt consolidation –  to improve your cash flow • Office improvement and expansion — Remodel, refurbish or expand • Commercial Real estate _ Choose from a suite of comprehensive real estate loan options to buy, refinance or relocate, with 51% owner occupancy, required • Equipment financing– Choose from a  variety of options and flexible terms tailored to meet your needs")});
      luxury.addEventListener('click', createLuxAssetDiv)

    }

      const secondLuxStyle=()=>{
        const luxuryH1 = document.getElementById('luxury-2')
        const hardMoneyH1 = document.getElementById('hard-money-2')
        const conventionalH1 = document.getElementById('commercial-2')
        const churchesH1 = document.getElementById('churches-2')
        const medicalProgramH1 = document.getElementById('medical-2')
        const constructionH1 = document.getElementById('construction-2')
        
        hardMoneyH1.addEventListener('click',function(){changeServiceDivContent("Hard Money Loans", "./assets/bank.jpg", "For Income Producing Properties that need to fund fast, special attention to New York Commercial Income Producing Properties.  Our product is a 1-3 year commercial bridge-financing, interest only, no prepayment penalty loan. We specialize in nationwide time-sensitive deals that must close within 7-20 days.")});
        hardMoneyH1.addEventListener('click', function(){createHardMoneySubDiv()})
        luxuryH1.addEventListener('click', createLuxAssetDiv)
        conventionalH1.addEventListener('click',function(){changeServiceDivContent("Conventional Loans", "./assets/conventional.jpg", "Edgewood Capital offers commercial real estate loans and structured finance solutions for a variety of circumstances, with loan amounts as low as $2MM, with no maximum loan limits. Edgewood Capital advises clients on a wide range of capital structures available to ensure the most favorable financial solution is achieved. Edgewood Capital's approach consists of a clear identification of the client's requirements and possible structures, resulting in an optimal financial solution.\n\n Our programs include permanent finance for both commercial and residential properties in all 50 states. Loan terms range from 1 to 30 years and amortization periods up to 30 years, with interest only options available. Strong projects maybe leveraged up to 95% of market value, where the Edgewood Capital mezzanine finance and equity programs are included.\n\n Bridge & Construction financing through Edgewood Capital allows developers and real estate owners to acquire or refinance properties that are not yet ready for permanent finance. Needs for Bridge financing may vary widely, from repositioning a property to acquiring a property at auction. Edgewood Capital is sensitive and accustom to abbreviated due diligence periods and tight closing deadlines.\n\n Funds may be used for equity recapture, tenant improvements, leasing commissions, property improvements, interest reserves or other applicable needs.\n\n Edgewood Capital's construction finance program provides developers with an non-recourse option for development finance, when local banks fall short. The Edgewood construction program is often combined with the non-recourse permanent finance program, to create a 'one-stop shopping' the solution for today's modern developer.")});
        churchesH1.addEventListener('click',function(){changeServiceDivContent("Churches", "./assets/church.jpg", "Our church and synagogue program is well suited to help finance all types of church needs including; property acquisition, refinance notes, debt reduction, and construction. Church financing is a highly specialized area of commercial real estate finance.")});
        churchesH1.addEventListener('click', function(){createChurchSubDiv()})
        medicalProgramH1.addEventListener('click',function(){changeServiceDivContent("Medical Programs", "./assets/steth.jpg", " We have innovative financing for health care practitioners, including:\n\n\n New office Startups – get started with up to 100% project financing, including design construction, equipment, and working capital • Practice sales and purchases – a team of specialists can provide the experience and industry knowledge you need for buying and selling • Business debt consolidation –  to improve your cash flow • Office improvement and expansion — Remodel, refurbish or expand • Commercial Real estate _ Choose from a suite of comprehensive real estate loan options to buy, refinance or relocate, with 51% owner occupancy, required • Equipment financing– Choose from a  variety of options and flexible terms tailored to meet your needs")});
        constructionH1.addEventListener('click',function(){changeServiceDivContent("Construction Loans", "./assets/construction.jpg", "We are excited to offer New Ground Up Construction and Fix and Flip programs at Edgewood Capital. The last several years have been very challenging for construction in the United States, however things have changed dramatically, we are now in a brand new world with a very strong real estate market.\n\n Today’s real estate market consist of very low inventory, low interest rates  and high demand creating a shortage of homes nationwide. This high demand is causing builders and developers, to fill that void of low inventory by building  more multifamily and single family homes at extraordinary rate. We offer the builders, land loans and land development, from the ground up construction, or fix and flip programs. This housing season is  complicated by the sky high raw material prices of lumber and labor costs that may be three (3) times higher than normal.\n\n We offer construction programs for all  major asset classes including residential, multi-family, condominium, rental housing, hotel, industrial , office , mixed use, and retail. Our loans can be tailor made with interest reserves to to reduce the stress level of the builder as he completes his project without the constant worry of the loans monthly payments. This year is full of new and exciting opportunities, for the home builder, the fix and flip or the big multifamily developer, whatever your size we have a program that will fit your needs.")});
      }

    

    luxuryProgramStyling();
    secondLuxStyle();


   
    // hardMoney.addEventListener('click',function(){changeServiceDivContent()});
    // construction.addEventListener('click',function(){changeServiceDivContent()});
    // conventional.addEventListener('click',function(){changeServiceDivContent()});
    // churches.addEventListener('click',function(){changeServiceDivContent()});
    // medical.addEventListener('click',function(){changeServiceDivContent()});
   

   

