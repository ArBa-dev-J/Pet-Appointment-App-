import { Link, useNavigate } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import errorHandler from "../../utlis/errorHandler";
import axios from "axios";



function UpdateForm({ appointmentS }) {
    let navigate = useNavigate();
    const [error, setError] = useState(null);
    const user = useContext(UserContext);

    // console.log(appointmentS);
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        (
            setValue("name", appointmentS.name),
            setValue("date", appointmentS.date),
            setValue("description", appointmentS.description)
        );
    }, [appointmentS, setValue]);

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <main>
                <header className="text-center">
                    <Link to={`/user/${user.user.data.data.userId}/apointments`}>
                        <button onClick={() => localStorage.removeItem("appointment")}><h1 className="pt-10">Pet Clinic</h1></button>
                    </Link>
                </header>
                <section>
                    <h1 className="text-center pt-50">Change your appointment details</h1>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col justify-center items-center pt-10 gap-2"
                    >
                        <label>Appoitment title</label>
                        <input
                            type="text"
                            {...register("name", {
                                required: true,
                                minLength: 2,
                                maxLength: 50,
                            })}
                            className="block border"
                        />
                        {errors.name && <span>Appointment name is required</span>}

                        <label>Appointment date</label>
                        <input
                            type="datetime-local"
                            {...register("date", {
                                required: true,
                            })}
                            className="block border"
                        />
                        {errors.date && <span>Date is required</span>}

                        <label>Appointment description</label>
                        <input
                            type="text"
                            {...register("description", {
                                required: true,
                                minLength: 2,
                                maxLength: 1000,
                            })}
                            className="block border"
                        />
                        {errors.date && <span>Description is required</span>}

                        <input type="submit" value="Update appointment data" />
                        {<p>{error}</p>}
                    </form>
                </section>
            </main>
        </>
    );
}
export default UpdateForm;