# git的指令

## 1. 安装（略）
## 2. 配置
- `配置 name 和 email`
```js
git config --global user.name "wss"
git config --global user.email "wss@qq.com"
```
## 3. git的基本命令

`git status ` 查看当前仓库的状态  
`git status` 查看当前仓库的状态  
`git init `  初始化仓库  

文件状态：`未跟踪 →已跟踪 →暂存 → 未修改 → 已修改`

`git add *`  未跟踪 → 已跟踪  
`git commit -m "xxxx"`  未跟踪 → 暂存  将暂存的文件存储到仓库中  
`git commit -a -m "xxxx" ` 提交所有已修改的文件（未跟踪的文件不会提交）  
未修改 → 修改   修改代码后，文件会变为修改状态

`git restore 文件名` //恢复文件  
`git restore --staged filename`  取消暂存状态  
`git rm filename` 删除文件  
`git rm filename -f`  强制删除  
`git mv from to ` 移动文件

## 4. 分支
git 在存储文件时，每一次代码代码的提交都会创建一个与之对应的节点，git 就是通过一个一个的节点来记录代码的状态的。节点会构成一个树状结构，树状结构就意味着这个树会存在分支，默认情况下仓库只有一个分支，命名为 master。在使用 git 时，可以创建多个分支，分支与分支之间相互独立，在一个分支上修改代码不会影响其他的分支。
```JS
git branch //# 查看当前分支
git branch <branch name> //# 创建新的分支
git branch -d <branch name> //# 删除分支
git switch <branch name> //# 切换分支
git switch -c <branch name> //# 创建并切换分支
git merge <branch name> //# 和并分支
git branch //# 查看当前分支
git branch <branch name> //# 创建新的分支
git branch -d <branch name> //# 删除分支
git switch <branch name> //# 切换分支
git switch -c <branch name> //# 创建并切换分支
git merge <branch name> //# 和并分支
```