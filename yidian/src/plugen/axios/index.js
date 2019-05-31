import axios from "axios"
const server =axios.create({
	baseURL:"http://localhost:3000", // 公共API地址
	timeout:"5000"
})
server.interceptors.request.use((config)=>{
	console.log(config.data);
	return config
})
server.interceptors.response.use((response)=>{
	return response
})
export default server;