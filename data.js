/* =========================================================
   STUDYNE - DATA
   Data awal tampilan sistem. Tidak berisi akun demo.
   ========================================================= */
const BANNER_COLORS = ["#312E81", "#4338CA", "#4F46E5", "#1E1B4B"];
const COURSES = [
    { id:"if403", code:"IF403", name:"Manajemen Proyek Sistem & Teknologi Informasi", sks:3, schedule:"Senin, 15.00–17.30", lecturer:"Dosen Pengampu", room:"Ruang Perkuliahan", progress:35, description:"Pembelajaran mengenai perencanaan, pengelolaan, pengendalian, dan evaluasi proyek sistem dan teknologi informasi." },
    { id:"if404", code:"IF404", name:"Etika Profesi Informatika di Era Digital", sks:2, schedule:"Rabu, 15.00–16.50", lecturer:"Dosen Pengampu", room:"Ruang Perkuliahan", progress:20, description:"Pembelajaran mengenai etika profesi, tanggung jawab, keamanan, privasi, dan penggunaan teknologi secara bertanggung jawab." },
    { id:"if405", code:"IF405", name:"Pemrograman Web Lanjut", sks:3, schedule:"Jumat, 13.00–15.30", lecturer:"Dosen Pengampu", room:"Laboratorium Komputer", progress:50, description:"Pembelajaran pengembangan aplikasi web menggunakan konsep frontend, backend, database, dan integrasi sistem." },
    { id:"if406", code:"IF406", name:"Basis Data Terdistribusi", sks:3, schedule:"Selasa, 09.30–12.00", lecturer:"Dosen Pengampu", room:"Laboratorium Komputer", progress:15, description:"Pembelajaran mengenai konsep, arsitektur, pengelolaan, dan implementasi basis data terdistribusi." },
    { id:"if407", code:"IF407", name:"Kecerdasan Buatan", sks:3, schedule:"Kamis, 10.00–12.30", lecturer:"Dosen Pengampu", room:"Laboratorium Komputer", progress:40, description:"Pembelajaran mengenai konsep dasar kecerdasan buatan, machine learning, pengolahan data, dan penerapannya pada sistem informasi." }
];
const TEACHER_COURSES = COURSES;
const NOTIFICATIONS = [
    { title:"Selamat datang di STUDYNE", message:"Gunakan dashboard untuk mengakses aktivitas pembelajaran.", date:"Sistem" },
    { title:"Informasi pembelajaran", message:"Data materi, tugas, nilai, dan aktivitas akan tersedia sesuai pembaruan sistem.", date:"Sistem" }
];
const MATERIALS = {
  if403: [
    {id:"if403-m1", type:"materi", title:"Pengantar Manajemen Proyek TI", description:"Konsep dasar proyek, karakteristik proyek TI, stakeholder, ruang lingkup, waktu, biaya, dan risiko.", date:"Minggu 1", resource:"Modul PDF · 18 halaman"},
    {id:"if403-m2", type:"materi", title:"Perencanaan Proyek", description:"Penyusunan kebutuhan, Work Breakdown Structure (WBS), jadwal, pembagian pekerjaan, dan sumber daya.", date:"Minggu 2", resource:"Slide materi · 24 halaman"},
    {id:"if403-m3", type:"materi", title:"Manajemen Risiko Proyek", description:"Identifikasi risiko, analisis dampak, prioritas risiko, dan strategi mitigasi pada proyek TI.", date:"Minggu 3", resource:"Modul PDF · 16 halaman"},
    {id:"if403-t1", type:"tugas", title:"Tugas Analisis Proyek", description:"Buat analisis singkat ruang lingkup, stakeholder, dan risiko sebuah proyek sistem informasi.", date:"Minggu 3", deadline:"Jumat, 23 Oktober 2026 · 23.59 WIB", deadlineISO:"2026-10-23T23:59:00+07:00", status:"Belum dikumpulkan"}
  ],
  if404: [
    {id:"if404-m1", type:"materi", title:"Etika Profesi Informatika", description:"Prinsip etika, kode etik, tanggung jawab profesional, dan dampak keputusan teknologi terhadap masyarakat.", date:"Minggu 1", resource:"Modul PDF · 20 halaman"},
    {id:"if404-m2", type:"materi", title:"Privasi dan Keamanan Data", description:"Pembahasan privasi, keamanan, perlindungan data, dan penggunaan informasi secara bertanggung jawab.", date:"Minggu 2", resource:"Slide materi · 22 halaman"},
    {id:"if404-m3", type:"materi", title:"Etika AI di Era Digital", description:"Pengantar bias, transparansi, akuntabilitas, dan penggunaan AI secara bertanggung jawab.", date:"Minggu 3", resource:"Bahan bacaan · 12 halaman"},
    {id:"if404-t1", type:"tugas", title:"Studi Kasus Etika Digital", description:"Analisis satu kasus penggunaan teknologi yang menimbulkan persoalan etika dan berikan rekomendasi penyelesaiannya.", date:"Minggu 3", deadline:"Senin, 26 Oktober 2026 · 23.59 WIB", deadlineISO:"2026-10-26T23:59:00+07:00", status:"Belum dikumpulkan"}
  ],
  if405: [
    {id:"if405-m1", type:"materi", title:"Frontend dan Struktur Web", description:"Struktur HTML semantik, CSS responsif, JavaScript dasar, dan penyusunan antarmuka aplikasi web.", date:"Minggu 1", resource:"Modul PDF · 28 halaman"},
    {id:"if405-m2", type:"materi", title:"Backend dan Database", description:"Konsep server, API, database relasional, autentikasi, dan komunikasi antar komponen sistem.", date:"Minggu 2", resource:"Slide materi · 30 halaman"},
    {id:"if405-m3", type:"materi", title:"Integrasi API", description:"Pengenalan request, response, endpoint, JSON, serta integrasi frontend dengan backend.", date:"Minggu 3", resource:"Video pembelajaran · 32 menit"},
    {id:"if405-t1", type:"tugas", title:"Implementasi Halaman Web", description:"Buat satu halaman web responsif berdasarkan kebutuhan pengguna dan terapkan struktur HTML serta CSS yang sesuai.", date:"Minggu 3", deadline:"Kamis, 29 Oktober 2026 · 23.59 WIB", deadlineISO:"2026-10-29T23:59:00+07:00", status:"Belum dikumpulkan"}
  ],
  if406: [
    {id:"if406-m1", type:"materi", title:"Konsep Basis Data Terdistribusi", description:"Arsitektur, karakteristik, keuntungan, tantangan, dan alasan penggunaan basis data terdistribusi.", date:"Minggu 1", resource:"Modul PDF · 21 halaman"},
    {id:"if406-m2", type:"materi", title:"Replikasi dan Fragmentasi", description:"Konsep replikasi data, fragmentasi horizontal dan vertikal, serta konsistensi data.", date:"Minggu 2", resource:"Slide materi · 25 halaman"},
    {id:"if406-t1", type:"tugas", title:"Analisis Arsitektur Database", description:"Analisis sederhana arsitektur basis data untuk sebuah studi kasus dan jelaskan alasan pemilihan pendekatan.", date:"Minggu 2", deadline:"Selasa, 27 Oktober 2026 · 23.59 WIB", deadlineISO:"2026-10-27T23:59:00+07:00", status:"Belum dikumpulkan"}
  ],
  if407: [
    {id:"if407-m1", type:"materi", title:"Pengantar Kecerdasan Buatan", description:"Konsep AI, machine learning, intelligent agent, dan contoh penerapan AI dalam kehidupan sehari-hari.", date:"Minggu 1", resource:"Modul PDF · 26 halaman"},
    {id:"if407-m2", type:"materi", title:"Data untuk Machine Learning", description:"Tahapan data preparation, pembagian data, fitur, label, dan pengenalan model pembelajaran mesin.", date:"Minggu 2", resource:"Slide materi · 27 halaman"},
    {id:"if407-m3", type:"materi", title:"Evaluasi Model", description:"Pengenalan confusion matrix, accuracy, precision, recall, dan F1-score untuk evaluasi model klasifikasi.", date:"Minggu 3", resource:"Modul PDF · 19 halaman"},
    {id:"if407-t1", type:"tugas", title:"Eksplorasi Dataset", description:"Lakukan eksplorasi awal terhadap dataset, identifikasi variabel, dan buat ringkasan temuan awal.", date:"Minggu 3", deadline:"Kamis, 29 Oktober 2026 · 23.59 WIB", deadlineISO:"2026-10-29T23:59:00+07:00", status:"Belum dikumpulkan"}
  ]
};
const ACADEMIC_RECORDS = [];
