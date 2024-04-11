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

    /*
    let newsItem = $('.news ul').children()으로 해서
    append(newsItem)하면 아무런 반응이 없음.
    알고보니 $('.news ul').children()으로만 하면 원본 요소를 $('#newsList')으로 이동하는게 되어서
    변화가 없으니 반응이 없는것처럼 보이는것임.
    요소를 복제해서 추가해야 원하는대로 동작함!!
    */
    let newsItem = $('#newsList').children();

    $('.news-more').click(function()
    {
       $('#newsList').append(newsItem.clone());
    })

    let promotionItem = $('#promotionList').children();

    $('.promotion-more').click(function()
    {
       $('#promotionList').append(promotionItem.clone());
    })
});