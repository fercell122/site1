import React from 'react';
import Menu from "../../components/menu/index";
import Boxtipo from "../../components/box/index";
import Unit from "../../components/unit/index";


export default function Webstories() {
    return (
        <div>
            <Menu />
            <Boxtipo titulo="Aventuras na História" />
            <Unit
                src="https://stories.aventurasnahistoria.com.br/quem-foi-luis-xv-monarca-que-johnny-depp-vivera-em-filme/"
                title="Quem foi Luís XV, monarca que Johnny Depp viverá em filme?"
                data="26/08/22"
            />
            <Unit
                src="https://stories.aventurasnahistoria.com.br/a-neta-de-elizabeth-ii-que-trabalha-em-uma-floricultura-por-r40/h/"
                title="A neta de Elizabeth II que trabalha em uma floricultura por R$ 40/h"
                data="24/08/22"
            />
            <Unit
                src="https://stories.aventurasnahistoria.com.br/as-cenas-de-elvis-que-priscilla-presley-teve-dificuldade-em-assistir/"
                title="As cenas de ‘Elvis’ que Priscilla Presley teve dificuldade para assistir: ‘Eu vivi’"
                data="24/08/22"
            />
            <Unit
                src="https://aventurasnahistoria.uol.com.br/media/stories/o-ultimo-show-de-amy-winehouse/"
                title="O último show de Amy Winehouse"
                data="14/07/21"
            />




        </div>
    )
}

