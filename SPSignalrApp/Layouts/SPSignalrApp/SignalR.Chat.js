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
                hubInstance.server.addChatMessage($("#text").val());
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

        newEvent: function (eventType, value) {
            switch (eventType) {
                case "Новое":
                    toastr.info(value);
                    break;
                case "Изменено":
                    toastr.success(value);
                    break;
                case "Удалено":
                    toastr.warning(value);
                    break;
            }
        }
    });


});