import Button from "../ui/Reuseable_Ui/Button";

import {
  InputStyles,
  InputStylesEmail,
  ItemStyle,
  SectionStyle,
} from "./reservationForm/ReservationDropdown";

const BookingForm = () => {
  return (
    <div className="flex text-lg mx-1 justify-center p-5 fixed">
      {/* //todo this is the form starting */}
      <form
        className=" gap-10 px-4 py-6 text-lg bg-slate-50 w-[912px] border my-10 rounded-lg"
        id="form"
      >
        <div className="flex flex-col justify-center items-center  p-3">
          <h1 className=" text-red-500 font-bold text-xl uppercase ">
            Provide details about the car you want to sell
          </h1>
          <p className="capitalize text-base">
            the information you provide will helps us get back to you quicker
          </p>
        </div>

        {/* //todo this is the names */}
        <SectionStyle className=" flex justify-between ">
          {/* this is for first name */}
          <ItemStyle>
            <p>First Name: </p>
            <InputStyles type="text" placeholder="First Name" />
          </ItemStyle>

          {/* this is for last name */}
          <ItemStyle>
            <p>Last Name: </p>
            <InputStyles type="text" placeholder="Last Name" />
          </ItemStyle>
        </SectionStyle>

        {/* //todo this is the email */}
        <SectionStyle>
          <ItemStyle>
            <p>Email: </p>
            <InputStylesEmail
              id="email"
              type="email"
              placeholder="boyz@email.com"
              className="w-full"
            />
          </ItemStyle>
        </SectionStyle>

        <SectionStyle>
          <ItemStyle>
            <p>Location / Address: </p>
            <InputStylesEmail
              id="email"
              type="text"
              placeholder="Input Your Location , Address"
              className="w-full"
            />
          </ItemStyle>
        </SectionStyle>

        {/* //todo this is the phone number and Type of car  */}
        <SectionStyle className="flex justify-between mt-3">
          {/* this is for phone number */}
          <ItemStyle>
            <p>Phone:</p>
            <InputStyles type="tel" placeholder="000 000 000" />
          </ItemStyle>
        </SectionStyle>

        <div>
          <ItemStyle className="p-2">
            <p className="text-base p-2">Input Your ID</p>
            <input type="file" className=" text-sm  py-1 " />
          </ItemStyle>
        </div>

        <div>
          <ItemStyle className="p-2">
            <p className="text-base p-2">Age</p>
            <input
              type="number"
              className=" text-sm max-w-28 px-2 py-1 border rounded-sm"
              placeholder="18 an Above"
            />
          </ItemStyle>
        </div>

        <SectionStyle>
          <ItemStyle>
            <p>Additional information:</p>
            <textarea
              type="text"
              className="w-full border rounded-sm h-24"
            ></textarea>

            {/* <InputStylesEmail placeholder="boyz@email.com" className="w-full" /> */}
          </ItemStyle>
        </SectionStyle>

        <div className=" ml-3 flex align-center gap-2 text-base">
          <p>
            <input type="checkbox" className="h-4 w-4 hover:bg-slate-500 " />
          </p>
          <p>
            By clicking this button, you confirm our privacy terms and
            conditions
          </p>
        </div>

        <SectionStyle>
          <ItemStyle className="flex  gap-8 items-center  text-sm">
            <div>
              <Button>Book pay now</Button>
            </div>

            <div>
              <Button>Book pay later</Button>
            </div>

            {/* <button className=" bg-red-600 text-white px-3 py-1 uppercase hover:bg-stone-900  hover:text-white transition-all mr-auto rounded-md mt-3">
                book now
              </button> */}
          </ItemStyle>
        </SectionStyle>
      </form>
    </div>
  );
};

export default BookingForm;
