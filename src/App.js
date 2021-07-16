import { ChatEngine } from "react-chat-engine";
import "./App.css";
import LoginForm from "./components/loginform";
import ChatFeed from "./components/ChatFeed";

const projectID = "47048f23-bd92-4b23-ac50-88984902bc77";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      // ProjectKey="e5f86eba-e961-4c2e-bc3b-30e014c8b4fb "
      // userName="shalinidutta"
      //userName="bill90"
      // userSecret="joeroot66"
      //userSecret="123123"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
};

export default App;
