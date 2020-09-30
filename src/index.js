
exports.min = function min (array) {
  if (Array.isArray(array) && array.length) { 
    return array.reduce(function (acc, curr) {
      return ( acc < curr ? acc : curr);
    });
  } else {
    return 0;
  }  
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length) { 
    return array.reduce(function (acc, curr) {
      return ( acc > curr ? acc : curr);
    });
  } else {
    return 0;
  }  
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length) { 
    return array.reduce(function (acc, curr) {
      return acc + curr; 
    }) / array.length;
  } else {
    return 0;
  }  
}
