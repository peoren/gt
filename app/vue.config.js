
module.exports = {
    devServer: {
      proxy: {
        '/v1': {
          target: 'http://192.168.2.220:8084',
          ws: true,
          changeOrigin: true,
          pathRewrite:{
            '^/v1': '/'
          }
        }
      }
    }
}
