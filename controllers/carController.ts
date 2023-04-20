import { Request, Response } from "express";
import app from "../app";


const cars = [
    {
      "id": "1",
      "model": "Audi",
      "year": 2010,
      "price": 10000,
      "color": "red"
    },
    {
      "id": "2",
      "model": "Volvo",
      "year": 2012,
      "price": 12000,
      "color": "blue"
    },
    {
      "id": "3",
      "model": "Saab",
      "year": 2001,
      "price": 5000,
      "color": "green"
    },
    {
      "id": "4",
      "model": "BMW",
      "year": 2015,
      "price": 15000,
      "color": "black"
    },
    {
      "id": "5",
      "model": "Mercedes",
      "year": 2017,
      "price": 20000,
      "color": "red"
    }
  ]

export const getAllCars = (req: Request, res: Response) => {
    try{
        res.status(200)
            .json({
                status: "success",
                data: {
                    cars
                }
            })
    }
       catch(err){
        res.status(400)
        .json({
            status: "fail",
          message: err
        })
       } 
}

export const createCar = (req: Request, res: Response) => {
    try{
        const jsonData = req.body;
        console.log()
        res.status(201)
            .json({
                status: "success",
                data: jsonData
            })
    }
    catch(err){
        res.status(400)
        .json({
            status: "fail",
          message: err
        })
    }    
}
export const getCar = (req: Request, res: Response) => {
    try{
       
        
        res.status(200)
            .json({
                status: "success",
                message: "car" + res.json(req.params)
            })
    }
       catch(err){
        res.status(400)
        .json({
            status: "fail",
          message: err
        })
       } 
}
