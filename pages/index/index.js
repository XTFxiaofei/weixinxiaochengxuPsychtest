var postData = require("../../data/post-data.js");
Page({
  data: {
    // text:"这是一个页面"
    postList: postData.postList, 
    index: 0,
    bc_default: '#FBFBFB',
    bc_right: '#98FB98',
    bc_wrong: '#FF99B4',
    bcA: '',
    bcB: '',
    bcC: '',
    bcD: '',
    ny: 'true',
    defen: 0,


    selectA:0,
    selectC:0,
    selectB:0,
    countA:0,
    countC:0,
    countB:0,
    lastpage:0,
    pages:0,
  },

  nextQuestion: function () {
    var that = this;
    if (that.data.index < postData.postList.length - 1) {
      this.setData({
        index: that.data.index + 1,
        bcA: that.data.bc_default,
        bcB: that.data.bc_default,
        bcC: that.data.bc_default,
        bcD: that.data.bc_default,
        ny: 'true'
      });
    }
  },
  lastQuestion: function () {
    var that = this;
    if (that.data.index > 0) {
      this.setData({
        index: that.data.index - 1
      });
    }
  },
  btnOpClick:function(e){
    var that=this;
    var select=e.currentTarget.id;
    //console.log("select是"+select)
    console.log("that.data.index是"+that.data.index)
    this.setData({
      pages:that.data.index+1
    })
    if(that.data.index<postData.postList.length-1)
    {     
      if(select=='A'){
        console.log("选中了A");
        this.setData({ 
           bcA: that.data.bc_right,
           countA:that.data.selectA+1 });
        that.data.selectA=that.data.selectA+1
      }else if(select=='C'){
        console.log("选中了C");
        this.setData({ countC: that.data.selectC + 1 });
        that.data.selectC = that.data.selectC + 1
      }else if(select=='B'){
        console.log("选中了B");
        this.setData({ countB: that.data.selectB + 1 });
        that.data.selectB = that.data.selectB + 1
      }
    that.nextQuestion();
    }else{
      if (select == 'A') {
        console.log("最后一题选中了A");
        this.setData({ countA: that.data.selectA + 1 });
        that.data.selectA = that.data.selectA + 1
      } else if (select == 'C') {
        console.log("最后一题选中了C");
        this.setData({ countC: that.data.selectC + 1 });
        that.data.selectC = that.data.selectC + 1
      } else if (select == 'B') {
        console.log("最后一题选中了B");
        this.setData({ countB: that.data.selectB + 1 });
        that.data.selectB = that.data.selectB + 1
      }
      this.setData({
        lastpage:1,
      })
      getApp().globalData.countA = that.data.selectA;
      getApp().globalData.countB = that.data.selectB;
      getApp().globalData.countC = that.data.selectC;
     // that.gotonext();
    }
  },




  
  gotonext: function () {
    wx.redirectTo({
      url: './../result/result',
    })
  },
  xianshi: function () {
    this.setData({
      ny: ''
    })
  }
})