### Heroku 的簡易指令

> 這些 Command Heroku 的網站上面都有，這裡只是單純整理幾個比較常用的

`heroku create [app_name]` 這裡的 \[app_name\] 指的是 heroku 上的 app


#### 對比 Local 和 Heroku 的指令

> 其實就只是多了 `heroku run`

| Feature | Local | Heroku |
|---|---|---|
| models changed | `python migrations` | `heroku run python migrations` | 
| un/applying migrations | `python migrate` | `heroku run python migrations` | 

### 給沒用過 Git Command 的人

#### **常用** Command

`git init`
> 初始化這個目錄，讓 Git 對這個目錄開始進行版本控制

`git remote`
> 列出遠端版本控制倉庫(repository)

*	`git remote -v`	
	> 列出連結

*	`git remote add [shortname] [url]`
	> 新增一個遠端倉庫 如: `git remote add heroku https://git.heroku.com/pure-mountain-65066.git`

`git add [something]`
> 新增一些東西到 local index 如: `git add -A`
> -A 代表所有的檔案與 -all 和 . 相同

`git commit`
> local index -> local repository

*	`git commit -m [message]`
	> 帶有單行訊息的 commit 如: `git commit -m "First commit"`

`git push`
> local repository -> remote repository # 預設會 push 到 origin

*	`git push [remote-name] [branch-name]`
	> 如: git push origin master

`git clone [url]`
> 複製一份到 current_dir/repository_name 如: `git clone https://git.heroku.com/pure-mountain-65066.git`

*	`git clone [url] [repo_name]`
	> 指定複製的目錄 `git clone https://git.heroku.com/pure-mountain-65066.git mydir`

#### 不專業的 Git 講解

remote repository 簡單來說就是你的 Github 或 Heroku ...

local repository 這裡是你 commit 之後資料被記錄的地方

local index 這裡是你 add 之後的地方

workspace 簡單來說就是你的本機資料夾

![](https://i.stack.imgur.com/m4L6s.jpg)