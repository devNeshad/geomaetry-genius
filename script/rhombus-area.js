function calculateRhombusArea() {
    const division1Radius = getInputValueById('rhombus-major-radius');
    const division2Radius = getInputValueById('rhombus-minor-radius');
    const area = 0.5 * division1Radius * division2Radius;
    setInnerTextById('rhombus-area', area);
} 