import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "../css/bootstrap.min.css";
import "../css/templatemo-diagoona.css";

export namespace Neighbour
{
    export const Body = (): JSX.Element => 
    {
        let [emodal, setEmodal]: any = useState(false);
        let LOAD: boolean = false;
        const [cookies, setCookies, removeCookies] = useCookies();
        const navigate: any = useNavigate();
        let [data, setData]: any = useState(null);

        const modalRef: React.RefObject<HTMLDivElement> = useRef(null);
        const neighbourRef: React.RefObject<HTMLInputElement> = useRef(null);
        const locationRef: React.RefObject<HTMLInputElement> = useRef(null);
        const imageRef: React.RefObject<HTMLInputElement> = useRef(null);

        const fetchData = async(uri: string): Promise<void> =>
        {
            if(cookies.auth !== undefined)
            {
                const token: Array<any> = cookies.auth.split("%");

                const promise: any = await fetch(`${process.env.REACT_APP_API_URL}${uri}`, { 
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
                    
                    if(result.status === "ok")
                    {
                        setData(result.neighbour);

                    } else 
                    {
                        console.log("404")
                    }

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

        const editData = async(): Promise<void> =>
        {
            const neighbour: string | undefined = neighbourRef.current?.value.trim();
            const location : string | undefined = locationRef.current?.value.trim();
            // const image: FileList | undefined | null  = imageRef.current!.files;

            if(neighbour !== "" && location !== "")
            {
                const token: Array<any> = cookies.auth.split("%");
                const form: any = new FormData();

                form.append("id", data.id);
                form.append("name", neighbour);
                form.append("location", location);
                // form.append("image", image![0]);
   

                const promise: any = await fetch(`${process.env.REACT_APP_API_URL}/edit`,
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
                        const URI: string = window.location.pathname;

                        fetchData(URI);

                        setEmodal(false);


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

        const deleteData = async(): Promise<void> =>
        {
            const confirmation: boolean = window.confirm("Confirm delete???");

            if(confirmation)
            {
                const token: Array<any> = cookies.auth.split("%");
                const form: any = new FormData();

                form.append("id", data.id);
            
                const promise: any = await fetch(`${process.env.REACT_APP_API_URL}/delete`,
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
                        alert("Deleted!");

                        navigate("/");

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
            }
        }

        useEffect((): void =>
        {
            if(!LOAD)
            {
                const URI: string = window.location.pathname;

                fetchData(URI);
                LOAD = true;
            }

        }, []);

        return (
            <div className="tm-row" style={{ display: "flex", flex: 1, flexDirection: "column" }}>
                {emodal ?
                <div className="modal-container" onClick={(e) => (e.target === modalRef.current) ? setEmodal(false) : null} ref={modalRef}>
                    <div className="modal-form">
                        <h3>Edit Neighbour</h3>
                        <div className="modal-block">
                            <label>Neighbour Name:</label>
                            <input type="text" autoComplete="off" style={{ width: "100%", marginBottom: "0px" }} defaultValue={data.name} ref={neighbourRef}/>
                        </div>
                        <div className="modal-block">
                            <label>Location:</label>
                            <input type="text" autoComplete="off" style={{ width: "100%", marginBottom: "0px" }} defaultValue={data.location} ref={locationRef}/>
                        </div>
                        {/* <div className="modal-block">
                            <label>Image:</label>
                            <input type="file" autoComplete="off" style={{ width: "100%", marginBottom: "0px" }} ref={imageRef}/>
                        </div> */}
                        <div className="modal-btn-container">
                            <button onClick={editData}>Submit</button>
                        </div>
                    </div>
                </div>
                :
                <></>
                }
                <div className="btn-container" style={{ gap: "15px" }}>
                    <button style={{ padding: "10px 20px" }} onClick={() => setEmodal(true)}>Edit</button>
                    <button style={{ padding: "10px 20px" }} onClick={deleteData}>Delete</button>
                </div>
                {data !== null ?
                <div style={{ display: "flex" }}>
                    <div className="tm-col-left" style={{display: "flex", justifyContent: "center", alignItems: "center", height: "500px"}}>
                        <img src={`${process.env.REACT_APP_API_URL}/image/${data.image}`} alt="cat.png" style={{width: "500px", borderRadius: "10px"}}/>
                    </div>
                    <main className="tm-col-right">
                        <section className="tm-content">
                            <h2 className="mb-4 tm-content-title">Neighbour Name</h2>
                            <p className="mb-4">{data.name}</p>
                            <hr className="mb-5" />
                            <h2 className="mb-4 tm-content-title">Location</h2>
                            <p className="mb-4">{data.location}</p>                       
                        </section>
                    </main>
                </div>
                :
                <div className="not-found-container">
                    <div className="not-found">
                        404
                    </div>
                </div>
                }
            </div>
        )
    }
}