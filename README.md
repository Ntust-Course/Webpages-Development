Jerry大大的 Python 網頁製作課
=
## 從 :zero: 開始的 Q&A

### 環境篇

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
    > > **Windows** : **Win** <i class="fa fa-windows"></i> **+ R** 輸入並執行 **cmd**
    > >
    > > **Mac** : **CMD** &#8984; **+ Space** 開啟 SpotLight Search 輸入並執行 **Terminal**
    > >
    > > **Linux** : **Ctrl + Alt + T**

1. 請問 **jupyter** 怎麼下載並安裝? How to download and install **jupyer**?
    
    在你的 **終端機(Terminal)** 中 執行 `pip install {package}` <- 這裡的 `{package}` 就是 `jupyter`
    
    最後有出現 **Sucessful** 的字樣並且可以繼續輸入指令就代表成功囉!
    
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
        2. 點擊 **modify** 或 **install**
        3. 將 **Add Python to PATH** 打勾
        4. 按下 **install** 跑完就好囉!
1. `Microsoft Visual C++ 14.0 is required`

    > 原因1 : 你的 Visual C++ 版本不夠新
    
    * 方法1 : 安裝 Visual C++ Redistributable Package
    
        1. Visual C++ Redistributable Package 14.0.25008 [(x64 / 64-bit)](https://www.techspot.com/downloads/downloadnow/6776/?evp=ab20b3eff9233dce2d23bb505386cf4c&file=1)  [(x86 / 32-bit)](https://www.techspot.com/downloads/downloadnow/6776/?evp=ab20b3eff9233dce2d23bb505386cf4c&file=2)
        
        > 請根據你載的 Python (你載64位元就載64位元 依此類推)
        
    > 原因2 : Python 安裝不全

    * 方法1 : Python 砍掉重裝
        
        1. 按下**Win** <i class="fa fa-windows"></i> **+ R** 輸入並執行 **control**
        2. 點擊 **程式集** 下的 **解除安裝程式**
        3. 找到你的 **Python** 並**解除安裝**
        4. 按照[環境篇](#環境篇)的安裝步驟重新安裝程式
        5. 如果還是遇到同樣的問題 可以請教 [Google大神](#https://www.google.com.tw/search?rlz=1C1CHZL_zh-TWTW736TW736&ei=10umWvCFFMOz0ASh4Kq4Ag&q=Microsoft+Visual+C%2B%2B+14.0+is+required+python3&oq=Microsoft+Visual+C%2B%2B+14.0+is+required+python3&gs_l=psy-ab.3..33i160k1.668.668.0.862.1.1.0.0.0.0.190.190.0j1.1.0....0...1.1.64.psy-ab..0.1.189....0.ayz9xPlUrbI) 或是 [助教](https://www.facebook.com/messages/t/ShengFong.f/)

2. `尚未建立`

    > 原因 : Windows 預設編碼問題
    
    * 方法1 : 尚未建立

* 其他問題

    * 方法1 : 
    
        1. [Google](https://www.google.com/)
        2. [____](#)
    * 方法2 : 
    
        1. 將錯誤的 _Traceback_ 複製給 [助教](https://www.facebook.com/messages/t/ShengFong.f/)
        2. 記得還有附上當時輸入的**指令**或**狀況**

### Mac Ver

等待你的建立

### Linux Ver

等待你的建立
