import * as S from './SocialContato.style'
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";

const SocialContato = () => {
  return (
    <S.SocialContainer>
        <S.Email>
          <h2>E-mail para contato</h2>
          <div className="emailContainer">
            <span>douglasmonteiro1995</span>
            <span>@hotmail.com</span>
          </div>
        </S.Email>
        <S.SocialLinks>
          <h2>Adicione nas redes</h2>
          <div className='linksSociais'>
            <a href="https://github.com/douglasmf"
            target='_blank'
            id='github'>
              <VscGithub/> /douglasmf
            </a>
            <a href="https://www.linkedin.com/in/douglas-monteiro-421b90300/"
            target='_blank'
            id='linkedin'>
              <CiLinkedin/> /douglas-monteiro
            </a>
          </div>
        </S.SocialLinks>
    </S.SocialContainer>
  )
}

export default SocialContato