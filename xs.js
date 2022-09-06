function isCheck(){
    var number = document.getElementById('no').value;
    var data = document.getElementById('no1').value;
    var data1= document.getElementById('data1');
  var num1 = parseInt(number);
  var num2 = parseInt(data);
    console.log(num1);
    console.log(num2);
    // var sum = [];
    var add;
   
    for ( let i = 0; i <= 10; i++) 
    {
        add =num1 + num2
        // sum.push(add);
       console.log(add)
       document.write(add + " ");
      
       num1=num2;
       num2=add;
    }
    // data1.innerHTML=sum;
    
}