//lat attempt The Winner 
function isPalindrome(x) {
  x.toLowerCase();
  if (x.length === 0) {
    return true;
  }

  let xArr = x.toLowerCase().split("");
  let xRev = x.toLowerCase().split("").reverse();

  let res = 0;
  for (let i = 0; i < xArr.length; i++) {
    if (xArr[i] === xRev[i]) {
      res++;
    }
  }
  return res === xArr.length;
  //     if (lowX.charAt(0) !== lowX.charAt(lowX.length-1)) {
  //     return false;
}



//failed attempts


// function isPalindrome(x) {
// x.toLowerCase();
// if (x.length === 0){
// return true;
// }

// let xArr = Array.from(x);
// let xRev = xArr.reverse();
// for (let i=0; i < xArr.length; i++) {
// for (let e=0; e < xRev.length; e++) {
// if (JSON.stringify(xArr)===JSON.stringify(xRev)) {
// return true;
// } else {
// return false;
// }
// }
// }

//--------------------------------------

// function isPalindrome(x) {
// x.toLowerCase();
// if (x.length == 0){
// return true;
// }

// let xArr = Array.from(x);
// let xRev = xArr.reverse();
// for (let i=0; i < xArr.length; i++) {
// for (let e=0; e < xRev.length; e++) {
// if (xArr[i] === xRev[e]) {
// return true;
// } else {
// return false;
// }
// }
// }

//--------------------------------------

// function isPalindrome(x) {
// x.toLowerCase();
// if (x.length == 0){
// return true;
// }

// let xArr = Array.from(x);
// let xRev = xArr.reverse();
// for (let i=0; i < xArr.length; i++) {
// if (xArr[i] === xRev[i]) {
// return true;
// } else {
// return false;
// }
// }
// }

//--------------------------------------

// function isPalindrome(x) {
// x.toLowerCase();
// if (x.length === 0){
// return true;
// }

// let xArr = Array.from(x);
// let xRev = xArr.reverse();

// if(JSON.stringify(xArr)===JSON.stringify(xRev))
// return true;
// }

//--------------------------------------

/*function isPalindrome(x) {
x.toLowerCase();
if (x.length === 0){
return true;
}

let xArr = Array.from(x);
let xRev = xArr.reverse();


  for (let i=0; i < xArr.length; i++) {
    if (xArr[i] === xRev[i]) {
       return true;
  } 
 
    if (x.charAt(0) !== x.charAt(x.length-1)) {
    return false;
  }
      }
          } */

//sadly none of those worked perfictly
