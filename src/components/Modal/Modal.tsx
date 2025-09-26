import { useContext, useEffect, useState } from 'react'
import './modal.css'
import { NotesContext } from '../../context/NotesProvider'
import Transition from '../Transition/Transition'

const Modal = () => {
    const { modal, setModal, currentId, addNote, noteInfo, editNote, closeModal, words, lang } = useContext(NotesContext);
    const [input, setInput] = useState('');
    const [textarea, setTextarea] = useState('');
    const createNote = () => {
        const title = input.trim()
        const desc = textarea.trim()
        if (title && desc) {
            const note = {
                id: currentId + 1,
                title,
                date: new Date().toLocaleDateString(),
                desc
            }
            addNote(note);
            setModal(false)
           
        }
    }

    const changeNote = ()=>{
        const title = input.trim()
        const desc = textarea.trim()
        if (title && desc && noteInfo) {
            const note = {
                id: noteInfo.id,
                title,
                date: new Date().toLocaleDateString(),
                desc
            }
            editNote(note);
            setModal(false)
           
        }
    }

    useEffect(()=>{
        if (noteInfo) {
            setInput(noteInfo.title);
            setTextarea(noteInfo.desc)
        } else {
            setInput('')
            setTextarea('')            
        }
    }, [modal])
    return (
        <Transition className='modal active' hide={!modal} onClick={() => { setModal(false) }}>
            <div className="modal__form" onMouseDown={(event) => { event.stopPropagation() }}>
                <h2 className="modal__title">{
                    noteInfo ? words.titlewindowedit[lang] : words.titlewindow[lang]
                }</h2>
                <div className="modal__content">
                    <label>
                        <span>Title</span>
                        <input value={input} onChange={(event) => { setInput(event.target.value); }} type="text" placeholder='Title' />
                    </label>
                    <label>
                        <span>Content</span>
                        <textarea value={textarea} onChange={(event) => { setTextarea(event.target.value) }} rows={2} placeholder='Content'></textarea>
                    </label>
                </div>
                <div className="modal__controls">
                    <button onClick={closeModal} className='btn red'>
                        {words.closebtn[lang]}
                    </button>
                   {    
                    noteInfo ? 
                    <button onClick={changeNote} className='btn'>
                        {words.editwindowbtn[lang]}
                    </button> :
                    <button onClick={createNote} className='btn'>
                        {words.addbtn[lang]}
                    </button>
                    }
                </div>
            </div>
        </Transition>
    )
}

export default Modal