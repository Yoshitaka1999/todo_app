import React from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styled from "styled-components"
import data from "../data.json"
import { Todo } from "./Types";



const StyledFormControl = styled(FormControl)`
    marginBottom: theme.spacing(3);
    minWidth: 320;
`


const SelectTodos: React.FC<Todo> = (props: Todo) => {
    const todos = [
        "コーディング",
        "遊び",
        "Udemy",
    ]
    // const todoLists = props.todoLists;
    return (
        <StyledFormControl>
            <NativeSelect>
                {todos.map((todo: any, i: number) => (
                <option key={i} value={todo}>
                    {todo}
                </option>
                ))}
            </NativeSelect>
        </StyledFormControl>
    );
}

export const getStaticProps = async () => {
    return {
      props: data
    }
}

export default SelectTodos;