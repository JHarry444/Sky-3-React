import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TrainerById = () => {

    const { id } = useParams();


    const [trainer, setTrainer] = useState("");

    useEffect(() => {
        const getTrainer = async () => {
            try {
                const { data } = await axios.get("http://localhost:8081/trainers/" + id);
                setTrainer(data.name);
            } catch (err) {
                console.error(err);
            }
        }
        getTrainer();
    }, [id]);





    return (<>
        <p>{trainer}</p>

    </>);
}

export default TrainerById;