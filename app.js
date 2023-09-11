// const http=require('http')
// const server=http.createServer((req,res)=>{
    
//     if(req.url==='/') res.write('Welcome to our home page')
//     else if(req.url==='/about') res.write('Let me tell you something about me')
//     else res.write('<h1>Oops<h1><h2>There is no such page that you are looking for</h2><a href="/">back home</a>')
//     res.end()
// })
// server.listen(5000)

const _=require('lodash')
const items=[1,[2,[3,4]]]
const newItems=_.flattenDeep(items)
console.log(newItems)