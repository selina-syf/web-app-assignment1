import { useForm } from "react-hook-form";
import { useEffect } from "react";

const defaultData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: defaultData,
  });

  useEffect(() => {
    let data = defaultData;
    // set the values of each form field to match "data"
    for (const prop in data) {
      setValue(prop, data[prop]);
    }
  }, []);

  function submitForm(data) {
    console.log(data);
    location.href = "/"; // redirect to home
  }

  return (
    <>
      <div className="card">
        <div className="title">My Contact Information</div>
        <div>Selina Sun</div>
        <div>+1 (437)-599-0326</div>
        <div>
          <a href="mailto:selinayifan@gmail.com">selinayifan@gmail.com</a>
        </div>
      </div>
      <br />

      <div className="title">Send me a message</div>
      <form onSubmit={handleSubmit(submitForm)}>
        First Name: <br />
        <input
          {...register("firstName", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
          className={errors.firstName && "inputError"}
        />
        {errors.firstName?.type === "required" && (
          <span className="error">
            <br />
            First name is required.
          </span>
        )}
        {errors.firstName?.type === "maxLength" && (
          <span className="error">
            <br />
            First name cannot contain more than 20 characters.
          </span>
        )}
        {errors.firstName?.type === "pattern" && (
          <span className="error">
            <br />
            First Name can only contain alphabetical characters.
          </span>
        )}
        <br />
        <br />
        Last Name: <br />
        <input
          {...register("lastName", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors.lastName?.type === "required" && (
          <span className="error">
            <br />
            Last name is required.
          </span>
        )}
        {errors.lastName?.type === "maxLength" && (
          <span className="error">
            <br />
            Last name cannot contain more than 20 characters.
          </span>
        )}
        {errors.lastName?.type === "pattern" && (
          <span className="error">
            <br />
            Last name can only contain alphabetical characters.
          </span>
        )}
        <br />
        <br />
        Phone Number: <br />
        <div style={{ fontSize: "small", fontStyle: "italic" }}>
          Use (###)-###-####.
        </div>
        <input
          {...register("phone", {
            required: true,
            pattern: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g, // https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript
          })}
          className={errors.phone && "inputError"}
        />
        {errors.phone?.type === "required" && (
          <span className="error">
            <br />
            Phone number is required.
          </span>
        )}
        {errors.phone?.type === "pattern" && (
          <span className="error">
            <br />
            Phone number is an invalid format.
          </span>
        )}
        <br />
        <br />
        Email: <br />
        <input
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, // https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
          })}
          className={errors.email && "inputError"}
        />
        {errors.email?.type === "required" && (
          <span className="error">
            <br />
            Email is required.
          </span>
        )}
        {errors.email?.type === "pattern" && (
          <span className="error">
            <br />
            Email is an invalid format.
          </span>
        )}
        <br />
        <br />
        Message: <br />
        <input
          {...register("message", {
            required: true,
          })}
          className={errors.message && "inputError"}
        />
        {errors.message?.type === "required" && (
          <span className="error">
            <br />
            Message is required.
          </span>
        )}
        <br />
        <br />
        <button type="submit" disabled={Object.keys(errors).length > 0}>
          Send Message
        </button>
      </form>
    </>
  );
}
