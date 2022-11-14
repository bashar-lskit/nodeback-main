const router = require("express").Router();

const authRoutes = require("./auth");
const authsRoutes = require("./auths");
const userRoutes = require("./user");
const addressRoutes = require("./address");
const newsletterRoutes = require("./newsletter");
const productRoutes = require("./product");
const categoryRoutes = require("./category");
const brandRoutes = require("./brand");
const contactRoutes = require("./contact");
const merchantRoutes = require("./merchant");
const cartRoutes = require("./cart");
const orderRoutes = require("./order");
const reviewRoutes = require("./review");
const wishlistRoutes = require("./wishlist");
const titleRoutes = require("./title");
const districtRoutes = require("./district");
const upazilaRoutes = require("./upazila");

// auth routes
router.use("/auth", authRoutes);
router.use("/auths", authsRoutes);

//district routes
router.use("/district",districtRoutes);

//upazila routes
router.use("/upazila",upazilaRoutes);


// user routes
router.use("/user", userRoutes);

// address routes
router.use("/address", addressRoutes);

// newsletter routes
router.use("/newsletter", newsletterRoutes);

// product routes
router.use("/product", productRoutes);

// category routes
router.use("/category", categoryRoutes);

// brand routes
router.use("/brand", brandRoutes);

// contact routes
router.use("/contact", contactRoutes);

// merchant routes
router.use("/merchant", merchantRoutes);

// cart routes
router.use("/cart", cartRoutes);

// order routes
router.use("/order", orderRoutes);

// Review routes
router.use("/review", reviewRoutes);

// Wishlist routes
router.use("/wishlist", wishlistRoutes);

// test route
router.use("/title", titleRoutes);

module.exports = router;
