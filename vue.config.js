module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'component': '@/component',
                'content': 'component/content',
                'common': 'component/common',
                'assets': '@/assets',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}
// const path = require('path');
// function resolve(dir) {
//     return path.join(__dirname, dir)
// }
// // 项目的主要配置文件
// module.exports = {
//     chainWebpack: config => {
//         config.resolve.alias
//             .set('@', resolve('src'))
//             .set('assets', resolve('@/assets'))
//             .set('common', resolve('@/common'))
//             .set('component', resolve('@/component'))
//             .set('network', resolve('@/network'))
//             .set('views', resolve('@/views'))
//     }
// }