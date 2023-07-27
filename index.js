
/**
 * MINIMIZE 
 */

//Minimize Main Window
let isMainMinimized = false;
let minMainButton = document.getElementById("minimize-main");
minMainButton.addEventListener('click', () => {
    let mainWindowBody = document.getElementById("main-window-body");
    if(mainWindowBody !== undefined) {

        if(!isMainMinimized) {
            console.log('click');
            mainWindowBody.classList.add("minimized");
        } else {
            mainWindowBody.classList.remove("minimized");
        }

        isMainMinimized = !isMainMinimized;
    }
});

//Minimize Inner Window
let isInnerMinimized = false;
let minInnerButton = document.getElementById("inner-minimize");
minInnerButton.addEventListener('click', () => {
    let innerWindowBody = document.getElementById("inner-window-body");
    if(innerWindowBody !== undefined) {

        if(!isInnerMinimized) {
            console.log('click');
            innerWindowBody.classList.add("minimized");
        } else {
            innerWindowBody.classList.remove("minimized");
        }

        isInnerMinimized = !isInnerMinimized;
    }
});

/**
 * CLOSE
 */

//Close the main window
let closeMainButton = document.getElementById("close-main");
closeMainButton.addEventListener('click', () => {
    let mainWindow = document.getElementById("main-window");
    if(mainWindow !== undefined) {
        mainWindow.classList.add("closed");
        addEasterEgg();
    }
});

//If main window is closed, add easter egg window
const easterEggWindowHtml = `
    <div class="window">
        <div class="title-bar">
            <div class="title-bar-text">Easter Egg 1</div>
        </div>
        <div class="window-body">
            <h2>Congrats! You found one of the easter eggs scattered around this site! </h2>
            <p> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> Click Here </a> for your reward!</p>
        </div>
    </div>
`

function addEasterEgg() {
    let easterEggDiv = document.getElementById("easter-egg-div");

    if (easterEggDiv !== undefined) {

        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = easterEggWindowHtml;

        while(tempDiv.firstChild) {
            easterEggDiv.appendChild(tempDiv.firstChild);
        }
    }
}

//Close inner window
let closeInnerButton = document.getElementById("inner-close");
closeInnerButton.addEventListener('click', () => {
    let innerWindow = document.getElementById("inner-window");
    if(innerWindow !== undefined) innerWindow.classList.add("closed");
});


/**
 * MAXIMIZE
 */

//Maximize the main window
let isMainMaxed = false;
let maxMainButton = document.getElementById("maximimze-main");
maxMainButton.addEventListener("click", () => {
    let mainWindow = document.getElementById("main-window");

    if(mainWindow !== undefined) {
        
        if(!isMainMaxed) {
            mainWindow.classList.add("maxed");
        }
        else {
            mainWindow.classList.remove("maxed");
        }

        isMainMaxed = !isMainMaxed;;
    }
});

//Maximize inner window
let isInnerMaxed = false;
let maxInnerButton = document.getElementById("inner-maximize");
maxInnerButton.addEventListener("click", () => {
    let innerWindow = document.getElementById("inner-window");
    if(innerWindow !== undefined) {

        if(!isInnerMaxed) {
            innerWindow.classList.add("maxed");
        } else {
            innerWindow.classList.remove("maxed");
        }        

        isInnerMaxed = !isInnerMaxed;
    }
})