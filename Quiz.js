class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }



  play(){
    //write code here to hide question elements
    question.hide()
    //write code to change the background color here
   background("yellow")
    //write code to show a heading for showing the result of Quiz
     textSize(15);
     text("Here are the results",425,50)
    //call getContestantInfo( ) here
   Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
     if(allContestants!==undefined){
       var displayanswers=230
       fill("blue")
       textSize(20)
       text("Note*=Contestant who answered correct are highlighted in green colour",120,75)
       
       for(var plr in allContestants){
         var correctAns="2";
         if(correctAns === allContestants[plr].answer)
         fill("green")
         else
         fill("red")
         displayanswers=displayanswers+30;
         text(allContestants[plr].name+":"+allContestants[plr].answer,250,displayanswers)
       
     }
     }

    //write code to highlight contest who answered correctly
    
  }

}
