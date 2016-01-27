"use strict";

class Player extends Sprite {
	constructor(img, x, y) {
		super(img, x, y);
		this.speed = 3;
		this.keys = {};
	}

	move() {
		if ( 87 in this.keys ) {
			this.y-=this.speed;
		};
		if ( 65 in this.keys ) {
			this.x-=this.speed;
		};
		if ( 83 in this.keys ) {
			this.y+=this.speed;
		};
		if ( 68 in this.keys ) {
			this.x+=this.speed;
		};

		// Outside room detection
		if (this.x < 0) {
			this.x = 0;
		}
		if (this.y < 0) {
			this.y = 0;
		}
		if (this.x > Game.canvas.width-30) {
			this.x = Game.canvas.width-30;
		}
		if (this.y > Game.canvas.height-30) {
			this.y = Game.canvas.height-30;
		}

		// Check collision with enemy
		for (var i = 0; i < Game.enemies; i++) {
			if (this.distance(objects["enemy"+i]) < 32) {
				location.reload();
				alert("Game over :(");
			}
		}
	}
}
