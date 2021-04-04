import { useState } from 'react';
import styled from 'styled-components';
import Card from './components/Card';
import characters from './data/characters';

const backgrounds = {
  spring: `linear-gradient(to bottom, #358a92, #90ff89)`,
  summer: `linear-gradient(to bottom, #eddd85, #62b7ec)`,
  fall: `linear-gradient(to bottom, #fc6d0e, #fed460)`,
  winter: `linear-gradient(to bottom, #56a5ff, #9bedff)`
}

const Main = styled.main`
  background-image: ${props => backgrounds[props.activeSeason]};
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;

  h1 {
    background-image: linear-gradient(to bottom, #de914e, #fab95f, #de914e);
    border: solid 3px #430f0c;
    font-size: 3rem;
    font-weight: 400;
    line-height: 4rem;
    color: #430f0c;
    text-shadow: -1px 1px 2px rgba(67, 15, 12, 0.25);
    margin-bottom: 1rem;
    padding: 0.5rem;
    box-shadow: 0.25rem 0.25rem 0.25rem rgba(67, 15, 12, 0.25);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 0.5rem;
  width: 100%;
  margin: 0 auto 1rem;

  @media(min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media(min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
    max-width: 1024px;
  }
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  margin: 0 auto;

  @media(min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    max-width: 1024px;
  }

  button {
    background-image: linear-gradient(to bottom, #de914e, #fab95f, #de914e);
    color: #430f0c;
    border: solid 3px #430f0c;
    text-shadow: 2px 2px rgba(67, 15, 12, 0.25);
    font-family: 'Stardew Valley', sans-serif;
    padding: 0.25rem;
    box-shadow: 0.25rem 0.25rem 0.25rem rgba(67, 15, 12, 0.25);

    &.spring:hover {
      background-image: ${backgrounds.spring};
    }

    &.summer:hover {
      background-image: ${backgrounds.summer};
    }

    &.fall:hover {
      background-image: ${backgrounds.fall};
    }

    &.winter:hover {
      background-image: ${backgrounds.winter};
    }
  }
`;

function App() {
  const [activeSeason, setActiveSeason] = useState('spring');

  const filteredFriends = characters.filter(friend => friend.birthday.season === activeSeason).sort((a,b) => a.birthday.day - b.birthday.day);

  const titleCase = (season) => {
    const arr = season.split('');
    arr[0] = arr[0].toUpperCase();
    return arr.join('');
  }

  return (
    <Main activeSeason={activeSeason}>
      <h1>Stardew Birthdays: {titleCase(activeSeason)}</h1>
      <Grid>
        {filteredFriends.map(friend => <Card key={friend.name} friend={friend} />)}
      </Grid>
      <Buttons>
          <button className="spring" onClick={() => setActiveSeason('spring')}>Spring</button>
          <button className="summer" onClick={() => setActiveSeason('summer')}>Summer</button>
          <button className="fall" onClick={() => setActiveSeason('fall')}>Fall</button>
          <button className="winter" onClick={() => setActiveSeason('winter')}>Winter</button>
        </Buttons>
    </Main>
  );
}

export default App;
