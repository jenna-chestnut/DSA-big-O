// In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. 
// Assume that the input array is always sorted. 
// What is the Big O of the following algorithm? Explain your answer

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;
    }
  }
  return -1;
}

// function starts in the middle of the array and determines whether or not the item is above or below it, then looks through half of the array only. this function will only work if the array is sorted
// Logarithmic Time (O(log(n))) since the time complexity is proportional to how many times you can half the size of the array. 