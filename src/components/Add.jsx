import {Link, Outlet} from "react-router-dom"
import { supabase } from "../client";
import { useState } from "react";
const Add = () => {

    const [crewMember, setCrewMember] = useState({
        name: "",
        power_level: 0
    })

    const createCrew = async (event) =>{
        event.preventDefault();
        await supabase.from('Team').insert(crewMember)
    }


    const handleChange = (event) => {
        const {name, value} = event.target;
        setCrewMember( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return (
        <div>
            <h1>Create a New Crewmate!</h1>
            <div className="row">
                <div className = "Name">
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" onChange={handleChange}/>
                    </label>
                    </form>
                </div>
                <div className = "Power">
                <form>
                    <label>
                        Power Level:
                        <input type="number" name="power_level" onChange={handleChange}/>
                    </label>
                    </form>
                    <button onClick={createCrew}>Create!</button>
                </div>
            </div>
        </div>
    )
}

export default Add;