class bus {
        
    constructor(pr, colr) {
        this.price = pr;
        this.colr = colr;
    }
    display() {
        document.write("<br/> objects price = " + this.price);
        document.write("<br/> objects color = " + this.colr);
    }
    setPrice = function (x) {
        this.price = x;
    }
    applyDiscount = function (percentage) {
        this.price = this.price - (this.price * percentage / 100);
    }
};
class luxuryBus extends bus {
    constructor(pr,colr,withAc){
        super(pr,colr);
        this.withAc= withAc;
    }
    display(){
       super.display();
        document.write("<br/> objects with ac = " + this.withAc);
    }

}