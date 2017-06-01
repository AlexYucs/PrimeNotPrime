//var submitBtn = document.getElementById("Testbutton");
var sText = document.getElementById("submitText");

//Used for button
function checkTable() {
  var firebaseRef =  firebase.database().ref();
  var thismessage = sText.value;

  //check if # in range

  if ( !(/^-?\d+$/.test(thismessage)) ||thismessage < 0 || thismessage > 9999){
    window.alert(thismessage+" is not in range.");
  }
  else{
    //set up listener for #
    firebaseRef.on('value', function(snapshot) {
      var val = snapshot.child(thismessage).val();
      if (val) {
        window.alert(thismessage+" is prime.");
      }
      else{
        window.alert(thismessage+" is not prime");
      }
    });
  }
}


//Not used

//check prime
function isPrime(num){
  var ceiling = Math.sqrt(num);
  var counter;
  for(counter = 2; counter<ceiling;counter++){
    if (num%counter ==0){
      return false;
    }
  }
  return true;
}

//table set up
function setTable() {
  var i;
  var firebaseRef =  firebase.database().ref();
  for(i = 0; i<10000;i++){
    if(isPrime(i)){
      firebaseRef.child(i).set(true);
    }
    else{
      firebaseRef.child(i).set(false);
    }
  }
}
