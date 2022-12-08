import express, {Express} from "express";
import cors from 'cors'

export function useSoftware(app: Express){
    app.use(cors());
    app.use(express.json());
}