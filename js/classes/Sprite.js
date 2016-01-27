"use strict";

class Sprite {
	constructor(img, x, y) {
		this.img = new Image();
		this.img.src = img;
		this.x = x;
		this.y = y;
	}

	draw(ctx) {
		ctx.drawImage(this.img, this.x, this.y);
	}

	drawRotated(ctx) {
		ctx.save();
		ctx.translate(this.x+(this.img.width/2), this.y+(this.img.height/2));
		ctx.rotate(this.angle);
		ctx.drawImage(this.img, -(this.img.width/2), -(this.img.height/2));
		ctx.restore();
	}

	distance( obj ) {
		var dx 	= Math.abs((this.x+this.img.width/2) - (obj.x+obj.img.width/2))
		var dy 	= Math.abs((this.y+this.img.height/2) - (obj.y+obj.img.height/2));
		var hyp	= Math.sqrt( (dx*dx)+(dy*dy) );

		return hyp;
	}
}
