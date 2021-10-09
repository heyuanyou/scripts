
$("label[class='c-label c-label--inline s-marginLeft1']").each(function(){
    var trim = $(this).text().replace(/\s/g,"");
    if(trim=='Biconomy'
        || trim=='Option 1: 40,000,000; Option 2: 10,000,000'.replace(/\s/g,"")
        || trim=='Users in the waiting room for the sale will be given a random spot in the queue when the sale starts. Users who arrive after the sale starts for the sale will be placed behind those in the waiting room'.replace(/\s/g,"")
        || trim=='Multichain'.replace(/\s/g,"")
        || trim=='Infrastructure for a simple multi-chain experience'.replace(/\s/g,"")
        || trim=='BTC, ETH, USDC, USDT'.replace(/\s/g,"")
        || trim=='Option 1: $0.25 per token, $1000 limit. Option 2: $0.15 per token, $1000 limit'.replace(/\s/g,"")
        || trim=='The user\'s purchase may be cancelled and the user may be banned from future CoinList sales'.replace(/\s/g,"")
        || trim=='CoinList.co'.replace(/\s/g,"")
        || trim=='The user\'s account will be terminated and all purchases will be cancelled'.replace(/\s/g,"")
    ){
        $(this).children('input').click()
    }
})
$('html,body').animate({scrollTop:$('.s-marginTop2').offset().top}, 600);
setTimeout(function(){ $('.c-button--large').click() }, 9000); //设置延迟9秒自动提交，延迟时间可自己修改
