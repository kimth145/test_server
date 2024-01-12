const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

app.get('/login/:id', (req, res)=>{
    const id = req.params.id
    let name = ""

    if(id=="lee"){
        name = "이다영"
    }
    else if(id=="kim"){
        name = "김한비"
    }
    else if(id=="ju"){
        name = "주서영"
    }
    else if(id=="hong"){
        name = "홍혜정"
    }

    const returnValue = {
        msg: name=="" ? "" : name + " 님 환영합니다!!"
    }

    res.send(returnValue)
})

app.get('/get_age/:name/:collage/', (req, res)=>{
    const name = req.params.name
    const collage = req.params.collage
    // console.log(name, collage)
    let age = 0
    if(name == "lee" && collage == "A"){
        age = 20
    }else if(name == "hong" && collage == "B"){
        age = 21
    }
    res.send({bb:age})
})

app.get('/get_collage', (req, res)=>{
    res.send("hanyan uv.")
})

app.listen(process.env.PORT || 3001, ()=>{
    console.log("connected on server port 3001")
})

// console.log("connected on server port 3000")