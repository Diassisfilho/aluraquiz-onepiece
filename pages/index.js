import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';

import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

// const Title = styled.h1`
//    font-size: 50px;
//    color: ${({ theme }) => theme.colors.primary};
// `

// function Title (props) {
//   return <h1>{props.children} by tag h1</h1>
// }

// function Home() {
//   return (
//     <Title style={{ backgroundImage: `url(${db.bg})`}}>
//       Aquela Page Massa
//     </Title>
//   )
// }

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

function Home() {
  const router = useRouter();
  let [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>{db.title}</title>

        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://aluraquiz-onepiece.diassisfilho.vercel.app/" />
        <meta property="og:type" content="website" />

        <meta property="og:image" content={db.bg} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="810" />
        <meta property="og:image:height" content="600" />

        <meta property="og:title" content={db.title} />

        <meta property="og:description" content={db.description} />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(infosDoEvento) => {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <input
                placeholder="Insira seu nickname"
                onChange={(infosdoEvento) => {
                  name = setName(infosdoEvento.target.value);
                }}
              />
              <button type="submit" disabled={name.length === 0}>
                Jogue agora amigo
                {' '}
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <p>Outros quizes para testar seus conhecimentos</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/diassisfilho/" />
    </QuizBackground>
  );
}

export default Home;
