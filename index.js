//var submitBtn = document.getElementById("Testbutton");
var sText = document.getElementById("submitText");

var firebaseRef =  firebase.database().ref();

firebaseRef.on('value', function(snapshot) {
  var val = snapshot.val();
  window.alert(val);
});

function checkTable() {
  var firebaseRef =  firebase.database().ref();
  var thismessage = sText.value;
  if (thismessage < 0 || thismessage > 9999){
    window.alert("Number not in range.");
  }
  else{

    firebaseRef.child(thismessage);
    /*if () {
      window.alert("Number is Prime.");
    }
    else{
      window.alert("Number is not Prime");
    }*/
  }
}

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
