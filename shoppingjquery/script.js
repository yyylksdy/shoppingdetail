/**
 * Created by YoYo on 4/18/17.
 */
// Code goes here
$('#size-selection').hide();
$('#color-selection').hide();
$('#quantity-selection').hide();

$('#facets').on('change', function() {
    $('#size-selection').hide();
    $('#color-selection').hide();
    $('#quantity-selection').hide();
    if (this.value == 'Size') {
        $('#size-selection').show();
    } else if (this.value == 'Color') {
        $('#color-selection').show();
    } else {
        $('#quantity-selection').show();
    }
})
var size, color, quantity;
$('#next').on('click', function() {
    size = $('#size-selection').find('input:checked')[0];
    color = $('#color-selection').find('input:checked')[0];
    quantity = $('#quantity-selection').find('input')[0];
    if(size == undefined || color == undefined){
        alert('please select size or color');
    }else if(parseInt(quantity.value).toString() == 'NaN'){
        alert('only number');
    }else{
        console.log(size.value, color.value, quantity.value);
        var base1 = parseInt($(size).attr('data-price'));
        var base2 = parseInt($(color).attr('data-price'));
        var q = parseInt(quantity.value);
        $("#orgpriceSpan").html((base1+base2)*q*1.1);
        $("#priceSpan").html((base1+base2)*q);
        $('#shipaddress').show();
    }
})

$('#finish').on('click', function() {
    var obj = {
        size: size.value,
        color: color.value,
        quantity: quantity.value,
        address: $("#addOne").val() + " " + $("#addTwo").val(),
        city: $("#city").val(),
        state: $("#state").val(),
        zipcode: $("#zipcode").val()
    }
    var fillins = $("table").find('td[name]');
    for(var i = 0; i < fillins.length; i++){
        var item = $(fillins[i]);
        item.html(obj[item.attr('name')]);
    }
    $('#analyticsinfo').show();

    // Display the information picked up above.
})
