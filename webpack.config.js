const path = require("path"); //modulo nativo de Node JS tener un control del path en el proyecto.
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", //entrada a partir de donde se creara la empaquetacion.
  output: {
    path: path.join(__dirname, "/dist"), //directorio a ser creado, y donde ira la empaquetacion.
    filename: "bundle.js" //fichero que contendra la empaquetacion.
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //regla para cargar los ficheros .js y jsx por babel
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/, //regla para cargar los ficheros .css y los estilos
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html" //especifa cual sera el fichero html de nuestra aplicacion y creara un fichero en base a este con el bundle.js agregado
    })
  ]
};
