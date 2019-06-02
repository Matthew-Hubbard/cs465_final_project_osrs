function loadCharacter(){
    console.log("Trying to grab character...");

    $('#characterResults').html("<p>Looking up... </p>");
    let characterName = $('#characterInput').val();
    let htmlStr = "";
    if(characterName === '') {
        htmlStr += "<p>Please enter an character.</p>";
    }
    else {
        console.log("Looking up...");
        //characterName = characterName.charAt(0).toUpperCase() + characterName.slice(1); //make first char uppercase
        let idURL = "https://oldschool.tools/ajax/hiscore-stats/" + characterName;
        //let idURL = "https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=" + characterName;
        $.ajax({
            url: idURL,
            type: "GET",
            success: function(result){
                console.log(result);
                // Need to output stats of character...
                // if(result["status"] === "success") {
                //     $('#characterResults').html(htmlStr);
                // }
                // else {
                //     $('#characterResults').html("Item not found.");
                // }
            },
            error: function (error) {
                console.log('Error ${error}');
            }
        });
    }

    console.log('outputting to div...');
    console.log(htmlStr);
}
