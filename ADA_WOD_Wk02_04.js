function fibonacii(x,y,z){
	var x=document.getElementById('numOne').value;
	var y=document.getElementById('numTwo').value;
	var z=document.getElementById('howLong').value;
	//var done=document.getElementById('answer');
	var sequence=[];
	
		for(i=1;i<=z;i++){
		if (sequence.length==0) {
		sequence.push(x)
		} else if (sequence.length==1) {
		sequence.push(y)		
		} else {
		var fiboLast1 = sequence[sequence.length - 1];
		var fiboLast2 = sequence[sequence.length - 2];  
		sequence.push(Number(fiboLast1)+Number(fiboLast2));
		}
		
	} document.getElementById('answer').innerHTML=sequence;
} 

//console.log(sequence);
//console.log(sequence.length);

 









