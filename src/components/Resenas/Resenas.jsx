import { Avatar, Rating, Box, Typography } from '@mui/material';
import './Resenas.css';

const Reseña = ({ usuario, fotoUrl, comentario, rating }) => {
  return (
<Box
  display="flex"
  alignItems="center"
  gap={4}
  mb={5}
  p={{ xs: 2, sm: 5 }}     
  border="3px solid #ddd"
  borderRadius="10px"
  boxShadow={7}
  minHeight={{ xs: 'auto', sm: 300 }}   
  sx={{
    width: '100%',
    maxWidth: 600,
    flexDirection: { xs: 'column', sm: 'row' },
    textAlign: { xs: 'center', sm: 'left' },
    boxSizing: 'border-box'
  }}
>

      <Avatar
        src={fotoUrl}
        alt={usuario}
        sx={{
          width: { xs: 120, sm: 200 },  
          height: { xs: 120, sm: 200 },
          marginBottom: { xs: 2, sm: 0 },
        }}
      />
      <Box>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          sx={{ fontSize: { xs: '20px', sm: '30px' } }}
        >
          {usuario}
        </Typography>
        <Rating value={rating} readOnly size="large" />
        <Typography
          variant="body2"
          sx={{ fontSize: { xs: '16px', sm: '20px' } }}
        >
          {comentario}
        </Typography>
      </Box>
    </Box>
  );
};

const Resenas = () => {
  const reseñas = [
    { id: 1, usuario: 'Ana West', fotoUrl: '/ana.jpg', comentario: 'Excelente servicio, el menú muy bien logrado.', rating: 5 },
    { id: 2, usuario: 'Juan Silva', fotoUrl: '/juan.jpg', comentario: 'Muy recomendable! Precio-calidad inmejorable.', rating: 4 },
    { id: 3, usuario: 'Pedro Ribeiro', fotoUrl: '/pedro.jpg', comentario: 'Podría mejorar, larga espera, no lo vale...', rating: 3 },
    { id: 4, usuario: 'Frida Gensell', fotoUrl: '/frida.jpg', comentario: 'Excelente servicio!! atención, ubicación.', rating: 5 },
    { id: 5, usuario: 'Bruno Vildil', fotoUrl: '/bruno.jpg', comentario: 'Muy recomendable!!!. Prueben el Gelato !!.', rating: 5 },
    { id: 6, usuario: 'Gonzalo Balti', fotoUrl: '/gonzalo.jpg', comentario: 'Podría mejorar, me gustó el vino de la casa.', rating: 3.5 },
  ];

  return (
    <Box>
      <Typography variant="h5" mb={2} className="titleReserv">
        Opiniones de nuestros clientes
      </Typography>
      <div className="conteinerResenas">
        {reseñas.map((r) => (
          <Reseña
            key={r.id}
            usuario={r.usuario}
            fotoUrl={r.fotoUrl}
            comentario={r.comentario}
            rating={r.rating}
          />
        ))}
      </div>
    </Box>
  );
};

export default Resenas;
