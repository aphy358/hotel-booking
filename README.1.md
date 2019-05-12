
0、创建一个 react 项目，运行 npx create-react-app t-bag --typescript，再运行 npm run eject；（react + redux 示例：https://github.com/baqihg/TypeScript-React-Webpack-Redux）

1、安装相关插件（react-router、redux、axios 等）cnpm i -D @types/react-redux react-redux @types/react-router-dom react-router-dom @types/react-router-redux react-router-redux axios typesafe-actions；

2、候选插件：redux-thunk、react-scripts;

3、在 src 目录下创建 test 目录，将所有测试文件移到该文件夹下；

4、创建目录 connector（用于连接容器和组件）、routes、store、components；

5、初步创建 routes，以便入口文件可以顺利调用页面，在该目录下创建 index.ts，然后再创建两个目录：Home、Counter，又分别在它们下面创建各自的 index.ts，export default { component : HomeView }；

6、初步创建包含所有 action、reducer、constants 的文件夹 features，放在根目录下；

7、初步创建 store，先创建一个 initState.ts 和 index.ts 放到 store 目录下，