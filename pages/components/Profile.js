import config from "../../config.json"
import styled from 'styled-components'

const StyledProfile = styled.section`
  img {
    width: 85px;
    height: 85px;
    border-radius: 99px;
  }
  .user-info {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    gap: 1rem;
    width: 100%;
    margin-top: 4rem;
  }
`;

const Profile = () => {
  return (
    <StyledProfile>
      {/* <img src="banner" alt=""/> */}

      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} alt="foto de perfil do usuario"/>

        <div className="user-title">
          <h2>
            {config.name}
          </h2>
          <p>
            {config.job}
          </p>
        </div>
      </section>
    </StyledProfile>
  )
}

export default Profile