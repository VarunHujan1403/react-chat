import PropTypes from 'prop-types';
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  let chatProps = useMultiChatLogic('77db1ee2-a19b-490c-8d25-21656db6a711', props.user.username, props.user.secret);
  
  return (
    <div style={{ height: '100vh' }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div>
  );
};
/*<PrettyChatWIndow>
projectid=''
username=props.user.username
secret=props.user.secret
style={{height : '100vh'}}
</PrettyChatWIndow>*/
// Define PropTypes
ChatsPage.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChatsPage;
