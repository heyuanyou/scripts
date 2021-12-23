$("label[class='c-label c-label--inline s-marginLeft1']").each(function(){
    var trim = $(this).text().replace(/\s/g,"");
    if(trim=='Option 1: 36,000; Option 2: 16,250'.replace(/\s/g,"") 
        || trim=='Users in the waiting room will be given a random spot in the queue when the sale starts. Users who arrive after the sale starts will be placed behind those in the waiting room'.replace(/\s/g,"") 
        || trim=='Option 1: Tokens unlock 6 months after the sale date on / around June 29, 2022, followed by a 12 month linear release. Option 2: Tokens unlock on/ around November 1, 2022, followed by a 12 month linear release.'.replace(/\s/g,"")
        || trim=='BTC, ETH, USDC, USDT, SOL, ALGO'.replace(/\s/g,"")
        || trim=='Option 1: $0.80 per token, $1000 limit. Option 2: $0.65 per token, $1000 limit'.replace(/\s/g,"")
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
