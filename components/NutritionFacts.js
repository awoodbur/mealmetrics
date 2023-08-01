import React from "react";
import { Typography, Paper } from "@material-ui/core";

const NutritionFacts = ({ data }) => {
    if (typeof data !== "string") return null;
    
    const nutrition = data.split(/\n\n|\n/);
    
    return (
        <Paper elevation={24} style={{ padding: "20px" }}>
            <h3> 🍌 Here's the nutrition facts for your recipe:</h3>
        {nutrition.map((item, index) => (
            <Typography key={index}>{item}</Typography>
        ))}
        </Paper>
    );
    }

export default NutritionFacts;