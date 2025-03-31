import { blobClient } from "../utils/blob-client";

async function deleteBlob(url: string) {
  try {
    await blobClient.del(url);
    console.log("Blob deleted successfully");
  } catch (error) {
    console.error("Error deleting blob:", error);
    process.exit(1);
  }
}

// Get URL from command line arguments
const url = process.argv[2];
if (!url) {
  console.error("Please provide a blob URL as an argument");
  process.exit(1);
}

deleteBlob(url);
