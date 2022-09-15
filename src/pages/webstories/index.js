import React, { useEffect, useState } from 'react';
import Menu from "../../components/menu/index";
import Boxtipo from "../../components/box/index";
import Unit from "../../components/unit/index";
import * as Realm from 'realm-web';
import "../../components/loader/style.css"


export default function Webstories() {
    const [webS, setWebS] = useState([])
    const [loader, setLoader] = useState(undefined)
    const Loading = <h1>Waiting</h1>
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
    }, [webS])



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
                    {webS &&
                        webS.map((item) => {
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

