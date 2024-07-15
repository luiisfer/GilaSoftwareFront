import Layout from "../../Components/Layout/index.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function Form() {



    const [data, setData] = useState([]);
    const [inputMessage, setInputMessage] = useState("");
    const [selectCategory, setSelectCategory] = useState("");


    const DataUser = {
        message: inputMessage
    };

    const SentData = () =>{
        axios.post(`http://localhost:8080/api/message/user/category/${selectCategory}` ,DataUser)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        axios.get('http://localhost:8080/api/category')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    },[])

    function handleSubmit(event) {
        event.preventDefault();

        if (inputMessage.trim() === "") {
            alert("El textarea esta vacio");
        } else {
            SentData();
            alert("Guardado Exitosamente");
        }




    }

    function handleInputChange(event) {
        setInputMessage(event.target.value);
    }

    function handleCategory(event) {
        setSelectCategory(event.target.value);
    }


    return (
        <>
            <Layout>


                <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                    <label htmlFor="categories" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categorias</label>
                    <select
                    value={selectCategory}
                    onChange={handleCategory}
                        id="categories"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                            {
                                data.map((category , index) => <option key={category.categoryId} value={category.categoryId}>{category.name}</option>
                                )
                            }

                    </select>

                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Escribe tu mensaje</label>
                    <textarea value={inputMessage}
                              onChange={handleInputChange}
                        id="message" rows="4"
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Envia un mensaje aqui..."></textarea>

                    <button type="submit"
                            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                        Enviar Informacion
                    </button>

                </form>


            </Layout>
        </>
    )
}

export default Form