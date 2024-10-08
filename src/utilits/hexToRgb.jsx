export default function hexToRgb (hex) {
  const red = parseInt(hex.substring(1, 3), 16);
  const green = parseInt(hex.substring(3, 5), 16);
  const blue = parseInt(hex.substring(5, 7), 16);

  if (isNaN(red) || isNaN(green) || isNaN(blue)) {
    return "Ошибка!";
  }
  return `rgb(${red}, ${green}, ${blue})`;
};