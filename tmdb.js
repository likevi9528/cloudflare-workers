async function handleRequest(request) {
    // 从请求URL中获取 API查询参数
    const url = new URL(request.url)
    const searchParams = url.searchParams
  
    // 设置代理API请求的URL地址
    const apiUrl = `https://api.themoviedb.org/${url.pathname}?${searchParams.toString()}`
    const imageUrl = `https://media.themoviedb.org/${url.pathname}`
    
    if (url.pathname.startsWith('/3/')) {
       // 设置API请求的headers
       const headers = new Headers(request.headers)
       headers.set('Host', 'api.themoviedb.org')
  
       // 创建API请求
       const response = await fetch(apiUrl, {
       method: request.method,
       headers: headers
       })
       // 返回API响应
       return response

    } else if (url.pathname.startsWith('/t/')) {
      // 设置API请求的headers
       const headers = new Headers(request.headers)
       headers.set('Host', 'media.themoviedb.org')
  
       // 创建API请求
       const response = await fetch(imageUrl, {
       method: request.method,
       headers: headers
       })
       // 返回API响应
       return response

    } else {
        return 404
    }
  }
  
  addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
