BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "pendaftaran" (
	"IDpendaftaran"	INTEGER NOT NULL UNIQUE,
	"IDlembaga"	INTEGER,
	"tiket"	INTEGER NOT NULL UNIQUE,
	"nama"	varchar(50) NOT NULL,
	"nik"	INTEGER NOT NULL UNIQUE,
	"tempatlahir"	INTEGER NOT NULL,
	"tanggallahir"	date NOT NULL,
	"alamat"	varchar(255) NOT NULL,
	"foto"	varchar(50) NOT NULL,
	PRIMARY KEY("IDpendaftaran" AUTOINCREMENT),
	FOREIGN KEY("IDlembaga") REFERENCES "lembaga"("IDlembaga")
);
CREATE TABLE IF NOT EXISTS "lembaga" (
	"IDlembaga"	INTEGER NOT NULL UNIQUE,
	"nama"	TEXT NOT NULL,
	"kode"	INTEGER NOT NULL UNIQUE,
	"jenis"	TEXT NOT NULL,
	"tanggal"	DATE NOT NULL,
	"syarat"	TEXT NOT NULL,
	"alamat"	INTEGER NOT NULL,
	"dokumen"	TEXT NOT NULL,
	"kuota"	INTEGER NOT NULL,
	"pendaftar"	INTEGER NOT NULL DEFAULT 0,
	PRIMARY KEY("IDlembaga" AUTOINCREMENT)
);
INSERT INTO "pendaftaran" VALUES (1,1,'alskdjasldk1','man',12313,'asdad','12/12/2000','asdasd','/asd/asdas/as');
INSERT INTO "pendaftaran" VALUES (2,1,'08ZorWZQp8-2','bintang',12,'tangek','2021-11-23','nasda','img/pendaftaran/08ZorWZQp8-2.jpg');
INSERT INTO "pendaftaran" VALUES (3,1,'vIk6RPM7dx-3','Bintang',19293120,'pekalongan','2001-05-03','griya pipit','img/pendaftaran/vIk6RPM7dx-3.png');
INSERT INTO "lembaga" VALUES (1,'RS Fatmawati',123,'Sinovac','2021-11-09','Fotocopy KTP','Jl RS Fatmawati 39 ITC Fatmawati 37-38, Dki Jakarta','asd',100,12);
INSERT INTO "lembaga" VALUES (2,'Klinik Wahyu Kusuma',12314,'Sinopharm','2021-11-03','Fotocopy KTP','Jl Kusuma Bangsa 116-118, Surabaya, Jawa Timur','../../img/penyedia/2.png',123,90);
INSERT INTO "lembaga" VALUES (3,'Puskesmas Nata',12314321,'Moderna','2021-11-03','Fotocopy KTP','Jl Nata Utama 46, Bandung, Jawa Barat','../../img/penyedia/3.png',123,21);
INSERT INTO "lembaga" VALUES (4,'Klinik Beteng',9214,'Pfizer','2021-12-29','Fotocopy KTP','Jl Beteng 142, Semarang, Jawa Tengah','asd',90,20);
INSERT INTO "lembaga" VALUES (5,'Klinik Klojen',21321,'Pfizer','2021-11-20','','JL Jakarta No. 36, Klojen, Malang, Jawa Timur','asd',29,1);
COMMIT;
