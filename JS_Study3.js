const express= require('express');
const app = express();
const bodyParser = require('body-parser');
const fs =require('fs');
app.locals.pretty=true;
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'pug');
app.set('views',__dirname+'/views_file');
app.get('/topic/new',function(req,res){
    res.render('new');
});
app.get(['/topic','/topic/:id'],function(req,res){
    fs.readdir('data',function(err,files){
        if(err){
            console.log(err);
            res.status(500).send("error");
        }
        const id = req.params.id;
        if(id){
            //id가 있을때
            fs.readFile('data/'+id,'utf8',function(err,data){
                if(err){
                    console.log(err);
                    res.status(500).send("error");
                }
                res.render('view',{topics:files, title:id, description:data});
            });
        }else{
            //id가 없을때
            res.render('view',{topics:files,title:'welcome',description:'jS world!!'});
        }
    })
});

app.post('/topic',function(req,res){
    const title=req.body.title;
    const description=req.body.description;
    fs.writeFile('data/'+title,description,function(err){
        if(err){
            res.status(500).send("error");
        }
        res.send('success'+req.body.title)
    })
})
app.listen(3000, function(){
    console.log('connected 3000port!' );
});