const express = require('express')
const app = express()
const PORT = 3000
const users=[
    {id: 1, name:'John'},
    {id: 2, name:'Johny'},
    {id: 3, name:'Tony'},
    {id: 4, name:'Rocky'},
]
app.get('/users',(req, res)=>{
    res.json(users)
})
app.use(function (req, res,next){
    console.log("middleware before  api call")
    next()
})
app.get('/',(req, res)=>{
    res.json(
        { msg:'API running ' }
        )
})
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
});
