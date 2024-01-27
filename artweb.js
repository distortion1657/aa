var popContent = document.getElementById("popup1");
var overlayWithPopUp = document.getElementById("overlay");
var closeButton = document.getElementById("closepopup")

$("button#shopitem").click(buttonOnClick);

function buttonOnClick() { 
    popContent.style.display = "flex"
    overlayWithPopUp.style.display = "block"
    closeButton.style.display = "block"
    // console.log("tt")
};

$("#closepopup").click(function() {
    // console.log("Test")
    popContent.style.display = "none"
    overlayWithPopUp.style.display = "none"
    closeButton.style.display = "none"
});

// MAN so getElementById works but it only works on one button ---#SOLVED---
// I'm trying to use getElementByClass but looks like the syntax is different. I am done for today.


// 24x60in thumb1
// 24x48in thumb2