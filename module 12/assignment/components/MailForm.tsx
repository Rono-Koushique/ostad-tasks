"use client";
import { Formik, Form, Field, ErrorMessage, FormikValues } from "formik";
import * as Yup from "yup";
import React from "react";
import FormControl from "./FormControl";
import FormError from "./FormError";

const initialValues = {
    name: "",
    email: "",
    website: "",
    message: "",
};

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    website: Yup.string()
        .matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            "Invalid URL format"
        )
        .required("Website is required"),
    message: Yup.string().required("Message is required"),
});

type Props = {};

export default function MailForm({}: Props) {
    const handleSubmit = (values: FormikValues) => {
        alert(JSON.stringify(values, null, 2));
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className="flex flex-col w-full gap-4">
                <FormControl>
                    <label htmlFor="name">Name</label>
                    <Field type="text" name="name" id="name" />
                    <ErrorMessage name="name" component={FormError} />
                </FormControl>
                <FormControl>
                    <label htmlFor="email">Email</label>
                    <Field type="text" name="email" id="email" />
                    <ErrorMessage name="email" component={FormError} />
                </FormControl>
                <FormControl>
                    <label htmlFor="website">Website</label>
                    <Field type="text" name="website" id="website" />
                    <ErrorMessage name="website" component={FormError} />
                </FormControl>
                <FormControl>
                    <label htmlFor="message">Message</label>
                    <Field name="message" id="message" rows="8" component="textarea" />
                    <ErrorMessage name="message" component={FormError} />
                </FormControl>
                <button
                    type="submit"
                    className="ml-auto bg-blue-500 hover:bg-blue-600 active:bg-blue-400 duration-200 ease-in-out px-5 py-2.5 font-medium text-white rounded"
                >
                    Submit
                </button>
            </Form>
        </Formik>
    );
}
