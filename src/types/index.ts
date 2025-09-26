import { ILang } from "./lang-types";

export interface ITodo {
    id: number,
    title: string,
    date: string,
    desc: string
}

export enum LangType {
    ru = 'ru',
    uz = 'uz'
}

export interface INotesContext {
    notes: ITodo[], 
    modal: boolean, 
    setModal: (a: boolean)=> void, 
    currentId: number, 
    addNote: (note: ITodo)=> void, 
    delNote: (id: number)=> void, 
    getNote: (id: number)=> void, 
    noteInfo: ITodo | null, 
    editNote: (note: ITodo)=> void,
    closeModal: ()=> void, 
    search: string, 
    setSearch: (a: string)=>void, 
    words: ILang, 
    lang: LangType, 
    setLang: (a: LangType)=>void, 
}