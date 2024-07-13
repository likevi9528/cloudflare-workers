async function handleRequest(request) {
  // 从请求URL中获取 API查询参数
  let url = new URL(request.url)
  
  if (url.pathname.startsWith('/3/')) {
     // 设置API请求的headers
     url.hostname = "api.tmdb.org"
     const headers = new Headers(request.headers)
     headers.set('Host', 'api.tmdb.org')

     // 创建API请求
     const response = await fetch(url, {
     method: request.method,
     headers: headers
     })
     // 返回API响应
     return response;

  } else if (url.pathname.startsWith('/t/')) {
    // 设置API请求的headers
     url.hostname = "image.tmdb.org"
     const headers = new Headers(request.headers)
     headers.set('Host', 'image.tmdb.org')

     // 创建API请求
     const response = await fetch(url, {
     method: request.method,
     headers: headers
     })
     // 返回API响应
     return response;

  } else {
      return 404;
  }
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
