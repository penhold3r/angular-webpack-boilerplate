//
require('whatwg-fetch');
//
const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const globSassImporter = require('node-sass-glob-importer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// INCLUDES
const includeFiles = glob.sync('./src/includes/*.html');
const includes = includeFiles.map(file =>
   new HtmlWebpackPlugin({
      filename: file.replace(/\.\/src\//g, ''),
      template: file,
      inject: false
   })
);

// VIEWS
const viewsFiles = glob.sync('./src/views/*.html');
const views = viewsFiles.map(file =>
   new HtmlWebpackPlugin({
      filename: file.replace(/\.\/src\//g, ''),
      template: file,
      inject: false
   })
);

//
module.exports = {
   entry: ['whatwg-fetch', './src/scripts/index.js'],
   output: {
      filename: 'js/bundle.js',
      path: path.resolve(__dirname, './public/'),
      publicPath: './'
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            loader: 'babel-loader',
            include: path.resolve(__dirname, './scripts'),
            exclude: /node_modules/
         },
         {
            test: /\.(s?css)$/,
            use: [
               {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                     publicPath: '../',
                  }
               },
               {
                  loader: 'css-loader',
                  options: {}
               },
               {
                  loader: 'postcss-loader',
                  options: {
                     plugins: () => [require('autoprefixer')]
                  }
               },
               {
                  loader: 'sass-loader',
                  options: {
                     importer: globSassImporter()
                  }
               }
            ]
         },
         {
            test: /\.(html)$/,
            use: {
               loader: 'html-loader',
               options: {
                  removeAttributeQuotes: false
               }
            }
         },
         {
            test: /\.(png|jpe?g|gif|svg)$/,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     name: '[name].[ext]',
                     outputPath: './images',
                     publicPath: ''
                  }
               }
            ]
         },
         {
            test: /\.(eot|ttf|woff|woff2)$/,
            use: [
               {
                  loader: 'url-loader',
                  options: {
                     name: '[name].[ext]',
                     outputPath: '/fonts',
                     publicPath: './fonts'
                  }
               }
            ]
         }
      ]
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: 'css/style.css',
      }),
      new HtmlWebpackPlugin({
         filename: 'index.html',
         template: './src/index.html'
      })
   ].concat(includes).concat(views)
};
