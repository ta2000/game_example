var objects = {};

var Game = {
	start : function() {
		Game.canvas = document.getElementById('canvas');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		Game.ctx = canvas.getContext('2d');

		objects.player = new Player("images/player.png", 100, 100);
		objects.enemy0 = new Enemy("images/enemy.png", -32, -32);

		setInterval(function () {
			objects["enemy"+Game.enemies] = new Enemy("images/enemy.png", -32, -32);
			Game.enemies++;
		}, 10000);

		window.onkeydown = Game.keyDown;
		window.onkeyup = Game.keyUp;

		Game.draw(Game.ctx);
	},
	keyDown : function(e) {
		objects.player.keys[e.keyCode]=true;
	},
	keyUp : function(e) {
		delete objects.player.keys[e.keyCode];
	},
	draw : function() {
		Game.ctx.clearRect(0, 0, Game.canvas.width, Game.canvas.height);

		for (var i in objects) {
			if (objects[i].move != undefined) {
				objects[i].move();
			}
			if (objects[i].angle != undefined) {
				objects[i].drawRotated(Game.ctx);
			} else {
				objects[i].draw(Game.ctx);
			}
		}

		window.requestAnimationFrame(Game.draw);
	},
	enemies : 1
}
