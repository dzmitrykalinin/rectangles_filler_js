const ColorsMapping = require('../lib/colors_mapping');

module.exports = class Dot {
    constructor(x, y, color = ColorsMapping.black) {
        let _x = x, _y = y, _color = color;
        this.getX = function() { return _x; };
        this.getY = function() { return _y; };
        this.getColor = function() { return _color; };
        this.setColor = function(color) { _color = color };
    }

    get X() {
        return this.getX();
    };

    get Y() {
        return this.getY();
    };

    get Color() {
        return this.getColor();
    }

    set Color(color) {
        this.setColor(color);
    };

    isOnTheSameLine(dot2) {
        return this.isOnTheSameXLine(dot2) || this.isOnTheSameYLine(dot2);
    };

    isOnTheSameXLine(dot2) {
        return this.X === dot2.X;
    };

    isOnTheSameYLine(dot2) {
        return this.Y === dot2.Y;
    };

    isDefaultColor() {
        return this.Color === ColorsMapping.black;
    }
};
