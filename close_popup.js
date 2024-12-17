window.addEventListener("load",function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.
            display = "block";

        setTimeout(function close(){
            document.querySelector(".popup").style.display ="none";
        }, 2000);
        }, 100);
});

