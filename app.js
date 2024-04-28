const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const nodemailer = require("nodemailer");

// Set up your nodemailer transporter
const auth = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
        user: "apimails1@gmail.com",
        pass: "vemo cqee szgv nypb"
    }
});

// Render your index page
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./public")));

app.get("/", (req, res) => {
    res.render("index");
});

// Handle the POST request to send email
app.post("/info", async (req, res, next) => {
    try {
        let { message, email, mobile,name } = req.body;

        const receiver = {
            from: "apimails1@gmail.com",
            to: "kanishk21soni@gmail.com", // Change this to the recipient's email address
            subject: "want to contact you",
            text: `Message: ${message}\nEmail: ${email}\nMobile: ${mobile}\nName:${name}`
        };

        // Send the email
        auth.sendMail(receiver, (error, emailResponse) => {
            if (error) {
                throw error;
            }
            console.log("Email sent successfully!");
            res.redirect("/"); // Redirect to home page after sending email
        });
    } catch (error) {
        next(error);
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
