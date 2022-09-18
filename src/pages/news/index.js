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
    }, [news])

    function ordemDecrescente(a, b) {
        return a.data < b.data;
    }

    const news2 = news.sort(ordemDecrescente);

    const aventuras = news2.filter(hardnew => hardnew.company === "Aventuras")
    const uol = news2.filter(hardnew => hardnew.company === "uol")
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
                            return <Unit
                                key={item.id}
                                src={item.link}
                                title={item.title}
                                data={item.data}
                            />;
                        })
                    }
                    <Boxtipo titulo="Aventuras na História" />
                    {aventuras &&
                        aventuras.map((item) => {
                            return <Unit
                                key={item.id}
                                src={item.link}
                                title={item.title}
                                data={item.data}
                            />;
                        })

                    }
                </div>
            }

        </>
    )
}










