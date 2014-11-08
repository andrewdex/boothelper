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


});

