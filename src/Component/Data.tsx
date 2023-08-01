import React, { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import "../css/header.css";


export namespace Data 
{
    export const Body = (): JSX.Element => 
    {
        const [cookies, setCookies, removeCookies] = useCookies();
        const navigate: any = useNavigate();
        let LOAD: boolean = false;
        let [modal, setModal]: any = useState(false);
        let [data, setData]: Array<any> = useState([]);

        const modalRef: React.RefObject<HTMLDivElement> = useRef(null);
        const neighbourRef: React.RefObject<HTMLInputElement> = useRef(null);
        const locationRef: React.RefObject<HTMLInputElement> = useRef(null);
        const imageRef: React.RefObject<HTMLInputElement> = useRef(null);

        const fetchData = async(): Promise<void> =>
        {
            if(cookies.auth !== undefined)
            {
                const token: Array<any> = cookies.auth.split("%");

                const promise: any = await fetch(`${process.env.REACT_APP_API_URL}/neighbour`, { 
                    method: "GET",
                    headers: {
                        "Authorization": token[0],
                        "Type": token[2],
                        "uid": token[1]
                    }
                });

                if(promise.ok)
                {
                    const result: any = await promise.json();
                    setData(result);

                } else 
                {
                    removeCookies("auth");
                    navigate("/home");
                }

            } else 
            {
                removeCookies("auth");
                navigate("/home");
            }
        }

        const addData = async(): Promise<void> =>
        {
            const neighbour: string | undefined = neighbourRef.current?.value.trim();
            const location : string | undefined = locationRef.current?.value.trim();
            const image: FileList | undefined | null  = imageRef.current!.files;

            if(neighbour !== "" && location !== "" && image !== null)
            {
                const token: Array<any> = cookies.auth.split("%");
                const form: any = new FormData();

                form.append("name", neighbour);
                form.append("location", location);
                form.append("image", image[0]);

                const promise: any = await fetch(`${process.env.REACT_APP_API_URL}/add`,
                {
                    method: "POST",
                    headers: {
                        "Authorization": token[0],
                        "Type": token[2],
                        "uid": token[1]
                    },
                    body: form
                });

                if(promise.ok)
                {
                    const result: any = await promise.json();
                    
                    if(result.status === "ok")
                    {
                        setModal(false);
                        fetchData();

                    } else 
                    {
                        console.log("err")
                    }

                } else 
                {
                    if(promise.status == 403)
                    {
                        removeCookies("auth");
                        navigate("/home");

                    } else 
                    {
                        alert("err");
                    }
                }

            } else 
            {
                alert("Please fill all the input and image input.")
            }
        }

        useEffect((): void =>
        {
            if(!LOAD)
            {
                fetchData();
                LOAD = true;
            }
        }, []);

        return (
            <div className="data-container">
                {modal ?
                <div className="modal-container" onClick={(e) => (e.target == modalRef.current) ? setModal(false) : null } ref={modalRef}>
                    <div className="modal-form">
                        <h3>Add Neighbour</h3>
                        <div className="modal-block">
                            <label>Neighbour Name:</label>
                            <input type="text" autoComplete="off" style={{ width: "100%", marginBottom: "0px" }} ref={neighbourRef}/>
                        </div>
                        <div className="modal-block">
                            <label>Location:</label>
                            <input type="text" autoComplete="off" style={{ width: "100%", marginBottom: "0px" }} ref={locationRef}/>
                        </div>
                        <div className="modal-block">
                            <label>Image:</label>
                            <input type="file" autoComplete="off" style={{ width: "100%", marginBottom: "0px" }} ref={imageRef} accept="image/*"/>
                        </div>
                        <div className="modal-btn-container">
                            <button onClick={addData}>Submit</button>
                        </div>
                    </div>
                </div>
                :
                <></>
                }
                <div className="btn-container">
                    <button onClick={() => setModal(true)}>Add Neighbour</button>
                </div>
                <div className="data-body">
                    {data.length <= 0 ?
                    <div style={{ fontSize: "24px", padding: "10px" }}>Empty Data</div>
                    :
                    data.map((e: any) =>
                    <Link to={`/neighbour/${e.id}`} className="data-block" key={e.id}>
                        <div className="block-left">
                            <img src={`${process.env.REACT_APP_API_URL}/image/${e.image}`} alt={e.image} />
                        </div>
                        <div className="block-right">
                            <div>Neighbour:</div>
                            <div>{e.name}</div>
                        </div>
                    </Link>
                    )}
                </div>
            </div>
        )
    }
}