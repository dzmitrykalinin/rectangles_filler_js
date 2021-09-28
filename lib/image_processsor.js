const Image = require('../lib/image'),
	Drawer = require('../lib/drawer'),
	ColorsMapping = require('../lib/colors_mapping'),
	DEFAULT_IMAGE_SIZE = 10,
	MAX_IMAGE_SIZE = 800;

exports.process = function(req, res) {
	try {
		let reqImage = buildReqImageParams(req);
		let imageSize = reqImage.imageSize || DEFAULT_IMAGE_SIZE, image = new Image(imageSize),
			lines = reqImage.lines, fillDotes = reqImage.fillDotes;

		drawLines(image, lines);
		fillRectangles(image, fillDotes);

		res.status(200).json({ image: image.print() });
	} catch (err) {
		throw(err);
	}
};

drawLines = function(image, lines) {
	lines.forEach((line) => {
		if (line.x1 != null && line.y1 != null && line.x2 != null && line.y2 != null) {
			Drawer.drawLine(image, image.Image[line.y1][line.x1], image.Image[line.y2][line.x2], ColorsMapping.red);
		} else {
			throw `wrong line format ${JSON.stringify(line)}`;
		}
	});
};

fillRectangles = function(image, fillDotes) {
	fillDotes.forEach((dot) => {
		if (dot.x && dot.y) {
			Drawer.fill(image, image.Image[dot.x][dot.y], ColorsMapping.white)
		} else {
			throw `wrong fill dot format ${JSON.stringify(dot)}`;
		}
	});
};

buildReqImageParams = function(req) {
	let reqImage = req.body.image;
	if(!reqImage) { throw 'body misses image param' };
	if (!reqImage.imageSize || reqImage.imageSize > MAX_IMAGE_SIZE) {
		throw `wrong image size: ${reqImage.imageSize}, max is ${MAX_IMAGE_SIZE}`;
	}
	if(!reqImage.lines) { throw `body misses image lines`; }
	if(!reqImage.fillDotes) { throw `body misses image fillDotes`; }

	return reqImage;
};
