# Vercel Blob Storage Tools

A set of TypeScript scripts for managing Vercel Blob storage.

## Setup

1. Install dependencies:```bash
pnpm install
```

2. Create a `.env` file in the root directory with your Vercel Blob token:
```
BLOB_READ_WRITE_TOKEN=your_token_here
```

You can get your token from the Vercel dashboard under Storage > Blob > Connect.

## Usage

### List all blobs
```bash
pnpm blob:list
```

### Read a blob
```bash
pnpm blob:read <blob-url>
```

### Delete a blob
```bash
pnpm blob:delete <blob-url>
```

## Development

Build the project:
```bash
pnpm build
```

## Requirements

- Node.js 18 or later
- pnpm
- Vercel Blob storage token 
