import URL from "url"


// URL是一个构造函数，需要使用new关键字来创建一个实例时使用
const url= new URL.URL("http://localhost:5001/s/1F?fid=5&fpath=sharelink.mp4")
console.log(url)

console.log(url.searchParams);
console.log(url.searchParams.get("fid")) // 5
console.log(url.searchParams.get('fpath')) // sharelink.mp4

// 也可以使用
const url2=URL.parse("http://localhost:5001/s/1F?fid=5&fpath=sharelink.mp4")
console.log(url2)


// 2. 转换成标准的url: format
const urlobj={
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'localhost:5001',
  port: '5001',
  hostname: 'localhost',
  hash: null,
  search: '?fid=5&fpath=sharelink.mp4',
  query: 'fid=5&fpath=sharelink.mp4',
  pathname: '/s/1F',
  path: '/s/1F?fid=5&fpath=sharelink.mp4',
  href: 'http://localhost:5001/s/1F?fid=5&fpath=sharelink.mp4'
}
console.log(URL.format(urlobj)) // http://localhost:5001/s/1F?fid=5&fpath=sharelink.mp4