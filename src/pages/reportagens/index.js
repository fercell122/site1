import React, { useState, useEffect } from 'react';
import Menu from "../../components/menu/index";
import * as Realm from 'realm-web';
import Unit from "../../components/unit/index";
import Boxtipo from "../../components/box/index";
import "../../components/loader/style.css"


export default function Report() {
    const [reports, setReports] = useState([])
    const [loader, setLoader] = useState(undefined)
    useEffect(() => {
        async function fetch() {
            const REALM_APP_ID = "application-0-zmyli";
            const app = new Realm.App({ id: REALM_APP_ID });
            const credentials = Realm.Credentials.anonymous();
            try {
                const user = await app.logIn(credentials);
                const allreports = await user.functions.allreports();
                setReports(allreports);
                setLoader(true);
            } catch (error) {
                console.error(error);

            }
        }


        fetch()
    }, [reports])


    function ordemDecrescente(a, b) {

        return b.data - a.data;
    }

    const reportagens = reports.map((item) => {
        const dia = item.data.slice(0, 2);
        const mes = item.data.slice(3, 5);
        const ano = item.data.slice(6, 10);
        const x = mes + "/" + dia + "/" + ano;
        const formated = new Date(x);
        return ({
            title: item.title,
            data: formated,
            link: item.link,
            company: item.company
        })
    });

    const ordenado = reportagens.sort(ordemDecrescente)

    const recreio = ordenado.filter(report => report.company === "Recreio")
    const aventuras = ordenado.filter(report => report.company === "Aventuras")
    const guia_cozinha = ordenado.filter(report => report.company === "Cozinha")
   
    return (
        <>
           {!loader ? (<body>
                <main class="loading-container">
                    <p class="spinner-text">
                        loading...
                    </p>
                    <div class="spinner"></div>
                </main>
            </body>) :

                <div>
                    <Menu />
                    <Boxtipo titulo="Revista Recreio" />
                    {recreio &&
                        recreio.map((item) => {
                            let dataFormatada = ((item.data.getDate())) + "/" + ((item.data.getMonth() + 1)) + "/" + item.data.getFullYear();
                            return <Unit
                                key={item.id}
                                src={item.link}
                                title={item.title}
                                data={dataFormatada}
                            />;
                        })
                    }
                    <Boxtipo titulo="Aventuras na História" />
                    {aventuras &&
                        aventuras.map((item) => {
                            let dataFormatada = ((item.data.getDate())) + "/" + ((item.data.getMonth() + 1)) + "/" + item.data.getFullYear();
                            return <Unit
                                key={item.id}
                                src={item.link}
                                title={item.title}
                                data={dataFormatada}
                            />;
                        })
                    }
                    <Boxtipo titulo="Guia da Cozinha" />
                    {guia_cozinha &&
                        guia_cozinha.map((item) => {
                            let dataFormatada = ((item.data.getDate())) + "/" + ((item.data.getMonth() + 1)) + "/" + item.data.getFullYear();
                            return <Unit
                                key={item.id}
                                src={item.link}
                                title={item.title}
                                data={dataFormatada}
                            />;
                        })
                    }

                </div>
            } 
        </>
    )
}