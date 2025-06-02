function trailingZeros(n) {
  let count = 0;
  for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

function getTrailingZeros() {
  const input = prompt("Enter a non-negative integer:");
  const num = parseInt(input);

  if (isNaN(num) || num < 0) {
    alert("Please enter a valid non-negative integer.");
    return;
  }

  const result = trailingZeros(num);
  alert(`Number of trailing zeros in ${num}! is: ${result}`);
}
