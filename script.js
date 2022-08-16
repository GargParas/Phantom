var tot = document.querySelectorAll(".drum").length;

for(var i=0;i<tot;i++)
{

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var key = this.innerHTML;
        sound(key);
        scaleUp(key);
        setTimeout(() => {
            var str = "."+key;
            const it = document.querySelector(str);
            it.style.transform = "scale(1)";
        }, 200);
    });

}

function scaleUp(key)
{
    var str = "."+key;
    const it = document.querySelector(str);
    it.style.transform = "scale(1.05)";
}

document.addEventListener("keypress",function(event){
    sound(event.key);
    scaleUp(event.key);
    setTimeout(() => {
        var str = "."+event.key;
        const it = document.querySelector(str);
        it.style.transform = "scale(1)";
    }, 200);
});


function sound(key)
{
    var audio;
    switch(key)
    {
        case "A":
        case "a": audio = new Audio("/sounds/tom-1.mp3");
                  break;
        case "S":
        case "s": audio = new Audio("/sounds/snare.mp3");
                  break;
        case "D":
        case "d": audio = new Audio("/sounds/tom-3.mp3");
                  break;
        case "F":
        case "f": audio = new Audio("/sounds/tom-2.mp3");
                  break;
        case "J":
        case "j": audio = new Audio("kick-bass.mp3");
                  break;
        case "K":
        case "k": audio = new Audio("/sounds/tom-4.mp3");
                  break;
        case "L":
        case "l": audio = new Audio("/sounds/crash.mp3");
                  break;
        
    }
    audio.play();
}

