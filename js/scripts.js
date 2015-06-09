
function removeClass(){
        document.getElementById("first").className = document.getElementById("first").className.replace(/\bnone\b/,'')
    }

    window.onload = function()
    {
        if(window.location.hash) {
  // Fragment exists
} else {
  document.getElementById("first").className += " none";
}

        document.getElementById("second").addEventListener( 'click' , removeClass );
        document.getElementById("third").addEventListener( 'click' , removeClass );
        document.getElementById("fourth").addEventListener( 'click' , removeClass );
    }

