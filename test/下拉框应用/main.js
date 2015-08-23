/**
 * Created by John on 2015-08-23.
 */
$(function(){
    $('#left-select-part').click(function(){
        var $selected=$('#left-main :selected');
        var $removed=$selected.remove();
        $('#right-main').append($removed);
    });
    $('#left-select-all').click(function(){
        var $all=$('#left-main option');
        var $removed=$all.remove();
        $('#right-main').append($removed);
    });

    $('#right-select-part').click(function(){
        var $selected=$('#right-main :selected');
        var $removed=$selected.remove();
        $('#left-main').append($removed);
    });
    $('#right-select-all').click(function(){
        var $all=$('#right-main option');
        var $removed=$all.remove();
        $('#left-main').append($removed);
    });
});