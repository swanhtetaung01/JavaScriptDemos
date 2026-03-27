document.getElementById('convert').onclick = function() {
    let temperature = parseFloat(document.getElementById('temperature_input').value);

    let unit = document.getElementById('unit').value;
    let convertedTemperature = unit === 'F' ? (temperature * 9/5) + 32
                                        : (temperature - 32) * 5/9
    document.getElementById('converted_output').textContent = convertedTemperature;
};