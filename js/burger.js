const burgermenu = document.getElementById("burgermenu");
const elementsToDisable = document.querySelectorAll('body > *:not(.burgermenu)');
let toggleMenuAndDisableElementsJustInvoked = false;

function toggleMenuAndDisableElements() {
    console.log('woked');
    elementsToDisable.forEach(element => {
        element.classList.toggle("disabled");
    });

    if (burgermenu.style.display === "block") {
        burgermenu.style.display = "none";
    } else {
        burgermenu.style.display = "block";
    }
    toggleMenuAndDisableElementsJustInvoked = true;
}

function closeMenuAndEnableElements() {
    elementsToDisable.forEach(element => {
        element.classList.remove("disabled");
    });

    burgermenu.style.display = "none";
}

function init() {
    document.getElementById("burgerbutton").addEventListener("click", toggleMenuAndDisableElements);
    document.getElementById("closebutton").addEventListener("click", closeMenuAndEnableElements);
    document.querySelector(".navgrid__logo").addEventListener("click", indexRedirect);

    window.addEventListener('click', function(event) {
        if (burgermenu.style.display === "block" && !event.target.closest('.burgermenu') && toggleMenuAndDisableElementsJustInvoked === false) {
            console.log('woked2');
            closeMenuAndEnableElements();
        }
        else{
            toggleMenuAndDisableElementsJustInvoked = false;
        }
    });

}

init();

function redirect(redirectUrl) {
    window.location.href = redirectUrl;
}


function indexRedirect(){
    redirect("index.html");
}

function redirectToSelectedLang(langSelect) {
    const selectElement = langSelect;
    const selectedLang = selectElement.options[selectElement.selectedIndex].value;
    console.log(selectedLang);

    var redirPrefix = selectedLang == "UA" ? "/uk/" : "/";
    console.log(window.location.pathname);
    console.log(redirPrefix);
    window.location.href = redirPrefix + window.location.pathname.replace("/uk/", "/").replace("/", "");
}