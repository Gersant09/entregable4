import React from 'react'

const UserCard = ({user, deleteUser, handleClickEdit}) => {


  return (
    <article>
      <div>      
            <img className='w-[100px] aspect-[3/5] object-cover mx-auto rounded-md' src={user.image_url ? user.image_url : "/images/noProfile.jpg"} alt="user image" />       
       </div>
      <h3>{user.first_name} {user.last_name}</h3>
      <ul>
        <li>
          <h4>Correo</h4>
          <span>{user.email}</span>
        </li>
        <li>
          <h4>Cumpleaños</h4>
          <span><i className='bx bx-gift'></i>
          {user.birthday}
          </span>
        </li>
      </ul>
      <div>
        <button onClick={()=> deleteUser(user.id)}><i className='bx bx-trash' ></i></button>
        <button onClick={()=>handleClickEdit(user)}><i className='bx bx-edit-alt' ></i></button>
      </div>
    </article>
  )
}

export default UserCard
