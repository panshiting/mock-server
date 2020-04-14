// const getElectricList = require("./data/getElectricList")
const trysettle = require("./data/trysettle")

const config = [
  {
    method: 'post',
    url: "/mock/app/daily/dailytradestrategy/record/page",
    data: trysettle.page
  }
]
module.exports = config