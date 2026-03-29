const unitConverter = {
    mToFt: (meters) => meters * 3.28084,
    kgToLb: (kilo) => kilo * 2.20462,
    cToF: (C) => (C * 9/5) + 32
}

document.getElementById('convert').onclick = () => {
    let input = parseFloat(document.getElementById('input').value);
    let conversionType = document.getElementById('unit').value;

    if(!isNaN(input)) {
        let output = conversionType === 'm2Ft' ? unitConverter.mToFt(input)
                : conversionType === 'kg2Lb' ? unitConverter.kgToLb(input)
                : unitConverter.cToF(input);

        document.getElementById('output').textContent = output.toFixed(2);
    }else {
        alert("Please enter a valid number");
    }
};