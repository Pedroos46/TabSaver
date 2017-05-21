/*Copyright (C) 2017, Roger Pedrós Villorbina, All rights reserved.*/

$(document).ready(() =>{
    this.configData = {
        simple: null,
        simpleSave: null,
        onlySave: null,
        onlySaveCloseTabs: null
    };

    getConfigFromDB()
        .then((configFromDB) =>{

            if(configFromDB.configData){
                let setter = () =>{
                    this.configData = {
                        simple: configFromDB.configData.simple,
                        simpleSave: configFromDB.configData.simpleSave,
                        onlySave: configFromDB.configData.onlySave,
                        onlySaveCloseTabs: configFromDB.configData.onlySaveCloseTabs
                    }
                };
                setter();
                setOptionsSaved();
            }

            if(!configFromDB.configData){
                setOptionsDefault();
            }
        });

    function setOptionsSaved() {
        let optionSimple = $("#optionSimple");
        let checkboxSimple = $("#checkboxSimple");

        let optionOnlySave = $("#optionOnlySave");
        let checkboxOnlySave = $("#checkboxOnlySave");

        //RADIOBUTTON SIMPLE
        if(this.configData.simple === true){
            optionSimple.prop('disabled', false);
            optionSimple.prop('checked', true);

            checkboxOnlySave.prop('disabled', true);
            checkboxSimple.prop('disabled', false);
        }

        if(this.configData.simple === false){
            optionSimple.prop('disabled', false);
            optionSimple.prop('checked', false);
        }

        //CHECKBOX DE SIMPLE
        if(this.configData.simpleSave === true){
            checkboxSimple.prop('disabled', false);
            checkboxSimple.prop('checked', true);
        }

        if(this.configData.simpleSave === false){
            checkboxSimple.prop('checked', false);
        }

        //RADIOBUTTON DE ONLY SAVE
        if(this.configData.onlySave === true){
            optionOnlySave.prop('disabled', false);
            optionOnlySave.prop('checked', true);

            checkboxOnlySave.prop('disabled', false);
            checkboxSimple.prop('disabled', true);
        }

        if(this.configData.onlySave === false){
            optionOnlySave.prop('disabled', false);
            optionOnlySave.prop('checked', false);
        }

        //CHECKBOX DE ONLY SAVE
        if(this.configData.onlySaveCloseTabs === true){
            checkboxOnlySave.prop('disabled', false);
            checkboxOnlySave.prop('checked', true);
        }

        if(this.configData.onlySaveCloseTabs === false){
            checkboxOnlySave.prop('checked', false);
        }
    }
    function setOptionsDefault() {
        this.configData.simple = true;
        this.configData.simpleSave = true;
        this.configData.onlySave = false;
        this.configData.onlySaveCloseTabs = false;

        let optionSimple = $("#optionSimple");
        let checkboxSimple = $("#checkboxSimple");

        let optionOnlySave = $("#optionOnlySave");
        let checkboxOnlySave = $("#checkboxOnlySave");

        optionSimple.prop('disabled', false);
        optionSimple.prop('checked', true);
        checkboxSimple.prop('disabled', false);
        checkboxSimple.prop('checked', true);

        optionOnlySave.prop('disabled', false);
        optionOnlySave.prop('checked', false);
        checkboxOnlySave.prop('disabled', true);
        checkboxOnlySave.prop('checked', false);

    }

    //SIMPLE
    $("#optionSimple").click(( event )=> {
        let checkboxSimple = $( "#checkboxSimple");
        let checkboxOnlySave = $( "#checkboxOnlySave");

        checkboxSimple.prop('disabled', false);
        checkboxOnlySave.prop('disabled', true);
        checkboxSimple.prop('checked', true);

        let objectToSave = {
            configData: {
                simple: true,
                simpleSave: true,
                onlySave: false,
                onlySaveCloseTabs: false
            }
        };

        saveConfigtoDB(objectToSave)
             .then(() =>{ launchSnackBar();});
    });

    $("#checkboxSimple").click(( event )=> {
        let checkboxSimple = $( "#checkboxSimple");
        if(checkboxSimple[0].checked === true){
            var objectToSave = {
                configData : {
                    simple: true,
                    simpleSave: true,
                    onlySave: false,
                    onlySaveCloseTabs: false
                }
            };
        }
        if(checkboxSimple[0].checked === false){
            var objectToSave = {
                configData : {
                    simple: true,
                    simpleSave: false,
                    onlySave: false,
                    onlySaveCloseTabs: false
                }
            };
        }

        saveConfigtoDB(objectToSave)
            .then(() =>{ launchSnackBar();})
    });

    //ONLY-SAVE
    $("#optionOnlySave").click(( event )=> {
        let checkboxSimple = $("#checkboxSimple");
        let checkboxOnlySave = $( "#checkboxOnlySave");

        checkboxSimple.prop('disabled', true);
        checkboxOnlySave.prop('disabled', false);

        let objectToSave = {
            configData : {
                simple: false,
                simpleSave: false,
                onlySave: true,
                onlySaveCloseTabs: false
            }
        };

        saveConfigtoDB(objectToSave)
            .then(() =>{ launchSnackBar();});
    });

    $("#checkboxOnlySave").click(( event )=> {
        let checkboxOnlySave = $( "#checkboxOnlySave");

        if(checkboxOnlySave[0].checked === true){
            var objectToSave = {
                configData : {
                    simple: false,
                    simpleSave: false,
                    onlySave: true,
                    onlySaveCloseTabs: true
                }
            };
        }
        if(checkboxOnlySave[0].checked === false){
            var objectToSave = {
                configData : {
                    simple: false,
                    simpleSave: false,
                    onlySave: true,
                    onlySaveCloseTabs: false
                }
            };
        }

        saveConfigtoDB(objectToSave)
            .then(() =>{ launchSnackBar();});
    });

    //SNACKBAR
    let snackbarContainer = document.querySelector('#demo-toast-example');
    function launchSnackBar() {
            let data =
                {message: 'configuración actualizada',
                timeout: 1750};
            snackbarContainer.MaterialSnackbar.showSnackbar(data);
    };

});