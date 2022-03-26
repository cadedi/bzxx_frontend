import requests from "./ajax";
//获取企业标准排名
export const reqStandardRank = (params) => requests({
  url:`/enterprise-rank`,
  method:'GET',
  params
})
