module.exports.assignment = function (req, res) {

	console.log('in assignment');

	res.setHeader('Content-Type', 'application/json')
	res.setHeader('Cache-Control', 'public, max-age=0')
	res.send(JSON.stringify({ }, null, 3))

}
