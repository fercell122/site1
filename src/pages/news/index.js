import React, { useEffect, useState } from 'react';
import Menu from "../../components/menu/index";
import Boxtipo from "../../components/box/index";
import Unit from "../../components/unit/index";
import * as Realm from 'realm-web';
import "../../components/loader/style.css"


export default function News() {
    const [news, setNews] = useState([])
    const [loader, setLoader] = useState(undefined)
    useEffect(() => {
        async function fetch() {
            const REALM_APP_ID = "application-0-zmyli";
            const app = new Realm.App({ id: REALM_APP_ID });
            const credentials = Realm.Credentials.anonymous();
            try {
                const user = await app.logIn(credentials);
                const allnews = await user.functions.allnews();
                setNews(allnews);
                setLoader(true);
            } catch (error) {
                console.error(error);

            }
        }


        fetch()
    }, [])

    function ordemDecrescente(a, b) {
        return b.data - a.data;
    }

    const noticias = news.map((item) => {
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

    const ordenado = noticias.sort(ordemDecrescente);

    const aventuras = ordenado.filter(hardnew => hardnew.company === "Aventuras")
    const uol = ordenado.filter(hardnew => hardnew.company === "uol")
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
                    <Boxtipo titulo="UOL" />
                    {uol &&
                        uol.map((item) => {
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
                </div>
            }

        </>
    )
}










