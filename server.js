import express from 'express';
import mongoose from 'mongoose';
import { addWar, deleteWar, editWar, getWar, WarList } from './controllers/warranty.js';
import { Register } from './controllers/auth.js';
const app = express();
app.use(express.json())
app.get(`/warrantys`,WarList)
app.post(`/warrantys`,addWar)
app.put(`/warrantys/:id`,editWar)
app.delete(`/warrantys/:id`,deleteWar)
app.post(`/register`,Register)
app.get(`/warrantys/:id`, getWar)

const connectDB = async ()=>{
    try {
        mongoose.connect
    } catch (error) {
        
    }
}
app.listen(4000, async ()=>{
    await connectDB()
    console.log(`End point http://localhost:4000`);
})