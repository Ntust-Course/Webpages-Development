### Heroku 的簡易指令

> 這些 Command Heroku 的網站上面都有，這裡只是單純整理幾個比較常用的

`heroku create <app_name>` 這裡的 <app_name> 指的是 heroku 上的 app


#### 對比 Local 和 Heroku 的指令

> 其實就只是多了 heroku run

| Feature | Local | Heroku |
|---|---|---|
| models changed | `python migrations` | `heroku run python migrations` | 
| un/applying migrations | `python migrate` | `heroku run python migrations` | 

#### 給沒用過 Git Command 的人

`git add <something>` <something> 指的是檔案或資料夾
> 範例 `git add .` 這行可以把全部的檔案都加入 local_

##### 簡易的講解 Git 

remote repository 簡單來說就是你的 Github 或 Heroku ...

git push ↑ git fetch ↓

local repository 這裡是你 commit 之後資料被記錄的地方

git commit ↑ 

local index 這裡是你 add 之後的地方

git add ↑

workspace 簡單來說就是你的本機資料夾

![](https://i.stack.imgur.com/m4L6s.jpg)