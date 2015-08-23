/**
 * Created by John on 2015-08-23.
 */
$('#bigger').click(function(){

});

$(function(){
    /*
    直接设置的方式动画效果不是很好，我们需要一种方便的方式进行设置。
    * */
    /*
    $('#bigger').click(function(){
        var height=$('textarea').height();
        console.log(height);
        if(height<300){
            $('textarea').height($('textarea').height()+50);
        }

    });

    $('#smaller').click(function(){
        var height=$('textarea').height();
        console.log(height);
        if(height>50){
            $('textarea').height($('textarea').height()-50);
        }
    });
    */
    //通过动画的方式进行设置
    $('#bigger').click(function(){
        var height=$('#comment').height();

        if(!$('#comment').is(':animated')) {
            if (height < 300) {
                $('#comment').animate({height: "+=50"}, 400)
            }
        }

    });

    $('#smaller').click(function() {
        var height = $('#comment').height();

        if (!$('#comment').is(':animated')) {
            if (height > 50) {
                $('#comment').animate({height: "-=50"}, 400);
            }
        }
    });

    $('#up').click(function(){
        var height=$('#comment').height();

        if(!$('#comment').is(':animated')) {
            if (height < 300) {
                $('#comment').animate({scrollTop: "-=50"}, 400)
            }
        }

    });

    $('#down').click(function() {
        var height = $('#comment').height();
        if (!$('#comment').is(':animated')) {
            if (height > 50) {
                $('#comment').animate({scrollTop: "+=50"}, 400);
            }
        }
    });



});