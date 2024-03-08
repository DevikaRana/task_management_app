import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import DialogActions from "@mui/material/DialogActions";
import { INotes } from "../interfaces";
import AddTaskIcon from "@mui/icons-material/AddTask";

const options = [
  {
    value: "Design",
    label: "Design",
  },
  {
    value: "Marketing",
    label: "Marketing",
  },
  {
    value: "Todos",
    label: "Todo",
  },
  {
    value: "Work",
    label: "Work",
  },
  {
    value: "Reminder",
    label: "Reminder",
  },
  {
    value: "Money",
    label: "Money",
  },
];
interface props {
  notes: Array<INotes>;
  setNotes: React.Dispatch<React.SetStateAction<Array<INotes>>>;
  handleClose: () => void;
}

const style = {
  pt: 0.2,
  my: 1,
  mx: 2.5,
  width: " 90%",
  fontWeight: "600",
  fontFamily: "Poppins",
};

export default function MultilineTextFields({
  notes,
  setNotes,
  handleClose,
}: props) {
  const [title, setTitle] = React.useState("");
  const [details, setDetails] = useState("");
  const [category, setCatogory] = React.useState("Todos");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCatogory(event.target.value);
  };

  const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const detailsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDetails(event.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime().toString(),
      title: title,
      details: details,
      category: category,
    };
    setNotes([...notes, newTodo]);
    setTitle("");
    setDetails("");
  };

  return (
    <div>
      <form noValidate autoComplete="off" onSubmit={submitHandler}>
        <div>
          <TextField
            sx={{ ...style, "&: focus": { outline: "none", border: "none" } }}
            id="filled-multiline-flexible"
            placeholder="Note Title"
            value={title}
            onChange={titleHandler}
            variant="standard"
          />
          <TextField
            sx={{ ...style }}
            id="filled-multiline-static"
            placeholder="Please write here your details..."
            multiline
            rows={4}
            value={details}
            onChange={detailsHandler}
            variant="standard"
          />
        </div>

        <div>
          <TextField
            sx={{ ...style }}
            id="outlined-select-option"
            select
            placeholder="Note Title"
            value={category}
            onChange={changeHandler}
            helperText="Please select the category related to your title"
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <DialogActions>
          <Button
            sx={{
              backgroundColor: "#645e5e",
              "&: hover": { backgroundColor: "#777777" },
            }}
            variant="contained"
            onClick={handleClose}
          >
            Cancel
          </Button>

          <Button
            sx={{
              backgroundColor: "#645e5e",
              "&: hover": { backgroundColor: "#777777" },
            }}
            onClick={handleClose}
            type="submit"
            variant="contained"
          >
            Submit
          </Button>
        </DialogActions>
      </form>
    </div>
  );
}
