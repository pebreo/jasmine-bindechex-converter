// Code goes here
var Funcs = function() {
  
};

Funcs.prototype.add = function(a,b) {
  return a + b;
};

Funcs.prototype.divide = function(a,b) {
  return a / b;
}

Funcs.prototype.divide = function(a,b) {
  return a / b;
}

Funcs.prototype.bin2dec = function(a) {
   //document.getElementById("myinput").value ="text";
   digits = a.split('').reverse();
   var place = 0;
   var sum = 0;
   _.each(digits,function(digit) { 
     //console.log('digit');
     //console.log(num); 
     sum += digit*Math.pow(2,place)
     place = place + 1;
   });
   console.log(sum);
   return sum;
}

var remainder = function(a,b) {
   // has remainder
   rdr = a % b;
   if((rdr>0) && (rdr != a)) {
     return rdr;
   } else if((rdr==0)) {
     return false;
   } else if(rdr==a) {
     return false;
   }
   //return false;
}

var qremain = function(a,b) {
  var ans = {};
  ans.quotient = Math.floor(a/b);
  ans.remainder = a % b;
  return ans;
}

var decdig2hex = function(a) {
  var dig;
  switch (a) {
      case 10:
          digit = "A";
          break;
      case 11:
          digit = "B";
          break;
      case 12:
          digit = "C";
          break;
      case 13:
          digit = "D";
          break;
      case 14:
          digit = "E";
          break;
      case 15:
          digit = "F";
          break;
      default:
        digit = a.toString();
  }
  return digit;
}

var hexdig2dec = function(a) {
  var dig;
  switch (a) {
      case 'A':
          digit = 10;
          break;
      case 'B':
          digit = 11;
          break;
      case 'C':
          digit = 12;
          break;
      case 'D':
          digit = 13;
          break;
      case 'E':
          digit = 14;
          break;
      case 'F':
          digit = 15;
          break;
      default:
        digit = parseInt(a);
  }
  return digit;
}
/*
Funcs.prototype.dec2bin = function(a) {
  
  var place = 16;
  var this_num = 8;
  var temp = this_num;
  var digits = [];
  while(place>=0){
      //if(this_num == 1) { digits.push(1); break; }
      // is remainder
      dividend = Math.pow(2,place);
      rdr = remainder(this_num,dividend)
      if(this_num == dividend) {
          digits.push(1);
      }
      else if (rdr) {
        digits.push(1);
        console.log(rdr);
        this_num = rdr;
      } else {
          digits.push(0);
      }
      place -= 1;
  }
  return digits;


*/

function trimLeadingZero(arr) {
  console.log(arr);
  var newarr = [];
  var flag = false;
  _.each(arr, function(item){
    if(item!=0) { flag = true; }
    if(flag) { newarr.push(item); }
  });
  return newarr;
  
}

Funcs.prototype.dec2bin = function(a) {
  
  var place = 16;
  var this_num = a;
  var temp = this_num;
  var digits = [];
  while(place>=0){
      //if(this_num == 1) { digits.push(1); break; }
      // is remainder
      divisor = Math.pow(2,place);
      rdr = remainder(this_num,divisor)
      if(this_num == divisor) {
          digits.push(1);
      }
      else if (rdr) {
        digits.push(1);
        console.log(rdr);
        this_num = rdr;
      } else {
          digits.push(0);
      }
      place -= 1;
  }
  return trimLeadingZero(digits).join([separator='']);
  
}

Funcs.prototype.dec2hex = function(a) {
  
  var place = 4;
  var this_num = a;
  var ans = {};
  var temp = this_num;
  var digits = [];
  while(place>=0){
      //if(this_num == 1) { digits.push(1); break; }
      // is remainder
      divisor = Math.pow(16,place);
      ans = qremain(this_num,divisor)
      console.log(ans);
      if(ans.quotient) {
          digits.push(decdig2hex(ans.quotient));
          this_num = ans.remainder;
      } else {
          digits.push('0')
      }
      place -= 1;
  }
  //console.log(digits);
  return trimLeadingZero(digits).join([separator='']);
}


Funcs.prototype.hex2dec = function(a) {
   //document.getElementById("myinput").value ="text";
   digits = a.split('').reverse();
   var place = 0;
   var sum = 0;
   _.each(digits,function(digit) { 
     //console.log('digit');
     //console.log(num); 
     sum += hexdig2dec(digit)*Math.pow(16,place)
     place = place + 1;
   });
   console.log(sum);
   return sum;
}

function hello() {
  x = document.getElementById("myinput").value;
  alert(x);
  
}

Funcs.prototype.hex2bin = function(a) {
   // hex->dec->bin
   //document.getElementById("myinput").value ="text";
   var dec = Funcs.prototype.hex2dec(a);
   var bin = Funcs.prototype.dec2bin(dec);
   return bin;
}

Funcs.prototype.bin2hex = function(a) {
   // bin->dec->hex
   //document.getElementById("myinput").value ="text";
   var dec = Funcs.prototype.bin2dec(a);
   var hex = Funcs.prototype.dec2hex(dec);
   return hex;
}

function hello() {
  x = document.getElementById("myinput").value;
  alert(x);
  
}


/*
$(document).ready(function(){
  //get
  var bla = $('#txt_name').val();
  //set
  //$('#txt_name').val('bla');
  $('#mybutton').click(function(){
    var f; 
    f = new Funcs();
    x = f.add(1,2)
    alert(x);
  });
  
  
});
*/