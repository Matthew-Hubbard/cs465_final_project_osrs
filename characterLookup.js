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
        //had to use proxy to get around CORS
        let idURL = "https://cors-anywhere.herokuapp.com/" + "https://oldschool.tools/ajax/hiscore-stats/" + characterName;
        //let idURL = "https://cors-anywhere.herokuapp.com/" + "http://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=" + characterName;
        //let idURL = "" + characterName;
        $.ajax({
            method: "GET",
            url: idURL,
            dataType: "json",
            headers: {  'Access-Control-Allow-Origin': '*', "x-requested-with": "x-requested-by" },
            crossDomain: true,
            success: function(result){
                console.log(("Success"));
                console.log(result);
                // Need to output stats of character...
                if(result["status"] === "success") {
                    let skillNames = Object.keys(result['stats']);
                    let i = 0;
                    for(let key in result['stats']){
                       htmlStr += "<p>" + skillNames[i] + " : " + result['stats'][key]['level'] + "</p>";
                       ++i;
                    }
                    $('#characterResults').html(htmlStr);
                }
                else {
                    $('#characterResults').html("User not found.");
                }
            },
            error: function (error) {
                console.log('Error: ');
                console.log(error);
            }
        });
    }

    console.log('outputting to div...');
    console.log(htmlStr);
}
