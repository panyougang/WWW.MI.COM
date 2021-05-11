# git
Git（读音为/gɪt/）是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理。 [1]  也是Linus Torvalds为了帮助管理Linux内核开发而开发的一个开放源码的版本控制软件。

目前市面使用的版本管理软件 主要分为两类
1. 集中式代码管理(svn)  5%
2. 分布式代码管理(git)  95%

项目(源代码)管理软件 主要管理开发环境下的软件的源码(自己写的代码)

官网:
https://git-scm.com/
git是一个跨平台的版本管理工具(windows linux unix osx)

### git基本操作

### 用户设置
```bash
### 全局用户设置 每台新的电脑仅需一次设置
$ git config --global user.name 'Zhang Jun'
$ git config --gulbal user.email 'root@rootbk.cn'
```

1. 项目构建 项目目录(README.md .gitignore)
2. 在项目根目录下初始化本地仓库 `$ git init`
3. 初始化node项目 `$ npm init -y`

### 常用指令
```bash
# 查看状态
$ git status

# 添加管理(将文件添加到本地仓库的暂存区)
$ git add fileName      # 将指定文件添加到git仓库的暂存区
$ git add .             # 将当前目录下所有文件和目录都添加到git仓库的暂存区
$ git add --all         # 将当前目录下所有文件和目录都添加到git仓库的暂存区
$ git add path/         # 将指定目录添加到暂存区

# 将文件移出暂存区
$ git rm --cached fileName

# 将暂存区的文件提交到本地仓库
$ git commit -m 'msg'

# 查看提交日志
$ git log

# 恢复历史版本
$ git reset --hard hash(前6位)

# 查看帮助
$ git --help

# 恢复文件
$ git checkout filename
```

### github
https://github.com/
它是全球最大的IT开源社区 提倡社交编程 
全球最大的同性交友网站

github提供了免费的git仓库(public)
github也有私有仓库 收费

开源大法好

比较成功的前端开源项目
jQuery
Bootstrap
Vue
React
Angular
ANTD
MUI
...

2018年10月 微软收购了gihub
收购的当天微软宣布 闭源仓库免费


### git远程仓库操作
```bash
# 创建并切换分支
$ git branch -M main

# 添加远程仓库地址
$ git remote add origin https://github.com/jxsrzj0325/huawei.com.git

# 将本地仓库中的main分支推送到远程仓库
$ git push -u origin main

# 克隆远程仓库(从无到有)
$ git clone https://github.com/jxsrzj0325/huawei.com.git

# 从远程仓库拉取分支(更新)
$ git pull origin main

```

### 分支操作
```bash
# 查看分支
$ git branch

# 创建分支
$ git branch 分支名

# 切换分支
$ git checkout 分支名

# 合并分支
$ git merge 分支名

```