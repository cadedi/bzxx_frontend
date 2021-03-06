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

export const reqUserExist = (params) => requests({
  url:`exist-user`,
  method:'GET',
  params
})

export const reqRegisterUser = (data) => requests({
  url:`user`,
  method:'POST',
  data
})

export const reqLogin = (data) => requests({
  url:`login`,
  method:'POST',
  data
})

export const reqNationalDeatil = (id) => requests({
  url:`national-standard/${id}`,
  method:'GET'
})

