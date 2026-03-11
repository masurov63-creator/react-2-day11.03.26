
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <header className='w-[80%] text-[#625e5e] bg-[#ffffff5f]  shadow-[0px_0px_10px_0px_#434040] h-[60px] rounded m-auto p-3 mt-[30px] fixed ml-[150px] z-10 '>
                <Link to="/">
                    <p className='hover:shadow-[0px_0px_10px_0px_#fff] p-2 w-fit rounded hover:text-green-500 '> Home Page</p>
                </Link>
            </header>
            <main className='pt-[80px]'>
                <Outlet  />
            </main>
            <footer className='w-[100%] h-[300px] bg-green-900 mt-[20px] p-5 text-white flex items-center justify-around'>
                <div>
                    <p>footer footer footer</p>
                    <p>footer footer footer</p>
                    <p>footer footer footer</p>
                    <p>footer footer footer</p>
                    <p>footer footer footer</p>
                </div> <div>
                    <p>footer footer footer</p>
                    <p>footer footer footer</p>
                    <p>footer footer footer</p>
                    <p>footer footer footer</p>
                    <p>footer footer footer</p>
                </div> <div>
                    <p>footer footer footer</p>
                    <p>footer footer footer</p>
                    <p>footer footer footer</p>
                    <p>footer footer footer</p>
                    <p>footer footer footer</p>
                </div> <div>
                    <p>footer footer footer</p>
                    <p>footer footer footer</p>
                    <p>footer footer footer</p>
                    <p>footer footer footer</p>
                    <p>footer footer footer</p>
                </div>

            </footer>
        </div>
    )
}

export default Layout