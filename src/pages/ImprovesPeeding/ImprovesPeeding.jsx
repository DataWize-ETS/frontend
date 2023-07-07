import './ImprovesPeending.css'
import Title from '../../components/Title';
import { toast } from "react-toastify";
import api from '../../services/api'
import { useCallback, useEffect, useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { TbEdit } from 'react-icons/tb'
import axios from '../../services/api';
import 'animate.css';
import { redirect, useNavigate   } from 'react-router-dom';

export default () => {
    let navigate = useNavigate();
    const [improvementsPending, setImprovementsPending] = useState([])
   

    useEffect(() => {
        async function loadImprovementsPeending(){
            api.get('/improvement/pending')
            .then((response) => {
                setImprovementsPending(response.data)
                localStorage.setItem('improvements', JSON.stringify(response.data))
            }).catch(e => {
                // toast.error('Não foi possível se conectar')
            })
        }
        loadImprovementsPeending()
    }, [])

    useEffect(() => {
        localStorage.setItem('improvements', JSON.stringify(improvementsPending))
    }, [improvementsPending])

    function formatDate(date) {
        const newDate = new Date(date);

        const day = newDate.getDate();
        const month = newDate.getMonth() + 1;
        const year = newDate.getFullYear();

        const formatDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
        return formatDate
    }

    function handleEdit(id) {
        return navigate(`/improvement/new/${id}`)
    }

    const handleDelete = useCallback((id) => {
        const find = improvementsPending.filter(i => i.improvementId !== id)
        setImprovementsPending(find)
    }, [improvementsPending])

    function handleApprove(id){
        document.querySelector(`#improvement--${id}`).classList.add("animate__fadeOutRightBig");
        setTimeout(function() {
            handleDelete(id)
        }, 5000);
        
        console.log('Aprovar improvement', id)
        const token = localStorage.getItem('@bearer')

        const config = {
            headers: { Authorization: token }
        };
        
        
        axios.patch( 
          `/improvement/${id}/status`,
          null, config
        ).then(
            toast.success('Request Approved')
        ).catch(e => {
            // toast.error('Ops!')
        });
    }
    return (
        <>
            <Title name="Improvements Pendings"></Title>
            <div className="improvements--container">
            {improvementsPending.map((improve, i) => {
                    return (
                        <div className="improvement-cart animate__animated" id={`improvement--${improve.improvementId}`}>

                            <div className="improvement--header">
                                <img src={`https://ui-avatars.com/api/?name=${improve.signature}&rounded=true&background=random`} draggable="false"/>
                            </div>

                            <div className="improvement--body">
                               <div className='improvement--title'><span className="signature">{improve.signature}</span> / <span className="department">{improve.department.name}</span></div>
                               <div className="summary"> {improve.summary} </div>
                               <div className="dueDate">{formatDate(improve.dueDate)}</div>
                               <div className="buttons">
                                <button className="btn btn-edit" onClick={() => handleEdit(improve.improvementId)}>  <TbEdit color='#FFF' size={24}/> See and Edit</button>
                                <button className="btn btn-approve" onClick={() => handleApprove(improve.improvementId)}> <AiOutlineCheckCircle color='#FFF' size={24}/> Approve Now</button>
                                </div> 
                            </div>

                            <div className="improvement--footer">
                                <div className="status">{improve.status.name}</div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    )
}