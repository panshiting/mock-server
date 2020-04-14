
// //生成限定第几页数据
// const generateDataPage=(limited=10 , offset=0)=>{
//   return Mock.mock({
//     code: 200,      
//     data:{
//       currentPage: (offset / limited) + 1 , //计算第几页公式
//       isLastPage:false,//是否最后一页，否
//       total:1000, //这里写多少可以，实际开发中以后端为主
//     //特别注意这里 [`list|${limited}`]模板字符串，变量key用括号包起来
//         [`list|${limited}`]: [
//           {
//             "id": "@id",
//             "img": "@img(262x262,@color)",
//             "title": "@ctitle(8,12)",
//             "price|1-1000": 20,
//             "status": "@ctitle(2)"
//           }
//         ]   
//     }
//   }) 
//  }
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
}