import { FC, useContext } from 'react'
import { deleteImg, editImg } from '../../assets/image'
import './notes.css'
import { NotesContext } from '../../context/NotesProvider'
import { ITodo } from '../../types'

interface INotesItemProps {
    list: boolean, 
    note: ITodo
}

const NotesItem: FC<INotesItemProps> = ({list, note}) => {
    const {delNote, getNote, words, lang} = useContext(NotesContext)
    // console.log(list);
  return (
    <div className='card'>
        <div className={ !list ? "card__wrapper" : ''}>
            <h3 className="card__title">{note.title}</h3>
            <p className="card__date">{note.date}</p>
        </div>
        <p className="card__desc">{note.desc}</p>
        <div className="card__controls">
            <button onClick={()=>{ getNote(note.id)}} className="btn">
                <img src={editImg} alt="" />
                {words.editbtn[lang]}
            </button>
            <button onClick={ ()=>{ delNote(note.id) } } className="btn red">
                <img src={deleteImg} alt="" />
                {words.deledit[lang]}
            </button>
        </div>
    </div>
  )
}

export default NotesItem