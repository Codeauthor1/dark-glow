if (document.querySelector(".popup")) {
    const circle = document.querySelector(".circle");
    const btn = document.querySelector(".btn");
    
    let btnON = false;
    
    btn.addEventListener("click", () => {
        if (!btnON) {
    
            btnON = true;
    
            circle.style.animation = "Move_circle_right 1s forwards"
    
            btn.style.animation = "background_green 1s forwards"

            document.querySelector("html").style.backgroundColor = "#000";

            document.querySelector("p").style.color = "#fff";
    
            chrome.tabs.executeScript({
                file: "appOn.js"
            })
        }else{
    
            btnON = false;

            document.querySelector("html").style.backgroundColor = "#fff";
            document.querySelector("p").style.color = "#000";
    
            circle.style.animation = "Move_circle_left 1s forwards"
            
            btn.style.animation = "background_red 1s forwards"
    
            chrome.tabs.executeScript({
                file: "appOff.js"
            });
        }
    })
}