import './navbar.css'
import { searchImg, backImg, closeImg } from '../../assets/image'
import { useContext, useState } from 'react'
import Transition from '../Transition/Transition'
import { NotesContext } from '../../context/NotesProvider'
import { LangType } from '../../types'

const Navbar = () => {
    const {search, setSearch, words, lang, setLang} = useContext(NotesContext)
    const [hide, setHide] = useState(true)
    // console.log(setLang('uz'));
    
    const changeHide = ()=>{
        setHide(!hide)
        setSearch('')
    }
    const changeSearch = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setSearch(event.target.value);
    }
  return (
    <header className='header'>
        <Transition hide={!hide} className="header__content">
            {
                lang == 'uz' ?
                <button onClick={()=>{setLang(LangType.ru)}} className='header__lang'>ru</button> :
                <button onClick={()=>{setLang(LangType.uz)}} className='header__lang'>uz</button>
            }
            <h1 className='header__title'>{words.appbartitle[lang]}</h1>
            <button onClick={changeHide}>
                <img src={searchImg} alt="" />
            </button>
        </Transition>
        <Transition hide={hide} className="header__form">
            <button onClick={changeHide}>
                <img src={backImg} alt="" />
            </button>
            <input value={search} onChange={changeSearch} type="text" className="header__input container" placeholder={words.appbarseacrch[lang]} />
            <button onClick={()=>{setSearch('')}}>
                <img src={closeImg} alt="" />
            </button>
        </Transition>
    </header>
  )
}

export default Navbar