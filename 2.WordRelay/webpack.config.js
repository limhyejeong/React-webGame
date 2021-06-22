const path = require('path');

module.exports = {
   name: 'wordrelay-setting',
   mode: 'development', // 실서비스에서는 production으로
   devtool: 'eval', // 빠르게
   resolve: {
      extensions: ['.js', '.jsx']
   },

   entry: { // 입력
      app: ['./client'],
   },

   module: {
      rules: [{
         test: /\.jsx?/, // 정규표현식
         loader: 'babel-loader',
         options: {
            presets: [
               ['@babel/preset-env', {
                  targets: {
                     browsers: ['> 1% in KR'],
                  },
                  debug: true,
               }],
               '@babel/preset-react',
            ],
            plugins: ['@babel/plugin-proposal-class-properties'],
         }
      }]
   },

   output: { // 출력
      path: path.join(__dirname, 'dist'), // dist 폴더의 경로를 path로 설정
      filename: 'app.js',
   },
};