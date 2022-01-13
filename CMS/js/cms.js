
function validName(tagN) {

  let ph = /^[A-za-z]*$/g;
  let p = document.getElementById(tagN).value;
  let result = p.match(ph);
  document.getElementById(tagN).classList.remove('invalid');
  if(result != null){
    document.getElementById(tagN).classList.add('invalid');
  }

}

function validPhn(tagN) {

  let ph = /^[0-9]{10}$/g;
  let p = document.getElementById(tagN).value;
  let result = ph.test(p);
  console.log(result);
  document.getElementById(tagN).classList.remove('invalid');
  if(!result)
    document.getElementById(tagN).classList.add('invalid');

}

function validNum(tagN) {

  let ph = /[^0-9]/g;
  let p = document.getElementById(tagN).value;
  let result = p.match(ph);
  document.getElementById(tagN).classList.remove('invalid');
  if(result != null){
    document.getElementById(tagN).classList.add('invalid');
  }

}

function isNull(tagN) {

  let p = document.getElementById(tagN).value;
  document.getElementById(tagN).classList.remove('invalid');
  if(p==""){
  document.getElementById(tagN).classList.add('invalid');
  }

}



function createNewElement() {
      
    var txtNewInputBox = document.createElement('div');
  
    txtNewInputBox.innerHTML = "<input class='form-control me-2' type= 'text' placeholder= 'Enter Medicine' style='margin-bottom: 3px;'> <textarea rows='1' cols='4' style='border-radius: 6px;'></textarea>";
    // class='' id='dos1' onfocusout='validNum('dos1');'
    document.getElementById("newElementId").appendChild(txtNewInputBox);

    console.log('Medicine Field Added Successfully');
}

function createNewElement1() {
      
    var txtNewInputBox = document.createElement('div');
  
    txtNewInputBox.innerHTML = "<input class='form-control me-2' type= 'text' placeholder= 'Enter Lab Test' style='margin-bottom: 3px;'>";
  
    document.getElementById("newElementId1").appendChild(txtNewInputBox);
    
    console.log('Lab Test Field Added Successfully');
}