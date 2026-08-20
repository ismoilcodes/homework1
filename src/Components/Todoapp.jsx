import React from 'react'
import { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { CiCirclePlus } from "react-icons/ci";

const Todoapp = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <h1 className='text-3xl font-bold mb-4 text-center'>ToDo List </h1>
            <form action="/" className='w-full h-screen flex justify-center items-center text-center' onSubmit={handleSubmit(onSubmit)}>
                <input {...register('task'




                )} type="text" placeholder='add your items' className='border border-white rounded-2xl p-2' />
                <button className='border border-white p-3 rounded-3xl mx-(-2px)'><CiCirclePlus /></button>
            </form>
        </div>
    )
}

export default Todoapp