var popContent = document.getElementById("popup1");
var overlayWithPopUp = document.getElementById("overlay");
var closeButton = document.getElementById("closepopup")


$("button#shopitem").click(buttonOnClick);

function buttonOnClick() { 
    popContent.style.display = "flex"
    overlayWithPopUp.style.display = "block"
    closeButton.style.display = "block"
 
};

$("#closepopup").click(function() {
   
    popContent.style.display = "none"
    overlayWithPopUp.style.display = "none"
    closeButton.style.display = "none"
});



// Load More Button \\
var revealImages = document.getElementById("gallery_Alt");
var clickcounter = 0;

$("button#more").click(revealGallery);

function revealGallery(){
    clickcounter++
    if(clickcounter == 1){ 
    revealImages.style.display = "grid"
    }
    else{
    revealImages.style.display = "none"
    clickcounter = 0; 
}
    
} 


// Animation \\
    

   

