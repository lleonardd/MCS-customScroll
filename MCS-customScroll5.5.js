// Made by MicroScripts (Instagram @microscripts). You are alowed to use it, if cou leave this credit in.
var scrY = 0;
var scrX = 0;
var childsValues = [];
var childsValuesHeight = [0];
var childsValuesWidth = [0];
var childsList = document.getElementById('mcs-customScroll').children;
function init(){
    var scrollHeight = 0; 
    childsValues = [];
    childsValuesHeight = [0];
    childsValuesWidth = [0];
    childsList = document.getElementById('mcs-customScroll').children;
    var allHeight = 0;
    var allWidth = 0;
    for(var c=0;c<childsList.length;c++){
        var type = childsList[c].className;
        var height = childsList[c].offsetHeight;
        var width = childsList[c].offsetWidth;
        if(type.includes("down") || type.includes("up")){
            var scrollHeight = scrollHeight + height;
            childsValues.push(height);
            if(type.includes("up")){
                allHeight -= height;
            }else{
                allHeight += height;
            }
            childsValuesHeight.push(allHeight);
            childsValuesWidth.push(0);
        };
        if(type.includes("right") || type.includes("left")){
            var scrollHeight = scrollHeight + width;
            childsValues.push(width);
            allWidth += width;
            childsValuesWidth.push(allWidth);
            childsValuesHeight.push(0);
        };
    };
    scrollHeight += window.innerHeight;
    document.getElementsByTagName("body")[0].style.cssText = "height: "+ scrollHeight +"px";
    setTimeout(function(){
        window.scrollTo(0, 0);
        var scrY = 0;
        var scrX = 0;
    }, 50);
}
init();

window.addEventListener('resize', function(){
    init();
});

window.addEventListener('scroll', () => {
    var currentScrollValue = window.scrollY;
    var lsc = lastScrollCount(currentScrollValue);

    var count = 0;
    scrolledOver = 0;
    scrolledOverNext = childsValues[0];
    for(var i=0;i<=childsValues.length;i++){
        if(currentScrollValue > scrolledOver + childsValues[count]){
            scrolledOver += childsValues[count];
            if((count +1) < childsValues.length){
                count++;
            }
        }
    }

    if(childsList[count].className == "down"){    
        window.scrY += lsc;
        window.scrX = childsValuesWidth[count];
    }
    if(childsList[count].className == "up"){
        window.scrY -= lsc;
        window.scrX = childsValuesWidth[count];
    }
    if(childsList[count].className == "right"){
        window.scrX += lsc;
        window.scrY = childsValuesHeight[count];
    }
    if(childsList[count].className == "left"){
        window.scrX -= lsc;
        window.scrY = childsValuesHeight[count];
    }

    document.getElementById('mcs-customScroll').scroll(window.scrX,window.scrY);

    console.log(currentScrollValue);
    // console.log("scrY: "+scrY+"   scrX: "+scrX);
});

var lastScrPos = 0;
function lastScrollCount(scrl){
    var lastScrollCount = scrl - window.lastScrPos;
    window.lastScrPos = scrl;
    return lastScrollCount;
}