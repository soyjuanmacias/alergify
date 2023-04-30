const convertKebabCaseToCamelCase = (text) => {
  if (!text) {
    return "You must provide a text";
  }

  if (text.includes("_")) {
    return "Your text can't contain underscores";
  }

  if (text.toLowerCase() !== text) {
    return "Your text can't contain capital letters";
  }

  return text
    .split("-")
    .map((word, position) => {
      return position === 0 ? word : `${word[0].toUpperCase()}${word.slice(1)}`;
    })
    .join("");
};

export default convertKebabCaseToCamelCase;