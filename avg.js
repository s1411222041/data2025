//function avg(score){
   // var sum=0; average=0;
   // for(var i=0; i<score.length; i++){
   //     sum += score[i];
  //  }
//if(score.length>0)
 //   average=sum/score.length;
  //  return average;
//}

function avg(score){
     var sum=0;  //1
     for(var i=0; i<score.length; i++){//n+1
         sum += score[i];//n
    }
     return (score.length>0)? sum/score.length : 0;//1
 }

var score=[50, 20, 30, 15, 16, 21, 33, 11, -9, 27];
console.log(score.toString()+"average:"+avg(score));