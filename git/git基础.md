# git 基础学习
## 撤销
<font size=4>

1. `git commit --amend` :用于提交时漏掉文件，再次提交  
2. `git reset HEAD 提交的文件` ：用于撤销上一次不想提交的文件
</font>
---
## 远程分支的使用
<font size=4>

### 1. 查看远程仓库 
`git remote`: 查看远程仓库简写  
`git remote -v`：查看远程分支的简写和链接
### 2. 添加远程分支
`git remote add <shortname> <url>`
### 3. 从远程仓库中抓取和拉取
`git fetch [remote-name]`：从远程仓库拉取，但不会自动合并或你修改你当前的工作   
`git pull [remote-name]`:从远程抓取仓库并合并
### 推送到远程仓库
`git push origin master`：将master分支推送到origin分支  
### 查看某个远程仓库
`git remote show [remote-name]`:查看远程仓库的信息  
`git remote show`：查看更多信息
### 远程仓库的移除和重命名
`git remote rename [旧仓库名称] [新仓库名称]`   
`git remote rm [仓库名称]`

---
## 打标签(待补全)
### 列出标签
`git tag`：列出标签
`git tag -l '标签名(支持正则匹配)'`：列出具体标签

### 创建标签
1. 附注标签
`git tag -a [标签名] -m '存储信息'`：创建附注标签   
---
## 设置别名
```js
// 例如
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git commit --global alias.st status
``` 

