reader=()=>{

    
    emailObj=document.getElementsByName('email');
    phoneObj=document.getElementsByName('phone');
    addressObj=document.getElementsByName('address');
    roleObj=document.getElementsByName('role');
    qualificationObj=document.getElementsByName('qualification');
  
  
   emailObj[1].classList.add('d-none');
   phoneObj[1].classList.add('d-none');
   addressObj[1].classList.add('d-none');
   roleObj[1].classList.add('d-none');
   qualificationObj[1].classList.add('d-none');

    
    if(emailObj[0].value==''){emailObj[1].classList.remove('d-none');}
    if(phoneObj[0].value==''){phoneObj[1].classList.remove('d-none');}
    if(addressObj[0].value==''){addressObj[1].classList.remove('d-none');}
    if(roleObj[0].value==''){roleObj[1].classList.remove('d-none');}
    if(qualificationObj[0].value==''){qualificationObj[1].classList.remove('d-none');}
  
  
  }
  function checkName(name) {
    nameObj = document.getElementById(name);
    nameObj.classList.remove("is-invalid");
    value = nameObj.value;
    nameObj.setAttribute("title", "")
    console.log(value);
    if (value == "") {
      console.log("Name is a mandatory field");
    }
    let pattern = /[^a-z A-Z]/g;
    let result = value.match(pattern);
    console.log(result);
    if (result){
      nameObj.classList.add("is-invalid");
      nameObj.setAttribute("title", "Name Should Have Alphabets Only");
    } 
  }
  // function openNav() {
  //   document.getElementById("mySidenav").style.width = "250px";
  //   document.getElementById("main").style.marginLeft = "250px";
  //   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  // }
  
  // function closeNav() {
  //   document.getElementById("mySidenav").style.width = "0";
  //   document.getElementById("main").style.marginLeft= "0";
  //   document.body.style.backgroundColor = "white";
  // }