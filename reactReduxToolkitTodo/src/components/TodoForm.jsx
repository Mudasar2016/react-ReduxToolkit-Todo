import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/TodoSlice';
import { nanoid } from '@reduxjs/toolkit';
function TodoForm() {

    const [titleMsg, setTitleMsg] = useState("");

    const dispatch = useDispatch();

    const saveTodo = (e) => {
        e.preventDefault();
        const todo = {
            id: nanoid(),
            title : titleMsg,
            completed : false
        }
        dispatch(addTodo(todo));
        setTitleMsg('');
    }


    return (
        <form onSubmit={saveTodo} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={titleMsg}
                onChange={(e) => setTitleMsg(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

