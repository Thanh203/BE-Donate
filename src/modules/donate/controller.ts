import { Request, Response } from "express";
import { DonateService } from "./service";

export class DonateController {
  private donateService: DonateService;

  constructor() {
    this.donateService = new DonateService();
  }

  showListDonate(req: Request, res: Response): void {
    res.render("list-donate-page");
  }

  showFormDonate(req: Request, res: Response): void {
    res.render("donate-page");
  }


  public getAllDonates = async (req: Request, res: Response): Promise<void> => {
    try {
      const donates = await this.donateService.getAllDonates();
      const totalDonates = await this.donateService.getTotalDonates();
      const totalAmount = await this.donateService.getTotalAmount();
  
      res.status(200).json({
        success: true,
        data: donates,
        totalDonates,
        totalAmount,
      });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

  public getDonateById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
      const donate = await this.donateService.getOneDonate(Number(id));
      res.status(200).json({ success: true, data: donate });
    } catch (error: any) {
      res.status(404).json({ success: false, message: error.message });
    }
  };

  public createDonate = async (req: Request, res: Response): Promise<void> => {
    const { name, address, amount, holder } = req.body;
    console.log(req.body);

    try {
      const newDonate = await this.donateService.createDonate(name, address, amount, holder);
      res.status(201).json({ success: true,message: 'Thêm quyên góp thành công!', data: newDonate });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

  public updateDonate = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { name, address, amount, holder } = req.body;

    try {
      const updatedDonate = await this.donateService.updateDonate(
        Number(id),
        name,
        address,
        amount,
        holder
      );

      if (updatedDonate) {
        res.status(200).json({ success: true, data: updatedDonate });
      } else {
        res.status(404).json({ success: false, message: "Donate not found." });
      }
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

  public deleteDonate = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
      const deleted = await this.donateService.deleteDonate(Number(id));
      if (deleted) {
        res.status(200).json({ success: true, message: "Donate deleted successfully." });
      } else {
        res.status(404).json({ success: false, message: "Donate not found." });
      }
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
}
