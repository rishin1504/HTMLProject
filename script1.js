const form = getElementsById('enquiry');

function clearform()
    {
    var element = document.getElementById("enquiry");
     element.reset()
    }

function trim(str) 
    {
    return str.replace(/^\s+|\s+$/g,'');
    }
  
function checkEmail(email)
  {	
      
    var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

    if(pattern.test(email))
    {         
      return true;
    } 
    else 
    {   
      return false; 
    }
  }

  function checkpnum(pnum)
  {	
      
    var pattern= /^\+[1-9]\d{1,14}$/;

    if(pattern.test(pnum))
    {         
      return true;
    } 
    else 
    {   
      return false; 
    }
  }
  
function processData()
{
    var fname=document.getElementById('fname');
    var lname=document.getElementById('lname');
    
    var pnum=document.getElementById('pnum');
    var email=document.getElementById('email');
    var query=document.getElementById('query');

    var fname=trim(fname.value);
    var lname=trim(lname.value);
    
    var pnum=trim(pnum.value);
    var email=trim(email.value);
    var query=trim(query.value);

    var error_message = 'ALERT !!! Kindly recorrect the following fields had errors in them: \n\n';
    var data = 'Congratulation. You have successfully submitted your query form : \n\n';

    var error_flag = false;

//First name ........
    if(fname == '') {
        error_message += 'Please enter your FIRST name\n';
        error_flag = true;
    } else {
        data += 'Your First Name: ' + fname + '\n';
    }

//Last name ........
    if(lname == '') {
      error_message += 'Please enter your LAST name\n';
      error_flag = true;
      } 
    else {
      data += 'Your Last Name: ' + lname + '\n';
      }
      
//Gender ........

var gender = '';
if(document.getElementById('gender1').checked) {
    gender = 'Male';
} else {
    gender = 'Female';
  }
  data += 'Your gender: ' + gender + '\n';
      

//Nationality ........

    var nation = '';
    if(document.getElementById('nation1').checked == true) {
        nation = 'Malaysian';
    } else {
        nation = 'Non-Malaysian';
    }
    data += 'Nationality: ' + nation + '\n';       
      
//Phone Number

if(!checkpnum(pnum)) {
    error_message += 'Please enter a valid phone number\n';
    error_flag = true;
} else {
    data += 'Your Phone number: ' + pnum + '\n';
}
    

// Enter email  

if(!checkEmail(email)) {
    error_message += 'Please enter a valid email address\n';
    error_flag = true;
} else {
    data += 'Your email: ' + email + '\n';
}

//Accomodation ........

var acc = '';
if(document.getElementById('acc1').checked == true) {
    acc = 'Required';
} else {
    acc = 'Not-Required';
}
data += 'Accomodation: ' + acc + '\n';

//Query Box

if(query == '') {
    error_message += 'Please key in your enquiry in Query box.\n';
    error_flag = true;
} else {
    data += 'Your Query: ' + query + '\n';
}

// Error part ..........

    if(error_flag) {
        alert(error_message);
    } else {
        alert(data);
    }

  }