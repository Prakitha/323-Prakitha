
class hotel{
    constructor(name,noofguest,price,image,Id,withAC,swiimmingPoolAttached,suitRoom){
        this.name=name;
        this.noofguest=noofguest;
        this.price=price;
        this.image=image;
        this.Id=Id;
        this.withAC=withAC;
            this.swiimmingPoolAttached=swiimmingPoolAttached;
            this.suitRoom=suitRoom;
    }
}

var cus1 = new hotel("Prakitha", 4, 4000,"images/11.jpg", "bsgbs", "yes", "yes", "yes")
var cus2 = new hotel("Hyderabad", 2, 5000, "images/12.jpg","bggbs", "yes", "no", "yes")
var cus3 = new hotel("Delhi", 8, 4500, "images/13.jpg","bsgbs", "yes", "yes", "no")
var cus4 = new hotel("Goa", 5, 5200, "images/14.jpg","bsgbs", "no", "yes", "yes")