function calculateEllipseArea() {
    const majorRadius = getInputValueById('ellipse-major-radius');
    const minorRadius = getInputValueById('ellipse-minor-radius');
    const area = Math.PI * majorRadius * minorRadius;
    setInnerTextById('ellipse-area', area)
}