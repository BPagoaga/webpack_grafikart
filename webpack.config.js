const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
    // variable d'environnement permettant de définir si l'on est en dev ou prod
const dev = process.env.NODE_ENV === "dev"

// on enregistre la config dans une variable pour pouvoir la modifier si besoin
let config = {

    // point d'entrée
    entry: './assets/js/app.js',

    // fichier de sortie
    output: {
        // absolute path !!
        path: path.resolve('./dist'),
        filename: 'bundle.js',
        publicPath: './dist/'
    },

    // lance le watch uniquement en mode dev
    watch: dev,

    // loaders
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },

    // plugins
    plugins: [],

    // devtools : source map
    // premier cas, uniquement en mode dev
    //  devtool: dev ? "cheap-module-eval-source-map" : false
    // deuxième cas : en mode dev & prod, à combiner avec l'option sourceMap du module uglify
    // sinon il vire les commentaires du source-map
    devtool: dev ? "cheap-module-eval-source-map" : "source-map"

}

// prod : minification
if (!dev) {
    config.plugins.push(new UglifyJSPlugin({
        // si l'on veut les source map en prod
        sourceMap: true
    }))
}

module.exports = config