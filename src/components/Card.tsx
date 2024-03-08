import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { INotes } from "../interfaces";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
interface props {
  notes: Array<INotes>;
  setNotes: React.Dispatch<React.SetStateAction<Array<INotes>>>;
}

const CardItem = ({ notes, setNotes }: props) => {
  const deleteHandler = (id: string) => {
    setNotes(
      notes.filter((note) => {
        return id !== note.id;
      })
    );
  };

  return (
    <>
      {notes.map((note) => {
        return (
          <Grid item key={note.id}>
            <Card elevation={1} sx={{ display: "flex", p: 0 }}>
              <IconButton
                sx={{
                  display: "flex",
                  width: 50,
                  borderRadius: " 0%",
                  height: "50%",
                  mt: 2,
                }}
                onClick={() => deleteHandler(note.id)}
              >
                <DeleteIcon />
              </IconButton>
              <CardContent sx={{ p: 0, pt: 1 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    fontFamily: "Poppins",
                    mt: "8px",
                    mb: "3px",
                  }}
                >
                  {note.title}
                </Typography>
                <Typography
                  sx={{
                    pt: 1,
                    pb: 1,
                    my: "3px",
                    fontSize: "16px",
                    fontWeight: "400",
                    fontFamily: "Poppins",
                  }}
                  variant="h5"
                  color="#777777"
                >
                  {note.details}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    display: "inline-block",
                    border: "solid black 2px",
                    borderRadius: "4px",
                    fontSize: "14px",
                    fontWeight: "400",
                    p: "5px",
                    fontFamily: "Poppins",
                    color: " #777777",
                  }}
                >
                  {note.category}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </>
  );
};

export default CardItem;
