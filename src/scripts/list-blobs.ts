import { blobClient } from "../utils/blob-client";

async function listBlobs(prefix?: string) {
  try {
    const { blobs } = await blobClient.list({ prefix });

    console.log("Blobs found:");
    if (blobs.length === 0) {
      console.log("No blobs found");
      return;
    }

    blobs.forEach((blob) => {
      console.log(`- ${blob.url} (${blob.size} bytes)`);
    });
  } catch (error) {
    console.error("Error listing blobs:", error);
    process.exit(1);
  }
}

// Get optional subfolder prefix from command line arguments
const prefix = process.argv[2];
listBlobs(prefix);
