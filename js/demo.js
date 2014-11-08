/*Boothelper Demo JS*/


$(function () {


//    boot.dLoader().Enable({
//        loadOn:"#heading",
//        loaderText:"BootHelper dLoader..."
//    });

    boot.Notify("#first").Warning("Hello Warning....");
    boot.Notify("#first").Error("Hello Error....");
    boot.Notify("#first").Success("Hello Success....");


    $("#sampleAlert").click(function () {

        boot.Alert("I am the Alert", "bootHelper Alert");

    });

    $("#AlertBackclick").click(function () {

        <!--Alert with Options-->
        boot.Alert("I am the Alert with backclick false, you have to click the close button to close me", "bootHelper Alert", {
            backclick: false
        });

    });


    $("#AlertSuccess").click(function () {

        <!--Alert with Success Type-->
        boot.Alert("I am the Success Alert", "bootHelper Alert", {
            type: 'success',
            backclick: true
        });


    });


    $("#AlertWarning").click(function () {

        <!--Alert with Success Type-->
        boot.Alert("I am the Warning Alert", "bootHelper Alert", {
            type: 'warning',
            backclick: true
        });


    });

    $("#AlertInfo").click(function () {

        <!--Alert with Success Type-->
        boot.Alert("I am the info Alert", "bootHelper Alert", {
            type: 'info',
            backclick: true
        });


    });

    $("#AlertError").click(function () {

        <!--Alert with Success Type-->
        boot.Alert("I am the Error Alert", "bootHelper Alert", {
            type: 'error',
            backclick: true
        });


    });



    /*Scroll Navigation*/

    $("#ScrollAlert").click(function () {

        $("#ScrollConfirm").removeClass("active");

        $(this).addClass("active");
        $('html,body').animate({
            scrollTop: $("#alertBody").offset().top -52
        }, 1000);

    });


    $("#ScrollConfirm").click(function () {

        $("#ScrollAlert").removeClass("active");

        $(this).addClass("active");
        $('html,body').animate({
            scrollTop: $("#confirmBody").offset().top -52
        }, 1000);

    });





});

