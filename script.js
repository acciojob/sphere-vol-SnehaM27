function volume_sphere() {
    const radiusInput = document.getElementById("radius").value;
    const r = parseFloat(radiusInput);

    let volume;

    // validate: must be non-negative and numeric
    if (isNaN(r) || r < 0) {
        volume = NaN;
    } else {
        volume = (4 / 3) * Math.PI * Math.pow(r, 3);
        volume = volume.toFixed(4); // round to 4 decimal places
    }

    document.getElementById("volume").value = volume;

    return false; // prevent form submission / page reload
}

window.onload = () => {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
