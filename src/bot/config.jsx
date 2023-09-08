import { createChatBotMessage } from "react-chatbot-kit";
import Gotit from "../component/Gotit"
import Counter from "../component/Counter";
import Age from "../component/Age"
import AlotmentSetting from "../component/AlotmentSetting";
import BotAvatar from "../component/botAvatar"

const botName = "Happily ever bot"
const config={
    initialMessages:[
        createChatBotMessage(`Hello, Welcome to student info system!`, {
            widget: "gotit",
            payload: { gotit: "goitit" },
          }),
    ],
    botName:botName,
    customComponents:{
      botAvatar:(props)=><BotAvatar {...props}/>
    },
    customStyles: {
      botMessageBox: {
        backgroundColor: '#376B7E',
      },
      chatButton: {
        backgroundColor: '#5ccc9d',
      },
    },

    widgets: [
        {
          widgetName: "gotit",
          widgetFunc: (props) => <Gotit {...props} ></Gotit>,
        },
        {
          widgetName: "age",
          widgetFunc: (props) => <Age {...props} />,
        },
        {
          widgetName:"alotment",
          widgetFunc:(props) => <AlotmentSetting {...props}/>,
        },
        {
          widgetName: "counter",
          widgetFunc: (props) => <Counter {...props} />,
        },
      ],

}

export default config;