import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

async function main() {
  console.log("Emptying previous products...");
  await prisma.product.deleteMany({});
  
  console.log("Seeding dummy products...");
  await prisma.product.createMany({
    data: [
      { name: 'Neon Samurai Mask', price: 120.00, description: 'Wearable half-mask optimized for glowing filament.', modelPath: '/dummy/samurai.stl', category: 'Cosplay' },
      { name: 'Hexagon Wall Planters', price: 24.99, description: 'Modular wall planters with hidden watering channels.', modelPath: '/dummy/planters.stl', category: 'Home Decor' },
      { name: 'Ergo Laptop Stand', price: 34.50, description: 'Foldable, extremely sturdy laptop stand.', modelPath: '/dummy/laptop.stl', category: 'Utility' },
      { name: 'Sci-Fi Dice Tower.stl', price: 45.00, description: 'Multi-level dnd dice tower with LED housing.', modelPath: '/dummy/dice.stl', category: 'Gaming' }
    ]
  });
  console.log("Seeding complete!");
}

main().catch(console.error).finally(() => prisma.$disconnect());
