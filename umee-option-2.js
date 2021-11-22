$("label[class='c-label c-label--inline s-marginLeft1']").each(function(){
    var trim = $(this).text().replace(/\s/g,"");
    if(trim=='Option 1: 300,000,000; Option 2: 200,000,000'.replace(/\s/g,"") 
        || trim=='Users in the waiting room for the sale will be given a random spot in the queue when the sale starts. Users who arrive after the sale starts for the sale will be placed behind those in the waiting room'.replace(/\s/g,"") 
        || trim=='Multichain'.replace(/\s/g,"")
        || trim=='Cross chain lending hub'.replace(/\s/g,"")
        || trim=='BTC, ETH, USDC, USDT'.replace(/\s/g,"")
        || trim=='Option 1: $0.06 per token, $500 limit. Option 2: $0.07 per token, $500 limit'.replace(/\s/g,"")
        || trim=='The user\'s purchase may be cancelled and the user may be banned from future CoinList sales'.replace(/\s/g,"")
        || trim=='CoinList.co'.replace(/\s/g,"")
        || trim=='coinlistofficialchannel'.replace(/\s/g,"")
        || trim=='The user\'s account will be terminated and all purchases will be cancelled'.replace(/\s/g,"")
    ){
        $(this).children('input').click()
    }
})
$('html,body').animate({scrollTop:$('.s-marginTop2').offset().top}, 600);
setTimeout(function(){ $('.c-button--large')[0].click() }, 5000); //设置延迟9秒自动提交，延迟时间可自己修改
