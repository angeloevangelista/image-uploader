import path from 'path';
import { v4 } from 'uuid';
import { Router } from 'express';

import IImage from '../entities/Image';
import { upload, uploadDirectory } from '../config/multer';

const images: IImage[] = [];

const routes = Router();

routes.get('/images/:id', (request, response) => {
  const { id } = request.params;

  const image = images.filter((img) => img.id === id)?.pop();

  if (!image) {
    return response.status(400).json({ message: 'Image not found.' });
  }

  const imagePath = path.join(uploadDirectory, image.generatedName);

  return response.sendFile(imagePath);
});

routes.post('/upload', upload.single('image'), (request, response) => {
  if (!request?.file) {
    return response.status(400).json({ message: '"image" not provided.' });
  }

  const image: IImage = {
    id: v4(),
    size: request.file.size,
    generatedName: request.file.filename,
    mimeType: request.file.mimetype,
    originalName: request.file.originalname,
    uploadedAt: new Date(),
  };

  images.push(image);

  return response.json(image);
});

export default routes;
