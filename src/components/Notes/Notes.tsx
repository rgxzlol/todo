import './notes.css'
import { gridImg, listImg } from '../../assets/image'
import { useContext, useState } from 'react'
import NotesItem from './NotesItem';
import { NotesContext } from '../../context/NotesProvider';

const Notes = () => {
  const [list, setList] = useState(true);
  const {notes, search, words, lang} = useContext(NotesContext);
  const newNotes = notes.filter((elem)=>{
    const result = elem.title.concat(elem.desc, elem.date).toLowerCase().includes(search.toLowerCase())
    return result
  })
  return (
    <div className='container notes'>
        <div className="notes__top">
          <h2 className="notes__title">{ 
            newNotes.length > 0 ? words.infobar[lang] : words.noinfobar[lang]
          }</h2>
          <button className="notes__btn" onClick={()=>{setList(!list)}}>
            <img src={ list ? listImg : gridImg } alt="" />
            { list ? words.list[lang] : words.grid[lang]}
          </button>
        </div>
        <div className={`notes__content ${ !list ? 'active' : ''}`}>
          {
            newNotes.map((elem)=>(
              <NotesItem note={elem} key={elem.id} list={list}/>
            ))
          }
        </div>
    </div>
  )
}

export default Notes