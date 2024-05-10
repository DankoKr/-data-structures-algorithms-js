const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// Bubble Sort
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[i]) {
        // Swap numbers
        let temp = array[j]; // 44
        array[j] = array[i]; // 44 = 99
        array[i] = temp; // 99 = 44
      }
    }
  }
}

// bubbleSort(numbers);
// console.log(numbers);
// ---------------------------------------------------------------

// Selection Sort
function selectionSort(array) {
  const length = array.length;

  for (let i = 0; i < length - 1; i++) {
    // Set current index as minimum
    let minNumberIndex = i;
    let temp = array[i]; // Store current number

    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[minNumberIndex]) {
        // Update minimum if current is lower that what we had previously
        minNumberIndex = j;
      }
    }

    array[i] = array[minNumberIndex]; // 99 = 0
    array[minNumberIndex] = temp; // 0 = 99
  }

  return array;
}

// console.log(selectionSort(numbers));
// ---------------------------------------------------------------

// Insertion Sort
function insertionSort(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      // Move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // Find where number should go
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // Move number to the right spot
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }

  return array;
}

// console.log(insertionSort(numbers));
// ---------------------------------------------------------------

// Merge Sort
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// const answer = mergeSort(numbers);
// console.log(answer);
// ---------------------------------------------------------------

// Quick Sort
function quickSort(array, left, right) {
  const len = array.length;
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

function partition(array, pivot, left, right) {
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);
