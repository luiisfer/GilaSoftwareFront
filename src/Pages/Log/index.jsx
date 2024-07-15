import Layout from "../../Components/Layout/index";
import axios from "axios";
import {useEffect, useState} from "react";



const Log = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/logs')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    },[])


    return (
        <>
            <Layout>
                <h3> Tabla de Logs </h3>
                <table className="border-separate border-spacing-2 border border-slate-400 caption-top">
                    <thead>
                    <tr>
                        <th className="border border-slate-300 hover:border-spacing-2">ID</th>
                        <th className="border border-slate-300">Fecha</th>
                        <th className="border border-slate-300">Nivel</th>
                        <th className="border border-slate-300">Log</th>
                        <th className="border border-slate-300">Mensaje</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((log , index) => {
                            return <tr key={index}>
                                <td>{log.logsId}</td>
                                <td>{log.dated}</td>
                                <td>{log.logger}</td>
                                <td>{log.level}</td>
                                <td>{log.message}</td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </Layout>
        </>
    )
}

export default Log