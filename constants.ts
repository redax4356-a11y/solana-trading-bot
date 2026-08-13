import dotenv from "dotenv";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import bs58 from "bs58";
import winston from "winston";

dotenv.config();

export const logger = winston.createLogger({
    level: 'info',
    transports: [new winston.transports.Console()]
});

export const solanaConnection = new Connection(process.env.RPC_URL || "https://api.mainnet-beta.solana.com", "confirmed");
export const sniperWallet = Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY || ""));
export const rayFee = new PublicKey("675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8");

export const BUY_AMOUNT_SOL = parseFloat(process.env.BUY_AMOUNT_SOL || "0.1");
export const BUY_DELAY = parseInt(process.env.BUY_DELAY || "0");
export const CHECK_TOKEN_SYMBOL = process.env.CHECK_TOKEN_SYMBOL === "true";
export const ENABLE_RUG_CHECKS = process.env.ENABLE_RUG_CHECKS === "true";
export const MAX_SINGLE_OWNER_PERCENTAGE = parseFloat(process.env.MAX_SINGLE_OWNER_PERCENTAGE || "50");
export const MAX_SOL_LP = parseFloat(process.env.MAX_SOL_LP || "10");
export const MIN_SOL_LP = parseFloat(process.env.MIN_SOL_LP || "0.1");
export const MIN_SOL_REQUIRED = parseFloat(process.env.MIN_SOL_REQUIRED || "0.5");
export const MIN_TOKEN_LP_PERCENTAGE = parseFloat(process.env.MIN_TOKEN_LP_PERCENTAGE || "10");
export const TOKEN_SYMBOL_FILTER = process.env.TOKEN_SYMBOL_FILTER || "";
export const USE_PENDING_SNIPE_LIST = process.env.USE_PENDING_SNIPE_LIST === "true";
