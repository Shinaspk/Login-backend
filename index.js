//import json-server 

const jsonServer=require('json-server')

//create json-server
const emplyeeserver =jsonServer.create()

//set path for json server
const router=jsonServer.router('db.json')

//middleware
const middleware=jsonServer.defaults()

//serveer use middleware and router
emplyeeserver.use(middleware)
emplyeeserver.use(router)

//set the port
const port =3000 || process.env.PORT

emplyeeserver.listen(port,()=>{
    console.log(`employee server running on ${port}`);
    
})