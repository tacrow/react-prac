module.exports = {
  entry: [
    'babel-polyfill',
    './src/app.js',
  ],
  output: {
    path: `${__dirname}/public/js`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        // .js
        test: /\.js$/,
        use: [
          {
            // use babel
            loader: 'babel-loader',
            // babel option
            options: {
              presets: [
                // envの指定でES2017をES5に変換
                // {modules: false}にしないと import 文が Babel によって CommonJS に変換され、
                // webpack の Tree Shaking 機能が使えない
                ['env', {'modules': false}],
                // ReactのJSXを解釈
                'react'
              ]
         	  }
          }
        ],
        // node_modulesは除外
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[local]--[hash:base64:5]',
          'postcss-loader',
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css']
  },
  devtool: 'source-map'
};