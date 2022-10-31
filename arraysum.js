function sum_array(){
    var sum=0;
    var arr=[];
    var n = prompt("enter array size");
    for(i=0;i<n;i++){
      arr[i]= parseInt(prompt("enter the numbers "));
       sum=sum+arr[i];  
    }
   
    console.log(sum);
  }
  sum_array();