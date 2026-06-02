import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const adminPassword = await bcrypt.hash("admin123", 10);
  const clientPassword = await bcrypt.hash("client123", 10);

  await prisma.user.upsert({
    where: { email: "admin@valueproperties.in" },
    update: {},
    create: {
      email: "admin@valueproperties.in",
      name: "Sreeja Admin",
      password: adminPassword,
      role: "ADMIN",
    },
  });

  await prisma.user.upsert({
    where: { email: "client@example.com" },
    update: {},
    create: {
      email: "client@example.com",
      name: "Demo Client",
      phone: "+91 98000 00000",
      password: clientPassword,
      role: "CLIENT",
    },
  });

  console.log("Seed complete.");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
