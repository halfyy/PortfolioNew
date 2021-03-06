var Scene8={
	preload:function(){
		game.load.image('george','img/george.png');
		game.load.image('mason','img/mason.png');
		game.load.image('gg','img/gg.png');
		game.load.image('james','img/james.png');
		game.load.image('ruby','img/ruby.png');
		game.load.image('1place','img/1place.jpg');
		game.load.image('2place','img/2place.jpg');
		game.load.image('home','img/home.jpg');
		game.load.image('cafe','img/cafe.jpg');
		game.load.image('cloud','img/cloud.png');
		game.load.image('next','img/1.png');
		game.load.image('find','img/find.png');
	},
	create:function(){
		game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
		var home=game.add.image(0,0,'1place');
		
		var cloud=game.add.image(50,580,'cloud');
		var next = game.add.button(870, 680, 'find', Scene8.actionOnClick);
		next.inputEnabled = true;
		next.scale.setTo(0.65,0.65);
		home.scale.setTo(0.77,0.85);
		text = game.add.text(50, 50, "");
		game.add.text(65, 590, 'Ньургун:',{
			fill:'#ffffff',
			fontSize:"33px",
			fontFamily:"Arial",
			fontWeight:"300"
		});
		text1 = game.add.text(50, 50, "");
		game.add.text(80, 650, 'Ээдьэ, чэ кордуох. Комолос миэхэ, "find" диэн кнопканы баттаа',{
			fill:'#ffffff',
			fontSize:"28px",
			fontFamily:"Arial",
			fontWeight:"100"
		});

	},
	update:function(){
		
	},
	actionOnClick:function () {
		game.state.start("scene9");
}
};