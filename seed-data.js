/**
 * seed-data.js
 * Inisialisasi data bawaan otomatis untuk PT. Agung Jaya Listrik.
 * Memastikan saat website dibuka di Vercel atau laptop baru,
 * data SPH dan Invoice langsung otomatis terisi lengkap tanpa kosong!
 */
(function() {
    const DEFAULT_SPH = [
        {
            id: 1704860400000,
            no: "001/01/SPH/2024",
            perusahaan: "PT Citra Mandiri Teknik",
            alamat: "Jl. Salemba Raya No. 12, Jakarta Pusat",
            tanggal: "10 Jan 2024",
            tanggalISO: "2024-01-10",
            total: 18500000,
            status: "Deal",
            items: [
                { nama: "Kabel Supreme NYM 3x2.5mm (Roll 50m)", qty: 20, harga: 680000, satuan: "roll" },
                { nama: "MCB Schneider Domae 1P 16A", qty: 50, harga: 55000, satuan: "pcs" },
                { nama: "Pipa Conduit Clipsal 20mm (4m)", qty: 120, harga: 18000, satuan: "batang" }
            ],
            followups: [
                { tanggal: "2024-01-11", cara: "WhatsApp", catatan: "Kirim dokumen SPH via WA ke Pak Budi", berikutnya: "2024-01-12" },
                { tanggal: "2024-01-12", cara: "Telepon", catatan: "Konfirmasi ketersediaan kabel Supreme, klien deal", berikutnya: "" }
            ]
        },
        {
            id: 1705551600000,
            no: "002/01/SPH/2024",
            perusahaan: "Toko Listrik Terang Baru",
            alamat: "Pasar Senen Blok III Lt. 1, Jakarta Pusat",
            tanggal: "18 Jan 2024",
            tanggalISO: "2024-01-18",
            total: 4200000,
            status: "Deal",
            items: [
                { nama: "Lampu Philips LED Bulb 12W Putih", qty: 60, harga: 42000, satuan: "pcs" },
                { nama: "Stop Kontak Panasonic Wide Series", qty: 60, harga: 28000, satuan: "pcs" }
            ],
            followups: [
                { tanggal: "2024-01-19", cara: "WhatsApp", catatan: "Toko setuju harga retail grosir", berikutnya: "" }
            ]
        },
        {
            id: 1706156400000,
            no: "003/01/SPH/2024",
            perusahaan: "Bpk. H. Hendra (Proyek Ruko)",
            alamat: "Jl. Rawasari Barat No. 45, Jakarta Pusat",
            tanggal: "25 Jan 2024",
            tanggalISO: "2024-01-25",
            total: 3800000,
            status: "Deal",
            items: [
                { nama: "Kabel Eterna NYM 2x2.5mm (Roll 50m)", qty: 5, harga: 540000, satuan: "roll" },
                { nama: "Box MCB Presto 4 Grup", qty: 4, harga: 35000, satuan: "pcs" },
                { nama: "MCB Schneider 1P 10A", qty: 15, harga: 52000, satuan: "pcs" },
                { nama: "Saklar Ganda Panasonic", qty: 5, harga: 38000, satuan: "pcs" }
            ],
            followups: [
                { tanggal: "2024-01-26", cara: "WhatsApp", catatan: "Pak Hendra setuju, minta kirim segera", berikutnya: "" }
            ]
        },
        {
            id: 1707020400000,
            no: "004/02/SPH/2024",
            perusahaan: "CV Surya Kencana Konstruksi",
            alamat: "Kawasan Industri Pulo Gadung, Jakarta Timur",
            tanggal: "04 Feb 2024",
            tanggalISO: "2024-02-04",
            total: 45000000,
            status: "Batal",
            alasanBatal: "Harga kompetitor distributor Glodok lebih murah 3%",
            items: [
                { nama: "Kabel Jembo NYY 4x6mm (Per Meter)", qty: 500, harga: 65000, satuan: "meter" },
                { nama: "MCCB Schneider EZC100F 3P 100A", qty: 10, harga: 850000, satuan: "pcs" }
            ],
            followups: [
                { tanggal: "2024-02-05", cara: "WhatsApp", catatan: "Penawaran masuk tahap evaluasi procurement", berikutnya: "2024-02-08" },
                { tanggal: "2024-02-08", cara: "Telepon", catatan: "Klien memilih supplier Glodok", berikutnya: "" }
            ]
        },
        {
            id: 1707711600000,
            no: "005/02/SPH/2024",
            perusahaan: "RSUD Cipta Sehat",
            alamat: "Jl. Raden Saleh No. 8, Jakarta Pusat",
            tanggal: "12 Feb 2024",
            tanggalISO: "2024-02-12",
            total: 14200000,
            status: "Deal",
            items: [
                { nama: "Lampu Philips LED Bulb 18W Putih", qty: 100, harga: 62000, satuan: "pcs" },
                { nama: "Downlight LED Philips 4 inch 9W", qty: 80, harga: 55000, satuan: "pcs" },
                { nama: "Isolasi Listrik 3M Temflex 1700", qty: 100, harga: 9500, satuan: "roll" }
            ],
            followups: [
                { tanggal: "2024-02-13", cara: "WhatsApp", catatan: "Bagian logistik RSUD menyetujui penawaran SP2D", berikutnya: "" }
            ]
        },
        {
            id: 1708402800000,
            no: "006/02/SPH/2024",
            perusahaan: "CV Sinar Terang Abadi",
            alamat: "Rukan Mangga Dua Square, Jakarta Utara",
            tanggal: "20 Feb 2024",
            tanggalISO: "2024-02-20",
            total: 32400000,
            status: "Deal",
            items: [
                { nama: "Kabel Supreme NYM 3x2.5mm (Roll 50m)", qty: 35, harga: 680000, satuan: "roll" },
                { nama: "MCB Schneider 1P 20A", qty: 60, harga: 58000, satuan: "pcs" },
                { nama: "Lampu Sorot LED Floodlight 50W Outdoor", qty: 20, harga: 185000, satuan: "pcs" }
            ],
            followups: [
                { tanggal: "2024-02-21", cara: "Telepon", catatan: "Negosiasi diskon 3%, disepakati Deal", berikutnya: "" }
            ]
        },
        {
            id: 1709612400000,
            no: "007/03/SPH/2024",
            perusahaan: "PT Wijaya Prima Elektrik",
            alamat: "Gedung Cyber 2 Lt. 15, Kuningan, Jakarta Selatan",
            tanggal: "05 Mar 2024",
            tanggalISO: "2024-03-05",
            total: 28000000,
            status: "Batal",
            alasanBatal: "Proyek instalasi gedung ditunda oleh pemilik gedung",
            items: [
                { nama: "Kabel Supreme NYM 2x1.5mm (Roll 50m)", qty: 40, harga: 385000, satuan: "roll" },
                { nama: "MCB Schneider 1P 16A", qty: 120, harga: 55000, satuan: "pcs" }
            ],
            followups: [
                { tanggal: "2024-03-06", cara: "WhatsApp", catatan: "Menunggu persetujuan manajemen gedung", berikutnya: "2024-03-15" },
                { tanggal: "2024-03-15", cara: "WhatsApp", catatan: "Proyek resmi dibatalkan sementara", berikutnya: "" }
            ]
        },
        {
            id: 1710390000000,
            no: "008/03/SPH/2024",
            perusahaan: "Dinas Pekerjaan Umum & Tata Air",
            alamat: "Jl. Kebon Sirih No. 22, Jakarta Pusat",
            tanggal: "14 Mar 2024",
            tanggalISO: "2024-03-14",
            total: 24600000,
            status: "Deal",
            items: [
                { nama: "Lampu Sorot LED Floodlight 50W Outdoor", qty: 80, harga: 185000, satuan: "pcs" },
                { nama: "Kabel Eterna NYM 2x2.5mm (Roll 50m)", qty: 15, harga: 540000, satuan: "roll" }
            ],
            followups: [
                { tanggal: "2024-03-15", cara: "WhatsApp", catatan: "Pengadaan anggaran triwulan I disetujui", berikutnya: "" }
            ]
        },
        {
            id: 1711081200000,
            no: "009/03/SPH/2024",
            perusahaan: "Toko Abadi Jaya Lampu",
            alamat: "Jl. Percetakan Negara No. 88, Jakarta Pusat",
            tanggal: "22 Mar 2024",
            tanggalISO: "2024-03-22",
            total: 6900000,
            status: "Deal",
            items: [
                { nama: "Lampu Philips LED Bulb 12W Putih", qty: 100, harga: 42000, satuan: "pcs" },
                { nama: "Saklar Single Panasonic Wide Series", qty: 80, harga: 24000, satuan: "pcs" }
            ],
            followups: [
                { tanggal: "2024-03-23", cara: "WhatsApp", catatan: "Order rutin mingguan toko cabang", berikutnya: "" }
            ]
        },
        {
            id: 1712031600000,
            no: "010/04/SPH/2024",
            perusahaan: "Bpk. Agus Salim (Pabrik Biskuit)",
            alamat: "Kawasan Pergudangan Pluit, Jakarta Utara",
            tanggal: "02 Apr 2024",
            tanggalISO: "2024-04-02",
            total: 9200000,
            status: "Batal",
            alasanBatal: "Customer memilih spesifikasi kabel lain",
            items: [
                { nama: "Kabel Jembo NYY 4x6mm (Per Meter)", qty: 100, harga: 65000, satuan: "meter" },
                { nama: "MCB Schneider 1P 20A", qty: 30, harga: 58000, satuan: "pcs" }
            ],
            followups: [
                { tanggal: "2024-04-03", cara: "WhatsApp", catatan: "Klien menanyakan opsi kabel tahan panas", berikutnya: "" }
            ]
        },
        {
            id: 1713154800000,
            no: "011/04/SPH/2024",
            perusahaan: "TB Sumber Rezeki Material",
            alamat: "Jl. Cempaka Putih Tengah, Jakarta Pusat",
            tanggal: "15 Apr 2024",
            tanggalISO: "2024-04-15",
            total: 11500000,
            status: "Deal",
            items: [
                { nama: "Kabel Supreme NYM 2x1.5mm (Roll 50m)", qty: 20, harga: 385000, satuan: "roll" },
                { nama: "Stop Kontak Panasonic CP Arde", qty: 100, harga: 28000, satuan: "pcs" }
            ],
            followups: [
                { tanggal: "2024-04-16", cara: "Telepon", catatan: "Konfirmasi pengiriman via kurir toko", berikutnya: "" }
            ]
        },
        {
            id: 1715142000000,
            no: "013/05/SPH/2024",
            perusahaan: "CV Makmur Sentosa",
            alamat: "Jl. Pramuka Raya No. 102, Jakarta Timur",
            tanggal: "08 Mei 2024",
            tanggalISO: "2024-05-08",
            total: 12300000,
            status: "Deal",
            items: [
                { nama: "MCB Schneider 1P 10A", qty: 100, harga: 52000, satuan: "pcs" },
                { nama: "Pipa Conduit Clipsal 20mm (4m)", qty: 200, harga: 18000, satuan: "batang" },
                { nama: "Isolasi Listrik 3M Temflex 1700", qty: 100, harga: 9500, satuan: "roll" }
            ],
            followups: [
                { tanggal: "2024-05-09", cara: "WhatsApp", catatan: "Klien setuju pembayaran tempo 30 hari", berikutnya: "" }
            ]
        },
        {
            id: 1795417200000,
            no: "001/11/SPH/2026",
            perusahaan: "PT. Hutama Mulya Jaya",
            alamat: "Kawasan Industri Pulo Gadung, Jakarta Timur",
            tanggal: "23 Nov 2026",
            tanggalISO: "2026-11-23",
            total: 15400000,
            status: "Menunggu",
            items: [
                { nama: "Kabel Supreme NYM 3x2.5mm (Roll 50m)", qty: 15, harga: 680000, satuan: "roll" },
                { nama: "MCB Schneider 1P 16A", qty: 40, harga: 55000, satuan: "pcs" },
                { nama: "Pipa Conduit Clipsal 20mm (4m)", qty: 80, harga: 18000, satuan: "batang" }
            ],
            followups: []
        },
        {
            id: 1795420800000,
            no: "002/11/SPH/2026",
            perusahaan: "PT. Hutama Karya",
            alamat: "Jl. MT Haryono Kav. 8, Cawang, Jakarta Timur",
            tanggal: "18 Nov 2026",
            tanggalISO: "2026-11-18",
            total: 26800000,
            status: "Batal",
            alasanBatal: "Spesifikasi teknis proyek beralih ke merek lain",
            items: [
                { nama: "Kabel Jembo NYY 4x6mm (Per Meter)", qty: 300, harga: 65000, satuan: "meter" },
                { nama: "MCCB Schneider EZC100F 3P 100A", qty: 6, harga: 850000, satuan: "pcs" }
            ],
            followups: [
                { tanggal: "2026-11-19", cara: "Telepon", catatan: "Klien konfirmasi pembatalan proyek", berikutnya: "" }
            ]
        },
        {
            id: 1795424400000,
            no: "003/11/SPH/2026",
            perusahaan: "PT. Rifan Jaya Mandiri",
            alamat: "Ruko Cempaka Mas Blok D-15, Jakarta Pusat",
            tanggal: "16 Nov 2026",
            tanggalISO: "2026-11-16",
            total: 8900000,
            status: "Deal",
            items: [
                { nama: "Lampu Philips LED Bulb 18W Putih", qty: 80, harga: 62000, satuan: "pcs" },
                { nama: "Saklar Ganda Panasonic", qty: 50, harga: 38000, satuan: "pcs" },
                { nama: "Stop Kontak Panasonic CP Arde", qty: 50, harga: 28000, satuan: "pcs" }
            ],
            followups: [
                { tanggal: "2026-11-17", cara: "WhatsApp", catatan: "Pembayaran lunas via BCA", berikutnya: "" }
            ]
        }
    ];

    const DEFAULT_INVOICE = [
        {
            id: 1705206000000,
            no: "INV/001/01/2024",
            noSPH: "001/01/SPH/2024",
            perusahaan: "PT Citra Mandiri Teknik",
            alamat: "Jl. Salemba Raya No. 12, Jakarta Pusat",
            tanggal: "14 Jan 2024",
            tanggalISO: "2024-01-14",
            bank: "BCA 123-456-7890 (PT Agung Jaya Listrik)",
            status: "Lunas",
            dp: 0,
            total: 18500000,
            items: [
                { nama: "Kabel Supreme NYM 3x2.5mm (Roll 50m)", qty: 20, harga: 680000, satuan: "roll" },
                { nama: "MCB Schneider Domae 1P 16A", qty: 50, harga: 55000, satuan: "pcs" },
                { nama: "Pipa Conduit Clipsal 20mm (4m)", qty: 120, harga: 18000, satuan: "batang" }
            ]
        },
        {
            id: 1705724400000,
            no: "INV/002/01/2024",
            noSPH: "002/01/SPH/2024",
            perusahaan: "Toko Listrik Terang Baru",
            alamat: "Pasar Senen Blok III Lt. 1, Jakarta Pusat",
            tanggal: "20 Jan 2024",
            tanggalISO: "2024-01-20",
            bank: "Tunai / Kasir",
            status: "Lunas",
            dp: 0,
            total: 4200000,
            items: [
                { nama: "Lampu Philips LED Bulb 12W Putih", qty: 60, harga: 42000, satuan: "pcs" },
                { nama: "Stop Kontak Panasonic Wide Series", qty: 60, harga: 28000, satuan: "pcs" }
            ]
        },
        {
            id: 1706329200000,
            no: "INV/003/01/2024",
            noSPH: "003/01/SPH/2024",
            perusahaan: "Bpk. H. Hendra (Proyek Ruko)",
            alamat: "Jl. Rawasari Barat No. 45, Jakarta Pusat",
            tanggal: "27 Jan 2024",
            tanggalISO: "2024-01-27",
            bank: "Mandiri 120-001-2345 (PT Agung Jaya Listrik)",
            status: "Lunas",
            dp: 0,
            total: 3800000,
            items: [
                { nama: "Kabel Eterna NYM 2x2.5mm (Roll 50m)", qty: 5, harga: 540000, satuan: "roll" },
                { nama: "Box MCB Presto 4 Grup", qty: 4, harga: 35000, satuan: "pcs" },
                { nama: "MCB Schneider 1P 10A", qty: 15, harga: 52000, satuan: "pcs" }
            ]
        },
        {
            id: 1708057200000,
            no: "INV/004/02/2024",
            noSPH: "005/02/SPH/2024",
            perusahaan: "RSUD Cipta Sehat",
            alamat: "Jl. Raden Saleh No. 8, Jakarta Pusat",
            tanggal: "16 Feb 2024",
            tanggalISO: "2024-02-16",
            bank: "Bank DKI 101-23-45678 (PT Agung Jaya Listrik)",
            status: "Lunas",
            dp: 0,
            total: 14200000,
            items: [
                { nama: "Lampu Philips LED Bulb 18W Putih", qty: 100, harga: 62000, satuan: "pcs" },
                { nama: "Downlight LED Philips 4 inch 9W", qty: 80, harga: 55000, satuan: "pcs" }
            ]
        },
        {
            id: 1708748400000,
            no: "INV/005/02/2024",
            noSPH: "006/02/SPH/2024",
            perusahaan: "CV Sinar Terang Abadi",
            alamat: "Rukan Mangga Dua Square, Jakarta Utara",
            tanggal: "24 Feb 2024",
            tanggalISO: "2024-02-24",
            bank: "BCA 123-456-7890 (PT Agung Jaya Listrik)",
            status: "Lunas",
            dp: 0,
            total: 32400000,
            items: [
                { nama: "Kabel Supreme NYM 3x2.5mm (Roll 50m)", qty: 35, harga: 680000, satuan: "roll" },
                { nama: "MCB Schneider 1P 20A", qty: 60, harga: 58000, satuan: "pcs" }
            ]
        },
        {
            id: 1710735600000,
            no: "INV/006/03/2024",
            noSPH: "008/03/SPH/2024",
            perusahaan: "Dinas Pekerjaan Umum & Tata Air",
            alamat: "Jl. Kebon Sirih No. 22, Jakarta Pusat",
            tanggal: "18 Mar 2024",
            tanggalISO: "2024-03-18",
            bank: "Bank DKI 101-23-45678 (PT Agung Jaya Listrik)",
            status: "Lunas",
            dp: 0,
            total: 24600000,
            items: [
                { nama: "Lampu Sorot LED Floodlight 50W Outdoor", qty: 80, harga: 185000, satuan: "pcs" },
                { nama: "Kabel Eterna NYM 2x2.5mm (Roll 50m)", qty: 15, harga: 540000, satuan: "roll" }
            ]
        },
        {
            id: 1715401200000,
            no: "INV/010/05/2024",
            noSPH: "013/05/SPH/2024",
            perusahaan: "CV Makmur Sentosa",
            alamat: "Jl. Pramuka Raya No. 102, Jakarta Timur",
            tanggal: "11 Mei 2024",
            tanggalISO: "2024-05-11",
            bank: "BCA 123-456-7890 (Tempo 30 Hari)",
            status: "Belum Lunas",
            dp: 0,
            total: 12300000,
            items: [
                { nama: "MCB Schneider 1P 10A", qty: 100, harga: 52000, satuan: "pcs" },
                { nama: "Pipa Conduit Clipsal 20mm (4m)", qty: 200, harga: 18000, satuan: "batang" }
            ]
        },
        {
            id: 1795428000000,
            no: "INV/001/11/2026",
            noSPH: "003/11/SPH/2026",
            perusahaan: "PT. Rifan Jaya Mandiri",
            alamat: "Ruko Cempaka Mas Blok D-15, Jakarta Pusat",
            tanggal: "17 Nov 2026",
            tanggalISO: "2026-11-17",
            bank: "BCA 123-456-7890 (PT Agung Jaya Listrik)",
            status: "Lunas",
            dp: 0,
            total: 8900000,
            items: [
                { nama: "Lampu Philips LED Bulb 18W Putih", qty: 80, harga: 62000, satuan: "pcs" },
                { nama: "Saklar Ganda Panasonic", qty: 50, harga: 38000, satuan: "pcs" }
            ]
        }
    ];

    // Otomatis isi jika data_sph masih kosong
    try {
        const existingSPH = JSON.parse(localStorage.getItem('data_sph'));
        if (!existingSPH || !Array.isArray(existingSPH) || existingSPH.length === 0) {
            localStorage.setItem('data_sph', JSON.stringify(DEFAULT_SPH));
            console.log('[OK] Seed data_sph berhasil diinisialisasi otomatis (' + DEFAULT_SPH.length + ' penawaran).');
        }
    } catch (e) {
        localStorage.setItem('data_sph', JSON.stringify(DEFAULT_SPH));
    }

    // Otomatis isi jika data_invoice masih kosong
    try {
        const existingInv = JSON.parse(localStorage.getItem('data_invoice'));
        if (!existingInv || !Array.isArray(existingInv) || existingInv.length === 0) {
            localStorage.setItem('data_invoice', JSON.stringify(DEFAULT_INVOICE));
            console.log('[OK] Seed data_invoice berhasil diinisialisasi otomatis (' + DEFAULT_INVOICE.length + ' faktur).');
        }
    } catch (e) {
        localStorage.setItem('data_invoice', JSON.stringify(DEFAULT_INVOICE));
    }

    // Fungsi global jika pengguna ingin mereset ke data awal
    window.resetDataBawaanToko = function() {
        localStorage.setItem('data_sph', JSON.stringify(DEFAULT_SPH));
        localStorage.setItem('data_invoice', JSON.stringify(DEFAULT_INVOICE));
        window.location.reload();
    };
})();
