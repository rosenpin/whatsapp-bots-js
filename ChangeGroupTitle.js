//Reuires Jquery 
function dispatch(target, eventType, char) {
 var evt = document.createEvent("TextEvent");    
 evt.initTextEvent (eventType, true, true, window, char, 0, "en-US");
 target.focus();
 target.dispatchEvent(evt);
}

function run(){
    setTimeout(
	    function(){
        	$(".icon-pencil").click()
	        setTimeout(function(){
			dispatch($(".input-line"),"textInput","שייביץ דיקטטור")
		        setTimeout(function(){$(".icon-checkmark").click()},500)
		      },200)    
	        run()
	    }
	    ,4000)
    }
run()
