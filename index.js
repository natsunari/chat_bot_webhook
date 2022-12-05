// function helloWorld () { // 創建函式
//     const content = 'helloWorld' // 給變數內容
//     console.log(content) // 用日誌將內容印出來
// }
// helloWorld(); // 觸發

// 教學參考網址：https://ithelp.ithome.com.tw/articles/10307812


// 建立express伺服器
// const express = require("express");
// const app = express();

//引用line bot SDK
var linebot = require("linebot");

//用於辨識line channel的資訊
var bot = linebot({
    channelId: "1657703022",
    channelSecret: "3640ca327cd68c5e4489be11222b54f6",
    channelAccessToken: "TlNOkgKBYKjOaB+jkQdhSQezvmp39hLuCxVxA9nodrl+BBZzrOlluHfEYPmWc0VYpbQ8Sr8d3pzZwyFJ1dxns8ozLUT5BMcAlWCUZLYZshx9mh9BB/g74NXJWAE8qSR10SY6AaMvCWqzWUyhIPlahAdB04t89/1O/w1cDnyilFU=",
});

// const linebotParser = bot.parser();

// 當有人傳訊息給Bot時
bot.on("message",function(event){
    // event.message.text是使用者傳給bot的訊息
    // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者

    // event.message.text是使用者傳給bot的訊息
    // 準備要回傳的內容
    var replyMsg = `Hello你剛才說了:${event.message.text}`;
    // 透過event.reply(要回傳的訊息)方法將訊息回傳給使用者
    event.reply(replyMsg).then(function (data) {
        // 當訊息成功回傳後的處理
    }).catch(function (error) {
        // 當訊息回傳失敗後的處理
    });

});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
    console.log('[BOT已準備就緒]');
});