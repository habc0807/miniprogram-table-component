import { tableHeader, tableHeader2, row }  from './config.js'

Page({
    /**
     * 页面的初始数据
     */
    data: {
      month: '',
      user_name: '', 
      tableHeader,
      tableHeader2,
      stripe: true,
      border: true,
      outBorder: true,
      height: '150px',
      row,
      row2: [],
      msg: '没有打卡记录哦～'
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
     
    },
    /** 
     * 点击表格一行
     */
    onRowClick: function(e) {
      console.log('e: ', e)

      wx.showToast({
        title: '您点击了这一行：',
        icon: 'none'
      })
    }
  })
