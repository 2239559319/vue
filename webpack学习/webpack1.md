## webpack学习笔记

-------------

- webpack.config.js
```text
webpack配置文件，里面module.exports对象包含
entry,output,plugin,module等属性
```
- 命令
```bash
webpack
```
```json
{
    "scripts":{
        "build":"webpack"
    }
}
```
- 管理资源
```text
css处理 style-loader css-loader
安装 npm i -D style-loader css-loader
配置 
module.exports={
    entry:'',
    output:{
        filename:'name.js',
        path:path.resovle(__dirname,'dist') //表示输出到当前目录下的dist文件夹
    }
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'css-loader',
                    'style-loader'
                ]
            }
        ]
    }
}

图片处理同理，使用file-loader
```