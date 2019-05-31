function loadItem(){
    console.log("Trying to grab item...");

    // $.getJSON("https://rsbuddy.com/exchange/summary.json", function(result){
    //     console.log("grabbing item id JSON");
    //     console.log(result);
    // });
    
    //trying to get it to bounce
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
        $("welcome").eq(i).css({'-webkit-animation-delay': '0.1s'})
    }
   /* var str = $('<span>');
    var substr = $('<span>');
    var length = welcomestr.length;
    for(var i =0; i<length; ++i){
        substr.append(welcome[i]);
        str.append(substr);
       // substr = "<span>"+welcomestr[i]+"</span>";
        //str+=substr;
        //$('welcome').append($('span').html(welcomestr[i]));
       // b = b+0
    }
    $('#welcome').html(str);*/

    

    $('#itemResults').html("<p>Looking up... </p>");
    let itemName = $('#itemInput').val();
    let htmlStr = "";
    if(itemName === '') {
        htmlStr += "<p>Please enter an item.</p>";
    }
    else {
        console.log("Looking up...");
        itemName = itemName.charAt(0).toUpperCase() + itemName.slice(1); //make first char uppercase
        let idURL = "https://www.osrsbox.com/osrsbox-db/items-complete.json";
        $.ajax({
            url: idURL,
            type: "GET",
            success: function(result){
                // console.log(result);
                let found = false;
                for(let key in result){ //loop through until name found
                    if(result[key].name === itemName){
                        //found item!
                        console.log(result[key]);
                        found = true;
                        // Need to output stats of item...
                        htmlStr += "<p>" + result[key].name + "</p>" +
                            "<p>" + result[key].examine + "<p>" +
                            "<p>Cost: " + result[key].cost + "<p>" +
                            // "<p>High Alch: " + result[key].cost + "<p>" +
                            "<p>Buy Limit: " + result[key].buy_limit + "<p>";
                            $('#itemResults').html(htmlStr);
                        break;
                    }
                }
                if(found == false){
                    $('#itemResults').html("Item not found.");
                }
            },
            error: function (error) {
                console.log('Error ${error}');
            }
        });
    }

    console.log('outputting to div...');
    console.log(htmlStr);
}

