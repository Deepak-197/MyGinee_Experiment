import { ChangeEvent, useRef, useState } from "react";
import "./Navbar.css";
import { Icon, Button, useDisclosure, Avatar } from '@chakra-ui/react'
import { MdHome, MdShoppingCart, MdOutlineLocalGroceryStore,
  MdOutlineYoutubeSearchedFor, MdClear, MdViewList,MdSearch
} from 'react-icons/md';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
// import { FaUserAlt } from "react-icons/fa";

// const CFaUserAlt = chakra(FaUserAlt);

const cars = [
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/abarth1.png",
    name: "Abarth",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/ac-cars.png",
    name: "AC",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/acura.png",
    name: "Acura",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/aixam.png",
    name: "Aixam",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/alfa_romeo.png",
    name: "Alfa Romeo",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/ariel.png",
    name: "Ariel",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/10/arrinera-logo.png",
    name: "Arrinera",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/aston_martin.png",
    name: "Aston Martin",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/audi.png",
    name: "Audi",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/bentley.png",
    name: "Bentley",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/bmw.png",
    name: "BMW",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/bugatti.png",
    name: "Bugatti",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/buick.png",
    name: "Buick",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/cadillac.png",
    name: "Cadillac",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/caterham.png",
    name: "Caterham",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/chevrolet.png",
    name: "Chevrolet",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/chrysler.png",
    name: "Chrysler",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/citroen.png",
    name: "Citroën",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/corvette.png",
    name: "Corvette",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/dacia.png",
    name: "Dacia",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/daf.png",
    name: "Daf",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/daihat.png",
    name: "Daihatsu",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/dodge.png",
    name: "Dodge",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/10/drmotor.png",
    name: "DR Motor",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/elfin.png",
    name: "Elfin",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/ferrari.png",
    name: "Ferrari",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/fiat.png",
    name: "Fiat",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/ford.png",
    name: "Ford",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/gaz.png",
    name: "Gaz",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/geely.png",
    name: "Geely",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/gillet.png",
    name: "Gillet",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/ginetta.png",
    name: "Ginetta",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/gm.png",
    name: "General Motors",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/gmc.png",
    name: "GMC",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2013/10/Great-Wall.png",
    name: "Great Wall",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/gumpert.png",
    name: "Gumpert",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/10/hennessey.png",
    name: "Hennessey logo",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/10/holden.png",
    name: "Holden",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/honda.png",
    name: "Honda",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/hummer.png",
    name: "Hummer",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/hyundai.png",
    name: "Hyundai",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/inf.png",
    name: "Infiniti",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/isuzu.png",
    name: "Isuzu",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/jagu.png",
    name: "Jaguar",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/jeep.png",
    name: "Jeep",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/joss.png",
    name: "Joss",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/kia.png",
    name: "Kia",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/koenigsegg.png",
    name: "Koenigsegg",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/lada.png",
    name: "Lada",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/lamb.png",
    name: "Lamborghini",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/lancia.png",
    name: "Lancia",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/land-rover.png",
    name: "Land Rover",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/lexus.png",
    name: "Lexus",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/linc.png",
    name: "Lincoln",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/lotus.png",
    name: "Lotus",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/11/luxgen-logo.png",
    name: "Luxgen",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/11/mahindra.png",
    name: "Mahindra",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/12/Maruti_Suzuki.png",
    name: "Maruti Suzuki",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/mase.png",
    name: "Maserati",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/maybach.png",
    name: "Maybach",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/mazda.png",
    name: "Mazda",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/mclaren.png",
    name: "Mclaren",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/marchedrs.png",
    name: "Mercedes",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/mg.png",
    name: "MG",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/mini.png",
    name: "Mini",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/mitub.png",
    name: "Mitsubishi",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/morgan.png",
    name: "Morgan Motor",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/mustang.png",
    name: "Mustang logo",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/nissan.png",
    name: "Nissan",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/noble.png",
    name: "Noble",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/opel.png",
    name: "Opel",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/pagani.png",
    name: "Pagani",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/panoz.png",
    name: "Panoz",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/perodua.png",
    name: "Perodua",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/peug.png",
    name: "Peugeot",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/piaggio.png",
    name: "Piaggio",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/pininfarina.png",
    name: "Pininfarina",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/porsche.png",
    name: "Porsche",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/proton.png",
    name: "Proton",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/renault.png",
    name: "Renault",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/reva.png",
    name: "Reva",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2012/01/rimac-150x150.png",
    name: "Rimac",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/rolls-royce.png",
    name: "Rolls Royce",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/ruf.png",
    name: "Ruf logo",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/saab.png",
    name: "Saab",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/scania.png",
    name: "Scania",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/scion.png",
    name: "Scion",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/seat.png",
    name: "Seat",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/10/shelby.png",
    name: "Shelby",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/skoda.png",
    name: "Skoda",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/smart.png",
    name: "Smart",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/spyker.png",
    name: "Spyker",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/ssangyong.png",
    name: "Ssangyong",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/10/ssc.png",
    name: "SSC",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/subaru.png",
    name: "Subaru",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/suzuki.png",
    name: "Suzuki",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/tata.png",
    name: "Tata",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/tatra.png",
    name: "Tatra",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/tesla.png",
    name: "Tesla",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/toyota.png",
    name: "Toyota",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/1176359_187686584745478_1792749640_n.jpg",
    name: "Tramontana",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/troller.png",
    name: "Troller",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/tvr.png",
    name: "TVR",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/uaz.png",
    name: "UAZ",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/vandenbrink_design.png",
    name: "Vandenbrink",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/vauxhall.png",
    name: "Vauxhall",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/vector_motors.png",
    name: "Vector Motors",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/venturi.png",
    name: "Venturi",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/volkswagen.png",
    name: "Volkswagen",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/volvo.png",
    name: "Volvo",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/wiesmann.png",
    name: "Wiesmann",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/zagato.png",
    name: "Zagato",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/zaz.png",
    name: "Zaz",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/zil.png",
    name: "Zil",
  },
];

 const Navbar = () => {
  const [cart, setCart] = useState(0)
  const [Open, setOpen] = useState("");
  const [search, setSearch] = useState("");
  const [isSection, setIsSection] = useState("");

  // chakra 
  const [size, setSize] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }

  const sizes = ['xs']                        // , 'sm', 'md', 'lg', 'xl', 'full'

  const inputRef = useRef(null);   // <HTMLInputElement>
  const hamburgerRef = useRef(null); 


 const handlecart = () => {
  setCart(cart + 1)
 }

 const handleHamburger = () => {
    if(!isSection){
      hamburgerRef.current?.focus();
    }
    setIsSection(!Boolean(isSection) ? "open" : "");
 };

  const handleSearch = () => {
    if (!Open) {
      inputRef.current?.focus();
    }
    setOpen(!Boolean(Open) ? "open" : "");
  };

  const handleChange = (e) => {            // : ChangeEvent<HTMLInputElement>
      setSearch(e.target.value);
  };

  const filteredCars = cars.filter(
    (car) =>
      search.length && car.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="nav">
      {/* <h2>Dashboard</h2> */}
      <img width={150} src="data:image/png;base64,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" />
      <div className="nav-items">
        <button className="nav-button uil uil-bars"><Icon as={MdHome} w={8} h={8} color='white' /></button>
        <button className="nav-button uil uil-bars"><Avatar color="white"  w={8} h={8} /></button>
        <div className="wrapper">
          <div className={`search ${Open}`}>
            <input
              ref={inputRef}
              onChange={handleChange}
              placeholder="Make a wish"
              type="text"
             />
            <button
              onClick={handleSearch}
              className={`nav-button uil uil-bars`}
            >{Open ? <Icon as={MdClear} w={8} h={8} color='white' /> : <Icon as={MdSearch} w={7} h={7} color='white' />}</button>
          </div>
          <div className={`items ${Open}`}>
            {Boolean(filteredCars.length) &&
              filteredCars?.map(
                (car, index) =>
                  index < 3 && <button key={car.name}>{car.name}</button>
              )}
          </div>
        </div>
        
            <button className="nav-button uil uil-bars" id="navbar-cart-count" onClick={handlecart}><p className="cart">{cart}</p><Icon as={MdShoppingCart} w={8} h={8} mt={-6} color='white'/></button>
            
          
             
        {sizes.map((size) => (
        <button
          onClick={() => handleClick(size)}
          key={size}
          // m={4}
        >{<Icon as={MdViewList} w={8} h={8} color='white' />}</button>              //`Open ${size} Drawer`
      ))}

      <Drawer onClose={onClose} isOpen={isOpen} size={size} w={"5rem"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{`${size} drawer contents`}</DrawerHeader>
          <DrawerBody>
              <p>Register</p>
              <hr />
              <p>Login</p>
              <hr />
              <p>Home</p>
              <hr />
              <p>Services</p>
              <hr />
              <p>Deals</p>
              <hr />
              <p>About Us</p>
              <hr />
              <p>Contacts</p>
              <hr />
              <p>Logout</p>
              <hr />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      </div>
    </div>
  );
};

export default Navbar