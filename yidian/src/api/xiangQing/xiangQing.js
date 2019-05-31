import request from "@/plugen/axios"
// export default function postUserInfo(data){
// 	request({
// 		url:"/",
// 		method:"post",
// 		data:"data"
// 	})
// }


//假如是get请求
	export default function getUserInfo(data){
		return request({
			url:"/index",
			method:"get",
			data:data  //这改成 params
		})
	}