import React, { useState } from 'react'

import './styles.css'
import api from '../../services/api'

import webSearchImg from '../../assets/undraw_web_search.svg'

export default function Logon () {
    const [url, setUrl] = useState()
    //const [productInformation, setProductInformation] = useState({})

    async function handleScrap(e) {
        e.preventDefault()

        console.log(url.toString())

        const teste = url.toString()

        const data = {
            url: teste
        }

        console.log(data)

        try {
            const response = await api.get('scrap', data)

            console.log(response.data)
            //setProductInformation(response.data)
        } catch (err) {
            console.log(err)
            alert(err)
        }
    }

    return (
        <div className="container">
            <section className="form">
                <form onSubmit={handleScrap}>
                    <h1>Web Scraping</h1> 

                    <input 
                        placeholder="URL" 
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                    />

                    <button className="button">Fazer Scrap</button>
                </form>
            </section>

            <img src={webSearchImg} alt="Web Search" width="600" height="600"/>
        </div>
    )
}