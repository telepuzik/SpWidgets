function LoadTestShow() {
    createPage();
    //$("div#suiteBarLeft").prepend("<button id='button' class='ui-state-default ui-corner-all'>Show pane</button>");
    $("div#suiteBarLeft").prepend("<a class='windows_button' href=''/'><img style='float:left; height:25px; padding-left: 20px; padding-top: 5px' src='/_Layouts/15/SPFarmApp/images/windows_logo_-_2012.svg.png' alt=''></a>");

    $(document).keypress(function (e) {
        if (e.which === 91) {
            alert("test");
        }
    });

    //
    $("a.windows_button").click(function (e) {
        //runEffect();
        if ($(".main").is(":visible")) {
            $(".main").hide();
        } else {
            $(".main").show();
        }
        e.preventDefault();
    });

    // set effect from select menu value
    //$("#button").click(function(e) {
    //    //runEffect();
    //    if ($(".main").is(":visible")) {
    //        $(".main").hide();
    //    } else {
    //        $(".main").show();
    //    }
    //    e.preventDefault();
    //});
 
    $(".main").hide();
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
    $(".main").show(selectedEffect, options, 500, callback);
};
 
//callback function to bring a hidden box back
function callback() {
    setTimeout(function() {
        $(".main:visible").removeAttr("style").fadeOut();
    }, 1000 );
};


function createPage() {
    var container = $(".main");
    //if (container.children().length > 0) {
    //    return;
    //} else {
    //    alert("filling");
    //}

}