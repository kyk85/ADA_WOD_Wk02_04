function fibonacii(n){
	var x=Number(document.getElementById("numOne").value);
  var y=Number(document.getElementById("numTwo").value);
  var n=Number(document.getElementById("howLong").value);
  var result=document.getElementById("answer")
  result.innerHTML=x + ", " + y;

  for (i=0;i<n;i++) {
    var z = x+y
    x = y
    y = z
    result.innerHTML+=", " + z 
    }  
  }
  
