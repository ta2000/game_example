var objects = {};

var Game = {
	start : function() {
		// Get the canvas element from the body
		Game.canvas = document.getElementById('canvas');
		// Make the canvas fill up the whole screen
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		Game.ctx = canvas.getContext('2d');

		// Create the player object
		objects.player = new Player("images/player.png", 100, 100);

		// Set the timer for creating enemies
		setInterval(function () {
			objects["enemy"+Game.enemies] = new Enemy("images/enemy.png", Math.floor(Math.random()*Game.canvas.width), Game.canvas.height);
			objects["enemy"+Game.enemies].speed = (Game.enemies/10)+1;
			Game.enemies++;
		}, 10000); // Milliseconds until next enemy is created

		// Check when a key is pressed
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
	enemies : 0
}
