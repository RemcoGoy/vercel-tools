async function readBlob(url: string) {
  try {
    const response = await fetch(`${url}?timestamp=${Date.now()}`);
    const content = await response.text();
    console.log("Blob content:", content);
  } catch (error) {
    console.error("Error reading blob:", error);
    process.exit(1);
  }
}

// Get URL from command line arguments
const url = process.argv[2];
if (!url) {
  console.error("Please provide a blob URL as an argument");
  process.exit(1);
}

readBlob(url);
