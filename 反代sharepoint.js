export default {
	async fetch(request, env, ctx) {
		let url = new URL(request.url);
		if(url.pathname.startsWith('/')){
			url.hostname="xxx-my.sharepoint.com"; // 修改成自己的域名
			let new_request = new Request(url, request)
			return await fetch(new_request)
		}
		return await env.ASSETS.fetch(request);
	},
};
