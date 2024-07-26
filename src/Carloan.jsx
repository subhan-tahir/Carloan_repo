import React, { useEffect, useState } from "react";
import carPic from "./assets/car2.png";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaSun } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";
import { toast } from "react-toastify";
const Carloan = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState("");
  const [cutPrice, setCutPrice] = useState("");
  const [remaPrice, setRemaPrice] = useState("");
  const [selectedOption, setSelectedOption] = useState("Select Installment");
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("Dark");
  const [installPrice, setInstallPrice] = useState("");
  const dropdownItems = ["3 Years", "5 Years", "7 Years"];

  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
 
  let clickHandler = (e) => {
    e.preventDefault();
    if (price === "") {
      toast.error("Please enter Price");
    }
    else if(selectedOption === "Select Installment"){
      toast.error("Please select installment option")
    }
     else {
      toast.success("You have scuuessfully get 30% on car")
      const calculatedCutPrice = (30 / 100) * parseFloat(price);
      const calculatedRemaPrice = price - calculatedCutPrice;
      setCutPrice(calculatedCutPrice.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
      setRemaPrice(calculatedRemaPrice.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    }
  };
  /*const selectOption = (item) => {
    setSelectedOption(item);
   if(item === "3 Years"){
    const calculatedinstallPrice = remaPrice/3
    console.log(calculatedinstallPrice)
    setInstallPrice(calculatedinstallPrice)
   }
    setIsOpen(false);
  };*/
  const selectOption = (item) => {
    setSelectedOption(item);
    const remaPriceNumber = parseFloat(remaPrice.replace(/,/g, ""));
    if (!isNaN(remaPriceNumber)) {
      let years;
      if (item === "3 Years") years = 3;
      else if (item === "5 Years") years = 5;
      else if (item === "7 Years") years = 7;
      const calculatedInstallPrice = remaPriceNumber / (years * 12); // Divide by months
      setInstallPrice(
        calculatedInstallPrice
          .toFixed(0)
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
    }
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setOpen(!open);
    setTheme(theme === "Dark" ? "light" : "Dark");
  };
  return (
    <>
      <div className="flex  justify-center items-center ">
        <div
          className={`absolute top-4  border w-[450px] h-auto flex flex-col justify-between items-center p-4 
    shadow-2xl shadow-black ${
      theme === "Dark" ? "bg-zinc-600" : "bg-white"
    } transition-all`}
        >
          <h1
            className="text-4xl font-bold  
     outline-dotted m-2 w-full text-center p-2 bg-slate-50"
          >
            Car Loan
          </h1>
          <div className="m-2  flex">
            <img src={carPic} alt="" className="p-2 w-[350px]" />
            <div className=" w-20 absolute left-0 " onClick={toggleTheme}>
              <button className="p-4 rounded-md bg-black text-[20px]">
                {open ? (
                  <FaSun className="text-white transition-all duration-1000" />
                ) : (
                  <IoMoon className="text-white transition-all duration-1000 " />
                )}
              </button>
            </div>
          </div>
          <div className="flex flex-col m-2 p-2 gap-4 w-full ">
            <input
              type="text"
              name=""
              id=""
              className={`text-[20px] font-bold p-2 border-none outline-none ${
                theme === "Dark" ? "bg-white text-black" : "bg-black text-white"
              } focus:border-sky-500 focus:ring-2 focus:rounded-[5px] transition-all focus:ring-sky-500`}
              placeholder="Enter your price & Get 30%"
              onChange={(e) => setPrice(e.target.value)}
            />

            <input
              type="text"
              name=""
              id=""
              className={`text-[20px] font-bold p-2 border-none outline-none placeholder:text-[18px] placeholder:text-slate-800 placeholder:font-normal ${
                theme === "Dark" ? "bg-white text-black" : "bg-black text-white"
              }`}
              readOnly
              value={`30% of your price is:${cutPrice} `}
              placeholder="30% of your price"
            />
            <input
              type="text"
              name=""
              id=""
              className={`text-[20px] font-bold p-2 border-none outline-none ${
                theme === "Dark" ? "bg-white text-black" : "bg-black text-white"
              }`}
              readOnly
              placeholder="Your remaining Price is:"
              value={`Your Remaining price is: ${remaPrice} `}
            />

            <div className="flex relative">
              <button
                className="bg-white hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                onClick={toggleDropdown}
              >
                {selectedOption}
                <MdOutlineArrowDropDown
                  className={`${!isOpen ? "rotate-0" : "rotate-180"} text-2xl`}
                />
                {/* Dropdown icon */}
              </button>
              <ul
                className={`absolute right-0 top-14 ${
                  isOpen ? "block" : "hidden"
                } bg-white text-gray-800 pt-1 w-full`}
              >
                {dropdownItems.map((item, index) => (
                  <li
                    key={index}
                    className="hover:bg-gray-200 py-2 px-4 cursor-pointer w-full"
                    onClick={() => selectOption(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <input
              type="text"
              name=""
              id=""
              className={`text-[20px] font-bold p-2 border-none outline-none ${
                theme === "Dark" ? "bg-white text-black" : "bg-black text-white"
              }`}
              readOnly
              placeholder="Your remaining Price is:"
              value={`Monthly Installment is: ${installPrice} `}
            />
            <button
              className="bg-gray-950 rounded-full p-2 border-none outline-none  text-white duration-500  
           transition-all hover:scale-[1.1] hover:bg-gradient-to-r from-cyan-500 to-blue-500"
              onClick={clickHandler}
            >
              Click and get Offer 30%
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carloan;
