import { createContext, FC, ReactNode, useEffect, useState } from "react"
export const NotesContext = createContext<INotesContext>({} as INotesContext)
import words from "../assets/lang"
import { INotesContext, ITodo, LangType } from "../types"

interface INotesProviderProps {
  children: ReactNode
}

const NotesProvider: FC<INotesProviderProps> = ({children}) => {
    // console.log(props);
    const [notes, setNotes] = useState<ITodo[]>([
    {
      id: 1,
      title: 'React',
      date: '07.03.2022',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    {
      id: 2,
      title: 'HTML',
      date: '27.08.2021',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    {
      id: 3,
      title: 'CSS',
      date: '15.05.2019',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    ])
    const [modal, setModal] = useState(false);
    const [currentId, setCurrentId] = useState(0);
    const [noteInfo, setNoteInfo] = useState<ITodo | null>(null);
    const [search, setSearch] = useState('')
    const [lang, setLang] = useState(LangType.ru)

    const addNote = (note: ITodo)=>{
      setNotes([...notes, note])
      setCurrentId(note.id);
    }
    const delNote = (id: number)=>{
      const newNotes = notes.filter( elem => elem.id != id );
      setNotes(newNotes)
    }
    const getNote = (id: number)=>{
      const note = notes.find((elem)=> elem.id == id);
      if (note) {
        setNoteInfo(note)
        setModal(true)        
      }
    }
    const editNote = (note: ITodo)=>{
      const newNotes = notes.map((elem)=>{
        if(elem.id == note.id){
          elem.date = note.date;
          elem.desc = note.desc;
          elem.title = note.title;
        }
        return elem
      })
      setNotes(newNotes)
      setNoteInfo(null)
    }
    const closeModal = ()=>{
      setNoteInfo(null);
      setModal(false)
    }

    useEffect(()=>{
      let localNotes = localStorage.getItem('notes')
      if (localNotes) {
        const arr = JSON.parse(localNotes)
        setNotes(arr)
      }
      let localLang = localStorage.getItem('lang');
      if (localLang == LangType.uz || localLang == LangType.ru) {
        setLang(localLang)        
      }
    }, [])

    useEffect(()=>{
      localStorage.setItem('notes', JSON.stringify(notes))
      const lastIndex = notes.length - 1;
      const id = lastIndex >= 0 ? notes[lastIndex].id : 0;
      setCurrentId(id);
    }, [notes])
    useEffect(()=>{
      localStorage.setItem('lang', lang)
    }, [lang])
  return (
    <NotesContext value={ {notes, modal, setModal, currentId, addNote, delNote, getNote, noteInfo, editNote, closeModal, search, setSearch, words, lang, setLang} }>
        {children}
    </NotesContext>
  )
}

export default NotesProvider