/*Boothelper Demo JS*/


$(function () {


//    boot.dLoader().Enable({
//        loadOn:"#heading",
//        loaderText:"BootHelper dLoader..."
//    });




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

    $("#sampleConfirm").click(function () {


        <!--Simple Confirm-->
        boot.Confirm("I am the Confirm","bootHelper Alert",function(result){
            if(result){
                boot.Alert("You Have Clicked Yes","BootHelper Confirm");
            }else{
                boot.Alert("You Have Clicked No","BootHelper Confirm");

            }
        });


    });

    $("#ConfirmOptions").click(function () {


        <!--Simple Confirm with options-->
        boot.Confirm("I am the Confirm","bootHelper Alert",function(result){
                if(result){
                    boot.Alert("You Have Clicked Yes","BootHelper Confirm");
                }else{
                    boot.Alert("You Have Clicked No","BootHelper Confirm");
                }
            },
            {

                backclick:false
            }
        );




    });


    $("#ConfirmNested").click(function () {

        <!--Simple Confirm with options-->
        boot.Confirm("I am the Confirm","bootHelper Alert",function(result){
                if(result){
                    <!--nested Confirm on yes click-->
                    boot.Confirm("I am the Nested Confirm","bootHelper Alert",function(results){
                        if(results){
                            boot.Alert("You Have Clicked nested Yes","BootHelper Alert");
                        }else{
                            boot.Alert("You Have Clicked nested No","BootHelper Alert");
                        }
                    });
                }else{
                    boot.Alert("You Have Clicked No","BootHelper Confirm");
                }
            },
            {

                backclick:false
            });



    });


    /*Notify Component*/


    $("#NotifyWarning").click(function(){

        boot.Notify("#notifyWrapper").Warning("Hello Warning....");
    });


    $("#NotifySuccess").click(function(){

        boot.Notify("#notifyWrapper").Success("Hello Success....");
    });

    $("#NotifyError").click(function(){

        boot.Notify("#notifyWrapper").Error("Hello Error....");
    });

    /*Scroll Navigation*/

    $("#ScrollAlert").click(function () {

        $("#ScrollConfirm").removeClass("active");
        $("#ScrollNotify").removeClass("active");

        $(this).addClass("active");
        $('html,body').animate({
            scrollTop: $("#alertBody").offset().top -52
        }, 1000);

    });


    $("#ScrollConfirm").click(function () {

        $("#ScrollAlert").removeClass("active");
        $("#ScrollNotify").removeClass("active");

        $(this).addClass("active");
        $('html,body').animate({
            scrollTop: $("#confirmBody").offset().top -52
        }, 1000);

    });


    $("#ScrollNotify").click(function () {

        $("#ScrollAlert").removeClass("active");
        $("#ScrollConfirm").removeClass("active");

        $(this).addClass("active");
        $('html,body').animate({
            scrollTop: $("#notifyBody").offset().top -52
        }, 1000);

    });






});

