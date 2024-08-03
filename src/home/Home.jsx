import { useState } from "react";
import "./style-home.css";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Stack, Box, Typography, IconButton, Button } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

function Home() {
  const [count, setCount] = useState(0);

  const iconsMinistry = {
    música: <MusicNoteIcon />,
    pregador: <ImportContactsIcon />,
  };

  const getIconByName = (name) => {
    return iconsMinistry[name] || null;
  };

  const listDays = [
    {
      id: 1,
      day: "domingo",
      date: "06/08/2024",
      listPersons: [
        {
          id: 1,
          img: "",
          name: "Elias",
          ministry: "música",
          function: "baterista",
        },
        {
          id: 2,
          img: "",
          name: "Jeanderson",
          ministry: "música",
          function: "tecladista",
        },
        {
          id: 3,
          img: "",
          name: "Werlleson",
          ministry: "pregador",
          function: "tecladista",
        },
      ],
    },
    {
      id: 2,
      day: "segunda",
      date: "07/08/2024",
      listPersons: [
        {
          id: 1,
          img: "",
          name: "Elias",
          ministry: "música",
          function: "baterista",
        },
        {
          id: 2,
          img: "",
          name: "Jeanderson",
          ministry: "música",
          function: "tecladista",
        },
      ],
    },
  ];

  return (
    <>
      <div>
        <Stack
          display={"flex"}
          direction={"row"}
          justifyContent={"space-between"}
          marginBottom={"10px"}
        >
          <Typography variant="h4">Escala da semana</Typography>
          <Button
            startIcon={<AddCircleOutlineOutlinedIcon />}
            sx={{ color: "#FFF" }}
          >
            Adicionar
          </Button>
        </Stack>
        {listDays.map((day) => {
          return (
            <Accordion
              sx={{
                backgroundColor: "#2130B9",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#FFF" }} />}
                aria-controls="panel2-content"
                id="panel2-header"
                style={{ color: "#FFFFFF", fontWeight: "bold" }}
              >
                <Stack
                  flexDirection={"row"}
                  width="100%"
                  justifyContent={"space-between"}
                >
                  {day.day.toUpperCase().slice(0, 3)}
                </Stack>
              </AccordionSummary>
              {day.listPersons.map((person) => {
                return (
                  <Stack flexDirection={"row"} justifyContent={"space-between"}>
                    <Stack flexDirection={"row"} alignItems={"center"}>
                      <div className="icon">
                        {getIconByName(person.ministry)}
                      </div>
                      <Typography
                        variant="h6"
                        color={"#FFFFFF"}
                        marginRight={"10px"}
                      >
                        {person.ministry[0].toUpperCase() +
                          person.ministry.substring(1)}
                      </Typography>
                      <Typography variant="h6" color={"#FFFFFF"}>
                        {person.name}
                      </Typography>
                    </Stack>

                    <Stack
                      flexDirection={"row"} sx={{
                        marginRight: "10px"
                      }}
                    >
                      <IconButton sx={{
                        width: "30px",
                        height: "30px",
                        padding: "5px"
                      }}> 
                        <DeleteOutlineOutlinedIcon style={{ color: "#FFF" }} />
                      </IconButton>
                      <IconButton sx={{
                        width: "30px",
                        height: "30px",
                        padding: "5px"
                      }}>
                        <CreateOutlinedIcon style={{ color: "#FFF" }} />
                      </IconButton>
                    </Stack>
                  </Stack>
                );
              })}
            </Accordion>
          );
        })}
      </div>
    </>
  );
}

export default Home;

{
  /* <AccordionDetails>

<Stack flexDirection={"row"} justifyContent={"space-between"}>
  <Stack flexDirection={"row"}>
    <img
      style={{ width: "40px" }}
      src="data:image/jpeg;base64,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"
      alt=""
    />
    <p>elias ferro</p>
    <p>musico / baterista</p>
  </Stack>

  <Stack flexDirection={"row"}>
    <DeleteOutlineOutlinedIcon style={{ color: "red" }} />
    <CreateOutlinedIcon style={{ color: "blue" }} />
  </Stack>
</Stack>
</AccordionDetails> */
}
