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
        /*Parametrized Alert */
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


        },
        /*Parametrized Confirm Dialog*/
        Confirm: function (msg, tittle, callback, options) {
            "use strict";

            var htmlmodal, modal, bodycontent = "Default Modal Body Content",
                tittlecontent = "Sample PopUp Alert Title",
                result;

            //modal = $(".modal-confirm-alert");

            if (msg !== undefined && msg !== "") {

                bodycontent = msg;
            }

            if (tittle !== undefined && tittle !== "") {

                tittlecontent = tittle;
            }

            htmlmodal = "<div class='modal fade modal-confirm-alert'>";
            htmlmodal += "<div class='modal-dialog'>";
            htmlmodal += "<div class='modal-content'>";
            htmlmodal += "<div class='modal-header'>";
            htmlmodal += "<span  data-dismiss='modal' aria-hidden='true'><span class='ty-close close' title='Close'></span></span>";
            htmlmodal += "<h4 class='ty-page-heading'>" + tittlecontent + "</h4></div>";
            htmlmodal += "<div class='modal-body ty-font-normal'><p>" + bodycontent + "</p></div>";
            htmlmodal += "<div class='modal-footer'><button type='button' class='btn btn-primary modal-confirm-yes' data-dismiss='modal' aria-hidden='true'>Yes</button><button type='button' class='btn btn-primary modal-confirm-no' data-dismiss='modal' aria-hidden='true'>No</button></div>";
            htmlmodal += "</div>";
            htmlmodal += "</div>";
            htmlmodal += "</div>";
            $(document.body).append(htmlmodal);

            try {


                if (options === undefined || options.backclick === undefined) {
                    $(".modal-confirm-alert").modal();
                } else {

                    if (options.backclick === true) {
                        $(".modal-confirm-alert").modal();

                    }

                    if (options.backclick === false) {
                        $(".modal-confirm-alert").modal({
                            backdrop: "static",
                            keyboard: false
                        });

                    }

                }


            } catch (e) {

                console.log("BootHelper : Confirm " + e);

            }


            $(".modal-confirm-yes").click(function () {

                result = true;
                if (callback !== undefined && callback !== "") {
                    callback(result);
                }
                if (callback === "" || callback === undefined) {
                    console.log("BootHelper : Confirm :: Callback for YES has not defined ");
                }


            });


            $(".modal-confirm-no").click(function () {
                result = false;
                if (callback !== undefined && callback !== "") {
                    callback(result);
                }
                if (callback === "" || callback === undefined) {

                    console.log("BootHelper : Confirm :: Callback for NO has not defined ");

                }


            });

            $(".modal-confirm-alert").on('hidden.bs.modal', function () {
                //Modal Close Event Fired !
                $(this).remove();
            });

        },

        /*Html Popup with Defined markup*/
        HtmlPopup: function (modal, options) {
            "use strict";

            var modalelm;

            if (modal !== undefined && modal !== "") {

                modalelm = $(modal);
                try {


                    if (options === undefined || options.backclick === undefined) {
                        modalelm.modal();
                    } else {

                        if (options.backclick === true) {
                            modalelm.modal();

                        }

                        if (options.backclick === false) {
                            modalelm.modal({
                                backdrop: "static",
                                keyboard: false
                            });

                        }

                    }


                } catch (e) {
                    console.log("BootHelper : HtmlPopup " + e);
                }


            } else {
                console.log("BootHelper : HtmlPopup :: Please define the Modal");
            }

        }



    };


    //Make It Accessible
    window.boot = boot;

}(window.boot = window.boot || {}, jQuery));



