import { put, list, del } from "@vercel/blob";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  throw new Error(
    "BLOB_READ_WRITE_TOKEN is required. Please add it to your .env file."
  );
}

export const blobClient = {
  put,
  list,
  del,
};
