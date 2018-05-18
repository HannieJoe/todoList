
1. Q: 不能解析.jsx文件
   A:
   ```bush
    {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
    },
   ```
2. Q:.vue文件格式化
   A:Alt+Shift+F
   ```bush
    "vetur.format.defaultFormatter.html": "js-beautify-html"
   ```

3. Q:checkbox 样式自定义
   A:appearance:none

4. Q:修改emmet兼容jsx文件
   A: 
   ```bush
    "emmet.syntaxProfiles":{"javascript":"jsx"}
   ```