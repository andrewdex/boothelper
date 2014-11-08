/*
 * BootHelper JS Framework
 * Version : 1.0
 * Author : Dilusha Gonagala (@andrewdex)
 * License : MIT
 *
 * */


/*Main Anonymous function wrapper */
(function (Boot, $) {

    "use strict";

    //Global Namespace for BootHelper
    var boot = {

        /*BootHelper Main Config Global*/
        config: {

            val: "Hello"
        },

        /*Tools*/
        tools: {

            test: function () {

            }

        },

        /*Components*/
        /*Parametrized Alerts - Bootstrap Based */
        Alert: function (msg, tittle, options) {
            "use strict";

            var htmlmodal, modal, bodycontent = "Default Modal Body Content",
                tittlecontent = "Sample PopUp Alert Title",
                typeval = "info",
                msgerror = "<div class='alert alert-error' role='alert'>" + bodycontent + "</div>",
                msgsuccess = "<div class='alert alert-success' role='alert'>" + bodycontent + "</div>",
                msginfo = "<div class='alert alert-info' role='alert'>" + bodycontent + "</div>",
                msgwarning = "<div class='alert alert-warning' role='alert'>" + bodycontent + "</div>";


            if (msg !== undefined && msg !== "") {

                bodycontent = msg;
            }

            if (tittle !== undefined && tittle !== "") {

                tittlecontent = tittle;
            }


            htmlmodal = "<div class='modal fade modal-alert'>";
            htmlmodal += "<div class='modal-dialog'>";
            htmlmodal += "<div class='modal-content'>";
            htmlmodal += "<div class='modal-header'>";
            htmlmodal += "<button data-dismiss='modal' type='button' class='close'><span title='Close' class='glyphicon glyphicon-remove-circle' aria-hidden='true'></span></button>";
            htmlmodal += "<h4 class='ty-page-heading'>" + tittlecontent + "</h4></div>";
            if (options !== undefined && options.type !== undefined) {

                if (options.type === "info") {
                    htmlmodal += "<div class='modal-body'><div class='alert alert-info ty-font-normal' role='alert'>" + bodycontent + "</div></div>";

                } else if (options.type === "error") {

                    htmlmodal += "<div class='modal-body'><div class='alert alert-danger ty-font-normal' role='alert'>" + bodycontent + "</div></div>";

                } else if (options.type === "success") {

                    ;

                    htmlmodal += "<div class='modal-body'><div class='alert alert-success ty-font-normal' role='alert'>" + bodycontent + "</div></div>";

                } else if (options.type === "warning") {

                    htmlmodal += "<div class='modal-body'><div class='alert alert-warning ty-font-normal' role='alert'>" + bodycontent + "</div></div>";

                } else {
                    htmlmodal += "<div class='modal-body'><div class='alert alert-info ty-font-normal' role='alert'>" + bodycontent + "</div></div>";


                }

            }
            if (options === undefined || options.type === undefined) {


                htmlmodal += "<div class='modal-body ty-font-normal'>" + bodycontent + "</div>";


            }


            htmlmodal += "<div class='modal-footer'><button type='button' class='btn btn-primary' data-dismiss='modal' aria-hidden='true'>Ok</button></div>";
            htmlmodal += "</div>";
            htmlmodal += "</div>";
            htmlmodal += "</div>";

            $(document.body).append(htmlmodal);

            try {


                if (options === undefined || options.backclick === undefined) {
                    $(".modal-alert").modal();
                } else {

                    if (options.backclick === true) {
                        $(".modal-alert").modal();

                    }

                    if (options.backclick === false) {
                        $(".modal-alert").modal({
                            backdrop: "static",
                            keyboard: false
                        });

                    }

                }


            } catch (e) {

                console.log("BootHelper : Alert " + e);

            }

            $(".modal-alert").on('hidden.bs.modal', function () {
                //Modal Close Event Fired !
                $(this).remove();
            });


        }



    };


    //Make It Accessible
    window.boot = boot;

}(window.boot = window.boot || {}, jQuery));



