//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    question: [{ "question": "当你觉得累了，哪种活动能让你放松", "option": { "A": "与别人说话或听音乐、听故事", "V": "看书、看电视或录像", "K": "出去玩或者做游戏，做运动" } }, { "question": "如果你教给别人怎么做事，通常用的方法", "option": { "A": "用语言告诉他怎么做", "V": "画图告诉怎么做", "K": "用手势和行动告诉他怎么做" } }, { "question": "当你正在做事时，你觉得什么最容易干扰你的注意力", "option": { "A": "噪音", "V": "你觉得新鲜好好玩的东西", "K": "你周围正在动的人或东西" } }, { "question": "当你一个人呆着时喜欢做干什么", "option": { "A": "给别人打电话或听收音机", "V": "看电视、录像或看", "K": "自己玩游戏或者做自己喜欢做的事" } }]
  },
  countA:0,
  countB:0,
  countC:0,
})