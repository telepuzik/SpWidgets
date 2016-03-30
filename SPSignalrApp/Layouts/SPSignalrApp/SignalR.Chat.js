$(function () {

    var hubInstance = $.connection.listItems;
    $.connection.hub.logging = true;

    // Start the connection
    $.connection.hub.start()
        .then(function () {
        })
        .done(function () {
            hubInstance.server.getChatData();

            $("#update").click(function () {
                //hubInstance.server.getChatData();
                hubInstance.server.addChatMessage("test from server");
            });
        });


    // Add client-side hub methods that the server will call
    $.extend(hubInstance.client, {
        chatData: function (value) {
            if (value !== null) {
                ///draw result
                var result = JSON.parse(value);
                $("#listitems").empty();
                for (var i = 0; i < result.length; i++) {
                    $("#listitems").append("<div>" + result[i].Title + "</div>");
                }
                console.log(value);
            }
        },

        newListData: function (value) {
            toastr.info(value);
        },

        updatedListData: function (value) {
            toastr.success(value);
        },

        deletedListData: function (value) {
            toastr.warning(value);
        }
    });


});