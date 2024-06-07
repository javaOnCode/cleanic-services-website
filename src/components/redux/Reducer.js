import RoniLavine from "../../images/RoniLavine.webp";
import ShonadEvian from "../../images/ShonadEvian.webp";
import YulMclean from "../../images/YulMclean.webp";
import JadeLeno from "../../images/JadeLeno.webp";
import LewisBaraka from "../../images/LewisBaraka.webp";
import CoralTyde from "../../images/CoralTyde.webp";
import deepCleaning from "../../images/deepCleaning.webp";
import furnitureCleaning from "../../images/furnitureCleaning.webp";
import kitchenCleaning from "../../images/kitchenCleaning.webp";
import moveInOut from "../../images/moveInOut.webp";
import laundry from "../../images/laundry.webp";
import windowCleaning from "../../images/windowCleaning.webp";
import officeCleaning from "../../images/officeCleaning.webp";

export const initialState = {
  stellarTeam: [
    {
      img: RoniLavine,
      name: "Roni Lavine",
      position: "CEO",
    },
    {
      img: ShonadEvian,
      name: "Shonad Evian",
      position: "CTO",
    },
    {
      img: YulMclean,
      name: "Yul Mclean",
      position: "Cleaner",
    },
    {
      img: JadeLeno,
      name: "Jade Leno",
      position: "Cleaner",
    },
    {
      img: LewisBaraka,
      name: "Lewis Baraka",
      position: "Cleaner",
    },
    {
      img: CoralTyde,
      name: "Coral Tyde",
      position: "Cleaner",
    },
  ],
  services: [
    {
      id: "1",
      img: deepCleaning,
      name: "Deep Cleaning",
      price: "100",
      desc: "Thorough cleaning in every nook and cranny of your home.",
    },
    {
      id: "2",
      img: furnitureCleaning,
      name: "Furniture Cleaning",
      price: "150",
      desc: "Ensuring your furniture is refreshed, sanitized, and looks as good as ...",
    },
    {
      id: "3",
      img: kitchenCleaning,
      name: "Kitchen Cleaning",
      price: "200",
      desc: "Leaving your kitchen spotless and hygienic.",
    },
    {
      id: "4",
      img: moveInOut,
      name: "Move In/Move Out",
      price: "300",
      desc: "Hassle-free cleaning for a smooth transition.",
    },
    {
      id: "5",
      img: laundry,
      name: "Laundry",
      price: "5 per LB",
      desc: "Washing, folding and ironing, providing you with neatly pressed clothe...",
    },
    {
      id: "6",
      img: windowCleaning,
      name: "Window Cleaning",
      price: "100",
      desc: "Crystal-clear results, enhancing natural light and a sparkling view.",
    },
    {
      id: "7",
      img: officeCleaning,
      name: "Office Cleaning",
      price: "300",
      desc: "Tailored to maintain a clean workspace, promoting a productive environ...",
    },
  ],
  itemChosen: null,
  users: [],
  loggedInUser: null,
  accountStatus: "My Account",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_SERVICE":
      const chosenService = state.services[action.payload];
      localStorage.setItem("itemChosen", JSON.stringify(chosenService));
      window.location.href = `/services/${action.payload}`;
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
      return {
        ...state,
        itemChosen: state.itemChosen,
      };
    case "REGISTER_USER":
      const updatedUsers = [...state.users, action.payload];
      localStorage.setItem("newUser", JSON.stringify(updatedUsers));
      return {
        ...state,
        users: updatedUsers,
      };
    case "LOGIN_USER":
      const usersSaved = JSON.parse(localStorage.getItem("newUser"));
      const loggedInUser = usersSaved.find(
        (user) =>
          user.firstname === action.payload.firstname &&
          user.password === action.payload.password
      );
      if (loggedInUser) {
        alert("You succesfully logged into your account");
        return {
          ...state,
          loggedInUser: action.payload,
        };
      } else {
        alert("An error occurred while loggin in. \nUser not found...");
        return state;
      }

    default:
      return state;
  }
};
