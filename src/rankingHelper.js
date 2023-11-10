const Inflection = (num) => {
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

const ClassForNumber = (number) => {
  switch (number) {
    case 1:
      return "number first";
    case 2:
      return "number second";
    case 3:
      return "number third";
    default:
      return "number";
  }
}

export { Inflection, ClassForNumber }