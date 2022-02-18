// import {
//     Number
// } from "core-js";
// import {
//   JSEncrypt
// } from 'jsencrypt'

// 获取地址栏参数 GetQueryString ()
export function GetQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}

export function getUrlKey(name) {
  return (
    decodeURIComponent(
      (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(
        location.href
      ) || [, ''])[1].replace(/\+/g, '%20')
    ) || null
  )
}

/**
 * 随机数
 * @quantity 多少位
 * randomnum(16)   16位随机数
 */
export function randomnum(quantity) {
  var num = ''
  for (var i = 0; i < quantity; i++) {
    num += Math.floor(Math.random() * 10)
  }
  return num
}

// 时间转换 YYYY-MM-DD-hh-mm-ss
// 年月日时分秒
export const getNowFormatDate = (date) => {
  let year = date.getFullYear() //年
  let month = date.getMonth() + 1 // 月
  let strDate = date.getDate() // 日
  let hours = date.getHours() //时
  let minutes = date.getMinutes() //分
  let seconds = date.getSeconds() //秒
  let getMilliseconds = date.getMilliseconds() //毫秒
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }
  if (hours >= 0 && hours <= 9) {
    hours = '0' + hours
  }
  if (minutes >= 0 && minutes <= 9) {
    minutes = '0' + minutes
  }
  if (seconds >= 0 && seconds <= 9) {
    seconds = '0' + seconds
  }
  let currentdate =
    year + month + strDate + hours + minutes + seconds + getMilliseconds
  return currentdate
}

var openWindow
export function openWin(url, name, iWidth, iHeight) {
  var url // 转向网页的地址;
  var name // 网页名称，可为空;
  var iWidth // 弹出窗口的宽度;
  var iHeight // 弹出窗口的高度;
  // window.screen.height获得屏幕的高，window.screen.width获得屏幕的宽
  var iTop = (window.screen.height - 30 - iHeight) / 2 // 获得窗口的垂直位置;
  var iLeft = (window.screen.width - 10 - iWidth) / 2 // 获得窗口的水平位置;
  openWindow = window.open(
    url,
    name,
    'height=' +
      iHeight +
      ',innerHeight=' +
      iHeight +
      ',width=' +
      iWidth +
      ',innerWidth=' +
      iWidth +
      ',top=' +
      iTop +
      ',left=' +
      iLeft +
      ',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no'
  )
}

//执行关闭方法
export function Close() {
  openWindow.close()
}

/**
 * 邮箱
 * @param {*} s
 */
export function isEmail(s) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
    s
  )
}

/**
 * 手机号码
 * @param {*} s
 */
export function isMobile(s) {
  return /^1[0-9]{10}$/.test(s)
}

/**
 * 电话号码
 * @param {*} s
 */
