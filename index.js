function sumItems(array) {

  // if (array.length === 0) {
  //   return 0;
  // }

  // if (Array.isArray(array[0])) {
  //   return sumItems(array[0]);
  // } else {
  //   return array[0] + sumItems(array.slice(1));
  // }

  let retVal = 0;

  for (const val of array) {
    if (Array.isArray(val)) {
      retVal += sumItems(val);
    } else {
      retVal += val;
    }
  }
  return retVal;
}

module.exports = sumItems;