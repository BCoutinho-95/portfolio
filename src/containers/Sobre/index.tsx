import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre Mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestias
      error veniam praesentium omnis doloremque eius, labore ipsa totam.
      Corporis fugit soluta non neque fuga asperiores cupiditate odio amet
      autem!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=BCoutinho-95&show_icons=true&theme=dracula&include_all_commits=true'&count_private=false'" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=BCoutinho-95&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
