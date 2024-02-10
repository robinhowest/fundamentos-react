//app é um componente - que é uma funcao que retorna html por isso a extençao é jsx = javascript + xml
//xml = (html) no caso a mesma linguagem

import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/robinhowest.png',
      name: 'Robson Santos',
      role: 'CTO @ Rocketseat'
    },
    content: [
      {type: 'paragraph' , content: 'Fala galera'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW return, evento da Rocketseat. O nome do projeto é DoctorCare'},
      {type: 'link', content: 'robson.design/doctorcare'},    
    ],
    publishedAt: new Date('2023-10-22 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educador @ Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW return, evento da Rocketseat. O nome do projeto é DoctorCare'},
      {type: 'link', content: 'robson.design/doctorcare'},    
    ],
    publishedAt: new Date('2023-10-10 20:00:00'),
  },
];

export function App() {
  //nao pode ter varios componente (post) um abaixo do outro sem um elemento por volta deles (div)
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>        
          <Sidebar/>      
        <main>
          {posts.map(post => {
            return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
          })}
        </main>
      </div> 
    </div>
  )
}


