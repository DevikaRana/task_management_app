import { useState } from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Form from "./components/Form";
import AddTaskIcon from "@mui/icons-material/AddTask";
import CardItem from "./components/Card";
import { INotes } from "./interfaces";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import "./App.css";

// const useStyles = makeStyles({
//   btn: {
//     fontSize: 60,
//   },
// });

function App() {
  const [notes, setNotes] = useState<INotes[]>([
    {
      id: "1",
      title: "Design sign up flow",
      details:
        "By the time a prospect arrieve at your signup page, in most cases, the've alredy evaluat... ",
      category: "Design",
    },
    {
      id: "2",
      title: "Landing page cotent",
      details:
        "Write the content of the new landing page and prepare the assets for the different section... ",
      category: "Marketing",
    },
    {
      id: "3",
      title: "Make a new project for Portfoli",
      details:
        "In sunday have present some projects in the meeting but before thi meeting have to make this project... ",
      category: "Todo",
    },
    {
      id: "4",
      title: "Define a new tool for metrics",
      details:
        "By the time a prospect arrieve at your signup page, in most cases, the've alredy evaluat... ",
      category: "Design",
    },
    {
      id: "5",
      title: "Serch for some new investments",
      details:
        "Write the content of the new landing page and prepare the assets for the different section... ",
      category: "Marketing",
    },
  ]);
  const [open, setOpen] = useState(false);

  // const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  let length = notes.length;

  return (
    <Container sx={{ backgroundColor: "#f6f6f6", mb: 1 }}>
      <Grid container spacing="1" direction="column">
        <Grid item>
          <Typography
            className="heading-first"
            fontSize={40}
            fontWeight={500}
            variant="h2"
            sx={{ fontFamily: "Poppins", mt: "60px" }}
          >
            Welcome back,
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h5"
            className="heading-second"
            fontSize={20}
            color="#777777"
            fontWeight={500}
            sx={{ fontFamily: "Poppins", mt: "20px" }}
          >
            you've got {length} tasks coming up in the next days.
          </Typography>
        </Grid>

        <div className="heading-third" style={{ display: "flex" }}>
          <Button onClick={handleToggle}>
            <AddTaskIcon sx={{ color: "#777777" }} />
          </Button>
          <Typography
            sx={{ fontFamily: "Poppins", m: "10px", fontWeight: 500 }}
            color="#aaaaaa"
            variant="h6"
            onClick={handleToggle}
          >
            Add a new task...
          </Typography>
        </div>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            backgroundColor: "#645e5e",
            color: "#fff",
            overflow: "hidden",
            mb: 0.2,
            fontFamily: "Poppins",
          }}
        >
          Write your Daily Task...
        </DialogTitle>
        <Form notes={notes} setNotes={setNotes} handleClose={handleClose} />
      </Dialog>

      <Grid container direction="column" spacing="20">
        <CardItem notes={notes} setNotes={setNotes} />
      </Grid>
    </Container>
  );
}

export default App;
