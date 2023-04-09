import { useState, useEffect } from "react";
import { supabase } from '../client';
import { useParams } from "react-router-dom";
const Update = () => {
    let params = useParams();
    const [crewMember, setCrewMember] = useState({
        name: "",
        power_level: 0
    })

    const [newCrew, setNewCrewMember] = useState({
        name: "",
        power_level: 0
    })

    const updateCrew = async (event) => {
        event.preventDefault();
    
        await supabase
        .from('Team')
        .update(newCrew)
        .eq('id', params.id);
        window.location = "/gallery"
    }

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
            .from('Team')
            .select()
            .eq('id', params.id);
          
            // set state of posts
            setCrewMember(data[0])
            setNewCrewMember(data[0])
          }
        fetchPosts()
    }, []);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setNewCrewMember( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return (
        <div>
            <h2>Current Name: {crewMember.name}</h2>
            <h2>Current Power Level: {crewMember.power_level}</h2>
            <h1>Update this Crewmate!</h1>
            <div className="row">
                <div className = "Name">
                <form>
                    <label>
                        New Name:
                        <input type="text" name="name" onChange={handleChange}/>
                    </label>
                    <button onClick={updateCrew}>Update</button>
                    </form>
                </div>
                <div className = "Power">
                <form>
                    <label>
                        New Power Level:
                        <input type="number" name="power_level" onChange={handleChange}/>
                    </label>
                    <button onClick={updateCrew}>Update</button> 
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Update;