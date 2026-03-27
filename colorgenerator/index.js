let colorParam = document.getElementById('color');
colorParam.textContent = "#FFFFFF";

document.getElementById('generator').onclick = function() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let colorText = colorParam.textContent = "#" + randomColor.toUpperCase();
    document.getElementById('color_button').style.backgroundColor = colorText;
    document.getElementById('color').style.color = colorText;
};

document.getElementById('color_button').onclick = function() {
    let colorText = document.getElementById('color').textContent;

    navigator.clipboard.writeText(colorText).then(() => {
        alert("Copied: " + colorText);
    }).catch(err => {
        console.error("Failed to copy!", err);
    });
};