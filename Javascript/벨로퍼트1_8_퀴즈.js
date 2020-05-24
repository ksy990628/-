function biggerThanThree(numbers) {
  const biggerThanThree=[];
  for(let i=0; i<numbers.length;i++){
    if(numbers[i]>3){
      biggerThanThree.push(numbers[i]);
    }
  }
  return biggerThanThree;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]

export default biggerThanThree;