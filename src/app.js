import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const allowedOrigins = [
    process.env.CORS_ORIGIN,
    process.env.CORS_ORIGIN_DEVELOPMENT,
];

app.use(
    cors({
        origin: allowedOrigins,
        credentials: true,
    })
);

app.use(
    express.json({
        limit: "16kb",
    })
);

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(cookieParser());

import ErrorHandler from "./utils/ErrorHandler.js";

// Error handling middleware
app.use(ErrorHandler);

export { app };
