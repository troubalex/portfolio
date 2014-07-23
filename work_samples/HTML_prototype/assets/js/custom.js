$(document).ready(function(){

    $('#checkbox').change(function() {
        $(".non_deployed").slideToggle();
    });

 	$('.select_1').click(function() {
        var selected  = $(this);
        selected.closest('.btn-group').children('a.btn').text(selected.text());
        $('#selected_nodes_1').show();
    });

 	$('.select_2').click(function() {
        var selected  = $(this);
        selected.closest('.btn-group').children('a.btn').text(selected.text());
        $('#selected_nodes_2').show();
    });

 /**   $("#select_2").change(function () {
        var appendToUl =  $('#selected_nodes');
        appendToUl.empty();
        var selected = $('#select_2').val();

        $.each(selected, function(index,item)
        {
            $('<li/>').html(item).appendTo(appendToUl);
        });
    }); **/
}); 
