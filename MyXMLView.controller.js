sap.ui.define(
    ["sap/ui/core/mvc/Controller",
    "oft/fin/ar/model/models"],

    function(BaseController, ospyid){
        "use strict";

        return BaseController.extend("oft.fin.ar.controller.MyXMLView",
        {
            onInit: function(){
 			    
            //  to set the default data 
                // var oModel = new sap.ui.model.json.JSONModel();
             // Step 2 way 1    
                // oModel.setData({
                //     "empStr": {
                //         "empNo": 999,
                //         "empName": "Ankit",
                //         "Salary": 999,
                //         "Currency": "EUR"
                //     }
                
                // });

// Step 2 way 

// oModel.loadData("model/mockData/spiderman.json");
             //   end way 2  
//  step3
                // sap.ui.getCore().setModel(oModel);
//   code to call the dependcy method

                var oModelSpi = new ospyid.createmodel("model/mockData/spiderman.json");

                // var oModelSup = new ospyid.createmodel("model/mockData/superman.json","super");

//  step3
                sap.ui.getCore().setModel(oModelSpi);
                // sap.ui.getCore().setModel(oModelSup);

            },
            
            pressButton: function()
            {

                // var oPass = this.getView().byId("idname");
                // var val1 = oPass.getValue();
                // // alertoPass.getValue());
                // alert(val1);

                // var oPass1 = this.getView().byId("idsal");
                //          oPass1.bindValue("/empStr/Salary");
 
                //          var oPass2 = this.getView().byId("idcurr");
                //          oPass2.bindProperty("value",'/empStr/Currency');


                         var oModel = sap.ui.getCore().getModel();
                      
                         var wa = oModel.getProperty("/empStr");
                       
                         var itab = oModel.getProperty("/empTab");   

                         itab.push(wa);

                       oModel.setProperty("/empTab",itab);



                    


                // alert("hello xml");
                
            //     var oInputP = this.getView().byId("idpwd");
            //             // alert(oInputP.getValue()); 
            //             if (oInputP.getValue() == 'ankit')
            //             {
            //                 alert("logic succ");
            //             }
            //             else{
            //                 alert("login failed");
            //             }
             
            }
            // pressButton: function()
            // {

            // }

            }
        );
        }


        );