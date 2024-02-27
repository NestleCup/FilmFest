import drama from '../../assets/img/jenre/drama.png'
import comedy from '../../assets/img/jenre/comedy.png'
import history from '../../assets/img/jenre/history.png'
import fantasy from '../../assets/img/jenre/fantasy.png'
import horror from '../../assets/img/jenre/horror.png'
import fighters from '../../assets/img/jenre/fighters.png'
import thriller from '../../assets/img/jenre/thriller.png'
import detectives from '../../assets/img/jenre/detectives.png'
import family from '../../assets/img/jenre/family.png'
import adventures from '../../assets/img/jenre/adventures.png'
import criminal from '../../assets/img/jenre/criminal.png'
import documentaries from '../../assets/img/jenre/documentaries.png'
import fantastic from '../../assets/img/jenre/fantastic.png'
import melodramas from '../../assets/img/jenre/melodramas.png'
import musical from '../../assets/img/jenre/musical.png'




import { nanoid } from '@reduxjs/toolkit'

export const jenreImg = [
  { id: nanoid(), name: 'Комедия', urls: comedy, category: 13 },
  { id: nanoid(), name: 'Ужасы', urls: horror, category: 17 },
  { id: nanoid(), name: 'Драмма', urls: drama, category: 2 },
  { id: nanoid(), name: 'Боевик', urls: fighters, category: 11 },
  { id: nanoid(), name: 'Фэнтези', urls: fantasy, category: 12 },
  { id: nanoid(), name: 'Исторические', urls: history, category: 15 },
  { id: nanoid(), name: 'Семейные', urls: family, category: 19 },
  { id: nanoid(), name: 'Триллер', urls: thriller, category: 1 },
  { id: nanoid(), name: 'Детектив', urls: detectives, category: 5 },
  { id: nanoid(), name: 'Приключения', urls: adventures, category: 7 },
  { id: nanoid(), name: 'Криминальные', urls: criminal, category: 3 },
  { id: nanoid(), name: 'Документальные', urls: documentaries, category: 22 },
  { id: nanoid(), name: 'Фантастика', urls: fantastic, category: 6 },
  { id: nanoid(), name: 'Мелодрама', urls: melodramas, category: 4 },
  { id: nanoid(), name: 'Мюзикл', urls: musical, category: 20 },



]