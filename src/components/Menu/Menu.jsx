import './Menu.css';

const Menu = ({ name, img, description }) => {
  return (
    <div className="menuItem">
      <h3 className='menuName'>{name}</h3>
      <img src={img} alt={name} className='imgMenu'/>
      <h4 className='menuDescription'>{description}</h4>
    </div>
  );
};

export default Menu;
