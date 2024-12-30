import { addSong, listSong } from "../controllers/songController.js";
import express from 'express'
import uplaod from "../middleware/multer.js";

const songRouter = express.Router();

songRouter.post('/add', uplaod.fields([{name: 'image', maxCount: 1}, {name: 'audio', maxCount: 1}]), addSong);
songRouter.get('/list', listSong);

export default songRouter;