class Window {
    constructor(name, title, xPos, yPos, width, height){
        this.name = name;
        this.title = title;
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.visble = false;
        this.HTML = parseWindow(name,title,xPos,yPos,width,height);
    }
    createWindow(){
        document.getElementById("desktop-screen").innerHTML = document.getElementById("desktop-screen").innerHTML+this.HTML;
    }
}

var mouseDown = 0;
var cursorStartX=1;
var cursorStartY=1;

var windows = [];
var helpWindow = new Window("helpWindow","Help", 50, 50, 250, 250);

function parseWindow(name,title,xPos,yPos,width,height){
    var out =` 
            <div style="left: `+ xPos +`px; top:`+ yPos +`px; width:`+ width +`px; height:`+ height +`px; " class="window-container" id="`+ name +`">
                <div class="window-top" onmousemove="moveWindow(event);" onmousedown="cursorDown(event);" onmouseup="cursorUp(event)">
                    <div class="window-top-title">`+ title +`</div>
                    <div class="window-top-icon"></div>
                </div>
                <div class="window-content">I'm a test window!</div>
            </div>
    `;
    return out
}

function cursorDown(e) {
  console.log(e)
  cursorStartX = e.clientX;
  cursorStartY = e.clientY;
  mouseDown=1;
}
function cursorUp(e) {
  mouseDown=0;
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



function moveWindow(e) {
  if(mouseDown==1){
        var windowName = e.path[1].id;
        console.log(window[windowName])
        var dX = (e.clientX-cursorStartX);
        var dY = (e.clientY-cursorStartY);
        window[windowName]["xPos"] = window[windowName]["xPos"] + dX;
        window[windowName]["yPos"] = window[windowName]["yPos"] + dY;
        //document.getElementById(windowName).style.left = window[windowName].xPos; +"px";
        //document.getElementById(windowName).style.top = window[windowName].yPos; +"px";
  }
}

helpWindow.createWindow();
showTime();
