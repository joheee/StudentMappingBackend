-- CreateTable
CREATE TABLE `Mahasiswa` (
    `id_mahasiswa` INTEGER NOT NULL AUTO_INCREMENT,
    `nrp` VARCHAR(191) NOT NULL,
    `nama_depan` VARCHAR(191) NOT NULL,
    `nama_belakang` VARCHAR(191) NOT NULL,
    `jenis_kelamin` ENUM('laki-laki', 'perempuan') NOT NULL,
    `agama` ENUM('Islam', 'Kristen', 'Hindu') NOT NULL,
    `umur` INTEGER NOT NULL,
    `tinggi_badan` VARCHAR(191) NOT NULL,
    `gol_darah` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `hobi` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `no_telpon` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_mahasiswa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Keahlian` (
    `id_keahlian` INTEGER NOT NULL AUTO_INCREMENT,
    `tingkat_keahlian` ENUM('1', '2', '3', '4', '5', '6') NOT NULL,
    `mahasiswaId_mahasiswa` INTEGER NULL,

    PRIMARY KEY (`id_keahlian`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pendidikan` (
    `id_pendidikan` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_instansi` VARCHAR(191) NOT NULL,
    `jurusan` VARCHAR(191) NOT NULL,
    `tahun_masuk` INTEGER NOT NULL,
    `tahun_lulus` INTEGER NOT NULL,
    `nomor_ijazah` VARCHAR(191) NOT NULL,
    `mahasiswaId_mahasiswa` INTEGER NULL,

    PRIMARY KEY (`id_pendidikan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Keahlian` ADD CONSTRAINT `Keahlian_mahasiswaId_mahasiswa_fkey` FOREIGN KEY (`mahasiswaId_mahasiswa`) REFERENCES `Mahasiswa`(`id_mahasiswa`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pendidikan` ADD CONSTRAINT `Pendidikan_mahasiswaId_mahasiswa_fkey` FOREIGN KEY (`mahasiswaId_mahasiswa`) REFERENCES `Mahasiswa`(`id_mahasiswa`) ON DELETE SET NULL ON UPDATE CASCADE;
