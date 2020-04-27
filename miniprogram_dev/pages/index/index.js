const tableHeader = [
    {
      prop: 'datetime',
      width: 150,
      label: '日期',
      color: '#55C355'
    },
    {
      prop: 'sign_in_time',
      width: 152,
      label: '上班时间'
    },
    {
      prop: 'sign_out_time',
      width: 152,
      label: '下班时间'
    },
    {
      prop: 'work_hour',
      width: 110,
      label: '工时'
    },
    {
      prop: 'status',
      width: 110,
      label: '状态'
      
    }
];

const tableHeader2 = [
  {
    prop: 'datetime',
    width: 150,
    label: '日期',
    color: '#55C355'
  },
  {
    prop: 'sign_in_time',
    width: 152,
    label: '上班时间'
  },
  {
    prop: 'sign_out_time',
    width: 152,
    label: '下班时间'
  },
  {
    prop: 'work_hour',
    width: 110,
    label: '工时'
  },
  {
    prop: 'status',
    width: 110,
    label: '状态'

  },
  {
    prop: 'sign_out_time',
    width: 200,
    label: '下班时间'
  },
  {
    prop: 'work_hour',
    width: 200,
    label: '工时'
  },
  {
    prop: 'status',
    width: 200,
    label: '状态'
  },
]

const row =  [{
    "id": 1,
    "status": '正常',
    "datetime": "04-01",
    "sign_in_time": '09:30:00',
    "sign_out_time": '18:30:00',
    "work_hour": 8,
}, {
    "id": 2,
    "status": '迟到',
    "datetime": "04-02",
    "sign_in_time": '10:30:00',
    "sign_out_time": '18:30:00',
    "work_hour": 7,
}, {
    "id": 29,
    "status": '正常',
    "datetime": "04-03",
    "sign_in_time": '09:30:00',
    "sign_out_time": '18:30:00',
    "work_hour": 8,
}, {
    "id": 318,
    "status": '休息日',
    "datetime": "04-04",
    "sign_in_time": '',
    "sign_out_time": '',
    "work_hour": '',
}, {
    "id": 319,
    "status": '正常',
    "datetime": "04-05",
    "sign_in_time": '09:30:00',
    "sign_out_time": '18:30:00',
    "work_hour": 8,
}]

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
      height: '100px',
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
      const { olddatetime } = e.detail

      wx.showToast({
        title: '您点击了这一行：' + olddatetime + '的打卡记录',
        icon: 'none'
      })
    }
  })
