//Reuires Jquery 
/*
אם שם הקבוצה הוא "שייביץ דיקטטור", השם ישתנה לשייביץ דיקטטור
function dispatch(target, text) {
 var evt = document.createEvent("TextEvent");    
 evt.initTextEvent ("textInput", true, true, window, text, 0, "en-US");
 target.focus();
 target.dispatchEvent(evt);
}

function run(){
    setTimeout(
	    function(){
        	$(".icon-pencil").click()
	        setTimeout(function(){
			dispatch($(".input-line"),"שייביץ דיקטטור")
		        setTimeout(function(){$(".icon-checkmark").click()},500)
		      },200)    
	        run()
	    }
	    ,4000)
    }
run()
