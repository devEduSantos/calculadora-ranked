function getRank(nickName, victories, defeats){
    let playerRank;
    let pdlPlayer = victories - defeats;
    if(pdlPlayer >= 101){
        playerRank = "Imortal";
    }else if(pdlPlayer >= 91){
        playerRank = "Legendary";
    }else if(pdlPlayer >= 81){
        playerRank = "Diamond"
    }else if(pdlPlayer >= 51){
        playerRank = "Gold"
    }else if(pdlPlayer >= 21){
        playerRank = "Silver"
    }else if(pdlPlayer >= 11){
        playerRank = "Bronze";
    }else{
        playerRank = "Iron";
    }
    return `The hero ${nickName} has ${pdlPlayer} PDL and is in the ${playerRank} Rank`;
}

for(let i = 0; i < 200; i+=10){
    let player1 = getRank("JarvanRei", i, 30)
    console.log(player1);
}
