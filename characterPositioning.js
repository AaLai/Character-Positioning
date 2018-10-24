function countLetters(input) {
  var result = {};
  var convert = input.split('');
  var count = 0;
    convert.forEach(function(item) {
      if  (result[item] !== undefined) {
        result[item].push(count);
        count += 1;
      } else if (item !== ' ') {
        result[item] = [count];
        count += 1;
      } else {
        count += 1;
      }
    });

    console.log(result);
}

countLetters("lighthouse in the house");

// This will count ' ' as part of the string but not display where they are