//git init 初始化一个git项目。
//git status 查看当前git版本库的内容。
//git add   将文件添加到git里面。
//git add . 将当前目录的所有文件添加到git的暂存区里面。
//版本库   暂存区
//git commit -m '初始化git项目'  提交到版本库master，后面的这个写的详细一些，不然到时候就看不懂了。信息，有一定的规范。
//git diff  再终端中查看修改了当前的哪些内容,还没有提交到暂存区。
//git log 指向当前修改的作者。版本号,就是日志。时间。
//git log -p  具体查看再什么时间干了什么事情。
//git reset --hard  版本号    版本回滚,
//git log --pretty=oneline 只查看版本，其他不出来。
//git reset --herd HEAD^ 回到上一个版本，没必要记，用的不多。
//git reflog  当前所在的版本。记录每一次命令操作,隔日回滚。
//git store --stage index.html 再暂存区撤销修改,还没有进行提交。
//git reset --soft HEAD^  撤销当前版本库的提交。撤销上一次的版本库提交。
//git reflog 查看当前所有的操作。
//git rm ./src/a.js文件夹被删除了，第一个方法版本回滚，第二个彻底删除。
//
//
// git remote add origin https://github.com/TianYongJieGuolove/study-demo.git