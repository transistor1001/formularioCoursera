let i = 0;

function billingFunction() {
    if (i % 2 == 0) {       
        // assign value
        document.getElementById('billingName').value = document.getElementById('shippingName').value;
        document.getElementById('billingZip').value = document.getElementById('shippingZip').value;

        console.log(document.getElementById('billingName').value);
        console.log(document.getElementById('billingZip').value);
        i++;
    } else {
        // delete value
        document.getElementById('billingName').value = ("");
        document.getElementById('billingZip').value = ("");
        i++;
    }
}






/* 
//  otras formas de lograrlo



function billingFunction() {
  var form = {
    same: document.getElementById('same'),
    shippingInfo: {
      name: document.getElementById('shippingName'),
      zip: document.getElementById('shippingZip')
    },    
    billingInfo: {
      name: document.getElementById('billingName'),
      zip: document.getElementById('billingZip')
    }        
  };
  
  if (form.same.checked) {
      for (prop in form.shippingInfo) {
          if (form.shippingInfo.hasOwnProperty(prop)) {
              form.billingInfo[prop].value = form.shippingInfo[prop].value;
            }
        }
    } else  {
        for (prop in form.billingInfo) {
            if (form.billingInfo.hasOwnProperty(prop)) {
                form.billingInfo[prop].value = "";
            }
        }    
    }
};

function billingFunction()
{
    if (document.getElementById('same').checked) {   
        document.getElementById('billingName').value = document.getElementById('shippingName').value;
        document.getElementById('billingZip').value = document.getElementById('shippingZip').value;
        
    }else{
        
        document.getElementById('billingName').value = '';
        document.getElementById('billingZip').value = ''; 
    }
}

function billingFunction(){
    if(document.getElementById('same').checked){    
        document.getElementById('billingName').value =  document.getElementById('shippingName').value;
        document.getElementById('billingZip').value =  document.getElementById('shippingZip').value ;
    }
    else{
        document.getElementById('billingName').value =  "";
        document.getElementById('billingZip').value =  "";
    }
}

function billingFunction()
{
    if(document.getElementById('same').checked)
    {
        document.getElementById('billingName').value=document.getElementById('shippingName').value;
        document.getElementById('billingZip').value=document.getElementById('shippingZip').value;
    }
    else
    {
        document.getElementById('billingName').value=null;
        document.getElementById('billingZip').value=null;
    }
}


function billingFunction(){	
    if (document.getElementById('same').checked){
		document.getElementById('billingName').value=document.getElementById('shippingName').value;
		document.getElementById('billingZip').value=document.getElementById('shippingZip').value;
		
    }
    else{
        document.getElementById('billingName').value="";
        document.getElementById('billingZip').value="";
    }
}



function billingFunction(){
    if (document.getElementById('same').checked){
        var elem1=document.getElementById('shippingName');
        var elem2=document.getElementById('shippingZip');
        document.getElementById('billingName').value=elem1.value;
        document.getElementById('billingZip').value=elem2.value; 
    }
    else{
        document.getElementById('billingName').value="";
        document.getElementById('billingZip').value=""; 
    }
}
function billingFunction() {
    if (document.getElementById('same').checked) {
        document.getElementById('billingName').value = document.getElementById('shippingName').value;
        document.getElementById('billingZip').value = document.getElementById('shippingZip').value;
    } else {
        document.getElementById('billingName').value = '';
        document.getElementById('billingZip').value = '';
    }
}




function billingFunction() {
    
    if (document.getElementById('same').checked) {      
        document.getElementById('billingName').value = document.getElementById('shippingName').value
        document.getElementById('billingZip').value = document.getElementById('shippingZip').value
    }  
    else {
        document.getElementById('billingName').value = "";
        document.getElementById('billingZip').value = "";
    }
}

function billingFunction(){
    var bName=document.getElementById("billingName");
    var bZip=document.getElementById("billingZip");
    var sName=document.getElementById("shippingName");
    var sZip=document.getElementById("shippingZip");
    if(document.getElementById("same").checked){    
        bZip.value=sZip.value;
        bName.value=sName.value;
    }else{
        bZip.value="";
        bName.value="";
    }  
}



function billingFunction() {
    var form = {
        same: document.getElementById('same'),
        shippingInfo: {
      name: document.getElementById('shippingName'),
      zip: document.getElementById('shippingZip')
    },    
    billingInfo: {
        name: document.getElementById('billingName'),
        zip: document.getElementById('billingZip')
    }        
};

if (form.same.checked) {
    for (prop in form.shippingInfo) {
        if (form.shippingInfo.hasOwnProperty(prop)) {
            form.billingInfo[prop].value = form.shippingInfo[prop].value;
        }
    }
} else  {
    for (prop in form.billingInfo) {
        if (form.billingInfo.hasOwnProperty(prop)) {
            form.billingInfo[prop].value = "";
        }
    }    
}
};

function billingFunction() {
    if(document.getElementById('same').checked == true) {
        var name1 = document.getElementById('shippingName');
        var name2 = document.getElementById('billingName');
        var zip1 = document.getElementById('shippingZip');
        var zip2 = document.getElementById('billingZip');
        name2.value = name1.value;
        zip2.value = zip1.value;
    }
    else {
        var name2 = document.getElementById('billingName');
        var zip2 = document.getElementById('billingZip');
        name2.value = "";
        zip2.value = "";
        
    }
    
}

function billingFunction(){
    if(document.getElementById('same').checked){
        document.getElementById('billingName').setAttribute("value", document.getElementById('shippingName').value);
        
        document.getElementById('billingZip').setAttribute("value", document.getElementById('shippingZip').value);
    }

    else{
        document.getElementById('billingName').removeAttribute("value");
        document.getElementById('billingZip').removeAttribute("value");
    }
}


function billingFunction() {
    
    var billname= document.getElementById('billingName');
    var shipname= document.getElementById('shippingName');
    var billzip= document.getElementById('billingZip');
    var shipzip= document.getElementById('shippingZip');
    var checkbox= document.getElementById('same') 
    
    if(checkbox.checked == true) {
        
        billname.value = shipname.value;
        billzip.value = shipzip.value;   
        
    }
    
    if(checkbox.checked == false) {
        
        billname.value = '';
        billzip.value = '';   
        
        
        
    }
    
}


function billingFunction() {
    if (document.getElementById("same").checked)
   {
    document.getElementById("billingName").value =
    document.getElementById("shippingName").value;
    document.getElementById("billingZip").value =
    document.getElementById("shippingZip").value;
} 
else {
    document.getElementById("billingName").value = "";
    document.getElementById("billingZip").value = "";
}
}
*/