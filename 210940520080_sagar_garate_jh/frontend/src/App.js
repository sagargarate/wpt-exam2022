import axios from "axios";
import { useEffect, useState } from "react"};

export default function App() {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState("[]");
  const processmessage = (e) => {
    setMessage(e.target.value);
  }
  const handlesend = () => {
    const newList = [message, ...messageList];
    setMessageList(newList);
    setMessage("");
  }
  return
  <div>
    <header>
      MyChatApp
    </header>
    <div>
      <input type="text" value={message} placeholder="chat here" onchange={processmessage} />
      <input type="button" value="send" onclick={handlesend} />
    </div>
    {messageList.map((item.index)=>(
    <div key={index}>{item}</div>
    ))}
  </div>
}
}

}




