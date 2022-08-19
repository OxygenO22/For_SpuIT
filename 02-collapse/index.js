let button = document.querySelector("#collapsible__button");
let spanVisible = document.querySelector("#visible");
let spanHidden = document.querySelector("#hidden");
let collapsibleContent = document.querySelector("#collapsible__content");

window.addEventListener("load", ()=> setFirstParameter());
button.addEventListener("click", () => showHideContent());
   
const setFirstParameter = () => {
    spanHidden.style.cssText = "display: block;";
    spanVisible.style.cssText = "display: none;";
    collapsibleContent.style.cssText = "display: none;";
    spanHidden.dataset.display = "block";
    spanVisible.dataset.display = "none";
    collapsibleContent.dataset.display = "none";
}

const showHideContent = () => {
    if (spanHidden.dataset.display === "block") {
    spanVisible.animate(
        [
        {transform: "translate(-4em)", opacity: 0},
        {transform: "translate(0em)", opacity: 1},
        ], 1000);
    collapsibleContent.animate([
        {transform: "translate(-4em)", opacity: 0},
        {transform: "translate(0em)", opacity: 1},
    ], 1000);

    spanHidden.style.cssText = "display: none;";
    spanVisible.style.cssText = "display: block;";
    collapsibleContent.style.cssText = "display: block;";
    spanHidden.dataset.display = "none";
    spanVisible.dataset.display = "block";
    collapsibleContent.dataset.display = "block";
    } else {
    spanVisible.animate(
        [
        {transform: "translate(0em)", opacity: 1},
        {transform: "translate(-4em)", opacity: 0},
        ], 1000);
    collapsibleContent.animate([
        {transform: "translate(0em)", opacity: 1},
        {transform: "translate(-4em)", opacity: 0},
    ], 1000);
        
    setTimeout(()=> {
        spanHidden.style.cssText = "display: block;";
        spanVisible.style.cssText = "display: none;";
        collapsibleContent.style.cssText = "display: none;";
    },1000);
    
    spanHidden.dataset.display = "block";
    spanVisible.dataset.display = "none";
    collapsibleContent.dataset.display = "none";
    }
}

