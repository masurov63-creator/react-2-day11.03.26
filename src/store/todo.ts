import { create } from 'zustand'

interface IData {
    id: number
    name: string
    age: number
    status: boolean
    image: string
}

interface IStore {
    data: IData[]
    deletUser: (id: number) => void
    addUser: (user: IData) => void
    editUser: (user: IData) => void
    // editUser: (user: IData) => void
}

export const useTodo = create<IStore>((set) => ({
    data: [
        { id: 1, name: "rajabov2_002", age: 2211, status: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQskafhTnqVcdnuRXDbCkj1e6BkwmLNu5zCpg&s" },
        { id: 2, name: "Abu Ali", age: 21, status: false, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQskafhTnqVcdnuRXDbCkj1e6BkwmLNu5zCpg&s" },
        { id: 3, name: "Ali", age: 12, status: false, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5j-8bnIQQLEC2UP-I9BM9k2ksSiM0qekbyg_hsH43tRrcjD28pwNa6kbODY5n82Vsn4U&usqp=CAU" },
        { id: 4, name: "Jue Jue", age: 22, status: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM5DzRmXFPLSD5AHTeBlD3wAfZyzaTOh_rVg&s" },
    ],
    deletUser: (id: number) =>
        set((state) => ({
            data: state.data.filter((el) => el.id != id)
        })),
    addUser: (user: IData) =>
        set((state) => ({
            data: [...state.data, user]
        })),

    editUser: (user: IData) =>
        set((state) => ({
            data: state.data.map((e) =>
                e.id == user.id ? user : e
            )
        }))

}))