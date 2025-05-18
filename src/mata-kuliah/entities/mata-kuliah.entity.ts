export class MataKuliah {
  constructor(
    public kode: string,
    public nama: string,
    public sks: number,
    public semester: string,
    public jurusan: string,
  ) {}
  getDisplayName(): string {
    return `${this.nama} (${this.kode})`;
  }
}
