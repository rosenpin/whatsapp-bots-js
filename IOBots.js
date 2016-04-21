//Created by Ido Shyvits
/*
Use the add function to add a bot that sends an output when a certain input was sent by a user.
For example
   addBot("shyvits" , "Shut The Fuck Up")
Will print "Shut The Fuck Up" when a user sends "shyvits" in the conversation.
*/
msgLength = 0;
running = true;
dict = {"None":"Something"};

post = function(msg){
    $(".btn-emoji")[0].click();
    $(".input")[1].innerHTML = msg;
    setTimeout(function(){
        $(".emoji-Recent")[0].children[0].click();
        $(".icon-send")[0].click();
    }, 200);
}

setInterval(function(){
    if (running){
        if (msgLength!=$(".msg").length){
            msgLength = $(".msg").length;
            for(var comm in dict){
                if ($(".emojitext")[$(".emojitext").length-1].innerHTML == comm){
                    post(dict[comm]);
                }
            }
        }
    }
}, 2000);

add = function(input, output){
    dict[input] = output;
}

remove = function(input){
    delete dict[input];
}

stopBot = function(){
    running = false;
}

startBot = function(){
    running = true;
}
