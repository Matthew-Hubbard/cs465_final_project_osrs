function Welcome(){
    var welcomestr = "Welcome World of Runescape";
    var b = 0;
    var length = welcomestr.length;
    for(var i = 0; i<length; ++i){
        var str = $('<span>');
        if(welcomestr[i]===" "){
            str.append("&nbsp; </span>");
        }
        else{
        str.append(welcomestr[i]+ "</span>");
        }

        $('#welcome').append(str);
        b= b+0.1;
    }
    for (var i =0; i<length; ++i){
        var seconds = -i*50+'s';
        $("span").eq(i).css({'-webkit-animation-delay':seconds})
    }
}
