"use strict";

class Enemy extends Sprite {
	constructor(img, x, y) {
		super(img, x, y);
		this.speed = 3;
		this.angle = 270;
	}

	move() {
		this.angle = Math.atan2(objects.player.y - this.y, objects.player.x - this.x);
		this.x += Math.cos(this.angle)*this.speed;
		this.y += Math.sin(this.angle)*this.speed;
	}
}
