
// this is solved by switch

var drum = document.querySelectorAll(".box");

for (let i = 0; i < drum.length; i++) {

    drum[i].onclick = function () {
        let letter = document.querySelectorAll(".box h1")[i].innerHTML;
       makeSound(letter);
    }
}


//this is solved by keypress



    document.addEventListener("keypress" , function(event){
        makeSound(event.key)
        
    });
    
    function makeSound(key){
        switch (key) {
            case "a":
                let audioOne = new Audio("music/tom-4.mp3");
                audioOne.play();
                break;
            case "s":
                let audioSecond = new Audio("music/crash.mp3");
                audioSecond.play();
                break;
            case "c":
                let audioThird = new Audio("music/kick-bass.mp3");
                audioThird.play();
                break;
            case "g":
                let audioFourth = new Audio("music/tom-1.mp3");
                audioFourth.play();
                break;
            case "t":
                let audioFivth = new Audio("music/tom-2.mp3");
                audioFivth.play();
                break;
            case "f":
                let audioSixth = new Audio("music/tom-3.mp3");
                audioSixth.play();
                break;
            case "p":
                let audioSeventh = new Audio("music/snare.mp3");
                audioSeventh.play();
                break;
            default:
                alert("wrong presskey")
                break;
        }
    }

     
    



