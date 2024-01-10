import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { log } from "@modules/logger";
import * as nanoid from 'nanoid'

export enum IMG_KIND {
  user_avatar = "user_avatar",
  user_banner = "user_banner",
  zkapp_icon = "zkapp_icon",
  zkapp_banner = "zkapp_banner"
} 

export const uploadImage = async ( file: File, kind: IMG_KIND ): Promise<string> => {

  if (
    !process.env.S3_BUCKET_NAME ||
    !process.env.S3_REGION ||
    !process.env.S3_ENDPOINT ||
    !process.env.S3_ACCESS_KEY_ID ||
    !process.env.S3_SECRET_ACCESS_KEY ||
    !process.env.S3_BUCKET_PUBLIC_URL) {
    throw new Error("Missing env variables");
  }

  if(Object.values(IMG_KIND).includes(kind)){
    throw new Error('img kind not valid')
  }

  const config = {
    bucketName: process.env.S3_BUCKET_NAME,
    region: process.env.S3_REGION,
    endpoint: process.env.S3_ENDPOINT,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID,
      secretAccessKey:
        process.env.S3_SECRET_ACCESS_KEY,
    },
  };
  const client = new S3Client({
    endpoint: config.endpoint,
    region: config.region,
    credentials: {
      accessKeyId: config.credentials.accessKeyId,
      secretAccessKey: config.credentials.secretAccessKey,
    },
  });

  const fileSize = file.size;
  const maxSizeInBytes = 2 * 1024 * 1024; // 2MB
  if (fileSize && fileSize > maxSizeInBytes) {
    throw new Error("File size exceeds the allowed limit of 2MB.");
  }
  
  const allowedTypes = ["image/png", "image/jpg", "image/jpeg", "image/gif"];
  if (!allowedTypes.includes(file.type)) {
    throw new Error(
      "Invalid file type. Please upload a PNG, JPG, JPEG, or GIF file."
    );
  }

  const nanoidGen = nanoid.customAlphabet('1234567890abcdef', 10)
  const fileName = `${IMG_KIND[kind]}/${nanoidGen(15)}.${file.type.split("/")[1]}`;
  
  try {
    await client.send(
      new PutObjectCommand({
        Bucket: config.bucketName,
        Key: fileName,
        Body: Buffer.from(await file.arrayBuffer()),
        ACL: "public-read",
        ContentType: file.type,
      })
    );
    return `${process.env.S3_BUCKET_PUBLIC_URL}/${fileName}`;
  } catch (e) {
    log.info(e);
    throw(e)
  }
}
