$(document).ready( function () {
    // Store changes in localstorage
    $(".store").on('change', function () {
        var value = null;
        if ($(this).attr('type')=='checkbox') {
            value = $(this).is(':checked') ? $(this).val() : false;
        }
        else {
            value = $(this).val();         
        }
        localStorage.setItem($(this).attr('name'), value );             
    });
    
    // Create a screenshot of the widget
    $(".store").each ( function() {
        if ($(this).attr('name')) {
            var value = localStorage.getItem($(this).attr('name') );
            if (value) {
                $(this).val( value );     
            }
        }
                           
    });   
    
    $(".getTextFromStorage").each ( function() {
        if ($(this).data('storage-name')) {
            var value = localStorage.getItem($(this).data('storage-name'));
            if (value) {
                $(this).text( value );     
            }
        }
    });       
});
function putInStorage(name,value) {
    return localStorage.setItem(name, value);        
}
function getFromStorage(name) {
    return localStorage.getItem(name);
}