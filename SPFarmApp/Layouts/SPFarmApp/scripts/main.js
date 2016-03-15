/**
 * Created by IMELNIKOV on 15.12.2014.
 */
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
        LoadWidgets();
    });
});

function LoadWidgets (){
    $(".structure").each(function (){
        var element = $(this);
        require(['widgets/wg_structure'], function() {
            WgStructureCreate(element);
        });
    });

    $(".blogs").each(function (){
        var element = $(this);
        require(['widgets/wg_all'], function() {
            WgBlogsCreate(element);
        });
    });

    $(".hooray").each(function (){
        var element = $(this);
        require(['widgets/wg_all'], function() {
            WgHoorayCreate(element);
        });
    });

    $(".myprofile").each(function (){
        var element = $(this);
        require(['widgets/wg_all'], function() {
            WgMyprofileCreate(element);
        });
    });

    $(".interview").each(function (){
        var element = $(this);
        require(['widgets/wg_all'], function() {
            WgInterviewCreate(element);
        });
    });

    $(".officemap").each(function (){
        var element = $(this);
        require(['widgets/wg_all'], function() {
            WgOfficemapCreate(element);
        });
    });

    $(".photos").each(function (){
        var element = $(this);
        require(['widgets/wg_photos'], function() {
            WgPhotosCreate(element);
        });
    });

    $(".events").each(function (){
        var element = $(this);
        require(['widgets/wg_all'], function() {
            WgEventsCreate(element);
        });
    });

    $(".newemployees").each(function (){
        var element = $(this);
        require(['widgets/wg_all'], function() {
            WgNewemployeesCreate(element);
        });
    });

    $(".birthdays").each(function (){
        var element = $(this);
        require(['widgets/wg_all'], function() {
            WgBirthdaysCreate(element);
        });
    });

    $(".ideas").each(function (){
        var element = $(this);
        require(['widgets/wg_all'], function() {
            WgIdeasCreate(element);
        });
    });

    $(".note").each(function (){
        var element = $(this);
        require(['widgets/wg_all'], function() {
            WgNoteCreate(element);
        });
    });

    $(".facebook").each(function (){
        var element = $(this);
        require(['widgets/wg_all'], function() {
            WgFacebookCreate(element);
        });
    });

    $(".job").each(function (){
        var element = $(this);
        require(['widgets/wg_all'], function() {
            WgJobCreate(element);
        });
    });

    $(".neighbors").each(function (){
        var element = $(this);
        require(['widgets/wg_all'], function() {
            WgNeighborsCreate(element);
        });
    });

    $(".portal").each(function (){
        var element = $(this);
        require(['widgets/wg_all'], function() {
            WgPortalCreate(element);
        });
    });

    $(".services").each(function (){
        var element = $(this);
        require(['widgets/wg_all'], function() {
            WgServicesCreate(element);
        });
    });
}