export function isPhone(s) {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

/**
 * URL地址
 * @param {*} s
 */
export function isURL(s) {
  return /^http[s]?:\/\/.*/.test(s)
}

/**
 * 格式化数字,不自动补零
 * @param s: 传入的float数字， n: 希望返回小数点几位，不传取2位
 */
export function fixed(s, n) {
  n = n > 0 && n <= 20 ? n : 2
  let pos //小数点位置
  let float //小数部分
  if (!isNaN(s)) {
    pos = s.toString().indexOf('.')
    if (!(s.toString().indexOf('.') == -1)) {
      float = s.toString().slice(pos + 1)
      if (float.length > n) {
        s = parseFloat(s).toFixed(n)
        return s
      } else {
        return s
      }
    } else {
      return s
    }
  }
}
/**
 * 格式化日期
 * @param s 当前日期的前一天，并转成字符串
 */
export function getLastDay() {
  let time = new Date().getTime() - 24 * 60 * 60 * 1000
  let yesterday = new Date(time)
  let month = yesterday.getMonth()
  let day = yesterday.getDate()
  yesterday =
    yesterday.getFullYear() +
    (yesterday.getMonth() >= 9
      ? (yesterday.getMonth() + 1).toString()
      : '0' + (yesterday.getMonth() + 1)) +
    (yesterday.getDate() > 9 ? yesterday.getDate() : '0' + yesterday.getDate())
  return yesterday
}

/**
 * 格式化日期
 * @param s 当前日期的左右的日期，并转成字符串正数是之后日期，负数是之前的日期 带-
 */
export function GetDateStr(AddDayCount) {
  var dd = new Date()
  dd.setDate(dd.getDate() + AddDayCount) //获取AddDayCount天后的日期
  var y = dd.getFullYear()
  var m = dd.getMonth() + 1 //获取当前月份的日期
  var d = dd.getDate()
  return y + '-' + m + '-' + d
}

/**
 * 2N 次方
 * @param s 当前月的左右的月份，并转成字符串正数是之后日期，负数是之前的日期 带-
 */

export function abab(val, str) {
  let arr = [
    '拥挤',
    '牙列间隙',
    '前突',
    '开𬌗',
    '前牙反𬌗',
    '后牙反𬌗',
    '深覆𬌗',
    '深覆盖',
    '后牙锁𬌗',
  ]
  let result = []
  for (let i = 9; i >= 1; i--) {
    let n = Math.pow(2, i)

    if (val >= n) {
      result.push(i)
      val -= n
    }
  }
  if (str) {
    let str = ''
    result.forEach((item) => {
      str += arr[item - 1] + ','
    })
    return str.slice(0, -1)
  } else {
    return result
  }
}

/**
 * 格式化日期
 * @param s 当前月的左右的月份，并转成字符串正数是之后日期，负数是之前的日期 带-
 */
export function GetMonthStr() {
  var dd = new Date()
  var y = dd.getFullYear()
  var m = dd.getMonth() //获取当前月份的日期
  return y + '-' + m
}
/**
 * 格式化日期
 * @param s 当前月上一个月份，并转成字符串正数是之后日期，负数是之前的日期 不带-
 */
export function GetMonthStrWithout() {
  var dd = new Date()
  var y = dd.getFullYear()
  var m = dd.getMonth() + 1 //获取当前月份的日期
  m = m < 10 ? '0' + m.toString() : m.toString()
  return y + m
}
/**
 * 格式化日期
 * @param s 当前月上几个月份，并转成字符串正数是之后日期，负数是之前的日期 不带-
 */
export function GetFewMonthStrWithout(n) {
  var dd = new Date()
  var y = dd.getFullYear()
  if (n > 12) {
    y = parseInt(y) + 1
    n = n - 12
  }
  if (n < -12) {
    y = parseInt(y) - 1
    n = n + 12
  }
  var m = dd.getMonth()
  if (n > 0) {
    if (m + n > 12) {
      m = m + 1 + n - 12
      y = y + 1
    } else {
      m = m + n
    }
  } else {
    if (Math.abs(m + 1) < Math.abs(n)) {
      m = 12 - (m + 1 + n)
    } else {
      m = m + 1 + n
    }
  }
  m = m < 10 ? '0' + m.toString() : m.toString()
  return y + m
}
/**
 * 格式化日期
 * @param s 时间对象 转年月日 字符串 2019-01-01
 */
export function dateToStr(data) {
  let y = data.getFullYear()
  let m = data.getMonth() + 1
  m = m < 10 ? '0' + m : m
  let d = data.getDate()
  d = d < 10 ? '0' + d : d
  let str = y.toString() + '-' + m + '-' + d
  return str
}
/**
 * 格式化日期
 * @param s 时间对象 转年月 字符串 01/01/2019
 */
export function dateToStr_(data) {
  let y = data.getFullYear()
  let m = data.getMonth() + 1
  m = m < 10 ? '0' + m : m
  let d = data.getDate()
  d = d < 10 ? '0' + d : d
  let str = y.toString() + '/' + m
  return str
}
/**
 * 格式化日期
 * @param  时间对象 转年月日 字符串 =>201904
 */
export function dateMonthToStr(data) {
  let y = data.getFullYear()
  let m = data.getMonth() + 1
  m = m < 10 ? '0' + m : m
  let str = y.toString() + m
  return str
}
/**
 * 格式化日期
 * @param s 201804 => 4月
 */
export function stringToMonth(str) {
  let month = parseInt(str.slice(-2))
  return month + '月'
}
/**
 * 格式化日期
 * @param s 获取上个月的时间对象
 */
export function getLastMonht() {
  let date = new Date()
  let y = date.getFullYear()
  let m = date.getMonth() - 1
  date.setMonth(m)
  return date.setMonth(m)
}
/**
 * 格式化日期
 * @param s 获取昨天的时间对象
 */
export function getLastDayObject() {
  let date = new Date()
  let m = date.setDate(date.getDate() - 1)
  return date
}

export function time(time = +new Date()) {
  var date = new Date(time + 8 * 3600 * 1000) // 增加8小时
  return date
    .toJSON()
    .substr(0, 19)
    .replace('T', ' ')
}

/**
 * 格式化请求数据
 * 填补数据的空白项
 * list: [{
   value: 'mmmm',
   date: '201807'
 }]
 ====>>>>
 { date: 201906}
 { date: 201905}
 { date: 201904}
 { date: 201903}
 { date: 201902}
 { date: 201901}
 { date: 201812}
 { date: 201811}
 {date: 201810 }
 {date: 201809 }
 {date: 201808 }
 {date: "201807",value: "mmmm"}
 
 * date:时间对象
 * arr  需要填补的数组
 * keyWord 需要补全的对象的key值
 */
export function handleData(date, list) {
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  let arr = []
  m = m < 10 ? '0' + m : m
  for (let i = 0; i < 24; i++) {
    if (m - i > 0) {
      arr.push({
        date: y.toString() + m - i,
      })
    } else {
      arr.push({
        date: (y - 1).toString() + m - i + 12,
      })
    }
  }
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (list[i].date == arr[j].date) {
        arr[j].date = list[i].date
        arr[j].value = list[i].value
      }
    }
  }
  return arr
}
// 手机号码加密处理
export function encryption(tel) {
  var reg = /(\d{3})\d{4}(\d{4})/
  return tel.replace(reg, '$1****$2')
}
// 加密处理// JSEncrypt
export function jsEncrypt(data) {
  var PUBLIC_KEY =
    'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBANNZMYQCOH5AJttvNgzOx77ALG4Z1Juqw62Pa529pY88i6tSi8UnPY+pIY2EAUTGeqZv1UicXGeVkYqAdRh7zisCAwEAAQ=='
  var encrypt = new JSEncrypt()
  encrypt.setPublicKey(
    '-----BEGIN PUBLIC KEY-----' + PUBLIC_KEY + '-----END PUBLIC KEY-----'
  )
  var encrypted = encrypt.encrypt(data)
  return encrypted
}
// 判断是否是IE
export function IEVersion() {
  var userAgent = navigator.userAgent //取得浏览器的userAgent字符串
  var isIE =
    userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 //判断是否IE<11浏览器
  var isEdge = userAgent.indexOf('Edge') > -1 && !isIE //判断是否IE的Edge浏览器
  var isIE11 =
    userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1
  if (isIE) {
    var reIE = new RegExp('MSIE (\\d+\\.\\d+);')
    reIE.test(userAgent)
    var fIEVersion = parseFloat(RegExp['$1'])
    if (fIEVersion == 7) {
      return 7
    } else if (fIEVersion == 8) {
      return 8
    } else if (fIEVersion == 9) {
      return 9
    } else if (fIEVersion == 10) {
      return 10
    } else {
      return 6 //IE版本<=7
    }
  } else if (isEdge) {
    return 'edge' //edge
  } else if (isIE11) {
    return 11 //IE11
  } else {
    return '不是IE' //不是ie浏览器
  }
}
// 正则只能输入字母 数字 或者字母数字组合不能非法字符
export function regular(data) {
  let res = /^[0-9a-zA-Z]*$/g
  return res.test(data)
}

// 正则只能字母和数字组合必须有子母和数字组合
export function regular2(data) {
  let res = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,20}$/
  return res.test(data)
}

// 身份证校验
export function isCardNo(card) {
  let res = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  return res.test(card)
}
