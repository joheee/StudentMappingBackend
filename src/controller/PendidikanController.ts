import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { validationResult } from "express-validator";

const prisma = new PrismaClient()

export class PendidikanController {

    static async getAllPendidikan(req:Request, res:Response) {
        try {
            const allData = await prisma.pendidikan.findMany({
                include:{
                    Mahasiswa:{}
                }
            })
            return res.status(200).json(allData)
        } catch (error) {
            console.error('error in get all pendidikan : ' + error)
            return res.status(500).send(error)
        }
    }

    static async getPendidikanById(req:Request, res:Response) {
        try {
            const id = req.params.id
            const findData = await prisma.pendidikan.findUnique({
                where:{
                    id_pendidikan:parseInt(id)
                },
                include:{
                    Mahasiswa:{}
                }
            })
            if(findData === null) return res.status(200).json(`data with id ${id} is not found!`)
            return res.status(200).json(findData)
        } catch (error) {
            console.error('error in get pendidikan by id : ' + error)
            return res.status(500).send(error)
        }
    }
    
    static async createPendidikan(req:Request, res:Response) {
        try {
            const {
                nama_instansi,
                jurusan,
                tahun_masuk,
                tahun_lulus,
                nomor_ijazah,
                id_mahasiswa
            } = req.body

            const err = validationResult(req)
            if(!err.isEmpty()) return res.status(400).json(err.array())

            const createData = await prisma.pendidikan.create({
                data:{
                    nama_instansi,
                    jurusan,
                    tahun_masuk,
                    tahun_lulus,
                    nomor_ijazah,
                    mahasiswaId_mahasiswa:parseInt(id_mahasiswa)
                },
                include:{
                    Mahasiswa:{}
                }
            })
            return res.status(200).json(createData)
        } catch (error) {
            console.error('error in create pendidikan : ' + error)
            return res.status(500).send(error)
        }
    }

    static async updatePendidikan(req:Request, res:Response) {
        try {
            const {
                nama_instansi,
                jurusan,
                tahun_masuk,
                tahun_lulus,
                nomor_ijazah,
                id_mahasiswa
            } = req.body

            const err = validationResult(req)
            if(!err.isEmpty()) return res.status(400).json(err.array())

            const id = req.params.id
            const findData = await prisma.pendidikan.findUnique({
                where:{
                    id_pendidikan:parseInt(id)
                },
                include:{
                    Mahasiswa:{}
                }
            })
            if(findData === null) return res.status(200).json(`data with id ${id} is not found!`)

            const updateData = await prisma.pendidikan.update({
                where:{
                    id_pendidikan:parseInt(id)
                },
                data:{
                    nama_instansi,
                    jurusan,
                    tahun_masuk,
                    tahun_lulus,
                    nomor_ijazah,
                    mahasiswaId_mahasiswa:parseInt(id_mahasiswa)
                },
                include:{
                    Mahasiswa:{}
                }
            })
            return res.status(200).json(updateData)
        } catch (error) {
            console.error('error in update pendidikan : ' + error)
            return res.status(500).send(error)
        }
    }
    
    static async deletePendidikan(req:Request, res:Response) {
        try {
            const id = req.params.id
            const findData = await prisma.pendidikan.findUnique({
                where:{
                    id_pendidikan:parseInt(id)
                },
                include:{
                    Mahasiswa:{}
                }
            })
            if(findData === null) return res.status(200).json(`data with id ${id} is not found!`)

            const deleteData = await prisma.pendidikan.delete({
                where:{
                    id_pendidikan:parseInt(id)
                }
            })
            return res.status(200).json(deleteData)
        } catch (error) {
            console.error('error in delete pendidikan : ' + error)
            return res.status(500).send(error)
        }
    }
}