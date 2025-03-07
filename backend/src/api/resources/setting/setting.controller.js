import fs from "fs";
import sharp from "sharp";
import path from "path";
import { db } from "../../../models";
import { Sequelize } from "sequelize";
export default {
  async getSetting(req, res) {
    const data= await db.setting.findOne({

    })
    return res.status(200).json({ok: true, data})
  },
  async updateModePayment(req, res) {
    try {
        await db.setting.update({mode_payment: req.body.mode}, {where: {id: 1}}  )
        const data= await db.setting.findOne({

        })
        return res.status(200).json({ok: true, data})
        
    } catch (error) {
        console.error(error)
        return res.status(500).json({ok: false, message: error.message})
    }
  },
  async updateKey(req, res) {
    try {
        await db.setting.update({...req.body}, {where: {id: 1}}  )
        const data= await db.setting.findOne({

        })
        return res.status(200).json({ok: true, data})
        
    } catch (error) {
        console.error(error)
        return res.status(500).json({ok: false, message: error.message})
    }
  },
  async updateBank(req, res) {
    try {
        await db.setting.update({...req.body}, {where: {id: 1}}  )
        const data= await db.setting.findOne({

        })
        return res.status(200).json({ok: true, data})
        
    } catch (error) {
        console.error(error)
        return res.status(500).json({ok: false, message: error.message})
    }
  },
  async getBank(req, res) {
    try {
      // Retrieve the payment mode and keys from the database or configuration
      const settings = await db.setting.findOne(); // Assuming you have a settings table or model
  
      // Check if settings exist and mode_payment is available
      if (!settings) {
        return res.status(404).json({ ok: false, message: 'Settings not found' });
      }
  
      const { bank_name, bank_account, bic, iban  } = settings;
      const data = { bank_name, bank_account, bic, iban };
  
      // Return the data with an OK response
      return res.status(200).json({ ok: true, data });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ ok: false, message: 'An error occurred while retrieving payment info' });
    }
  },
  async getInfoPayment(req, res) {
    
    try {
        // Retrieve the payment mode and keys from the database or configuration
        const settings = await db.setting.findOne(); // Assuming you have a settings table or model
    
        // Check if settings exist and mode_payment is available
        if (!settings) {
          return res.status(404).json({ ok: false, message: 'Settings not found' });
        }
    
        const { mode_payment, client_key_live, secret_key_live, client_key_demo, secret_key_demo } = settings;
    
        // Determine which keys to return based on the mode_payment value
        const data = mode_payment
          ? { key: client_key_live }
          : { key: client_key_demo };
    
        // Return the data with an OK response
        return res.status(200).json({ ok: true, data });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ ok: false, message: 'An error occurred while retrieving payment info' });
      }
    },
    async createDiscount(req, res) {
      try {
        await db.setting.update({discount: req.body.discount, amount: req.body.amount}, {where: {id: 1}}  )
        return res.status(200).json({ok: true, message: 'Discount and amount updated successfully'})
      } catch (error) {
        return res.status(500).json({ok: false, message: error.message})
      }
    },
    async createReview(req, res) {
      try {
        const { name, rating, content } = req.body;
        let imagePath = null;
    
        // Validate input
        if (!name || !rating || !content) {
          return res.status(400).json({ message: "Name, rating, and content are required." });
        }
    
        // Handle image upload
        if (req.file) {
          imagePath = req.file.path; // Đường dẫn file
        }
    
        // Create a new review
        const newReview = await db.review.create({
          name,
          rating,
          content,
          image: imagePath,
        });
    
        res.status(201).json(newReview);
      } catch (error) {
        console.error("Error creating review:", error);
        res.status(500).json({ message: "Internal server error." });
      }
    },
    async getReviews(req, res) {
      try {
        const reviews = await db.review.findAll({
          order: [["date", "DESC"]],
        });
    
        res.status(200).json(reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        res.status(500).json({ message: "Internal server error." });
      }
    }
};
