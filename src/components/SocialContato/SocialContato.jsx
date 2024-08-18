import { SocialContainer } from './SocialContato.style'
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";

const SocialContato = () => {
  return (
    <SocialContainer>
        <h2>E-mail para contato</h2>
        <span>douglasmonteiro1995@hotmail.com</span>
        <h2>Adicione nas redes</h2>
        <p>
          <a href="https://github.com/douglasmf" 
          target='_blank'
          id='github'>
            <VscGithub/>
          </a>
          /douglasmf
        </p>
        <p>
          <a href="https://www.linkedin.com/in/douglas-monteiro-421b90300/" 
          target='_blank'
          id='linkedin'>
            <CiLinkedin/>
          </a>
          /douglas-monteiro
        </p>
    </SocialContainer>
  )
}

export default SocialContato