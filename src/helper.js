function inflection(num) {
  if (num === 1) {
    return ` wygrana `;
  } else if (num >= 2 && num <= 4) {
    return ` wygrane `;
  } else if (num > 20 && num % 10 >= 2 && num % 10 <= 4) {
    return ` wygrane `;
  } else {
    return ` wygranych `;
  }
}

export default inflection;
