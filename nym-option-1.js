$("label[class='c-label c-label--inline s-marginLeft1']").each(function(){
    var trim = $(this).text().replace(/\s/g,"");
    if(trim=='Option 1: 50,000; Option 2: 6,250'.replace(/\s/g,"") 
        || trim=='Users in the waiting room will be given a random spot in the queue when the sale starts. Users who arrive after the sale starts will be placed behind those in the waiting room'.replace(/\s/g,"") 
        || trim=='coinlistofficialchannel'.replace(/\s/g,"")
        || trim=='Option 1: Tokens release on / around March 31, 2022. Option 2: Tokens release quarterly over two years starting on / around May 3, 2022'.replace(/\s/g,"")
        || trim=='BTC, ETH, USDC, USDT, SOL, ALGO'.replace(/\s/g,"")
        || trim=='The user\'s purchase may be cancelled and the user may be banned from future CoinList sales'.replace(/\s/g,"")
        || trim=='CoinList.co'.replace(/\s/g,"")
        || trim=='Option 1: $0.50 per token, $500 limit. Option 2: $0.25 per token, $1000 limit'.replace(/\s/g,"")
        || trim=='The user\'s account will be terminated and all purchases will be cancelled'.replace(/\s/g,"")
    ){
        $(this).children('input').click()
    }
})
