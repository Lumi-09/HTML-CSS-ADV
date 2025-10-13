$('li').click(function(){
    alert('clicked');
});

$('#btn').click(function(){
    console.log($('#h1').text());
    $('#h1').text('testing test');
    $('#h1').append('extra text');
});

$('#btn2').on(click, function(){
    console.log('Second button is clicked')
})

$('#myDiv').click(function(){
    $(this).addClass('clicked');
})
.find('span')
.attr('title', 'Howver over me');

$('#btn3').click(function(){
    $(".hidden").show('slow');
});

$('#btn4').click(function(){
    $(".hidden").hide();
});

$('#square').click(function(){

    $('square').animate({
        'width': '200px',
        'height': '200px'

    });
});

$('.testing').click(function(){
    $('.texting').animate({
        'left': '+=50',
        'opacity': 0.25,
        'fontsize' : '30px'
    },
    300,
    function(){
        console.log("Animation is complete");
    }
);

});