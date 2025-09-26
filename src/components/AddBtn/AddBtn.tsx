import './add-btn.css'
import { editImg } from '../../assets/image'
import { useContext } from 'react'
import { NotesContext } from '../../context/NotesProvider'

const AddBtn = () => {
    const {setModal} = useContext(NotesContext)
  return (
    <button onClick={ ()=>{setModal(true)} } className='add-btn'>
        <img src={editImg} alt="" />
    </button>
  )
}

export default AddBtn