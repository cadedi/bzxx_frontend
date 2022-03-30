import requests from "./ajax";
//获取企业标准排名
export const reqStandardRank = (params) => requests({
  url:`/enterprise-rank`,
  method:'GET',
  params
})
export const reqIcsCategory = () => requests({
  url:`/ics-category`,
  method:'GET'
})
export const reqNationalStandard = (params) => requests({
  url:`/national-standard`,
  method:'GET',
  params
})
export const reqIndustryArea = () => requests({
  url:`/industry-area`,
  method:'GET'
})
export const reqIndustryStandard = (params) => requests({
  url:`/industry-standard`,
  method:'GET',
  params
})
export const reqGroupStandard = (params) => requests({
  url:`/group-standard`,
  method:'GET',
  params
})

export const reqEnterpriseStandard = (params) => requests({
  url:`enterprise-standard`,
  method:'GET',
  params
})
