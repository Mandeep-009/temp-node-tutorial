const {readFile,writeFile}=require('fs')
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const f1=result
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            returnconsole.log(f2)
        }
        const f2=result
        writeFile('./content/concatenated-file.txt',
            `the concatenated file is: ${f1}, ${f2}`,
            (err)=>{
                if(err){
                    console.log(err)
                    return
                }
        })
    })
})
