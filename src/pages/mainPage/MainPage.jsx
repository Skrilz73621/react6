import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

export default function MainPage() {

    const [info, setInfo] = useState([])

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        }

    } = useForm()


    function submit(values) {
        setInfo((prev) => ([...prev, values]))
        reset()
    }

    const removeItem = (elId) => {
        setInfo((prev) => prev.filter((_, index) => index !== elId))
        console.log(elId);
    }



    return (
        <div>
            <form onSubmit={handleSubmit(submit)} className='form'>
                <input type="text" {...register('name', { required: true })} placeholder='Имя' />{errors.name && <small>Это поле обязательно для ввода </small>}
                <input type="text" {...register('lastname', { required: true })} placeholder='Фамилия' />{errors.lastname && <small>Это поле обязательно для ввода </small>}
                <input type="text" {...register('email', { required: true })} placeholder='Почта' />{errors.email && <small>Это поле обязательно для ввода </small>}
                <input type="text" {...register('phone', { required: true })} placeholder='Номер телефона' />{errors.phone && <small>Это поле обязательно для ввода </small>}
                <input type="text" {...register('website')} placeholder='Адрес сайта' />
                <button>Добавить</button>
                <button type='button' onClick={() => setInfo([])}>Очистить таблицу</button>
            </form>

            <div>
                <div>
                    <ul className='ul'>
                        <li>Name</li>
                        <li>Lastname</li>
                        <li>Email</li>
                        <li>Phone</li>
                        <li>Website</li>
                    </ul>
                    {
                        info.length !== 0 ?
                            info.map((item, index) => (
                                <div className='ulDiv'>
                                    <ul>
                                        <li>{item.name}</li>
                                        <li>{item.lastname}</li>
                                        <li>{item.email}</li>
                                        <li>{item.phone}</li>
                                        <li>{item.website}</li>
                                    </ul>
                                        <button onClick={() => removeItem(index)}>Удалить</button>

                                </div>
                            )) : <p>Таблица пуста</p>
                    }
                </div>
            </div>
        </div>
    )
}
