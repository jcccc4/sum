
  var arr = [];
  const reducer = (preVal, curVal) => preVal + curVal;

  function sum(a, b, c) {
    arr.push(a, b, c);

    let total = arr.filter((fil) => fil);
    if (total.length > 3) {
      arr = [a, b, c];
      total = arr.filter((fil) => fil);
    }
    if (total.length === 3) {
      return total.reduce(reducer, 0);
    }
  }

  console.log(sum(2, 4, 5)); //11

  console.log(sum(5, 2));
  console.log(sum(6)); //13

  console.log(sum(4));
  console.log(sum(22));
  console.log(sum(1)); //27

