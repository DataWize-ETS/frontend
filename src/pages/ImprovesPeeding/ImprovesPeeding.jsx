import './ImprovesPeending.css'
import Title from '../../components/Title';
import { toast } from "react-toastify";
import api from '../../services/api'
import { useEffect, useState } from 'react';

export default () => {
    const [improvesPeending, setImprovesPeending] = useState([])

    useEffect(() => {
        loadImprovementsPeending()
    }, [])

    function loadImprovementsPeending(){
        api.get('/improvement/peending')
        .then((response) => {
            setImprovesPeending(response.data)
            console.log(response.data)
        }).catch(e => {
            toast.error('Não foi possível se conectar')
        })
    }

    function handleApprove(id){
        
    }
    return (
        <>
            <Title name="Improvements Peendings"></Title>
            {
                improvesPeending.map((improve, i) => {
                    return <div key={i} className="peeding-main">
                        <div className="improve-container">
                            <div className='container-1'>
                                <h1 className='name-requester'>{improve.signature} / {improve.department.name}</h1>
                                <h3 className='summary'>{improve.summary}</h3>
                                <p className=''>{improve.dueDate}</p>
                                <div className="buttons">
                                    <button className='btn btn-edit'>See and Edit</button>
                                    <button className='btn btn-approve' onClick="" >Approve</button>
                                </div>
                            </div>
                            <div className='container-2'>
                                <div className="peeding-status">Peeding</div>
                            </div>
                        </div>
                    </div>
                })
            }


        </>
    )
}