//var submitBtn = document.getElementById("Testbutton");


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

function submitTest() {
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
