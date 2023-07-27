
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

//Close the main window
let isMainClosed = false;
let closeMainButton = document.getElementById("close-main");
closeMainButton.addEventListener('click', () => {
    let mainWindow = document.getElementById("main-window");
    if(mainWindow !== undefined) {
        console.log("close main");
        mainWindow.classList.add("closed");
    }

    isMainClosed = !isMainClosed;
    addEasterEgg();
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