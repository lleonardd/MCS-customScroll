// Made by MicroScripts (Instagram @microscripts). You are alowed to use it, if cou leave this credit in.
const scrollTrough = true;
var scrY = 0;
var scrX = 0;
var childsValues = [];
var childsValuesHeight = [0];
var childsValuesWidth = [0];
var childsList = document.getElementById('mcs-customScroll').children;
var scrollHeight = 0; 
function init(){
    var scrollHeight = 0; 
    childsValues = [];
    childsValuesHeight = [0];
    childsValuesWidth = [0];
    childsList = document.getElementById('mcs-customScroll').children;
    var allHeight = 0;
    var allWidth = 0;
    var childsListLength = childsList.length;
    for(var c=0;c<childsListLength;c++){
        var classes = childsList[c].className;
        var type = classes.split(" ");
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
    if(!scrollTrough){
        var type = childsList[childsList.length -1].className.split(" ");
        if(type.includes("down")){scrollHeight -= window.innerHeight;}
        if(type.includes("up")){scrollHeight -= window.innerHeight;}
        if(type.includes("left")){scrollHeight -= window.innerWidth;}
        if(type.includes("right")){scrollHeight -= window.innerWidth;}
    }
    document.getElementsByTagName("body")[0].style.cssText = "height: "+ scrollHeight +"px";
    setTimeout(function(){
        window.scrollTo(0, 0);
        var scrY = 0;
        var scrX = 0;
        window.lastScrPos = 0;
    }, 50);
    window.scrollHeight = scrollHeight;
}
init();

window.addEventListener('resize', function(){
    init();
});

window.addEventListener('scroll', () => {
    var currentScrollValue = window.scrollY;
    var lsc = lastScrollCount(currentScrollValue);

    if(scrollTrough){
        if(currentScrollValue + window.innerHeight == window.scrollHeight){
            window.scrollTo(0, 0);
            window.lastScrPos = 0;
        }
    }

    var childsValuesLength = childsValues.length
    var count = 0;
    scrolledOver = 0;
    scrolledOverNext = childsValues[0];
    for(var i=0;i<=childsValuesLength;i++){
        if(currentScrollValue > scrolledOver + childsValues[count]){
            scrolledOver += childsValues[count];
            if((count +1) < childsValuesLength){
                count++;
            }
        }
    }
    var childClass = childsList[count].className.split(" ");
    if(childClass.includes("down")){    
        window.scrY += lsc;
        window.scrX = childsValuesWidth[count];
    }
    if(childClass.includes("up")){
        window.scrY -= lsc;
        window.scrX = childsValuesWidth[count];
    }
    if(childClass.includes("right")){
        window.scrX += lsc;
        window.scrY = childsValuesHeight[count];
    }
    if(childClass.includes("left")){
        window.scrX -= lsc;
        window.scrY = childsValuesHeight[count];
    }
    document.getElementById('mcs-customScroll').scroll(window.scrX,window.scrY);
});

var lastScrPos = 0;
function lastScrollCount(scrl){
    var lastScrollCount = scrl - window.lastScrPos;
    window.lastScrPos = scrl;
    return lastScrollCount;
}