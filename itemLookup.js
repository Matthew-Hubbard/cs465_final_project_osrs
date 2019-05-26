function loadItem(){
    console.log("Trying to grab item...");
    $('#itemResults').html("<p>Looking up... </p>");
    let itemName = $('#itemInput').val();
    let htmlStr = "";
    if(itemName === '') {
        htmlStr += "<p>Please enter an item.</p>";
    }
    else {
        // htmlStr += "<p>" + osrs.ge.getItem(itemName) + "</p>";
        htmlStr += "<p>" + itemName + "</p>";
    }

    $('#itemResults').html(htmlStr);
}