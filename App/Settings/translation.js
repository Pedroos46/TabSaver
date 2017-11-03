/*Copyright (C) 2017, Roger Pedrós Villorbina, All rights reserved.*/
/*Clase que s'encarrega de fer la traducció.*/


$(document).ready(() => {
    $("#configTitol").text(chrome.i18n.getMessage("config_titol"));
    $("#configSubtitol").text(chrome.i18n.getMessage("config_subtitol"));

    $("#configSimple").text(chrome.i18n.getMessage("config_simple"));
    $("#configSimplemsg").text( chrome.i18n.getMessage("config_simplemsg"));
    $("#configSubsimple").text(chrome.i18n.getMessage("config_subsimple"));

    $("#configOnlysave").text(chrome.i18n.getMessage("config_onlysave"));
    $("#configOnlysavemsg").text(chrome.i18n.getMessage("config_onlysavemsg"));
    $("#configSubOnlysave").text(chrome.i18n.getMessage("config_subonlysave"));
});


