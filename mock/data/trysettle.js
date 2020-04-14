module.exports = {
  "page": {
    [`data|${10}`]: [
      {
        "avgNodePrice": "@natural(1, 100000000.0000)",
        "dateType|1": [1,2,3,4,5],
        "maxBidPower": "@natural(1, 100000000.0000)",
        "maxNodePrice": "@natural(1, 100000000.0000)",
        "nodePrices|24": ["@natural(1, 100)"],
        "outputs|24": ["@natural(1, 100)"],
        "quans|24": ["@natural(1, 100)"],
        "remark|0-300": "@cname",
        "runningDate": "@datetime",
        "totalBigElec": "@natural(1, 100000000.0000)",
        "unitDeclares": [
          {
            "declareType|1": [0,1],
            "unitId": "@natural(1, 500)",
            "unitName": "@cname"
          }
        ],
        "x|24": ["@natural(1, 100)"]
      }
    ],
    "total": 10,
    "totalPage": 1
  }
}