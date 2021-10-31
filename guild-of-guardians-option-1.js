$("label[class='c-label c-label--inline s-marginLeft1']").each(function(){
    var trim = $(this).text().replace(/\s/g,"");
    if(trim=='Option 1: 8,000; Option 2: 3,000'.replace(/\s/g,"") 
        || trim=='Users in the waiting room will be given a random spot in the queue when the sale starts. Users who arrive after the sale starts will be placed behind those in the waiting room'.replace(/\s/g,"") 
        || trim=='Option 1: 50% of the token purchase amount is freely trading 40 days after the sale date on or around December 21, 2021, and the other 50% of the token purchase amount unlocks 12 months after the sale date on or around November 10, 2022. Option 2: Tokens unlock 12 months after the sale date on or around November 10, 2022'.replace(/\s/g,"")
        || trim=='BTC, ETH, USDC, USDT'.replace(/\s/g,"")
        || trim=='Option 1: $0.10 per token, $500 limit. Option 2: $0.075 per token, $500 limit'.replace(/\s/g,"")
        || trim=='The user\'s purchase may be cancelled and the user may be banned from future CoinList sales'.replace(/\s/g,"")
        || trim=='CoinList.co'.replace(/\s/g,"")
        || trim=='coinlistofficialchannel'.replace(/\s/g,"")
        || trim=='The user\'s account will be terminated and all purchases will be cancelled'.replace(/\s/g,"")
    ){
        $(this).children('input').click()
    }
})
$('html,body').animate({scrollTop:$('.s-marginTop2').offset().top}, 600);
setTimeout(function(){ $('.c-button--large')[0].click() }, 4000); //设置延迟9秒自动提交，延迟时间可自己修改
