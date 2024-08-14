import styled from "styled-components";

import { useForm } from "react-hook-form";
import FormErrors from "../../FormErrors";

import { useNavigate } from "react-router-dom";

import { carMakeList } from "../../../../DB/Local_Data_Base";

export const InputStyles = styled.input({
  border: "1px solid #d2d2d2",

  borderRadius: "5px",
  fontSize: "14px",
  padding: "0px 5px",
  width: "300px",
});

export const InputStylesEmail = styled.input({
  border: "1px solid #d2d2d2",
  borderRadius: "5px",
  fontSize: "14px",
  padding: "0px 5px",
});

export const Select = styled.select({
  border: "1px solid #d2d2d2",
  borderRadius: "3px",
  fontSize: "14px",
  padding: "5px ",
  width: "300px",
});

export const SectionStyle = styled.div({
  padding: "5px",
  lineHeight: "32px",
});

export const ItemStyle = styled.div({
  margin: "8px 5px",
});

export const Label = styled.label({
  display: "block",
});

function ReservationDropdown() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const s = useForm();
  console.log(s);

  function handleForm(data) {
    //we destructure the category from the data that we receive from our form
    const { category } = data;

    //we then navigate to the selected vehicle category
    navigate(`all-vehicle-category/${category}`);

    console.log(data);

    //we will then use this data where it is needed in the future
  }

  return (
    <div className="flex text-lg mx-1 absolute justify-center ">
      <form
        onSubmit={handleSubmit(handleForm)}
        className=" gap-10 px-4 py-6 text-lg bg-slate-50 w-[912px] border rounded-b-lg"
        id="form"
      >
        <SectionStyle className=" flex justify-between ">
          <ItemStyle>
            <Label htmlFor="firstName">First Name: </Label>
            <InputStyles
              id="firstName"
              type="text"
              placeholder="First Name"
              {...register("firstName", { required: "required field" })}
            />
            {errors?.firstName && (
              <FormErrors>{errors.firstName.message}</FormErrors>
            )}
          </ItemStyle>

          <ItemStyle>
            <Label htmlFor="lastName">Last Name: </Label>
            <InputStyles
              id="lastName"
              type="text"
              placeholder="Last Name"
              {...register("lastName", { required: "required field" })}
            />
            {errors?.lastName && (
              <FormErrors>{errors.lastName.message}</FormErrors>
            )}
          </ItemStyle>
        </SectionStyle>

        <SectionStyle className="mb-6">
          <ItemStyle>
            <Label htmlFor="email">Email: </Label>
            <InputStylesEmail
              id="email"
              type="email"
              placeholder="boyz@email.com"
              {...register("email")}
            />
            {errors?.email && <FormErrors>{errors.email.message}</FormErrors>}
          </ItemStyle>
        </SectionStyle>

        <div className="flex gap-4 items-center ml-3">
          <label>Choose a state of operation...</label>
          <select
            required
            // name="stateOfOperation}"
            // value={stateOpp}
            id=""
            type="text"
            placeholder="Click to start a reservation"
            name="stateOfOperation"
            className="w-1/2 h-10 border-gray-200 border placeholder:pl-4 px-5 "
          >
            <option> none</option>
            <option> marryland</option>
            <option> minnesota</option>
            <option> tennessee</option>
            <option> virginia</option>
          </select>
        </div>

        <SectionStyle className="flex justify-between mt-3">
          <ItemStyle>
            <Label>Phone:</Label>
            <InputStyles
              type="number"
              placeholder="000 000 000"
              {...register("phone")}
            />
            {errors?.phone && <FormErrors>{errors.phone.message}</FormErrors>}
          </ItemStyle>

          <ItemStyle>
            <Label>Vehicle Category</Label>

            <Select {...register("category")}>
              {carMakeList.map((items, index) => (
                <option key={index}>{items.category}</option>
              ))}
            </Select>
          </ItemStyle>
        </SectionStyle>

        <SectionStyle
          className="flex  flex-row justify-between mt-3"
          id="select-box"
        >
          <div>
            <ItemStyle>
              <Label>Pick-up Location</Label>

              <Select {...register("pickupLocation")}>
                <option>9500 Good Luck Road MD 20707</option>
                <option>
                  7900 International Drive Suit 300 Bloomington MN 55425
                </option>
                <option>
                  1959 for Campbell Blvd, #1 Clarksville, TN 37042
                </option>
                <option>
                  1346 Old Bridge Road WoodBridge Ca 22192 Suite 101
                </option>
              </Select>
            </ItemStyle>

            <ItemStyle>
              <Label>Pick-up Date</Label>
              <InputStyles
                type="date"
                {...register("pickupDate", { required: "required field" })}
              />
              {errors?.pickupDate && (
                <FormErrors>{errors.pickupDate.message}</FormErrors>
              )}
            </ItemStyle>
          </div>

          <div>
            <ItemStyle>
              <Label>Drop Off Location</Label>

              <Select {...register("dropOffLocation")}>
                <option>9500 Good Luck Road MD 20707</option>

                <option>
                  7900 International Drive Suit 300 Bloomington MN 55425
                </option>

                <option>
                  1959 for Campbell Blvd, #1 Clarksville, TN 37042
                </option>

                <option>
                  1346 Old Bridge Road WoodBridge Ca 22192 Suite 101
                </option>
              </Select>
            </ItemStyle>

            <ItemStyle>
              <Label className="mb-2">Drop Off Date</Label>
              <InputStyles
                type="date"
                {...register("dropOffDate", { required: "required field" })}
              />
              {errors?.dropOffDate && (
                <FormErrors>{errors.dropOffDate.message}</FormErrors>
              )}
            </ItemStyle>
          </div>
        </SectionStyle>

        <div className="mb-3">
          <ItemStyle className="p-2">
            <p className="text-base p-1">Id Card:</p>
            <input
              type="file"
              className=" text-sm "
              {...register("nationalID", { required: "required field" })}
            />
            {errors?.nationalID && (
              <FormErrors>{errors.nationalID.message}</FormErrors>
            )}
          </ItemStyle>
        </div>

        <div className="mb-4">
          <ItemStyle className="p-2">
            <p className="text-base p-1">Age:</p>
            <input
              type="number"
              className=" text-sm border max-w-32 px-3 py-1 rounded-sm"
              placeholder=" 18 and Above"
              {...register("age", {
                min: {
                  value: 18,
                  message: "You must be at least 18 years old",
                },
              })}
            />
            {errors?.age && <FormErrors>{errors.age.message}</FormErrors>}
          </ItemStyle>
        </div>

        <div className=" ml-3  gap-2">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 hover:bg-slate-500 "
              {...register("termConditions", {
                required: {
                  value: true,
                  message:
                    "please check box above to agree to our terms and conditions",
                },
              })}
            />
            <span className="text-sm">
              By clicking this button, you confirm our privacy terms and
              conditions
            </span>
          </div>
          {errors?.termConditions && (
            <FormErrors>{errors.termConditions.message}</FormErrors>
          )}
        </div>

        <SectionStyle>
          <ItemStyle>
            <button className=" bg-red-600 text-white px-3 py-[1px] uppercase hover:bg-stone-900  hover:text-white transition-all mr-auto rounded-md mt-3">
              Search
            </button>
          </ItemStyle>
        </SectionStyle>
      </form>
    </div>
  );
}

export default ReservationDropdown;
