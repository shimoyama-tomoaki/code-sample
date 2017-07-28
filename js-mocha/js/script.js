// function createZeroPaddingNumber(num, length) {
//   var $num = "0".repeat(length);
//   if (String(num).length < length) {
//     return ($num + num).slice(-length);
//   } else if (String(num).length > length) {
//     return (num);
//   }
// }
//
// function replaceNumber(number) {
//   return String(number).replace(/(\d)(?=(\d{3})+$)/g, '$1,');
// }
// console.log(replaceNumber(1234));

module.exports.createZeroPaddingNumber = function(num, length) {
  var $num = "0".repeat(length);
  if (String(num).length < length) {
    return ($num + num).slice(-length);
  } else if (String(num).length > length) {
    return (num);
  }
}

module.exports.replaceNumber = function(number) {
  return String(number).replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}

