var score = [100, 90, 80, 70, 60 ];
totalScore = 0;  //合計点数格納変数初期化

for(var i = 0; i < score.length; i++){
    totalScore += score[i];
}

console.log('Average: ' + (totalScore/score.length) );
console.log('TotalScore: ' + (totalScore));
