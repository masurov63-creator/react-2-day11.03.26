import { useParams } from 'react-router-dom'
import { useTodo } from '../store/todo';

const Info = () => {


    const { id } = useParams();
    const { data } = useTodo()
    const user = data.find((el) => el.id === Number(id));
    return (
        <div className='border p-5 w-fit rounded ml-15  '>
            <p><b>Id : </b>{user?.id}</p>
            <p><b>Name : </b>{user?.name}</p>
            <p><b>Age : </b>{user?.age}</p>
            <p className={`${user?.status ? 'text-green-500':'text-red-500'}`}><b>Status : </b>{user?.status ? "Active" : "Inactive"}</p>
            <img src={user?.image} alt="" />
        </div>
    )
}

export default Info