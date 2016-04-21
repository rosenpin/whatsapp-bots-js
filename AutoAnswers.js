//Created by Tamir Cohen
/*
רושם דיקטטור כשמישהו רושם שייביץ
רושם "ככה אתם מדברים עליי מאחורי הגב" כשרושמים תמיר
*/
function dispatch(target, eventType, char) {
 var evt = document.createEvent("TextEvent");    
 evt.initTextEvent (eventType, true, true, window, char, 0, "en-US");
 target.focus();
 target.dispatchEvent(evt);
}

function send (str)
{
 var insertList =document.getElementsByClassName("input");
 var insert =insertList[insertList.length-1];
 dispatch(insert, "textInput", str);
 var send_btn = document.getElementsByClassName("icon btn-icon icon-send"); //Grabs the send button
 send_btn[0].click(); // Clicks the send button
}

var dict={"שייביץ":"דיקטטור","תמיר":"ככה אתם מדברים עלי מאחורי הגב?"};

function last_massage()
{
 var messages=document.getElementsByClassName("emojitext selectable-text");
 tex = messages[messages.length-1].innerHTML;
 for (var key in dict)
 {
  if (tex.indexOf(key)>-1)
  {
   send(dict[key]);
  }
 }
}


function main()
{
 last_massage();
 setTimeout(main,500);
}

main();
