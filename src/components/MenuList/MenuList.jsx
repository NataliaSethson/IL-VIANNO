// MenuList.jsx
import { Box } from '@mui/system';
import Menu from "../Menu/Menu";

const MenuList = ({ productos }) => (
  <Box 
    sx={{ 
      display: 'grid', 
      gap: 2, 
      gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' } 
    }}
  >
    {productos.map(producto => (
      <Menu key={producto.id} {...producto} />
    ))}
  </Box>
);

export default MenuList;
