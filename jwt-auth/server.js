import express from "express";
import cookieParser from "cookie-parser";
// import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


const app = express();

app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.cookie("name", "Ayodhya").status(200).json({
//     message: "Cookie setted!",
//   });
// });

// app.get("/read", (req, res) => {
//     //password incrypt
//   bcrypt.hash("password", 10, function (err, hash) {
//     console.log(hash);
//   });
// });

// app.get("/pass", (req, res) => {
//   //password decrypt
//   bcrypt.compare(
//     "password",
//     "$2b$10$rOjP1gUwGwGiIddPwEXRMe0LHzIwos2pFGmxQx4Jlkz163.cIa9xm",
//     function (err, result) {
//       console.log(result);
//     },
//   );
// });

app.get("/jwt", (req,res)=>{
    const token = jwt.sign({email:"a@a.com"},"hello")

    res.cookie("token", token).status(200).json({
        message : "jwt token created",
    })
})

app.get("/test",(req,res)=>{
    let token_data = jwt.verify(req.cookies.token, "hello")
    res.json({
        message :"testing api",
        token_data
    })
})


app.listen(3000, () => {
  console.log("server running on 3000 port");
});
