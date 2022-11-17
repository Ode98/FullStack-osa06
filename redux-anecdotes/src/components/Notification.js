import { connect } from 'react-redux'

const Notification = (props) => {
  const notificationMsg = props.notification //useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (notificationMsg !== null) {
    return (
      <div style={style}>
        {notificationMsg}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification