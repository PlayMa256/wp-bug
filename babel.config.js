module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					browsers: [
						'> 1%',
						'ie 11',
						'Firefox ESR',
						'>0.25%'
					]
				},
				modules: process.env.NODE_ENV === 'test' ? 'commonjs' : false,
				useBuiltIns: 'entry'
			}
		]
	]
};