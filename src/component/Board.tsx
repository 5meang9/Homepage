import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import '../styles/Board.scss';

export default function Board(){
  return(
    <div className='board-container'>
      <div className='board-item-wrap'>
        <div className='board-item-img'>
          <Badge pill bg="primary">ssss</Badge>
          <img src="images/monsterKill.png" alt="" />
        </div>
        <div className='board-item-contents'>
          <p></p>
          <p className='board-item-title'></p>
        </div>
      </div>
      <div className='board-item-wrap'>
        <div className='board-item-img'>
          <Badge pill bg="primary">ssss</Badge>
          <img src="" alt="" />
        </div>
        <div className='board-item-contents'>
          <p></p>
          <p className='board-item-title'></p>
        </div>
      </div>
      <div className='board-item-wrap'>
        <div className='board-item-img'>
          <Badge pill bg="primary">ssss</Badge>
          <img src="" alt="" />
        </div>
        <div className='board-item-contents'>
          <p></p>
          <p className='board-item-title'></p>
        </div>
      </div>
      <div className='board-item-wrap'>
        <div className='board-item-img'>
          <Badge pill bg="primary">ssss</Badge>
          <img src="" alt="" />
        </div>
        <div className='board-item-contents'>
          <p></p>
          <p className='board-item-title'></p>
        </div>
      </div>
    </div>
  )
}