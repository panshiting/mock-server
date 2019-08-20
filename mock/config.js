const api = {
  electric: "/mock/app/gencocust/cust/list",
  trysettleBill: "/mock/app/gencotrailsett/settcurvedivision/view",
  dataPreparation: "/mock/app/gencotrailsett/settcurvedivision/preparation",
  createBill: "/mock/app/gencotrailsett/settcurvedivision",
  dataList: "/mock/app/gencotrailsett/settcurvedivision/datelist",
  spotDetail: "/mock/app/gencotrailsett/settcurvedivision/spot",
  spotTimeDetail: "/mock/app/gencotrailsett/settcurvedivision/spotdetail",
  spreadsDetail: "/mock/app/gencotrailsett/settcurvedivision/spread"
}
const getElectricList = require("./data/getElectricList")
const trysettle = require("./data/trysettle")

const config = [
  {
    method: 'post',
    url: api.electric,
    data: getElectricList
  },
  {
    method: 'post',
    url: api.trysettleBill,
    data: trysettle.getTrysettleBill
  },
  {
    method: 'post',
    url: api.dataPreparation,
    data: trysettle.getDataPreparation
  },
  {
    method: 'post',
    url: api.createBill,
    data: trysettle.getTrysettleBill
  },
  {
    method: 'post',
    url: api.dataList,
    data: trysettle.getDataList
  },
  {
    method: 'post',
    url: api.spotTimeDetail,
    data: trysettle.getSpotTimeDetail
  },
  {
    method: 'post',
    url: api.spotDetail,
    data: trysettle.getSpotDetail
  },
  {
    method: 'post',
    url: api.spreadsDetail,
    data: trysettle.getSpreadsDetail
  }
]
module.exports = config