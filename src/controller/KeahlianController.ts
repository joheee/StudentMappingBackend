import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { validationResult } from "express-validator";

const prisma = new PrismaClient()

export class KeahlianController {

    static async getAllKeahlian(req:Request, res:Response){
        try {
            const allData = await prisma.keahlian.findMany({
                include:{
                    Mahasiswa:{}
                }
            })
            return res.status(200).json(allData)
        } catch (error) {
            console.error('error in get all keahlian : ' + error)
            return res.status(500).send(error)
        }
    }

    static async getKeahlianById(req:Request, res:Response) {
        try {
            const id = req.params.id
            const findData = await prisma.keahlian.findUnique({
                where:{
                    id_keahlian:parseInt(id)
                },
                include:{
                    Mahasiswa:{}
                }
            })
            if(findData === null) return res.status(200).json(`data with id ${id} is not found!`)

            return res.status(200).json(findData)
        } catch (error) {
            console.error('error in get keahlian by id : ', error)
            return res.status(500).send(error)
        }
    }

    static async createKeahlian(req:Request, res:Response) {
        try {
            const {
                tingkat_keahlian,
                id_mahasiswa
            } = req.body

            const err = validationResult(req)
            if(!err.isEmpty()) return res.status(400).json(err.array())

            const createData = await prisma.keahlian.create({
                data:{
                    tingkat_keahlian:tingkat_keahlian,
                    mahasiswaId_mahasiswa:id_mahasiswa
                },
                include:{
                    Mahasiswa:{}
                }
            })
            return res.status(200).send(createData)
        } catch (error) {
            console.error('error in create keahlian : ', error)
            return res.status(500).send(error)
        }
    }

    static async updateKeahlian(req:Request, res:Response) {
        try {

            const id = req.params.id
            const findData = await prisma.keahlian.findUnique({
                where:{
                    id_keahlian:parseInt(id)
                },
                include:{
                    Mahasiswa:{}
                }
            })
            if(findData === null) return res.status(200).json(`data with id ${id} is not found!`)

            const {
                tingkat_keahlian,
                id_mahasiswa
            } = req.body

            const err = validationResult(req)
            if(!err.isEmpty()) return res.status(400).json(err.array())

            const updateData = await prisma.keahlian.update({
                where:{
                    id_keahlian:parseInt(id)
                },
                data:{
                    tingkat_keahlian:tingkat_keahlian,
                    mahasiswaId_mahasiswa:id_mahasiswa
                },
                include:{
                    Mahasiswa:{}
                }
            })
            return res.status(200).json(updateData)
        } catch (error) {
            console.error('error in update keahlian : ', error)
            return res.status(500).send(error)
        }
    }

    static async deleteKeahlian(req:Request, res:Response) {
        try {
            const id = req.params.id
            const findData = await prisma.keahlian.findUnique({
                where:{
                    id_keahlian:parseInt(id)
                },
                include:{
                    Mahasiswa:{}
                }
            })
            if(findData === null) return res.status(200).json(`data with id ${id} is not found!`)

            const deleteData = await prisma.keahlian.delete({
                where:{
                    id_keahlian:parseInt(id)
                }
            })
            return res.status(200).json(deleteData)
        } catch (error) {
            console.error('error in delete keahlian : ', error)
            return res.status(500).send(error)
        }
    }
}