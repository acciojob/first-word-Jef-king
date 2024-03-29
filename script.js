function firstWord(s) {
  let x=s.split(' ');
  return x[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
