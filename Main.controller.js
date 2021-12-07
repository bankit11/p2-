sap.ui.define(
    ["sap/ui/core/mvc/Controller"],

    function(BaseController){
        return BaseController.extend("oft.fin.ar.controller.Main",{
            onInit: function(){
                
            },

// custom function 
eplink: function()
{
  alert("I am clicked");
},

//accept code
accept: function()
{
    alert("I am selected");
},
reject: function()
{
    alert("Rejected");
}

        });
    }
);