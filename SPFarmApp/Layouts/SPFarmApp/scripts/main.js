require.config({
    baseUrl: '/_Layouts/15/SPFarmApp/scripts/lib/',
    paths: {
        jquery: 'jquery/jquery-1.11.1',
        jqueryui: 'jqueryui/jquery-ui',
        bootstrap: 'bootstrap/js/bootstrap.min',
        metro: 'jquery/metro/metro.min'
    }
});

require(['jquery', 'jqueryui'], function( $ ) {
    require(['bootstrap', 'metro'], function( $ ) {
        LoadTestShow();
        SP.SOD.executeFunc('SP.js', 'SP.ClientContext', LoadWidgets);
    });
});

function LoadWidgets() {
    require(['widgets/wg_helper', 'jquery', 'jqueryui'], function () {
        //init
        var wgHelper = new Widgets();
        wgHelper.Initialization();

        //
        $(".structure").each(function () {
            $(this).structure({ name: "Структура компании" });
        });
        
        //
        $(".blogs").each(function() {
            $(this).blogs({ name: "Блоги" });
        });

        //
        $(".listitems").each(function () {
            $(this).listitems({ name: "listitems" });
        });

        //
        $(".hooray").each(function () {
            $(this).hooray({ name: "Ура и спасибо" });
        });

        //
        $(".myprofile").each(function () {
            $(this).myprofile({ name: "Мой профиль" });
        });

        //
        $(".interview").each(function () {
            $(this).interview({ name: "Опросы" });
        });

        //
        $(".officemap").each(function () {
            $(this).officemap({ name: "Карта офиса" });
        });

        //
        $(".photos").each(function () {
            $(this).photos({ name: "Фотографии" });
        });

        //
        $(".events").each(function () {
            $(this).events({ name: "События" });
        });

        //
        $(".newemployees").each(function () {
            $(this).newemployees({ name: "Новые сотрудники" });
        });

        //
        $(".birthdays").each(function () {
            $(this).birthdays({ name: "Дни рождения" });
        });

        //
        $(".ideas").each(function () {
            $(this).ideas({ name: "Идеи" });
        });

        //
        $(".note").each(function () {
            $(this).note({ name: "Памятка" });
        });

        //
        $(".facebook").each(function () {
            $(this).facebook({ name: "Соцсети" });
        });

        //
        $(".job").each(function () {
            $(this).job({ name: "Вакансии" });
        });

        //
        $(".neighbors").each(function () {
            $(this).neighbors({ name: "Соседи" });
        });

        //
        $(".portal").each(function () {
            $(this).portal({ name: "Портал" });
        });

        //
        $(".services").each(function () {
            $(this).services({ name: "Сервисы" });
        });
    });
}