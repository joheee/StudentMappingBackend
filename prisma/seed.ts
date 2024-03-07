import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
    const mahasiswa1 = await prisma.mahasiswa.create({
        data: {
            nrp: "12345678",
            nama_depan: "John",
            nama_belakang: "Doe",
            jenis_kelamin: "LAKI_LAKI",
            agama: "ISLAM",
            umur: 20,
            tinggi_badan: "170",
            gol_darah: "A",
            alamat: "Jakarta",
            hobi: "Reading",
            email: "john@example.com",
            no_telpon: "123456789",
            keahlian: {
                create: {
                    tingkat_keahlian: "ONE"
                }
            },
            pendidikan: {
                create: {
                    nama_instansi: "Universitas ABC",
                    jurusan: "Computer Science",
                    tahun_masuk: 2018,
                    tahun_lulus: 2022,
                    nomor_ijazah: "123ABC"
                }
            }
        }
    });

    const mahasiswa2 = await prisma.mahasiswa.create({
        data: {
            nrp: "98765432",
            nama_depan: "Jane",
            nama_belakang: "Doe",
            jenis_kelamin: "PEREMPUAN",
            agama: "KRISTEN",
            umur: 21,
            tinggi_badan: "165",
            gol_darah: "B",
            alamat: "Bandung",
            hobi: "Singing",
            email: "jane@example.com",
            no_telpon: "987654321",
            keahlian: {
                create: {
                    tingkat_keahlian: "TWO"
                }
            },
            pendidikan: {
                create: {
                    nama_instansi: "Universitas XYZ",
                    jurusan: "Engineering",
                    tahun_masuk: 2017,
                    tahun_lulus: 2021,
                    nomor_ijazah: "456XYZ"
                }
            }
        }
    });

    console.log({
        mahasiswa1,
        mahasiswa2
    });
}

seed()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
