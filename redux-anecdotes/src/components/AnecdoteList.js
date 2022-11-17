import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const Anecdote = ({anecdote, handleClick}) => {
  return(
    <li>
      {anecdote.content}
      <button onClick={handleClick}>vote</button>
      {anecdote.votes} votes
    </li>
  )
}

const handlevote = (anecdote, dispatch) => {
  dispatch(vote(anecdote.id))
  dispatch(setNotification(`you voted '${anecdote.content}'`, 2))
}

const Anecdotes = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)

  return(
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map(anecdote =>
          <Anecdote 
            key={anecdote.id}
            anecdote = {anecdote}
            handleClick = {() =>
              handlevote(anecdote, dispatch)
            }
          />
        )}
      </ul>
    </div>
  )
}

export default Anecdotes