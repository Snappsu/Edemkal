

class Window {
    constructor(name, title, xPos, yPos){
        this.name = name;
        this.title = title;
        this.xPos = xPos;
        this.yPos = yPos;
        this.visble = false;
        this.HTML = parseWindow(name,title,xPos,yPos)
    }
    createWindow(){
        document.getElementById("desktop-screen").innerHTML = document.getElementById("desktop-screen").innerHTML+this.HTML;
    }
}

function getWindows(){
    
}

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;

    
    var time = h + ":" + m + " " + session;
    document.getElementById("time-text").innerHTML = time;    
    setTimeout(showTime, 1000);
}

function parseWindow(name,title,xPos,yPos){
    var out =` 
            <div style="left: `+ xPos +`px; top:`+ yPos +`px; " class="window-container" id="`+ name +`">
                <div class="window-top">
                    <div class="window-top-title">`+ title +`</div>
                    <div class="window-top-icon"></div>
                </div>
                <div class="window-content">I'm a test window!</div>
            </div>
    `;
    return out
}

var windows = []; // create an empty array
var helpWindow = new Window("helpWindow","Help", 50, 50);

helpWindow.createWindow();
showTime();
