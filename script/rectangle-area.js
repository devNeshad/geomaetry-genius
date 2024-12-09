function calculateRectangleArea() {
  // grt length of the rectangle
  const lengthInput = document.getElementById('rectangle-length')
  const lengthText = lengthInput.value
  const length = parseFloat(lengthText)
  console.log(length)

  // grt width of the rectangle
  const widthInput = document.getElementById('rectangle-width')
  const widthText = widthInput.value
  const width = parseFloat(widthText)
  console.log(width)

  // calculate rectangel area
  const area = length * width
  console.log('area of the rectangle: ', area)

  // display rectangle area
  const rectangleAreaSpan = document.getElementById('rectangle-area')
  rectangleAreaSpan.innerText = area
}
