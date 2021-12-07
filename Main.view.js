sap.ui.jsview("oft.fin.ar.view.Main", {
    getControllerName: function() {
		return "oft.fin.ar.controller.Main";
	},

    createContent: function(oController) {

        var olabel = new sap.m.Label("idlabel",{
                text: "Name please"
        });
        var oinfd = new sap.m.Input("Idinput",{
            width: "200px"
        });

        var ocheckbox = new sap.m.CheckBox("idcheck",{
            editable: true,
            text: "My check box",
            wrapping: true
        });

        var olink = new sap.m.Link("idlink",{
            text: "This is my link",
            press: oController.eplink
        });


        var oTarea = new sap.m.TextArea("idtarea",{
            enabled: true,
            height: "10px",
            value: "ankit1234",
            visible: true
        });

        var otitle = new sap.m.Title("idtitle",{
            text: "title page"
        })

        var obutton1 = new sap.m.Button({
            enabled: true,
            text: "Selected",
            type: sap.m.ButtonType.Accept,
            press: oController.accept
        })

        var obutton2 = new sap.m.Button({
            enabled: true,
            text: "Reject",
            type: sap.m.ButtonType.Reject,
            press: oController.reject
        })



                    
    return [olabel,ocheckbox,olink,oTarea,otitle,obutton1,obutton2];
    }

});