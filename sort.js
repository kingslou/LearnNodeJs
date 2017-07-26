
var arr = [1,3,5,2,9,6,7];
console.log("排序前");
for(var idx in arr){
  console.log(arr[idx]);
}
//开始排序
// 快速排序法，
for(var i=0;i<arr.length;i++){
  for(var j=i+1;j<arr.length;j++){
      if(arr[j]<arr[i]){
        swip(arr,i,j);
      }
  }
}
console.log("排序后");
for(var idx in arr){
  console.log(arr[idx]);
}
function swip(arr,i,j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


//二分查找
