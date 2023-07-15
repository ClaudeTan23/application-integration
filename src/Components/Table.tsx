import React, { useState, useEffect, useRef } from "react";
import "../css/main.css";
import axios from "axios";

export namespace Table 
{
    export const Cars = (): JSX.Element =>
    {
        let LOAD = false;
        const [cars, setCars]: Array<any>    = useState([]);
        const [modal, setModal]: any         = useState(false);
        const [editModal, setEditModal]: any = useState(false);
        const [edit, setEdit]: Array<any>    = useState([]);
        const [editData, setEditData]: any   = useState(undefined);

        const makeRef: React.RefObject<HTMLInputElement>   = useRef(null);
        const modelRef: React.RefObject<HTMLInputElement>  = useRef(null);
        const priceRef: React.RefObject<HTMLInputElement>  = useRef(null);
        const dateRef: React.RefObject<HTMLInputElement>   = useRef(null);
        const searchRef: React.RefObject<HTMLInputElement> = useRef(null);
        const selectRef: React.RefObject<HTMLSelectElement> = useRef(null);

        useEffect(() =>
        {
            if(!LOAD)
            {
                LOAD = true;

                fetchCars();
                
            }

        }, []);

        function fetchCars(): void 
        {
            axios.get("http://127.0.0.1:8080/cars")
            .then(response => setCars(response.data))
            .catch(err => 
            {
                console.log(err);
            });
        }

        const submitData = async (): Promise<void> =>
        {
            const make  = makeRef.current?.value.trim();
            const model = modelRef.current?.value.trim();
            const price = priceRef.current?.value.trim();
            const date  = dateRef.current?.value.trim();
            
            if(make !== "" && model !== "" && price !== "" && date !== "")
            {
                const promise = await axios({
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    url: "http://127.0.0.1:8080/add-car",
                    data: {
                        make_by: make,
                        model: model,
                        price: price,
                        registration_date: date,
                        active: "active"
                    }

                });

                if(promise.status == 200)
                {
                    const latestResult: Array<any> = cars;

                    latestResult.unshift(promise.data);
                    setCars(latestResult);
                    setModal(false);

                } else 
                {
                    console.log(promise);
                }

            } else 
            {
                alert("Please fill all the input");
            }
        }

        const deleteData = (id: string, index: number): void =>
        {
            const confirmation: any = window.confirm("Are you sure to delete?");

            if(confirmation === true)
            {
                axios({
                   method: "POST",
                   headers: {
                    "Content-Type": "application/json"
                   },
                   url: "http://127.0.0.1:8080/delete-car",
                   data: {
                    id: id
                   }
                })
                .then(res => 
                {
                    if(res.status === 200 && res.data === "deleted")
                    {
                        const currentCars: Array<any> = [...cars];
                        currentCars.splice(index, 1);

                        setCars(currentCars);   

                    }
                });

            }
        }

        function editDataFunc(data: object): void 
        {
            setEditModal(true);
            setEditData(data);
        }

        const submitEditedData = async (): Promise<void> =>
        {
            const make  = makeRef.current?.value.trim();
            const model = modelRef.current?.value.trim();
            const price = priceRef.current?.value.trim();
            const date  = dateRef.current?.value.trim();
            
            if(make !== "" && model !== "" && price !== "" && date !== "")
            {
                const promise = await axios({
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    url: "http://127.0.0.1:8080/edit-car",
                    data: {
                        id: editData.id,
                        make_by: make,
                        model: model,
                        price: price,
                        registration_date: date,
                        active: "active"
                    }

                });

                if(promise.status == 200 && promise.data === "edited")
                {
                    setEditModal(false);
                    fetchCars();

                } else 
                {
                    console.log(promise);
                }

            } else 
            {
                alert("Please fill all the input");
            }
        }

        async function searchCars(): Promise<void> 
        {
            const inputValue: string | undefined = searchRef.current?.value.trim();
            const selValue: string | undefined   = selectRef.current?.value.trim();
      
            if(inputValue !== "" && inputValue !== undefined)
            {
                const promise = await axios({
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    url: "http://127.0.0.1:8080/search",
                    data: {
                        col: selValue,
                        val: inputValue
                    }
                });

                if(promise.status === 200)
                {
                    setCars(promise.data);

                } else 
                {
                    console.log(promise);
                }

            } else 
            {
                fetchCars();
            }
        }

        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", padding: "20px 15px", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px"}}>
                        <input type="text" autoComplete="off" ref={searchRef} placeholder="Search Car..."
                        style={{padding: "10px 20px", backgroundColor: "#DFDFDF", fontSize: "18px", fontWeight: "600", borderRadius: "4px", border: "2px solid #606060"}}
                        />
                        <select ref={selectRef} style={{padding: "10px 20px", backgroundColor: "#DFDFDF", fontSize: "18px", fontWeight: "600", borderRadius: "4px", border: "2px solid #606060"}}>
                            <option value="make_by">Make By</option>
                            <option value="model">Model</option>
                            <option value="price">Price</option>
                            <option value="registration_date">Date</option>
                        </select>
                        <div style={{padding: "10px 20px", backgroundColor: "#DFDFDF", fontSize: "18px", fontWeight: "600", borderRadius: "4px", border: "2px solid #606060", cursor: "pointer" }}
                        onClick={searchCars}
                        >Search</div>
                    </div>
                    <div style={{padding: "10px 20px", backgroundColor: "#DFDFDF", fontSize: "18px", fontWeight: "600", borderRadius: "4px", border: "2px solid #606060", cursor: "pointer" }}
                        onClick={() => setModal(true)}
                    >Add</div>
                </div>
                    {(modal || editModal) ? 
                    <div className="modal-container">
                        <div className="modal-block">
                            <h2>Add Car</h2>
                            <div className="modal-input">
                                <label htmlFor="make">Make By</label>
                                {editData !== undefined ?
                                <input type="text" required autoComplete="off" id="make" ref={makeRef} defaultValue={editData.make}/>
                                :
                                <input type="text" required autoComplete="off" id="make" ref={makeRef} />
                                }
                            </div>
                            <div className="modal-input">
                                <label htmlFor="model">Model</label>
                                {editData !== undefined ?
                                <input type="text" required autoComplete="off" id="model" ref={modelRef} defaultValue={editData.model}/>
                                :
                                <input type="text" required autoComplete="off" id="model" ref={modelRef} />
                                }
                            </div>
                            <div className="modal-input">
                                <label htmlFor="price">Price</label>
                                {editData !== undefined ?
                                <input type="text" required autoComplete="off" id="price" ref={priceRef} defaultValue={editData.price}/>
                                :
                                <input type="text" required autoComplete="off" id="price" ref={priceRef} />
                                }
                            </div>
                            <div className="modal-input">
                                <label htmlFor="date">Registration Date</label>
                                {editData !== undefined ?
                                <input type="date" required autoComplete="off" id="date" ref={dateRef} defaultValue={editData.date}/>
                                :
                                <input type="date" required autoComplete="off" id="date" ref={dateRef} />
                                }
                            </div>
                            {modal ?
                            <div className="modal-btn-block">
                                <div onClick={submitData}>Add</div>
                                <div onClick={() => setModal(false)}>Cancel</div>
                            </div>
                            :
                            <div className="modal-btn-block">
                                <div onClick={submitEditedData}>Edit</div>
                                <div onClick={() => 
                                {
                                    setEditModal(false);
                                    setEditData(undefined);
                                }}>Cancel</div>
                            </div>
                            }
                        </div>
                    </div>
                    :
                    null
                    }

                    {cars.length > 0 ?
                        <table>
                            <thead>
                                <tr>
                                <th>Id</th>
                                <th>Make_by</th>
                                <th>Model</th>
                                <th>Price</th>
                                <th>Registration Date</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                {cars.map((car, index) => 
                                <tr key={car.id}>
                                    <td>{car.id}</td>
                                    <td>{car.make_by}</td>
                                    <td>{car.model}</td>
                                    <td>{car.price}</td>
                                    <td>{car.registration_date}</td>
                                    <td style={{ display: "flex", gap: "10px"}}>
                                        <button 
                                        onClick={() => editDataFunc({ id: car.id, make: car.make_by, model: car.model, price: car.price, date: car.registration_date})}
                                        style={{ padding: "10px", backgroundColor: "#F6FF60", border: "2px solid #000", borderRadius: "4px", width: "60px", fontSize: "18px", cursor: "pointer" }}>Edit</button>
                                        <button 
                                        onClick={() => deleteData(car.id, index)}
                                        style={{ padding: "10px", backgroundColor: "#FF7840", border: "2px solid #000", borderRadius: "4px", width: "80px", fontSize: "18px", cursor: "pointer" }}>Delete</button>
                                    </td>
                                </tr>
                                )}
                            </tbody>
                        </table>
                    :
                    "Empty Data"
                    }

            </div>
        )
    }
}
