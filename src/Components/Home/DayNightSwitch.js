import React, { useState } from "react";
import {
  Switch,
  FormControlLabel,
  Paper,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const DayNightSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={0}
        style={{ height: "100vh", padding: "20px", boxSizing: "border-box" }}
      >
        <FormControlLabel
          control={
            <Switch
              checked={isDarkMode}
              onChange={handleThemeToggle}
              icon={<Brightness7Icon />}
              checkedIcon={<Brightness4Icon />}
              name="dayNightSwitch"
            />
          }
          label={isDarkMode ? "Night Mode" : "Day Mode"}
        />
        {/* Your other content goes here */}
      </Paper>
    </ThemeProvider>
  );
};

export default DayNightSwitch;
