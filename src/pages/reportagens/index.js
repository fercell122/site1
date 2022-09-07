import React from 'react';
import Menu from "../../components/menu/index";
import Boxtipo from "../../components/box/index";
import Unit from "../../components/unit/index";


export default function Report() {
    return (
        <div>
            <Menu />
            <Boxtipo titulo="Revista Recreio" />
            <Unit
                src="https://recreio.uol.com.br/noticias/entretenimento/attack-titan-6-pontos-chave-para-lembrar-antes-de-assistir-aos-episodios-finais.phtml"
                title="Attack On Titan: 6 pontos-chave para lembrar antes de assistir aos episódios finais "
                data="10/01/22"
            />
            

            <Boxtipo titulo="Aventuras na História" />
            <Unit
                src="https://aventurasnahistoria.uol.com.br/noticias/reportagem/freddie-mercury-privado-bulsara-queen.phtml"
                title="Por trás da lenda Mercury, o privado Freddie Bulsara"
                data="05/09/22"
            />
            <Unit
                src="https://aventurasnahistoria.uol.com.br/noticias/reportagem/o-verdadeiro-rosto-de-d-pedro-i-revelado-por-uma-foto-de-seu-cranio.phtml"
                title="O verdadeiro rosto de D. Pedro I revelado por uma foto de seu crânio"
                data="04/09/22"
            />
            <Unit
                src="https://aventurasnahistoria.uol.com.br/noticias/reportagem/historia-mumia-egipcia-inet-nefere-celulas-intactas.phtml"
                title="A história da múmia egípcia Iret-Neferet, que revelou células intactas mesmo após 2.500 anos"
                data="31/07/21"
            />
            <Unit
                src="https://aventurasnahistoria.uol.com.br/noticias/reportagem/10-anos-sem-amy-winehouse.phtml"
                title="Uma artista única: Há 10 anos, o mundo se despedia de Amy Winehouse"
                data="23/07/21"
            />
            <Unit
                src="https://aventurasnahistoria.uol.com.br/noticias/reportagem/william-nava-o-paleatologo-que-descobriu-o-primeiro-fossil-de-um-dinossauro-em-marilia.phtml"
                title="William Nava, o paleontólogo que descobriu o primeiro fóssil de um dinossauro em Marília"
                data="03/07/2021"
            />
            <Unit
                src="https://aventurasnahistoria.uol.com.br/noticias/reportagem/como-a-tecnologia-do-instituto-butantan-tem-ajudado-cientistas-no-combate-a-pandemia-de-covid-19.phtml"
                title="Como a tecnologia do Instituto Butantan tem ajudado cientistas no combate a pandemia de covid-19"
                data="13/03/21"
            />
            <Unit
                src="https://aventurasnahistoria.uol.com.br/noticias/reportagem/madonna-faz-politica-com-musica-nao-tem-medo-de-arriscar-e-borra-linhas-das-representacoes-femininas.phtml"
                title="Mulher de fases: Há 64 anos, nascia Madonna; entenda como ela se tornou a 'rainha do pop'"
                data="28/02/21"
            />
            <Unit
                src="https://aventurasnahistoria.uol.com.br/noticias/reportagem/entre-banditismo-e-romance-a-turbulenta-saga-de-lampiao-e-maria-bonita.phtml"
                title="Entre banditismo e romance, a turbulenta saga de Lampião e Maria Bonita"
                data="19/11/20"
            />
             <Unit
                src="https://aventurasnahistoria.uol.com.br/noticias/reportagem/o-legado-de-fidel-castro-no-aniversario-de-4-anos-de-sua-morte.phtml"
                title="O legado de Fidel Castro no aniversário de 4 anos de sua morte"
                data="25/11/20"
            />
        </div>
    )
}