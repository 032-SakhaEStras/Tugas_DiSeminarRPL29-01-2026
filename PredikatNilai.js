let nilai = 72;
let predikat;

if (nilai >= 90) {
    predikat = "A";
} else if (nilai >= 80) {
    predikat = "B";
} else if (nilai >= 70) {
    predikat = "C";
} else if (nilai >= 60) {
    predikat = "D";
} else if (nilai <= 60) {
    predikat = "GAK LULUS";
}

console.log(`Nilai Siswanya adalah ${nilai}`);
console.log(`Predikat Siswanya adalah ${predikat}`);