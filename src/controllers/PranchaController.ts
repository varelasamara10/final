import { Request, Response } from "express";
import PranchaRepository from "../repositories/PranchaRepository";

class PranchaController {
  async getPranchas(req: Request, res: Response) {
    try {
      const pranchas = await PranchaRepository.getAllPranchas();
      res.json(pranchas);
    } catch (error) {
      res.status(500).json({ message: "Erro ao recuperar pranchas", error });
    }
  }

  async createPrancha(req: Request, res: Response) {
    try {
      const { quantidade, tamanhoEmPes, cor } = req.body;
      if (!quantidade || !tamanhoEmPes || !cor) {
        return res.status(400).json({ message: "Dados inválidos" });
      }
      const prancha = await PranchaRepository.createPrancha({
        quantidade,
        tamanhoEmPes,
        cor,
      });
      res.status(201).json(prancha);
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar prancha", error });
    }
  }
}

export default new PranchaController();
