function loadItem(){
    console.log("Trying to grab item...");

    // $.getJSON("https://rsbuddy.com/exchange/summary.json", function(result){
    //     console.log("grabbing item id JSON");
    //     console.log(result);
    // });
    

    //trying to add wave animation...
    var welcome = "Hello World of Runescape";
    for (var i in text){
        if(text[i] == " "){
            $(".thewave").append( $(<span>).html("&nbsp"));
        }
        else{
            $(".thewave").append( $(<span>).text(text[i]));
        }
    }





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

