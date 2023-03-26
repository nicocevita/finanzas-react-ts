import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  useMediaQuery,
  useTheme,
  Icon,
} from "@mui/material";
import expensesFormStore from "../../store/expensesFormStore/expensesFormStore";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { setOpen } = expensesFormStore();

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ top: isMobile ? "auto" : 0, bottom: isMobile ? 0 : "auto" }}
      >
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: isMobile ? "space-around" : "flex-start",
              display: "flex",
            }}
          >
            <Button color="inherit" component={Link} to="/">
              <HomeIcon />
            </Button>
            <Icon
              sx={{
                bgcolor: "white",
                width: 40,
                height: 40,
                borderRadius: "2rem",
                padding: 1,
                top: "50%",
                left: "50%",
                transform: "translate(5%, -70%)",
              }}
              color="primary"
              onClick={setOpen}
              component={AddCircleIcon}
            />
            <Button color="inherit" href="/gastos-ingresos">
              <HistoryIcon />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
