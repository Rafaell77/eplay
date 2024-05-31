import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Games[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'Residente Evil 4, jogo de terror',
    title: 'Residente evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250'],
    imagem: ''
  },
  {
    id: 2,
    category: 'Ação',
    description: 'Residente Evil 4, jogo de terror',
    title: 'Residente evil 4',
    system: 'PS5',
    infos: ['5%', 'R$ 290'],
    imagem: ''
  },
  {
    id: 3,
    category: 'Ação',
    description: 'Residente Evil 4, jogo de terror',
    title: 'Residente evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250'],
    imagem: ''
  },
  {
    id: 4,
    category: 'Ação',
    description: 'Residente Evil 4, jogo de terror',
    title: 'Residente evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250'],
    imagem: ''
  }
]

const emBreve: Games[] = [
  {
    id: 5,
    category: 'RPG',
    description: 'Diablo IV, jogo de terror desenvolvido pela Blizzard',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['05/04'],
    imagem: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description: 'Diablo IV, jogo de terror desenvolvido pela Blizzard',
    title: 'Zelda 4',
    system: 'Windows',
    infos: ['05/04'],
    imagem: zelda
  },
  {
    id: 7,
    category: 'RPG',
    description: 'Diablo IV, jogo de terror desenvolvido pela Blizzard',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['05/04'],
    imagem: starWars
  },
  {
    id: 8,
    category: 'RPG',
    description: 'Diablo IV, jogo de terror desenvolvido pela Blizzard',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['05/04'],
    imagem: diablo
  }
]

const Home = () => {
  ;<>
    <Banner />
    <ProductList games={promocoes} title={'Promoções'} background={'gray'} />
    <ProductList games={emBreve} title={'Em breve'} background={'black'} />
  </>
}

export default Home
