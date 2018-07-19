薪資導向落點建議-UI
===


## 落點分析後端運算
**本專案只有網頁介面，需以另一個後端API專案配合**

PredictionAPI <https://github.com/CHU-TDAP/PredictionAPI>

若您有自行架設後端的話，請更改`/dist/js/send-predict-data.js`的`var basePredictSystemUrl = "<您的後端網址>"`


## 檔案規劃

```text
root ─┬─ bower_components (請不要變動此檔案)
      ├─ node_modules (請不要變動此檔案)
      ├─ src (原始檔案)
      │  ├─ images
      │  ├─ js
      │  ├─ scss (網頁外觀專用檔案)
      │  ├─ *.inc (全部頁面共通的部分)
      │  └─ index.html (主要頁面)
      │  
      └─ dist (最後發布網站用的資料夾，請不要變動)
         ├─ assets (外部函式庫資源)
         └─ css (請不要變動此檔案)
```

### 注意！無論如何請不要更動以下資料夾！

以下為自動產生的檔案，請不要直接修改，請參考以下說明。

* `dist`: 網站部屬用，若要更動，請改`src`資料夾
* `css`: 要修改網頁外觀，請改`sass`資料夾
* `node_modules`
* `bower_components`

## 開發/維護此專案
### 1. 安裝Node.JS
#### Mac OSX
    brew install node

#### Windows
請至<https://nodejs.org/en/download/>下載並安裝node環境

### 2. 安裝相關套件

    [sudo] npm install -g grunt-cli bower
    npm install && bower install

### 3. 啟動自動化工具

    grunt

啟動後會做好建置輸出成`/dist`，並啟動簡易伺服器<http://localhost:8000>可直接瀏覽，同時會監視專案的`/src`內檔案，一有任何變動將會立即更新。

瀏覽器請安裝LiveReload
* Firefox: https://addons.mozilla.org/zh-TW/firefox/addon/livereload-web-extension/?src=search
* Firefox(舊版): [LiveReload - browser extensions](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-)
* Chrome: https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=zh-TW

## grunt-connect-proxy2
本專案已導入Proxy，在開發時請連上網際網路。
在本地端以`grunt`啟動localhost簡易伺服器後，會在 http://localhost:8000/gsat/api 後直接對應到伺服端的 http://predict.chu.edu.tw/2018/gsat/api ，可直接在連網的情況下以本地端的前端測試與後端的互動情形。

## 關於
介面設計: 元兒～

### 有採用的資源如下
* 前端Framework: [Foundation](http://foundation.zurb.com/)
* [JQuery 2.1](https://jquery.com/)
* [JQuery.floatThead](http://mkoryak.github.io/floatThead/)
* [jxnblk/loading](https://github.com/jxnblk/loading)
