import { createCar, getAllCars, getCar } from "../controllers/carController";
import express  from "express";

const router = express.Router()

router.route('/').get(getAllCars).post(createCar)
router.route('/:id').get(getCar)

export default router