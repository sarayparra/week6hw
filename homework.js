class Card {
    constructor(suit,rank,value){
        this.suit = suit;
        this.rank = rank;
        this.value= value;
    }
}
class Deck{
    constructor(){
        this.card=[];
    }
}
createDeck() {
    let suits=['hearts','spades','diamonds','clubs']
    let ranks=['ace','2','3','4','5','6','7','8','9','10','jack','king','queen']
    let values=['1','2','3','4','5','6','7','8','9','10','11','12','13']
    for(let i=0;i<suits.length;i++){
        for(let x=0;x<ranks.length;i++){
            this.card.push(new Card(suits[i],ranks[x],value[x]));
        }
    }

}
 shuffleDeck()  { 
   // don't know whether or not to add shuffle here
    shuffle
    for(let i = this.cards.length-1;i>0;i--){
        let x= Math.floor(Math.random()(i+1));
        let pnr= this.cards[i];
        this.cards[i]=this.card[x];
        this.card[x]= pnr
    }
 }
 class Player {
     constructor()
 }
