function calculateTriangleArea() {
  // Get triangle base value
  const triangleBaseInput = document.getElementById('triangle-base');
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  console.log(base);

  // Get triangle height value
  const triangleHeightInput = document.getElementById('triangle-height');
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);
  console.log(height);

  // Calculate triangle area
  const area = 0.5 * base * height;
  console.log('Area of the triangle is:', area);

  // Display triangle area
  const triangleAreaSpan = document.getElementById('triangle-area');
  triangleAreaSpan.innerText = area;
}



// // option--2

// function calculateTriangleArea() {
//   const base = getInputValueById('triangle-base');
//   const height = getInputValueById('triangle-height');
//   const area = 0.5 * base * height ;
//   setInnerTextById('triangle-area', area);
// } 