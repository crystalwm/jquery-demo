/**
 * Created by John on 2015-08-23.
 */
$('#bigger').click(function(){

});

$(function(){
    /*
    ֱ�����õķ�ʽ����Ч�����Ǻܺã�������Ҫһ�ַ���ķ�ʽ�������á�
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
    //ͨ�������ķ�ʽ��������
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