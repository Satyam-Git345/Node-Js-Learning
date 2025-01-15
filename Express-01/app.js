import express from "express";

const app = express();
const port = 3000;

app.disable("x-powered-by");

app.get("/", 
  //request handler middleware
  (req, res, next) => {
    console.log("Hello from middleware 1");
    res.write("Hello from middleware 1");
    next();
  },
  (req, res) => {
    //request handler middleware
    console.log("Hello from middleware 2");
    res.end("Hello from middleware 2");
  },
);

//midleware that runs every requests
app.use((req,res,next)=>{
   res.write("Custom middleware")
   console.log(`Method: ${req.method} ${req.url}`);
   console.log(req.headers)
   next();
})

app.post("/home",(req,res)=>{
    res.end("Post route home");
})

app.listen(port, () => {
  console.log(`server listen on ${port}`);
});
