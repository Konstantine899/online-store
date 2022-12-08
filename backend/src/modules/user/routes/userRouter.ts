import {Router} from "express";
const userRouter = Router()

userRouter.post('/registration');
userRouter.post('/login');
userRouter.get('/auth', (request, response)=>{
response.json({message:"Страница авторизации пользователя"})
});

export {userRouter}