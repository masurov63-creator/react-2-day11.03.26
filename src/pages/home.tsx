import React, { useState } from 'react'
import { useTodo } from '../store/todo'
import { useFormik } from 'formik';
import { Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
const Home = () => {
    const { data, deletUser, addUser, editUser } = useTodo()
    const [idx, setIdx] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const { handleChange, handleSubmit, setFieldValue, values, resetForm } = useFormik({

        initialValues: {
            name: "",
            age: 0,
            image: "",

        },
        onSubmit: (values) => {
            if (idx) {
                editUser({ id: idx, ...values, status: false })
            }

            else {

                addUser({
                    id: Date.now(),
                    name: values.name,
                    image: values.image,
                    age: values.age,
                    status: false
                })
            }
            resetForm()
            setIdx(0)
            setIsModalOpen(false)
        }
    })


    const editUserID = (user: { id: number, name: string, age: number, image: string }) => {
        setIdx(user.id)
        setIsModalOpen(true)
        setFieldValue("name", user.name)
        setFieldValue("age", user.age)
        setFieldValue("image", user.image)

    }

    return (
        <div>
            <Button className='ml-[150px] mt-[20px] mt-[40px]' type="primary" onClick={showModal}>
                Add New User
            </Button>
            <Modal
                title={`${idx ? "Edit User" : "Add New User"}`}
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                footer={null}
                onCancel={handleCancel}
            >

                <div className='p-3 bg-green-200 rounded-2xl w-[80%] m-auto'>
                    <div className='bg-white rounded p-2  '>
                        <form onSubmit={handleSubmit} className='flex gap-5 flex-wrap'>
                            <input
                                type="text"
                                value={values.name}
                                onChange={handleChange}
                                name='name'
                                className='p-3 border ml-[5px] rounded'
                            />
                            <input
                                type="number"
                                value={values.age}
                                onChange={handleChange}
                                name='age'
                                className='p-3 border ml-[5px] rounded'
                            />
                            <input
                                type="text"
                                value={values.image}
                                onChange={handleChange}
                                name='image'
                                className='p-3 border ml-[5px] rounded'
                            />
                            <button type='submit'>Save</button>
                        </form>
                    </div>

                </div>
            </Modal>





            <table className=' mt-[40px] w-[80%] m-auto text-white '>

                <thead className=' bg-gray-400  '>
                    <tr>
                        <th className='p-3'>Id</th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Status</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody className='text-center bg-amber-100 text-gray-700  '>
                    {data.map((el) => {

                        return <tr key={el.id} className='border-b'>

                            <td className='p-3 '>{el.id}</td>
                            <td className='p-3  '><img src={el.image} alt="" className='w-[80px] h-[80px] rounded-[50%] object-center object-cover ' /></td>
                            <td className='p-3 '>{el.name}</td>
                            <td className='p-3 '>{el.age}</td>
                            <td className={`${el.status ? 'text-red-500' : 'text-green-500'}`}>{el.status ? "Active" : "Inactive"}</td>
                            <td>
                                <span onClick={() => deletUser(el.id)} className='p-3  border rounded   ml-[10px]   hover:text-red-500 hover:shadow-[0px_0px_5px_5px_#fff] '>Deletuser</span>
                                <span onClick={() => editUserID(el)} className='p-3  border rounded   ml-[10px]   hover:text-green-500 hover:shadow-[0px_0px_5px_5px_#fff] '>EditUser</span>
                                <Link to={`/info/${el.id}`}>
                                    <span className='p-3  border rounded   ml-[10px]   hover:text-white hover:shadow-[0px_0px_10px_10px_#fff] '>👤</span>
                                </Link>

                            </td>



                        </tr>
                    }
                    )}
                </tbody>
            </table>
        </div >
    )
}

export default Home