//calc 1-2+3-4+...m
function sum2(n){
var sum=0;
if(n<=0){
    console.log("error: n must>0");
    return 0;
}else{
    //o(n)
    for(var i=1; i<=n; i++){
        //if(i%2==0)//even
         //   sum -= i;
       // else
         //   sum += i;//odd
         (i%2==0)?(sum -= i):(sum += i);
        }
    
    return sum;
    //o(1) 
    //return (i%2==0)?(-1)*(n/2): ((n+1)/2);
}
}


//test
var n=100; //readline
console.log("1-2+3-4+..."+n+"="+sum2(n));