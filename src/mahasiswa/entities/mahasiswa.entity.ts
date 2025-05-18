export class Mahasiswa {
  constructor(
    public nim: string,
    public nama: string,
    public prodi: string,
    public angkatan: number,
    public email: string,
  ) {}
  getDisplayName(): string {
    return `${this.nama} (${this.nim})`;
  }
}
