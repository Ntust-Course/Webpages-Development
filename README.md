Jerry大大的 Python 網頁製作課
=
## 從 :zero: 開始的 Q&A

0. 請問 Python 在哪下載並安裝? How to download and install Python?

    [**Windows**](https://www.python.org/ftp/python/3.6.4/python-3.6.4.exe) <- 左鍵單擊
    
    [**Mac OS X**](https://www.python.org/downloads/mac-osx/) <- 左鍵單擊
    > 用執行檔安裝時 記得將 **Add Python to PATH** 打勾

    **Liunx**
    * 通常已經預載好了 usually pre-installed
    * *Ubuntu:* `sudo apt-get install python3.6` (Linux 大部分都是這個指令)
    * *Fedora:* `sudo yum install python3.6`

    ### 安裝完之後 測試你的 **Python**  Test your **Python**
    在**終端機(Terminal)** 下 `python -V` 可以查看 Python 的版本有顯示 Python 之類的版本資訊表示安裝正確
    
    > 終端機(Terminal)開啟方式:
    > 
    > >　**Windows** : <i class="fa fa-windows"></i> **+ R** 輸入並執行 **cmd**
    > >
    > > **Mac** : **CMD**&#8984; **+ Space** 開啟 SpotLight Search 輸入並執行 **Terminal**
    > >
    > > **Linux** : **Ctrl + Alt + T**

1. 請問 **jupyter** 怎麼下載並安裝? How to download and install **jupyer**?
    
    在你的 **終端機(Terminal)** 中 執行 `pip install {package}` <- 這裡的 `{package}` 就是 `jupyter`
    
    最後有出現 **Sucessful** 的字樣並且可以繼續輸入 指令就代表成功囉!
    
2. 請問我安裝好了 **jupyter** 之後要怎麼開啟呢?

    開啟你的終端機 輸入 `jupyter notebook` 就可以囉
    
---
## 從 :zero: 開始的錯誤解決辦法
### Windows Ver
0. `'Python' 不是內部或外部命令、可執行的程式或批次檔。`
    
    > 原因 : **環境變數(Environment Variables)** 尚未設置
    * 方法1 : 手動新增環境變數

        1. 右鍵單擊 **我的電腦** 或 **本機**
        2. 點擊 **內容**
        3. 單擊側面板中的 **進階系統設置**
        4. 點擊 **環境變數**
        5. 在 **系統變數** 找到 **Path** 並按下編輯
        6. 新增你 **Python 安裝的路徑**

    * 方法2 : 用 Python 安裝檔新增環境變數

        1. 點擊 **你的Python 安裝檔**
        2. 點擊 **modify**
        3. 將 **Add Python to PATH** 打勾



### Mac Ver
等待你的建立

### Linux Ver
等待你的建立
