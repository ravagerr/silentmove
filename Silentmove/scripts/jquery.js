$( "#property-type" ).selectmenu( {
});
$('.ui-selectmenu-button.ui-button').css({
'box-sizing': 'border-box',
'width' : '100%'
}); 
$( "#min-price, #max-price" ).spinner( {
    step: 50,
    min: 50,
    max: 1000000,
});
$( "#min-bedrooms, #max-bedrooms").spinner( {
    min: 1,
    max: 20,
});
$('#min-bedrooms').css('width', '100%');
$( "#added-from, #added-to" ).datepicker();
$( "#valueselector" ).spinner( {
    step: 50,
    min: 0,
    max: 100000,
});
$( ".tabs" ).tabs(); 

$('.tabs.ui-widget.ui-widget-content').css({
'border' : 'none',
'border-radius' : '25px',
'margin' : '2em 0',
'padding' : '0'
}); 

$('.ui-widget-header').css({
'padding' : '1em 0',
}); 