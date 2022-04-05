-- CreateTable
CREATE TABLE "Task" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userIdId" TEXT,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_userIdId_fkey" FOREIGN KEY ("userIdId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
