import React from "react";
import { Paper, Typography } from "@material-ui/core";

const Footer = () => {
    return (
        <Paper
        elevation={24}
        style={{
            padding: "20px",
            position: "fixed",
            bottom: "0",
            width: "100%",
            textAlign: "center",
        }}
        >
        <Typography>
            Made by awoodbur &
            <a href="https://copilot.github.com/" target="_blank" rel="noopener noreferrer" alt="github copilot" > GitHub Copilot</a>
            </Typography>
        <Typography>
            Powered by
            <a href="https://platform.openai.com/overview" target="_blank" rel="noopener noreferrer" alt="openai api"> OpenAI</a> 🤖
        </Typography>
        </Paper>
    );
};

export default Footer;

