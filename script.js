var xposition = document.querySelector("#x")
var yposition = document.querySelector("#y")
window.addEventListener("mousemove", (e) => {
    var x_value = e.clientX
    var y_value = e.clientY
    xposition.textContent = x_value
    yposition.textContent = y_value

    // background animation dots
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
    document.body.appendChild(dot);

    setTimeout(() => dot.remove(), 500);
})
