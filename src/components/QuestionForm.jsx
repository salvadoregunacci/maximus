import React from "react"
import Field from "./ui/Field.jsx";
import {useForm} from "react-hook-form";
import Button from "./ui/Button.jsx";
import CheckBox from "./ui/CheckBox.jsx";

const QuestionForm = ({action = "#", method = "POST"}) => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    function onSubmitForm(data) {
        alert("Submit form!");
    }

    return (
        <form
            className="question_form"
            action={action}
            method={method}
            onSubmit={handleSubmit(onSubmitForm)}
        >
            <h3 className="question_form-title">Відповідаємо на запитання</h3>
            <p className="question_form-desc">
                Ми відповімо на всі ваші запитання по телефону, або ви можете записатись на безкоштовне пробне заняття
            </p>
            <Field
                maxLength={40}
                isError={"name" in errors}
                helperText={errors.name && errors.name.message}
                placeholder="Ваше ім'я"
                onlyLetters={true}
                {...register("name", {
                    required: {
                        value: true,
                        message: "Обов'язкове поле"
                    }
                })}
            />
            <Field
                maxLength={30}
                isError={"phone" in errors}
                helperText={errors.phone && errors.phone.message}
                placeholder="Ваш телефон"
                onlyNumbers={true}
                {...register("phone", {
                    required: {
                        value: true,
                        message: "Обов'язкове поле"
                    }
                })}
            />
            <Button type="submit">Задати питання</Button>
            <CheckBox name="terms" id="question_form-terms">
                <span>Я даю згоду на <a href="#">обробку даних</a></span>
            </CheckBox>
        </form>
    );
};

export default QuestionForm;