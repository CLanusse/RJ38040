import User from "./User"



const UsersContainer = () => {
    const users = [
        {
          nombre: 'Conrado Lanusse',
          rol: 'profesor',
          direccion: 'asd 123',
          edad: 18
        },
        {
          nombre: 'Guido Carini',
          rol: 'estudiante',
          direccion: 'asd 1234',
          edad: 41
        }
      ]

    return (
        <div>
            <User usuario={ users[0] }/>
            <User usuario={ users[1] }/>
        </div>
    )
}

export default UsersContainer