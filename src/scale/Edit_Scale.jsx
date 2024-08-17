import { useState } from "react";
import "./style_scale.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Stack, Typography, IconButton, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import BalconyIcon from '@mui/icons-material/Balcony';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import BasicModal from "../components/Modal";
import Header from "../components/Header";

function Edit_Scale() {
  const [open, setOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [personToDelete, setPersonToDelete] = useState(null);

  const iconsMinistry = {
    música: <MusicNoteIcon />,
    pregador: <ImportContactsIcon />,
    teatro: <TheaterComedyIcon />,
    diaconato: <BalconyIcon />,
    infantil: <EmojiEmotionsIcon />,
  };

  const getIconByName = (name) => {
    return iconsMinistry[name] || null;
  };

  const [listDays, setListDays] = useState([
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
  ]);

  const handleAddPerson = (dayId, newPerson) => {
    setListDays((prevListDays) =>
      prevListDays.map((day) =>
        day.id === dayId
          ? selectedPerson
            ? {
                ...day,
                listPersons: day.listPersons.map((person) =>
                  person.id === selectedPerson.id ? newPerson : person
                ),
              }
            : { ...day, listPersons: [...day.listPersons, newPerson] }
          : day
      )
    );
    setSelectedPerson(null); // Resetando o estado de pessoa selecionada
  };

  const handleDeletePerson = () => {
    setListDays((prevListDays) =>
      prevListDays.map((day) =>
        day.id === selectedDay.id
          ? {
              ...day,
              listPersons: day.listPersons.filter(
                (person) => person.id !== personToDelete.id
              ),
            }
          : day
      )
    );
    setConfirmOpen(false);
    setPersonToDelete(null);
  };

  const handleOpenModal = (day, person = null) => {
    setSelectedDay(day);
    setSelectedPerson(person);
    setOpen(true);
  };

  const handleOpenConfirmDialog = (day, person) => {
    setSelectedDay(day);
    setPersonToDelete(person);
    setConfirmOpen(true);
  };

  return (
    <>
    <title>Edit Scale</title>
      <BasicModal
        open={open}
        setOpen={setOpen}
        onAddPerson={handleAddPerson}
        day={selectedDay}
        person={selectedPerson}
      />

      <Dialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirmar Exclusão"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tem certeza que deseja excluir {personToDelete?.name} do ministério{" "}
            {personToDelete?.ministry}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmOpen(false)}>Cancelar</Button>
          <Button onClick={handleDeletePerson} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>

      <Header/>

      <div id="content">
        {listDays.map((day) => (
          <Accordion
            key={day.id}
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
                id="day_of_week"
              >
                <div id="date">
                  {day.day.toUpperCase().slice(0, 3) + " - " + day.date}
                </div>
                <div id="date_mobile">
                  {day.day.toUpperCase().slice(0, 3)}
                </div>
                <Button
                  id="add_btt"
                  startIcon={<AddCircleOutlineOutlinedIcon />}
                  sx={{ color: "#FFF" }}
                  onClick={() => handleOpenModal(day)}
                ></Button>
              </Stack>
            </AccordionSummary>
            {day.listPersons.map((person) => (
              <Stack
                key={person.id}
                flexDirection={"row"}
                justifyContent={"space-between"}
              >
                <Stack flexDirection={"row"} alignItems={"center"}>
                  <div className="icon">{getIconByName(person.ministry)}</div>
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
                  flexDirection={"row"}
                  sx={{
                    marginRight: "10px",
                  }}
                >
                  <IconButton
                    sx={{
                      width: "30px",
                      height: "30px",
                      padding: "5px",
                    }}
                    onClick={() => handleOpenConfirmDialog(day, person)}
                  >
                    <DeleteOutlineOutlinedIcon style={{ color: "#FFF" }} />
                  </IconButton>
                  <IconButton
                    sx={{
                      width: "30px",
                      height: "30px",
                      padding: "5px",
                    }}
                    onClick={() => handleOpenModal(day, person)}
                  >
                    <CreateOutlinedIcon style={{ color: "#FFF" }} />
                  </IconButton>
                </Stack>
              </Stack>
            ))}
          </Accordion>
        ))}
      </div>
    </>
  );
}

export default Edit_Scale;
