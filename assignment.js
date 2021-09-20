
// Kilometer To Meter
 function kilometerToMeter(km){
	if(km>0){
	   var meter=km*1000;
	   return meter;
	}else if (km<0) {
		console.log("Distance Can't be Negative");
	}else{
		console.log("Distance is Zero");
	}
}
var meter=kilometerToMeter(5); 
//console.log(meter);



// Budget Calculator
 function budgetCalculator(watch,phone,laptop) {

	var totalPrice=0;
	if(watch<=0){
		console.log("Quantity can't be Negative or zero");
	}
	else if(phone<=0){
		console.log("Quantity can't be Negative or zero");
	}
	else if(laptop<=0){
		console.log("Quantity can't be Negative or zero");
	}else{
		var totalPrice= watch*50 + phone*100 + laptop*500;
	    return totalPrice;

	}
	
}
var totalBudget=budgetCalculator(1,2,3); 
//console.log(totalBudget);





// Hotel Cost

function hotelCost(day) {
	if(day<=0){
		console.log("No of day can't  be nagative or zero");
	}else if(day<=10){
		cost=day*100;
		return cost;
	}else if(day>10 && day<=20){
		cost=10*100 + (day-10)*80;
		return cost;
	}else{
		cost=10*100 + 10*80 + (day-20)*50;
		return cost;
	}
 }
 var totalCost= hotelCost(25);
//console.log(totalCost);


// Mega friends

function megaFriend(friends) {
	var max=friends[0].length;

	for( var i=0;i<friends.length;i++)
	{
		var count=0;
		
		for(var j=0;j<friends[i].length;j++)
		{
			
			count++;
		}
		
		if(count>max)
		{
			max=count;
		}
		
	}
	for(i=0;i<friends.length;i++)
	{
		if(friends[i].length==max){
			return friends[i];
		}
	}

}
var friendsName=['ram','shyamq','jodu','modhu','khablaaa'];
var megaFriendsName=megaFriend(friendsName);
//console.log(megaFriendsName);


















