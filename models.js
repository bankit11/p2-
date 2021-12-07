sap.ui.define(
    [], 
    function() 
    {
        return{
        createmodel: function(vpath)
        {
            
       // Step1  to set the default data 
                    var oModel = new sap.ui.model.json.JSONModel();

      // Step 2 way 
                     oModel.loadData(vpath);
                     return oModel;
               
        }
    };
        
    });