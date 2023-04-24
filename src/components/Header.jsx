import React from 'react'

const Header = ({setIsShowForm}) => {

const handleClickShowModal = ()=>{
    setIsShowForm((isShowForm)=> !isShowForm)
}

  return (
    <header>

      <h1>Usuarios</h1>

      <button onClick={handleClickShowModal} className='bg-purple-p text-white p-2 hover:bg-purple-p/90 transition-color text-sm'><i className='bx bx-plus'></i> Crear un nuevo usuario</button>

    </header>
  )
}

export default Header
