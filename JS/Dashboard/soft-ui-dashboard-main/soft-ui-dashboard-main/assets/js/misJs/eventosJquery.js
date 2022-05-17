$(() => {
    $('.btn')
        .hover(function() {
            $(this).css('backgroundColor','yellow');
        }, function() {
            $(this).css('backgroundColor','white');
        });

    $('h6').click(function () {
        console.log('h6 clicked');
        if ($('b', this).length) {
            $($('b', this).get(0).childNodes[0]).unwrap();
        } else {
            $(this).wrapInner('<b></b>');
        }
    });

    $('#listaAutores tr')
        .hover(function() {
            console.log('Entre hover');
            $(this).css('backgroundColor','yellow');
        }, function() {
            $(this).css('backgroundColor','white');
        });

    $(document).on({
        mouseenter: function () {
            console.log('Entre hover');
            $(this).css('backgroundColor','yellow');
        },
        mouseleave: function () {
            $(this).css('backgroundColor','white');
        }
    });
});
    