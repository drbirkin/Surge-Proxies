
function range(slider) {
    const sliderPrice = slider.querySelector(".range__value");
    const sliderValue = slider.querySelector(".length__title");

    console.log(slider.id);

    slider.querySelector("input").addEventListener("input", event => {
        sliderValue.setAttribute("data-length", event.target.value);
        applyFill(event.target);
    });

    applyFill(slider.querySelector("input"));


    function applyFill(slider) {
        const checkId = slider.id;
        if (checkId === 'stable' || checkId === 'pool' ) {
            console.log("check");
            sliderValue.textContent=" / " + slider.value + " GB";
            if (slider.value == 2) {
                sliderPrice.textContent="10"
            }
            else if (slider.value == 4) {
                sliderPrice.textContent="20"
            }
            else if (slider.value == 6) {
                sliderPrice.textContent="30"
            }
            else if (slider.value == 8) {
                sliderPrice.textContent="40"
            }
            else if (slider.value == 10) {
                sliderPrice.textContent="50"
            }
        }
        else if (slider.id === "isp") {
            sliderValue.textContent=" / " + slider.value + " IPS";
            if (slider.value == 25) {
                sliderPrice.textContent="55"
            }
            else if (slider.value == 50) {
                sliderPrice.textContent="110"
            }
            else if (slider.value == 75) {
                sliderPrice.textContent="165"
            }
            else if (slider.value == 100) {
                sliderPrice.textContent="220"
            }
        }
    }
}
