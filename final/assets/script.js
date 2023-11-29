console.log("something")

/* Part 2.1: Get the elements */
let l_arrow = document.getElementById("larrow");
let r_arrow = document.getElementById("rarrow");
let imageRow = document.getElementById("caro");

/* Part 2.2: Create variable to keep track of which image we're on */
let imageNum = 0; 

let lastFnRun;

/* Part 2.3: The showNextImage function should shift the image row to the left */
function showNextImage() {
    const carouselWidth = imageRow.clientWidth;
	imageNum = imageNum + 1;
	checkControls();
	const shift = -(imageNum*carouselWidth); 
	imageRow.style.left = shift+ "px";
    lastFnRun = "showNextImage";
}
r_arrow.onclick = showNextImage;

/* Part 2.5: The showPrevImage function should shift the image row to the right */
function showPrevImage() {
    const carouselWidth = imageRow.clientWidth;
	imageNum = imageNum - 1;
	checkControls(); 
	const shiftprev = -(imageNum*carouselWidth); 
	imageRow.style.left = shiftprev + "px";
    lastFnRun = "showPrevImage";
}

l_arrow.onclick = showPrevImage;

function toggleCarouselFn() {
    if (lastFnRun === "showNextImage") {
        showPrevImage();
        lastFnRun = "showPrevImage";
    } else {
        showNextImage();
        lastFnRun = "showNextImage";
    }
}

setInterval(toggleCarouselFn, 10000);

/* Total number of images */
let totalImages = document.getElementsByClassName("carousel-image").length;

/* Part 2.7 */

function checkControls() {
	// This if-statement checks if we're at the first image.
	// In the parentheses below, check what imageNum is equal to.
	if (imageNum == 0) {
		// What should happen if it's the first image?
		l_arrow.classList.add("hidden");
	}
	else if (l_arrow.classList.contains("hidden")) {
		// otherwise, what should happen?
		l_arrow.classList.remove("hidden");
		
	}
	// This if-statement checks if we're at the last image.
	// In the parentheses below, check what imageNum is equal to.
	if (imageNum == totalImages-1) {
		// What should happen it's the last image?
		r_arrow.classList.add("hidden");
	}
	else if (r_arrow.classList.contains("hidden")) {
		// otherwise, what should happen?
		r_arrow.classList.remove("hidden");
	}
}