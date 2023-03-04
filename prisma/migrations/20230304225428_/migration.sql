-- CreateTable
CREATE TABLE "InterestEvent" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "eventId" UUID NOT NULL,

    CONSTRAINT "InterestEvent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InterestEvent" ADD CONSTRAINT "InterestEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InterestEvent" ADD CONSTRAINT "InterestEvent_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
