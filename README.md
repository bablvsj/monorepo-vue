<!-- pnpm create vite  创建vite -->

<!-- ├── packages
|   ├── portal    # 门户网站
|   ├── mis       # 管理后台
|   ├── mobile    # 移动端网站
|   ├── docs      # 开发文档
|   ├── shared    # 公共库
|   ├── api       # API 层
|   ├── ...       # 监控埋码、Nodejs 服务、更多公共模块...
├── package.json -->

### 依赖

##### 全局依赖

安装到根目录的文件，需要的话使用-w(--workspace-root)

pnpm i typescript -w

安装公共开发依赖
pnpm i typescript -w -D

##### 局部依赖

进入项目目录 packages/h5-client
pnpm i axios

filter 过滤允许您将命令限制于包的特定子集

pnpm add express --filter @monorepo/http

##### 查看某个包的所有依赖

```js
pnpm why -r @monorepo/components
```

```js
PS D:\1lsj\temp\monorepo-vue> pnpm why -r @monorepo/components
Legend: production dependency, optional only, dev only

h5-client@0.0.0 D:\1lsj\temp\monorepo-vue\packages\h5-client

dependencies:
@monorepo/components link:../../components
```

### git

git 提交规范

```js
feat - 新功能 feature
fix - 修复 bug
docs - 文档注释
style - 代码格式(不影响代码运行的变动)
refactor - 重构、优化(既不增加新功能，也不是修复bug)
perf - 性能优化
test - 增加测试
chore - 构建过程或辅助工具的变动
revert - 回退
build - 打包
```
