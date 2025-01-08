import { copyFile, mkdir } from 'fs/promises';
import { join, normalize } from 'path';

// Le chemin source des images (sur votre machine locale Windows)
const sourceDir = normalize('C:\\Users\\hp\\Desktop\\DOSSIER\\photo\\public\\images');

// Le chemin de destination relatif dans votre projet (supposé être dans home/project/public/images)
const targetDir = './public/images';

// Carte des images à copier (les noms des fichiers source sont les mêmes que les noms des fichiers cibles)
const imageMap = {
  'profile.jpg': 'profile.jpg',
  'uits.jpg': 'uits.jpg',
  'universiapolis.jpg': 'universiapolis.jpg',
  'ofppt.jpg': 'ofppt.jpg',
  'fsr.jpg': 'fsr.jpg',
  'flsh.jpg': 'flsh.jpg'
};

async function copyImages() {
  try {
    // Crée le répertoire cible s'il n'existe pas
    await mkdir(targetDir, { recursive: true });

    // Copie chaque image en fonction de la map
    for (const [sourceFile, targetFile] of Object.entries(imageMap)) {
      // Construire les chemins absolus pour la source et la cible
      const sourcePath = join(sourceDir, sourceFile);   // Chemin absolu pour le fichier source
      const targetPath = join(targetDir, targetFile);   // Chemin relatif pour le fichier cible

      // Copie le fichier
      await copyFile(sourcePath, targetPath);
      console.log(`Copied ${sourceFile} to ${targetFile}`);
    }

    console.log('All images copied successfully!');
  } catch (error) {
    // Gestion des erreurs
    console.error('Error copying images:', error);
  }
}

// Appel de la fonction pour copier les images
copyImages();
