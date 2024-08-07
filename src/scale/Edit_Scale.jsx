import { useState } from "react";
import "./style_scale.css";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Stack, Typography, IconButton, Button } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import BalconyIcon from '@mui/icons-material/Balcony';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ChurchOutlinedIcon from '@mui/icons-material/ChurchOutlined';
import MenuIcon from '@mui/icons-material/Menu';

function Edit_Scale() {
  const [count, setCount] = useState(0);

  const iconsMinistry = {
    música: <MusicNoteIcon />,
    pregador: <ImportContactsIcon />,
    teatro: <TheaterComedyIcon/>,
    diaconato: <BalconyIcon/>,
    infantil: <EmojiEmotionsIcon/>,
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
          ministry: "infantil",
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
          ministry: "teatro",
          function: "líder",
        },
        {
          id: 2,
          img: "",
          name: "Jeanderson",
          ministry: "diaconato",
          function: "tecladista",
        },
      ],
    },
    {
      id: 3,
      day: "terça",
      date: "08/08/2024",
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
      id: 4,
      day: "quarta",
      date: "09/08/2024",
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
      id: 5,
      day: "quinta",
      date: "10/08/2024",
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
      id: 6,
      day: "sexta",
      date: "11/08/2024",
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
      id: 7,
      day: "sábado",
      date: "12/08/2024",
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
    }
  ];

  return (
    <>

    <header className="head sticky">
      <img class="image" src="./images/levit.png" alt="LevitApp"/>
      <Button style={{
        fontSize: "1em"
      }} className="btt" variant="contained" startIcon={<HomeOutlinedIcon/>}>Home</Button>
      <Button className="btt" variant="contained" startIcon={<NoteAltOutlinedIcon/>} >Editar escalação</Button>
      <Button className="btt" variant="contained" startIcon={<ChurchOutlinedIcon/>}>Ministérios</Button>
      <Button className="btt" variant="contained" startIcon={<CalendarMonthOutlinedIcon/>}>Calendário</Button>
      <Button className="btt" variant="contained" startIcon={<SettingsOutlinedIcon/>}>Configurações</Button>
    </header>

      <header id="mobile_header">
        <IconButton id="menu_icon" sx={{
          p: 0,
          border: 'none',
          '&:focus': {
            outline: 'none',
          },
        }}
        edge="start"
        color="inherit"
        aria-label><MenuIcon sx={{fontSize: "40px"}}/></IconButton>
      </header>

    <Stack class="logo_mobile">
      <img id="logo_mobile_image" src="./images/levit_black.png" alt="Logo Levit" />
    </Stack>

      <div id='content'>
        <Stack className="above_accordions" >
          <Typography id="above_accordions_title">Escala da semana</Typography>
          <Button id="add_btt"
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
                  id='day_of_week'
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
                        id="ministry"
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

export default Edit_Scale;
