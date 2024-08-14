import styled from "styled-components";
import { CiCircleQuestion } from "react-icons/ci";
import { useEffect, useState } from "react";
import ReservationDropdown from "./ReservationDropdown";
import { useNavigate } from "react-router-dom";

const ReservationFormStyles = styled.div({
  backgroundColor: "white",
  width: "1000px",
  margin: "3% 0px",
  padding: "30px 40px",
  borderRadius: "10px",
});

const ReservationForm = () => {
  const [showReservationForm, setShowReservationForm] = useState(false);

  const [showInformation, setShowInformation] = useState(false);
  const [searchCar, setSearchCar] = useState("");
  const navigate = useNavigate();

  function handleClick(e) {
    const closestParent = e.target.closest("form");
    if (closestParent?.id === "form") return;
    setShowReservationForm(false);
  }

  useEffect(() => {
    document.body.addEventListener("click", handleClick, true);
    return () => document.body.removeEventListener("click", handleClick);
  }, [showReservationForm]);

  function onHandleInformation() {
    setShowInformation((show) => !show);
  }

  function handleSearch() {
    navigate(`/${searchCar}`);
  }

  return (
    <ReservationFormStyles>
      <h1 className="font-extrabold text-4xl py-5">Reserve a Vehicle</h1>
      <label className="flex items-center justify-between ">
        <p className="font-semibold text-sm">
          Pic-up & Return Location ( City, State or Airport )*
        </p>
        <span className="text-red-600 italic"> * Required Field</span>
      </label>

      <input
        readOnly
        placeholder="Click to start a reservation"
        className="w-full h-10 border-gray-200 border placeholder:pl-4 px-5 "
        onClick={() => {
          setShowReservationForm(true);
        }}
      />

      {showReservationForm && <ReservationDropdown />}

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 text-sm mt-5 mb-5 ">
          <button
            onClick={() => setShowReservationForm(true)}
            className="booking_btn p-[5px]"
          >
            book as guest
          </button>

          <div className="relative">
            {showInformation && (
              <div className="absolute bottom-5 w-80 ml-5 bg-blue-300 p-6 rounded-r-full rounded-t-full ">
                <p>
                  booking as guest is for everyone, want to enjoy our amazing
                  discount and offers ?
                  <strong>
                    please create and account to enjoy our discount
                  </strong>{" "}
                </p>
              </div>
            )}
            <CiCircleQuestion
              onClick={onHandleInformation}
              size={20}
              color="green"
            />
          </div>
        </div>

        {/* FEATURES 
        
        1 changed this element from a div to be a form because it is not ideal to put select elements outside of forms.

        2 search button is disabled until a user selects their category

        3 There is no route for all-cars path. 

        4 to fix this 404 route error, go to the all cars select option element in this form and replace the all-cars value to the path you want to route to

        */}
        <form className="text-xs text-white p-1">
          <label className="text-stone-900">choose vehicle category</label>

          <select
            className=" border p-1  bg-green-600 text-xs "
            onChange={(e) => setSearchCar(e.target.value)}
          >
            <option value="">none</option>
            <option value="all-cars">all cars</option>
            <option value="all-vehicle-category">all vehicle categories</option>
          </select>
          <button
            disabled={searchCar ? false : true}
            type="button"
            onClick={handleSearch}
            className={`${!searchCar && "cursor-not-allowed opacity-50"}  border border-r-none px-2 py-1 bg-red-500 font-semibold ring-offset ring-1 "
          `}
          >
            Search
          </button>
        </form>
      </div>
    </ReservationFormStyles>
  );
};

export default ReservationForm;
