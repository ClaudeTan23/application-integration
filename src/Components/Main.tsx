import React from "react";
import { Headers } from "./Header.tsx";
import { Container } from "./Container.tsx";
import { Outlet } from "react-router-dom";
import axios from "axios";
import "../css/main.css";

export namespace Main 
{
    export class Body extends React.Component<{ test: string }, { num: number, Cars: Array<any>, modal: boolean, editBtn: Array<any> }>
    {
        private LOAD: boolean = false;

        constructor(props)
        {
            super(props);

            this.state = 
            {
                num: 0,
                Cars: [],
                modal: false,
                editBtn: []
            }

        }

        componentDidMount(): void 
        {
            
            if(this.LOAD === false)
            {
                this.LOAD = true;
            }
        }

        render(): JSX.Element
        {
            return (
                <div className="main-container">
                    <Headers.Header />
                    <Outlet />
                </div>
            )
        }
    }
}