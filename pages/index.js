import styled from 'styled-components'
import MainGrid from './../src/components/MainGrid/index';
import Box from './../src/components/Box/index';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.secundary};
// `

function ProfileSidebar(propriedades) {
  return (
    <Box> 
      <img src={propriedades.usuarioAleatorio} style={{ borderRadius: '8px'}}/>
    </Box>
  )
}

export default function Home() {
  const usuarioAleatorio = 'https://veja.abril.com.br/wp-content/uploads/2020/09/1-GettyImages-517387700.jpg.jpg?quality=70&strip=info&resize=680,453';
  
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
  ]

  return (
    <>
      <AlurakutMenu/>
      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profileArea' }}>
          <ProfileSidebar usuarioAleatorio={usuarioAleatorio}/>
        </div>
        <div className="welcomeArea" style={{gridArea: 'welcomeArea' }}>
          <Box> 
            <h1 className="title">
              bem vindo
            </h1>
            <OrkutNostalgicIconSet/>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              pessoas da comunidade({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                  <a href={`/user/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`}/>
                      <span>{itemAtual}</span>
                  </a>
                  </li>
                )
              })}
            </ul>
            </ProfileRelationsBoxWrapper> 
          <Box> 
            comunidade
          </Box>
        </div>
      </MainGrid>
    </>
  ) 
}
