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

    const recreio = reports.filter(report => report.company === "Recreio")
    const aventuras = reports.filter(report => report.company === "Aventuras")

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