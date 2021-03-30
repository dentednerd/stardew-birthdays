import styled from 'styled-components';
import images from '../../images/index.js';

const StyledCard = styled.div`
  background-image: linear-gradient(to bottom, #de914e, #fab95f, #de914e);
  color: #430f0c;
  border: solid 3px #430f0c;
  padding: 0.5rem;
  text-shadow: -1px 1px 2px rgba(67, 15, 12, 0.25);
  box-shadow: 0.25rem 0.25rem 0.25rem rgba(67, 15, 12, 0.25);

  h2 {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }

  h3 {
    font-size: 1rem;
    line-height: 1rem;
    font-family: 'Orange Kid', sans-serif;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    width: 100%;
    height: 3rem;

    @media(min-width: 768px) {
      grid-template-columns: repeat(6, 1fr);
    }

    li {
      height: 1rem;

      img {
        width: 1rem;
        height: 1rem;
      }
    }
  }
`;

const Card = ({ friend }) => (
  <StyledCard>
    <h2>{friend.name}</h2>
    <h3>{friend.birthday.season} {friend.birthday.day}</h3>
    <ul>
      {friend.loves.map(item => (
        <li key={item}>
          <img src={images[item]} alt={item} />
        </li>
      ))}
    </ul>
  </StyledCard>
);

export default Card;
