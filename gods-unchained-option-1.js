$("label[class='c-label c-label--inline s-marginLeft1']").each(function(){
    var trim = $(this).text().replace(/\s/g,"");
    if(trim=='Gods Unchained'
        || trim=='Blockchain based trading card game'.replace(/\s/g,"")
        || trim=='Ethereum and Immutable X'.replace(/\s/g,"")
        || trim=='Option 1: 20 million; Option 2: 15 million'.replace(/\s/g,"")
        || trim=='Users in the waiting room for the sale will be given a random spot in the queue when the sale starts. Users who arrive after the sale starts for the sale will be placed behind those in the waiting room'.replace(/\s/g,"")
        || trim=='Option 1: 50% of tokens become freely transferable after a 90-day cliff (on or around January 11, 2022), the remaining 50% unlock linearly over 12 months. Option 2: Tokens begin unlocking after a 90-day cliff (on or around January 11, 2022) and will be unlocked over 12 months.'.replace(/\s/g,"")
        || trim=='BTC, ETH, USDC, USDT'.replace(/\s/g,"")
        || trim=='Option 1: $0.336 per token, $500 limit. Option 2: $0.24 per token, $500 limit'.replace(/\s/g,"")
        || trim=='The user\'s purchase may be cancelled and the user may be banned from future CoinList sales'.replace(/\s/g,"")
        || trim=='CoinList.co'.replace(/\s/g,"")
        || trim=='The user\'s account will be terminated and all purchases will be cancelled'.replace(/\s/g,"")
    ){
        $(this).children('input').click()
    }
})
setTimeout(function(){ $('.c-button--large').click() }, 9000); //设置延迟9秒自动提交，延迟时间可自己修改
