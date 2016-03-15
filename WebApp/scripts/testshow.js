function LoadTestShow() {
    createPage();
    $("div.container").parent().prepend("<button id='button' class='ui-state-default ui-corner-all'>Run Effect</button>");
     
    // set effect from select menu value
    $( "#button" ).click(function() {
        //runEffect();
        if ($(".container").is(":visible")) {
            $(".container").hide();
        } else {
            $(".container").show();
        }
        
    });
 
    $(".container").hide();
}

function runEffect() {
    // get effect type from
    var selectedEffect = $( "#effectTypes" ).val();
 
    // most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if ( selectedEffect === "scale" ) {
        options = { percent: 100 };
    } else if ( selectedEffect === "size" ) {
        options = { to: { width: 280, height: 185 } };
    }
 
    // run the effect
    $(".container").show(selectedEffect, options, 500, callback);
};
 
//callback function to bring a hidden box back
function callback() {
    setTimeout(function() {
        $(".container:visible").removeAttr("style").fadeOut();
    }, 1000 );
};


function createPage() {
    var container = $(".container");
    if (container.children().length > 0) {
        return;
    } else {
        alert("filling");
    }

}