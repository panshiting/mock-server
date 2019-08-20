module.exports = {
  "total": 1,
  "totalPage": 1,
  "listEntity|5-10": [{                           //2-5组数据
    "entityName|2-5": '@cname',                         //中文名称
    createTime: '@date("yyyy-MM-dd")',            //日期
    // 'age|1-100': 100,                              //100以内随机整数
    fullAddr: '@county(true)',
    addr: '@county(true)',
    telephone: /^1[0-9]{10}$/,
    cuName: '@cname'
  }]
  // data: {
    // name: "@cname",
    // mobile: /^1[385]\d{9}$/,
    // "age|18-50": 1,
    // "orders|5-10": [
    //   {
    //     id: "@id",
    //     from: "@county(true)",
    //     to: "@county(true)"
    //   }
    // ]
  // }
}