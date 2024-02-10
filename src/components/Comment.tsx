import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) =>void;
}

export function Comment({content, onDeleteComment}: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment() {
        setLikeCount((state) => {
          return state + 1
        });    
    }

    function handleDeleteComment() {
        onDeleteComment(content);

    } 
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/robinhowest.png"/>      
            <div className={styles.commentBox}>
              <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Robson Santos</strong>
                        <time title="03 de novembro as 21h" dateTime="2023-11-03 21:00:00">Cerca de 1 hora</time>
                    </div>
                    <button onClick={handleDeleteComment} title="Deletar comentario">
                        <Trash size={24}/>
                    </button>
                </header>
                <p>{content}</p>                
              </div>
              <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp/>
                    Aplaudir <span>{likeCount}</span>
                </button>
              </footer>
            </div> 
        </div>
    );
}