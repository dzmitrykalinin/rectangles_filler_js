const Dot = require('../lib/dot');

module.exports = class Image {
    constructor(size) {
        let _image = [], _size = size;
        this.getImageSize = function() { return _size; }
        this.getImage = function() { return _image; }
        this.erase();
    }

    get Image() {
        return this.getImage();
    }

    get Size() {
        return this.getImageSize();
    }

    print() {
        let arr = [];
        for(let i = 0; i <= this.Size - 1; i++) {
            arr[i] = []
            for (let j = 0; j <= this.Size - 1; j++) {
                arr[i][j] = this.Image[j][i].Color
            }
        }
        return arr;
    };

    erase() {
        for(let i = 0; i <= this.Size - 1; i++) {
            this.Image[i] = []
            for (let j = 0; j <= this.Size - 1; j++) {
                this.Image[i][j] = new Dot(i, j);
            }
        }
    }
};
