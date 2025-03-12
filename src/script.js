let count = document.getElementById("count");

document.getElementById("increment").addEventListener("click", function() {
    let currentValue = parseInt(count.innerText);
    count.innerText = currentValue + 1;
});

document.getElementById("decrement").onclick = function() {
    let currentValue = parseInt(count.innerText);
    if (currentValue > 0) {
        count.innerText = currentValue - 1;
    }
};
