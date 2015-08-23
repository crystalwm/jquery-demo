/**
 * Created by John on 2015-08-23.
 */
$(function(){
    $('form :input').focus(
        function(){
            $(this).addClass('focus');
        }
    ).blur(
        function(){
            $(this).removeClass('focus');
        }
    );
})