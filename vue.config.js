module.exports =
{
     // 避免Eslint报错
     lintOnSave: false,
    configureWebpack:{
        resolve:{
            alias:{
                // '@':'src' 默认配置
                'assets':'@/assets',
                'common':'@/common',
                'network':'@/network',
                'components':'@/components',
                'views':'@/views'
            }
        }
    }
}

