function Welcome(){
    var welcomestr = "Welcome World of Runescape";
    var b = 0;
    var length = welcomestr.length;
    //create a new span for each letter
    //this allows for each letter to have its own animation
    for(var i = 0; i<length; ++i){
        var str = $('<span>');
        if(welcomestr[i]===" "){
            str.append("&nbsp; </span>");
        }
        else{
        str.append(welcomestr[i]+ "</span>");
        }
        //append the letter to the welcome element.
        $('#welcome').append(str);
        b= b+0.1;
    }
    //reloop now through the length and add a animation
    //delay to each letter
    for (var i =0; i<length; ++i){
        var seconds = -i*50+'s';
        //all elements start the animation at the same time,
        //but start their bouncing based on their position
        //in the text 
        $("span").eq(i).css({'-webkit-animation-delay':seconds})
    }
}
