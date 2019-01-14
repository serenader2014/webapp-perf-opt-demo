## 单页应用资源加载性能优化

此仓库试图讲述如何为一个典型的单页应用（React 应用）进行资源加载的优化。优化步骤以分支的形式体现，当前 `preload-v1` 分支为**使用 `preload` 对页面一些资源进行提前加载**。

当前分支相对于 `master` 分支多了一步处理，它会在项目 build 完之后执行一段 Node 脚本，将一部分资源以 `<link rel="preload" >` 的形式插入到页面的 HTML 文档当中。

Demo 可以通过访问 commit 记录里面的 `now` 持续集成的链接进行访问。

通过使用 [WebPageTest](https://www.webpagetest.org) 对初始代码进行性能测试，可以得到这样一张资源加载瀑布图：

![waterfall](./screenshot/waterfall.png)

具体结果可以访问 [https://www.webpagetest.org/result/190114_AM_7ddbc9f23d2f1a24cf8d1855f3f06907/1/details/](https://www.webpagetest.org/result/190114_AM_7ddbc9f23d2f1a24cf8d1855f3f06907/1/details/) 查看。
