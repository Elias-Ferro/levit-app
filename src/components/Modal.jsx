import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, setOpen, onAddPerson, day, person }) {
  const [name, setName] = React.useState('');
  const [ministry, setMinistry] = React.useState('');
  const [role, setRole] = React.useState('');

  React.useEffect(() => {
    if (!person) {
      setName('');
      setMinistry('');
      setRole('');
    } else {
      setName(person.name);
      setMinistry(person.ministry);
      setRole(person.function);
    }
  }, [person]);

  const handleClose = () => setOpen(false);

  const handleSavePerson = () => {
    if (day) {
      const newPerson = {
        id: person ? person.id : Date.now(), 
        img: "",
        name: name,
        ministry: ministry,
        function: role,
      };
      onAddPerson(day.id, newPerson);
      handleClose();
    }
  };

  const ministries = ["música", "infantil", "pregador"];

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {person ? "Editar Pessoa" : "Adicionar Pessoa"}
        </Typography>
        <TextField
          label="Nome"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <FormControl fullWidth margin="normal">
          <InputLabel id="ministry-select-label">Ministério</InputLabel>
          <Select
            labelId="ministry-select-label"
            value={ministry}
            label="Ministério"
            onChange={(e) => setMinistry(e.target.value)}
          >
            {ministries.map((ministry) => (
              <MenuItem key={ministry} value={ministry}>
                {ministry[0].toUpperCase() + ministry.substring(1)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Função"
          variant="outlined"
          fullWidth
          margin="normal"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <Button onClick={handleSavePerson} variant="contained" sx={{ mt: 2 }}>
          {person ? "Salvar" : "Adicionar"}
        </Button>
      </Box>
    </Modal>
  );
}
