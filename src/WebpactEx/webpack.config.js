var webpack = require('webpack');
module.exports = {
    //처음 로드하는 파일 지정 - 단일 혹은 중복
    entry: {
        main: __dirname + '/src/index.js'   //단일 로드 파일
    },
        // 중복 로드일 경우
/*    entry: {
        main: __dirname + '/src/index.js' ,
        app: __dirname + '/src/main.js'
    },*/
    //번들링된 결과물 출력방법 지저
    output: {
        //번들링된 파일의 저장경로
        path: __dirname + '/public/dist/',
        filename: '[name].js',
        //웹서버에서 이용될때 사용경로
        publicPath : '/dist'
    },
    //모듈을 수행하는 방법
    module: {
        //이전버전 JS file로  트랜스파일 하도록
        rules: [
            {
                //정규식지정
                test:/\.js$/,
                //babel을 이용한 loader
                loader: 'babel-loader',
                //트렌스파일에 포함시키지 않을 파일명
                exclude: /node_modules/
            }
        ]
    },
    //사용자가 지정한 작업을 추가할 수 있는 기능
    plugins : [
        new webpack.optimize.UglifyJsPlugin()
        //UglifyJsPlugin() == 코드 난독하ㅗ와 압축기능 제공
    ]
/*  ,
  devServer: {
        contentBase: './public/',
        port: 3000,
        historyApiFallback:true
    }*/
}
