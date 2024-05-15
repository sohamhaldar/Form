import express from 'express';
import cors from 'cors';


const app=express();
app.use(cors({
    origin:'*',
    credentials:'true'
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

import tableRouter from './routes/table.routes.js';

app.use('/',tableRouter);

export {app};

