import Prancha from "../models/Prancha";

class PranchaRepository {
  async getAllPranchas() {
    return Prancha.findAll();
  }

  async createPrancha(data: {
    quantidade: number;
    tamanhoEmPes: number;
    cor: string;
  }) {
    return Prancha.create(data);
  }
}

export default new PranchaRepository();
