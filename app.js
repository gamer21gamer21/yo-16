function hello(name){
	console.log("hello"+name)
}
hello("anand")
hello("erdembileg")
hello("zunbileg")
function test(){
	alert("press ok to change color to green")
	document.getElementsByTagName('body')[0].style.backgroundColor="green"
}
/*function t1(a,b){
	alert(a+b)
}
t1(50)
t1(20)*/
function bott(){
	alert("press ok to change color to red")
	document.getElementsByTagName('body')[0].style.backgroundColor="red"
}
var computer = document.querySelector('.computer');
var player = document.querySelector('.player');
var winner = document.querySelector('.winner');
function play(playerChoice){	
		random = Math.floor(Math.random()*3);
		console.log(random	)
		var computerChoice;
		if(random==0){
			computerChoice="paper";
			computer.innerText="computer choice:paper"
		}else if(random==1){
			computerChoice="scissor";
			computer.innerText="computer choice:scissor"
		}else if(random==2){
				computerChoice="rock";
				computer.innerText="computer choice:rock"
		}
		player.innerText = "Player choice: " + playerChoice;
		if(playerChoice==computerChoice){
			winner.innerText=('winner:nobody wins (tie)')
		}else if(
		(playerChoice=="paper"&&computerChoice=="rock") ||
		(playerChoice=="rock"&&computerChoice=="scissor") ||
		(playerChoice=="scissor"&&computerChoice=="paper")
		){
		 winner.innerText=("winner:you wins");
		 score.innerText=("player score:")
     }else{
		 winner.innerText=("winner:computer wins")	
	 }
	}