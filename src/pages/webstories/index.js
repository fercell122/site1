import React, { useEffect, useState } from 'react';
import Menu from "../../components/menu/index";
import Boxtipo from "../../components/box/index";
import Unit from "../../components/unit/index";
import * as Realm from 'realm-web';
import "../../components/loader/style.css"


export default function Webstories() {
    const [webS, setWebS] = useState([])
    const [loader, setLoader] = useState(undefined)
    useEffect(() => {
        async function fetch() {
            const REALM_APP_ID = "application-0-zmyli";
            const app = new Realm.App({ id: REALM_APP_ID });
            const credentials = Realm.Credentials.anonymous();
            try {
                const user = await app.logIn(credentials);
                const allWeb = await user.functions.allwebstories();
                setWebS(allWeb);
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

    const webstories = webS.map((item) => {
        const dia = item.data.slice(0, 2);
        const mes = item.data.slice(3, 5);
        const ano = item.data.slice(6, 10);
        const x = mes + "/" + dia + "/" + ano;
        const formated = new Date(x);
        return ({
            titulo: item.title,
            data: formated,
            link: item.link,
            company: item.company
        })
    });

    const ordenado = webstories.sort(ordemDecrescente)

    //console.log(ordenado)


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
                    <Boxtipo titulo="Aventuras na História" />
                    {ordenado &&
                        ordenado.map((item) => {
                            let dataFormatada = ((item.data.getDate())) + "/" + ((item.data.getMonth() + 1)) + "/" + item.data.getFullYear();
                            return <Unit
                                key={item.id}
                                src={item.link}
                                title={item.titulo}
                                data={dataFormatada}
                            />;
                        })
                    }




                </div>
            }
        </>
    )
}

