import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { db } from '../../../firebase/config';
import MenuList from '../MenuList/MenuList';
import SpinnerComponent from '../SpinnerComponent/SpinnerComponent';

const MenuConteiner = () => {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      setLoading(true);
      try {
        const productosRef = collection(db, "menu");

        const q = categoryId
          ? query(productosRef, where("category", "==", categoryId))
          : productosRef;


        const resp = await getDocs(q);


        const docs = resp.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        setProductos(docs);

      } catch (error) {
        console.error("Error al traer productos:", error);
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };

    fetchProductos();
  }, [categoryId]);

  if (loading) return <SpinnerComponent/> ;

  if (productos.length === 0) return <p>No hay productos disponibles</p>;

  return <MenuList productos={productos} />;
};

export default MenuConteiner;


