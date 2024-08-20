-- CreateTable
CREATE TABLE "profile" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "gmail" TEXT,
    "conten1" TEXT,
    "conten2" TEXT,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "social" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "link" TEXT,
    "img" TEXT,

    CONSTRAINT "social_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "img" TEXT,
    "price" TEXT,
    "content" TEXT,
    "describe" TEXT,
    "quantity" TEXT,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "review" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "content" TEXT,
    "productname" TEXT,

    CONSTRAINT "review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "gmail" TEXT,
    "phone" TEXT,
    "message" TEXT,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "advertisement" (
    "id" SERIAL NOT NULL,
    "img" TEXT,
    "content" TEXT,
    "name" TEXT,
    "link" TEXT,
    "describe" TEXT,

    CONSTRAINT "advertisement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "productintro" (
    "id" SERIAL NOT NULL,
    "img" TEXT,
    "content" TEXT,
    "name" TEXT,
    "link" TEXT,
    "describe" TEXT,

    CONSTRAINT "productintro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "avata" TEXT,
    "email" TEXT,
    "pass" TEXT,
    "roleid" INTEGER NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role" (
    "id" SERIAL NOT NULL,
    "position" TEXT,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_product" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "productid" INTEGER NOT NULL,
    "quantity" TEXT,

    CONSTRAINT "user_product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "seller" (
    "id" SERIAL NOT NULL,
    "email" TEXT,

    CONSTRAINT "seller_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_product_userid_productid_key" ON "user_product"("userid", "productid");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_roleid_fkey" FOREIGN KEY ("roleid") REFERENCES "role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_product" ADD CONSTRAINT "user_product_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_product" ADD CONSTRAINT "user_product_productid_fkey" FOREIGN KEY ("productid") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
