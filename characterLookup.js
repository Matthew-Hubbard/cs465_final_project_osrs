function loadCharacter(){
    console.log("Trying to grab character...");

    $('#characterResults').html("<p>Looking up... </p>");
    let characterName = $('#characterInput').val();
    if(characterName === '') {
        $('#characterResults').html("<p>Enter a valid username</p>");
    }
    else {
        console.log("Looking up...");
        //had to use proxy to get around CORS
        let idURL = "https://cors-anywhere.herokuapp.com/" + "https://oldschool.tools/ajax/hiscore-stats/" + characterName;
        $.ajax({
            method: "GET",
            url: idURL,
            dataType: "json",
            headers: {  'Access-Control-Allow-Origin': '*', "x-requested-with": "x-requested-by" },
            crossDomain: true,
            success: displayCharacter,
            error: function (error) {
                console.log('Error: ');
                console.log(error);
            }
        });
    }
}

//function that displays the character results. The argument being passed in is a JSON object from the ajax GET request above.
function displayCharacter(result) {
    console.log(("Success"));
    console.log(result);
    // Need to output stats of character...
    let htmlStr = "";
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
}
