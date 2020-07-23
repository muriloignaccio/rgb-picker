const container = document.querySelector('.container');

const authorName = document.querySelector('.author__name');
const authorHeart = document.querySelector('.author__heart');

const [
  redColorSlider,
  greenColorSlider,
  blueColorSlider,
] = document.querySelectorAll('input[type="range"]');

const [
  redColorInput,
  greenColorInput,
  blueColorInput,
] = document.querySelectorAll('input[type="number"]');

const updateColor = () => {
  container.style.backgroundColor = `rgba(${redColorInput.value}, ${greenColorInput.value}, ${blueColorInput.value})`;
  authorName.style.color = `rgba(${redColorInput.value}, ${greenColorInput.value}, ${blueColorInput.value})`;
  authorHeart.style.stroke = `rgba(${redColorInput.value}, ${greenColorInput.value}, ${blueColorInput.value})`;
};

redColorSlider.oninput = ({ target: { value } }) => {
  redColorInput.value = value;
  updateColor();
};

greenColorSlider.oninput = ({ target: { value } }) => {
  greenColorInput.value = value;
  updateColor();
};

blueColorSlider.oninput = ({ target: { value } }) => {
  blueColorInput.value = value;
  updateColor();
};

updateColor();
