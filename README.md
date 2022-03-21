# Google-Spreadsheet-to-json
## はじめに
必ずスプレッドシートを**リンクを知っている全員**に共有の設定をしてください  
GASを実行するアカウントがスプレッドシートのデータを取得できるようにするためです  
権限はなんでもいいです
### Spreadsheet IDとは
例
> https://docs.google.com/spreadsheets/d/SpreadsheetID/edit#gid=0
<br>
例の<font color="red">SpreadsheetID</font>の部分がSpreadsheet IDです
<br><br>

### シート番号とは
例
> ![exampless.jpg](exampless.jpg "ss")
<br>

例では
| シート名 | シート番号 |
|:-:|:-:|
| シート1 | 0 |
| シート2 | 1 |
| シート3 | 2 |

となります
<br><br>
### 読み取る範囲
1行目はjsonの**key**になり、2行目以降が**value**になります  
つまり、**A1**の文字列が**A列**のkeyになります  
*※valueは全て**String型**になります*  
<br><br>
### JSONをダウンロード
SpreadsheetIDとシート番号を入力して<font color="Blue">convert</font>と書かれたボタンをクリックするとちゃんと**整形**されたdata.jsonという名前でダウンロードされます
<br><br><br>
##### ※JavaScriptを必ず有効にしてください
