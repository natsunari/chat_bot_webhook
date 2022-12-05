// function helloWorld () { // 創建函式
//     const content = 'helloWorld' // 給變數內容
//     console.log(content) // 用日誌將內容印出來
// }
// helloWorld(); // 觸發

// 教學參考網址：https://ithelp.ithome.com.tw/articles/10307812


// 建立express伺服器
const express = require("express");
const app = express();

//引用line bot SDK
var linebot = require("linebot");

//用於辨識line channel的資訊
var bot = linebot({
    channelId: process.env.channelId,
    channelSecret:process.env.channelSecret,
    channelAccessToken: process.env.channelAccessToken,
});

const linebotParser = bot.parser();

// 當有人傳訊息給Bot時
bot.on("message",function(event){
    //event.message.text是使用者傳給bot的訊息

    const introRegex = /你|誰|介紹|you|yourself|hello|你好|hi/gi;
    const resumeRegex = /resume|履歷|cv/gi;
    const blogRegex = /blog|部落格|文章/gi;

    if(introRegex.test(userText)){
        event.reply(
            "你好，我是Tanya"
        );
    } else if (resumeRegex.test(userText)){
        event.reply(
            "身為十年資歷的平面設計師，正努力轉職成網頁設計師+前端工程師中"
        );
    } else if (blogRegex.test(userText)){
        event.reply(
            "沒有部落格，換個關鍵字吧"
        );
    } else {
        event.reply(
            "不知道該問什麼嗎？歡迎透過以下的關鍵字與我互動！\n\n介紹/履歷/部落格"
        );
    }

});

//送出帶有line-bot需要資訊的post請求
app.post("/",linebotParser);

//啟動express server
app.listen(process.env.PORT || 3000,()=>{
    console.log("Express server start");
});
