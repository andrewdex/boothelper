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

            version: "1.0",
            author:"Dilusha Gonagala"
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

        },

        /*SetMaxHeight :: Set MaxHeight to set of elements from the Max height*/
        SetMaxHeight: function (element) {

            "use strict";

            var elementObj = $(element),
                heights, maxHeight;

            heights = $(elementObj).map(function () {
                return $(this).height();
            }).get();
            maxHeight = Math.max.apply(null, heights);

            $(elementObj).css({
                "height": maxHeight
            });

        },

        /*ThisBrowser :: Browser Detection Component : Beta ( Not Recommended, but for still wanna users.. :)  )*/
        ThisBrowser: function () {
            "use strict";
            var browser = {},
                sUsrAg = navigator.userAgent;

            if (sUsrAg.indexOf("Chrome") > -1) {
                browser.name = "Chrome";
                browser.version = navigator.appVersion;
            } else if (sUsrAg.indexOf("Safari") > -1) {
                browser.name = "Safari";
                browser.version = navigator.appVersion;
            } else if (sUsrAg.indexOf("Opera") > -1) {
                browser.name = "Opera";
                browser.version = navigator.appVersion;
            } else if (sUsrAg.indexOf("Firefox") > -1) {
                browser.name = "Firefox";
                browser.version = navigator.appVersion;
            } else if (sUsrAg.indexOf("MSIE") > -1) {
                browser.name = "IE";
            }

            var ie9 = document.createElement("ie9"),
                ie8 = document.createElement("ie8"),
                ie7 = document.createElement("ie7"),
                ie10 = document.createElement("ie10"),
                ie11 = document.createElement("ie11");

            ie7.innerHTML = "<!--[if IE 7]><i></i><![endif]-->";
            ie8.innerHTML = "<!--[if IE 8]><i></i><![endif]-->";
            ie9.innerHTML = "<!--[if IE 9]><i></i><![endif]-->";
            ie10.innerHTML = "<!--[if IE 10]><i></i><![endif]-->";
            ie11.innerHTML = "<!--[if IE 11]><i></i><![endif]-->";

            var isIe7 = (ie7.getElementsByTagName("i").length == 1);
            var isIe8 = (ie8.getElementsByTagName("i").length == 1);
            var isIe9 = (ie9.getElementsByTagName("i").length == 1);
            var isIe10 = (ie10.getElementsByTagName("i").length == 1);
            var isIe11 = (ie11.getElementsByTagName("i").length == 1);

            if (isIe7) {
                browser.version = "IE7";
            }
            if (isIe8) {
                browser.version = "IE8";
            }
            if (isIe9) {
                browser.version = "IE9";
            }
            if (isIe10) {
                browser.version = "IE10";
            }
            if (isIe11) {
                browser.version = "IE11";
            }

            return browser;


        }



    };


    //Make It Accessible
    window.boot = boot;

}(window.boot = window.boot || {}, jQuery));



