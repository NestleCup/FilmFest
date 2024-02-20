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
  { id: nanoid(), name: 'Комедия', urls: comedy, },
  { id: nanoid(), name: 'Ужасы', urls: horror, },
  { id: nanoid(), name: 'Драмма', urls: drama, },
  { id: nanoid(), name: 'Боевик', urls: fighters, },
  { id: nanoid(), name: 'Фэнтези', urls: fantasy, },
  { id: nanoid(), name: 'Исторические', urls: history, },
  { id: nanoid(), name: 'Триллер', urls: thriller, },
  { id: nanoid(), name: 'Детектив', urls: detectives, },
  { id: nanoid(), name: 'Семейные', urls: family, },
  { id: nanoid(), name: 'Триллер', urls: thriller, },
  { id: nanoid(), name: 'Детектив', urls: detectives, },
  { id: nanoid(), name: 'Приключения', urls: adventures, },
  { id: nanoid(), name: 'Криминальные', urls: criminal, },
  { id: nanoid(), name: 'Документальные', urls: documentaries, },
  { id: nanoid(), name: 'Фантастика', urls: fantastic, },
  { id: nanoid(), name: 'Мелодрама', urls: melodramas, },
  { id: nanoid(), name: 'Мюзикл', urls: musical, },



]