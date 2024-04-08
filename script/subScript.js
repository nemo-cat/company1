$(document).ready(function()
{
    
    $('.history-list').hide()
    $('.history-list.active').show()

    $('.content-tab ul li').click(function()
    {
        let clickIdx = $(this).index();
        $('.content-tab ul li.active').removeClass('active');
        $(this).addClass('active');

        $('.history-list.active').removeClass('active');
        $('.history-list').eq(clickIdx).addClass('active');
        
        $('.history-list').hide()
        $('.history-list.active').show()
    })
});