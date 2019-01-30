let arr = [2,5,4,99,6,7,43,9,23,53,64,76,34,75]
let stringArr = ["b","f","z","l","u","a","e","w","q","c","j","d"]
console.log("before sort", arr)

console.log("before sort", stringArr)

bubbleSort=(givenArr)=>{
  let swapped;
  do{
    swapped = false;
    for(let i = 0;i<givenArr.length;i++){
      if(givenArr[i]>givenArr[i+1]){
        let temp = givenArr[i]
        givenArr[i] = givenArr[i+1]
        givenArr[i+1] = temp
        swapped=true;
      }
    }
  }while(swapped)
  return givenArr
}

console.log("after sort", bubbleSort(arr))


console.log("after sort", bubbleSort(stringArr))
