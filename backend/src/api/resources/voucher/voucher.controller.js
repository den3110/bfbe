import { db } from "../../../models"
const { Op, Sequelize } = require("sequelize");

const generateVoucher =()=> {
    const min = 2;
    const max = 20;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const voucherValue = randomNumber * 5000;

    const expireDate = new Date();
    // Thêm 30 ngày vào ngày hiện tại để tạo expire date
    expireDate.setDate(expireDate.getDate() + 30);

    const code = generateCode();

    return {
      discount: voucherValue,
      expire: expireDate.toISOString(),
      code: code
    };
}

function generateCode() {
    // Tạo một mã code ngẫu nhiên, ví dụ: ABCD1234
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  }

export default {
    async getAllVoucher(req, res) {
        const voucherList= await db.voucher.findAll({
            order: [['createdAt', 'DESC']]
        })
        return res.status(200).json({ok: true, data: voucherList})
    },
    async createVoucher(req, res) {
        await db.voucher.create({
            ...req.body
        })
        return res.status(200).json({ok: true})
    },
    async deleteVoucher(req, res) {
        const {voucherId }= req.body
        await db.voucher.destroy({
            where: {
                id: voucherId
            }
        })

        return res.status(200).json({ok: true})
    },
    async detailVoucher(req, res) {
        const {voucherId }= req.query
        const data= await db.voucher.findOne({
            where: {
                id: voucherId
            }
        })
        return res.status(200).json({ok: true, data})
    },
    async applyVoucher(req, res) {
        const {uid }= req.user
        const {code }= req.body
        const data= await db.voucher.findOne({
            where: {
                code
            }
        })
        if(data) {
            const data1= await db.vouchercustomer.findOne({where: {voucherId: data.id, customerId: uid}})
            if(data1.is_use== 1) {
                return res.status(200).json({ok: false, used: true})
            }
            return res.status(200).json({ok: true, data: {id: data.id}})
        }
        else {
            return res.status(200).json({ok: false, data})
        }
    },
    async createSchedule(req, res) {
        const {date_start, date_end, amount_voucher }= req.body
        const vouchers = [];
        for (let i = 0; i < parseInt(amount_voucher); i++) {
            const voucher = generateVoucher();
            vouchers.push(voucher);
          }
        db.voucher.bulkCreate(vouchers)
        db.voucherschedule.create({
            date_start, date_end, amount_voucher
        })
        return res.status(200).json({ok: true})
    },
    async getSchedule(req, res) {
        
        const data= await db.voucherschedule.findOne()
        return res.status(200).json({ok: true, data})
    },
    async getVoucherHuting(req, res) {
        const data1= await db.voucherschedule.findOne()
        const data= await db.voucher.findAll({
            order: Sequelize.literal('RAND()'),
            limit: data1?.amount_voucher || 0
        })
        return res.status(200).json({ok: true, data})
    }
}