import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";

const prisma = new PrismaClient();

export class MahasiswaController {

    static async getAllMahasiswa(req:Request, res:Response) {
        try {
            const allData = await prisma.mahasiswa.findMany({
                include:{
                    keahlian:{},
                    pendidikan:{}
                }
            })
            res.status(200).json(allData)
        } catch (error) {
            console.error("Error fetching all data : ", error)
            res.status(500).send(error)
        }
    }

    static async getMahasiswaById(req:Request, res:Response) {
        try {
            const id = req.params.id
            const findData = await prisma.mahasiswa.findUnique({
                where:{
                    id_mahasiswa:parseInt(id)
                }
            })
            if(findData === null) return res.status(200).json(`data with id ${id} is not found!`)

            res.status(200).json(findData)
        } catch (error) {
            console.error('error get mahasiswa by id : ', error)
            res.status(500).send(error)
        }
    }

    static async createMahasiswa(req:Request, res:Response) {
        try {
            const { 
                nrp,
                nama_depan,
                nama_belakang,
                jenis_kelamin,
                agama,
                umur,
                tinggi_badan,
                gol_darah,
                alamat,
                hobi,
                email,
                no_telpon 
            } = req.body

            const err = validationResult(req)
            if(!err.isEmpty()) return res.status(400).json(err.array())

            const createData = await prisma.mahasiswa.create({
                data:{
                    nrp,
                    nama_depan,
                    nama_belakang,
                    jenis_kelamin,
                    agama,
                    umur,
                    tinggi_badan,
                    gol_darah,
                    alamat,
                    hobi,
                    email,
                    no_telpon, 
                }
            })
            res.status(200).send(createData)
        } catch (error) {
            console.error('error create mahasiswa : ', error)
            res.status(500).send(error)
        }
    }

    static async updateMahasiswa(req:Request, res:Response) {
        try {

            const id = req.params.id
            const findData = await prisma.mahasiswa.findUnique({
                where:{
                    id_mahasiswa:parseInt(id)
                }
            })
            if(findData === null) return res.status(200).json(`data with id ${id} is not found!`)
            
            const {
                nrp,
                nama_depan,
                nama_belakang,
                jenis_kelamin,
                agama,
                umur,
                tinggi_badan,
                gol_darah,
                alamat,
                hobi,
                email,
                no_telpon 
            } = req.body

            const err = validationResult(req)
            if(!err.isEmpty()) return res.status(400).json(err.array())

            const updateData = await prisma.mahasiswa.update({
                where: {
                    id_mahasiswa: parseInt(id)
                },
                data: {
                    nrp,
                    nama_depan,
                    nama_belakang,
                    jenis_kelamin,
                    agama,
                    umur,
                    tinggi_badan,
                    gol_darah,
                    alamat,
                    hobi,
                    email,
                    no_telpon, 
                }
            })
            res.status(200).send(updateData)

        } catch (error) {
            console.error('error update mahasiswa : ', error)
            res.status(500).send(error)
        }
    }

    static async deleteMahasiswa(req:Request, res:Response) {
        try {
            const id = req.params.id
            const findData = await prisma.mahasiswa.findUnique({
                where:{
                    id_mahasiswa:parseInt(id)
                }
            })
            if(findData === null) return res.status(200).json(`data with id ${id} is not found!`)

            const deleteData = await prisma.mahasiswa.delete({
                where:{
                    id_mahasiswa:parseInt(id)
                }
            })  
            res.status(200).json(deleteData)
        } catch (error) {
            console.error('error delete mahasiswa : ', error)
            res.status(500).send(error)
        }
    }
}