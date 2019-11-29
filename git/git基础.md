# git 基础学习
## 撤销
<font size=4>

1. `git commit --amend` :用于提交时漏掉文件，再次提交  
2. `git reset HEAD 提交的文件` ：用于撤销上一次不想提交的文件
3. `git checkout -- 文件名`：用于撤销未见的修改
</font>

## 查看远程仓库
<font size=4>

1. `git remote -v`：显示远程仓库简写和对应的url
2. `git remote add <shortname> <url>`：添加新的远程git仓库
3. `git fetch <简写>`：通过简写拉取仓库信息（不会自动合并，需要手动合并）
4. `git pull`：拉取分支并自动合并 