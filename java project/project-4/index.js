const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const resetButton = document.getElementById("resetButton");
const mainElement = document.querySelector("main");

// Load saved settings or set defaults
const initialSetup = () => {
    const savedFontSize = localStorage.getItem("fontSize");
    const savedBgColor = localStorage.getItem("bgColor");

    if (savedFontSize) {
        mainElement.style.fontSize = savedFontSize;
        selectFontSize.value = savedFontSize;
    } else {
        mainElement.style.fontSize = "16px";
        selectFontSize.value = "16px";
    }

    if (savedBgColor) {
        mainElement.style.backgroundColor = savedBgColor;
        selectBgColor.value = savedBgColor;
    } else {
        mainElement.style.backgroundColor = "aqua";
        selectBgColor.value = "aqua";
    }
};

// Change font size
const changeFontSize = (event) => {
    const selectedFontSize = event.target.value;
    mainElement.style.fontSize = selectedFontSize;
    localStorage.setItem("fontSize", selectedFontSize);
};

// Change background color
const changeBgColor = (event) => {
    const selectedBgColor = event.target.value;
    mainElement.style.backgroundColor = selectedBgColor;
    localStorage.setItem("bgColor", selectedBgColor);
};

// Reset all settings to default
const clearLocalStorage = () => {
    localStorage.removeItem("fontSize");
    localStorage.removeItem("bgColor");

    selectFontSize.value = "16px";
    selectBgColor.value = "aqua";
    mainElement.style.fontSize = "16px";
    mainElement.style.backgroundColor = "aqua";
};

// Event listeners
selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", changeBgColor);
resetButton.addEventListener("click", clearLocalStorage);

// Run initial setup when the page loads
window.addEventListener("DOMContentLoaded", initialSetup);
