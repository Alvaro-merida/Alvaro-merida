$(document).ready(function(){

    $('.category_list .categoryItem[category="Todas"]').addClass('ct_item-active');

    $('.categoryItem').click(function(){
        var catProduct = $(this).attr('category');
        console.log(catProduct);

        //Agregando clase active
        $('categoryItem').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');

        //ocultando
        $('.pizzas').hide();

        $('pizzas[category="'+catProduct+'"]').show();
    });
    $('.categoryItem[category="Todas"').click(function(){
        $('.pizzas').show();
    });
});