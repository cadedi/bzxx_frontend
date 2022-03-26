//对于axios进行二次封装
import axios from "axios";
let requests = axios.create({
  //基础路径
  baseURL: "/bzxx",
  //请求不能超过5S
  timeout: 5000,
});
export default requests;