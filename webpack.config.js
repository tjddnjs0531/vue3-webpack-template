// path: node.js에서 사용할수 있는 전역변수
const path = require('path')

const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    resolve: {
      // 경로에서 확장자 생략 설정
      extensions: ['.js', '.vue'],
      // 경로 별칭 설정
      alias: {
        '~': path.resolve(__dirname, 'src'),
        'assets': path.resolve(__dirname, 'src/assets')
      }
    },

    // 파일을 읽어들이기 시작하는 진입점 설정
    entry: './src/main.js',

    // 결과물(번들)을 반환하는 설정
    output: {
        //절대 경로 사용해줘야함.
        // __dirname: node.js에서 사용할수 있는 전역변수, 현재 파일이 있는 그 경로 지칭
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'main.js',
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
              },
            {
                // .scss 로 끝나는 모든 파일, s라는 단어 있을수도 없을수도
                test: /\.s?css$/,
                // 밑에서부터 실행
                use: [
                    'vue-style-loader',
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                use: 'file-loader'
            }
        ]
    },

    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        // dist 폴더에 파일 복사해주는 플러그인
        new CopyPlugin({
            patterns: [
                { from: 'static' }
            ]
        }),
        new VueLoaderPlugin()
    ]
}