


const hiddenElements = document.querySelectorAll(".hidden")
const slidingElements = document.querySelectorAll(".slide-in")
const slideDownElements = document.querySelectorAll(".slide-down")
const options = {
    root:null,
    rootMargin: "100px 0px",
    threshold: 1
}


const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        
        if(entry.isIntersecting && entry.target.classList.contains("slide-in")){
           
            entry.target.classList.add("slide-finish")
        
        }else if (entry.isIntersecting && entry.target.classList.contains("hidden")){
            entry.target.classList.add("show")

        }else if (entry.isIntersecting && entry.target.classList.contains("slide-down")){
            entry.target.classList.add("slide-finish")
            observer.unobserve(entry.target)
        };
        });
    });


slideDownElements.forEach((el) => observer.observe((el)));
hiddenElements.forEach((el) => observer.observe((el)));
slidingElements.forEach((el) => observer.observe((el)))


//Buttons

//Shop 
var popContent = document.querySelectorAll("#popup1");
var overlayWithPopUp = document.querySelectorAll(".overlay");
var closeButton = document.querySelectorAll(".closepopup")


$("button#shopitem").click(buttonOnClick);
function buttonOnClick() { 
    popContent[0].style.display = "flex"
    overlayWithPopUp.style.display = "block"
    closeButton.style.display = "block"
 
};

const openHamburger = document.getElementById("dropdown")
$("button#hamburg").click(hamburgfunc);


function hamburgfunc(){
    clickcounter++
    if(clickcounter % 2 === 0 ){
    openHamburger.style.display = "grid"

}else{
    openHamburger.style.display = "none"
}
}
//End of Buttons

var revealImages = document.getElementById("gallery-load-more");
var clickcounter = 0;

$("button#more").click(revealGallery);

function revealGallery(){
    clickcounter++
    if(clickcounter % 2 != 0 ){
    
    revealImages.style.display = "grid"
    window.scrollBy({
        top: 400,
        behavior: "smooth"
    }
    );
    }
    else{
      
    revealImages.style.display = "none"
    clickcounter = 0; 
}
    
} 




$("#closepopup").click(function() {
   
    popContent.style.display = "none"
    overlayWithPopUp.style.display = "none"
    closeButton.style.display = "none"
});

// Load More Button \\


document.getElementById("major").addEventListener("click", function(event){
    window.scrollBy({
        top: 680,
        behavior: 'smooth'
})
})


// Animation \\
    