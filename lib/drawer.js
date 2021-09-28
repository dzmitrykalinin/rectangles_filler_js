module.exports = class Drawer {
    static drawLine(image, dot1, dot2, color) {
        if(!dot1 || !dot2) {
            throw('Wrong coordinates!');
        }

        if(!dot1.isOnTheSameLine(dot2)) {
            throw('Can not draw diagonal line!');
        }


        if(dot1.isOnTheSameXLine(dot2)) {
            if (dot1.X <= dot2.X) {
                for(let i = dot1.X; i <= dot2.X; i++) {
                    image.Image[i][dot1.Y].Color = color;
                }
            } else {
                for(let i = dot1.X; i >= dot2.X; i--) {
                    image.Image[i][dot1.Y].Color = color;
                }
            }
        }

        if(dot1.isOnTheSameYLine(dot2)) {
            if (dot1.Y <= dot2.Y) {
                for(let i = dot1.Y; i <= dot2.Y; i++) {
                    image.Image[dot1.X][i].Color = color;
                }
            } else {
                for(let i = dot1.Y; i >= dot2.Y; i--) {
                    image.Image[dot1.X][i].Color = color;
                }
            }

        }
        return;
    };

    static fill(image, startingDot, color) {
        // Create empty set Q. Use set, b/c there will be a lot of duplicates in Array.
        let q = new Set();
        // If element color is not for replacing, return.
        if(!startingDot.isDefaultColor()) {
            alert('You chose already filled dot!');
            return;
        }
        // Put element into Q.
        q.add(startingDot);
        // For each N from Q:
        q.forEach((dot) => {
            this.fillLine(image, dot, q, color);
        });
    };


    static fillLine(image, dot, q, color) {
        if(!dot.isDefaultColor()) {
            return;
        }
        // If N color is for replacing:
        let w = dot.X, e = dot.X;
        // Go up to the west until w color is for replacing.
        while(w >= 0 && image.Image[w - 1] && image.Image[w - 1][dot.Y].isDefaultColor()) { w--; }
        // Go up to the east until w color is for replacing.
        while(e < image.Size && image.Image[e + 1] && image.Image[e + 1][dot.Y].isDefaultColor()) { e++; }
        // Replace elements color between w and e.
        this.drawLine(image, image.Image[w][dot.Y], image.Image[e][dot.Y], color);
        // For each n between w and e:
        for(let x = w; x <= e; x++) {
            // If element color to the south from n is with color for replacing, put it into Q.
            // If element color to the north from n is with color for replacing, put it into Q.
            [image.Image[x][dot.Y + 1], image.Image[x][dot.Y - 1]].forEach((tempDot) => { if(tempDot && tempDot.isDefaultColor()) { q.add(tempDot); } })
        }
    };
};
