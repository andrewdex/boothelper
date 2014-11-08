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
        config : {

            val:"Hello"
        },

        /*Tools*/
        tools: {

            test : function (){

            }

        },

        /*Components*/
        alert: function(){

            
        }


    };


    //Make It Accessible
    window.boot = boot;

}(window.boot = window.boot || {}, jQuery));



