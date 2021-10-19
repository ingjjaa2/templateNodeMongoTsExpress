import {Router,Request,Response} from 'express';


const router = Router();

router.get('/hello',(req:Request,res:Response)=>{
    res.json({ok:true,msg:"Hellos World 2"});
})


export default router;