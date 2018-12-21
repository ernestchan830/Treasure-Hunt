$("#bork").click(function(){
    $(".sentence").text("You hear something that clearly isn't a bark.The dog has borfed. You feel perplexed. Click on the tail.");
});


$(".dog").click(function(){
    $(".sentence").text("You've angered the pup. Double click to rub its stomach");
}); 

$(".sentence").dblclick(function(){
    $(".sentence").text("The dog self-destructs in excitement Why....");
}); 

$(".dog").dblclick(function(){
    $(".sentence").text("The dog is satisfied enough to keep you alive.");
}); 