//对于axios进行二次封装
import axios from "axios";
let requests = axios.create({
  //基础路径
  // baseURL: "/bzxx",
  // baseURL: "http://106.55.253.225:8080/bzxx",
  baseURL: "http://localhost:8080/bzxx",
  //请求不能超过5S
  timeout: 5000,
});
export default requests;