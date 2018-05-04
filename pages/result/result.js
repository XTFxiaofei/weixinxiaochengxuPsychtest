// pages/result/result.js
Page({

  /** 
   * 页面的初始数据
   */
  data: {
    countA: 0,
    countC: 0,
    countB: 0,
    kind: '',
    time: '00:00:00',
    //弹出的选择按钮
    tip: '',
    buttonDisabled: false,
    modalHidden: true,
    show: false,
  },
  //弹出的选择提示
  modalBindaconfirm: function () {
    this.setData({
      modalHidden: !this.data.modalHidden,
      show: !this.data.show,
      tip: '您点击了【确认】按钮！',
      buttonDisabled: !this.data.buttonDisabled
    })
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  modalBindcancel: function () {
    this.setData({
      modalHidden: !this.data.modalHidden,
      tip: '您点击了【取消】按钮！'
    })
  },
  toSave: function () {
    if (wx.getStorageSync('key')) {
      //这里进行保存操作
    } else {
      this.setData({
        modalHidden: !this.data.modalHidden
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      countA: options.A - 0,
      countC: options.C - 0,
      countB: options.B - 0,
      time:options.time
    })
    /*
    this.data.countA = getApp().globalData.countA;
    this.data.countB = getApp().globalData.countB;
    this.data.countC = getApp().globalData.countC;
    */
    var data = this.data;
  },

  /**
   * Amax:听觉
   * Kmax:动觉
   * Vmax:视觉
   * A=K>V:听觉动觉均衡型……
   */
})