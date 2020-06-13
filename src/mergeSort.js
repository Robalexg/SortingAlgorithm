const array = [5, 30, 6, 2, 6, 10, 0, 5, 1];

//Merge Sort
const mergeSort = arr => {
  //Check if the array can be split
  if (arr.length < 2) return arr;
  //Get middle index
  const middle = Math.floor(arr.length / 2);
  //split array into two sides
  const left = arr.slice(0, middle);
  const right = arr.slice(middle, arr.length);

  //Use recursion to countinue spliting
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  //Create a new array
  const result = [];
  //Check if either array is empty
  while (left.length && right.length) {
    //find lower value
    if (left[0] <= right[0]) {
      //add left value
      result.push(left.shift());
    } else {
      //add right  value
      result.push(right.shift());
    }
  }

  while (left.length) result.push(left.shift());
  //Merge rigth array
  while (right.length) result.push(right.shift());

  //return restult array

  return result;
};

//Insertion Sort
const insertionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    const j = i - 1;

    while (arr[j] > 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = curr;
  }

  return arr;
};

console.log("Merge Sort:", mergeSort(array));
console.log("Insertion Sort:", insertionSort(array));
