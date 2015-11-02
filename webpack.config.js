module.exports = {
    entry: './app/app.js',
    output: {
        path: __dirname + '/public/js/',
        publicPath: "/js/",
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, loader: "jsx-loader"}
        ]
    }
};