async function handleRequest(request) {
    // 从请求URL中获取 API查询参数
    const url = new URL(request.url)
    const searchParams = url.searchParams
    const sharepoint_domain = "xxx-my.sharepoint.com"
  
    // 设置代理API请求的URL地址
    const apiUrl = `https://${sharepoint_domain}/${url.pathname}?${searchParams.toString()}`
    
    if (url.pathname.startsWith('/personal/')) {
       // 设置API请求的headers
       const headers = new Headers(request.headers)
       headers.set('Host', sharepoint_domain)
  
       // 创建API请求
       const response = await fetch(apiUrl, {
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
