function CreateListItemsForm(currentElement) {
    console.log("initialized" + currentElement.attr("class"));

    require(['sp/sp_helper'], function() {
        var spHelper = new SpHelper(this);
        var getItems = spHelper.LoadListItems("ВЖД", "<View><Query><Where>" +
                        "</Where>" +
                        "<OrderBy><FieldRef Name='Created' Ascending='False' /></OrderBy>" +
                        "</Query></View>");

        //отрисовка таблицы
        getItems.done(function (listItems) {
            currentElement.empty();
            var table = $("<table class='items'/>");
            table.append("<tr><th class='ObjectColumn'>Tets</th><th>Диспетчер</th><th>Количество персонала на смене</th><th>Текущая смена</th></tr>");

            listItems.reset();

            while (listItems.moveNext()) {
                var currentItem = listItems.get_current();

                if (currentItem != null) {
                    var tr = $("<tr/>");
                    tr.append("<td>" + currentItem.get_item('Title') + "</td>" +
                        "<td>" + currentItem.get_item('Title') + "</td>" +
                        "<td>" + currentItem.get_item('Title') + "</td>" +
                        "<td>" + currentItem.get_item('Title') + "</td>");
                    table.append(tr);
                }
            }
            currentElement.append(table);

        });
    });

    
}