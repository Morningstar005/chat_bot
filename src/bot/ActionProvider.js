class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  handleGotit = () => {
    const message = this.createClientMessage("Got it");
    this.addMessageToState(message);
    const msg = this.createChatBotMessage("Enter your name");
    this.addMessageToState(msg);
  };

  handleAgeAction = () => {
    const msg = this.createChatBotMessage("Enter your Age", {
      widget: "age",
    });

    this.addMessageToState(msg);
  };



  PrintAge = (selectedAge, time) => {
    console.log(selectedAge);
    const msg = this.createClientMessage(`You'r age is ${selectedAge}`);

    this.addMessageToState(msg);

    const message = this.createChatBotMessage("Pick a slot !", {
      widget: "alotment",
    });

    this.addMessageToState(message);

  
  };


  datetime =(time)=>{
    // console.log("time")
    const resposne = this.createClientMessage(`your appointment is book at ${time}`)

    this.addMessageToState(resposne)

      const mess = this.createChatBotMessage("thank you", {
      widget: "counter",
    });

    this.addMessageToState(mess);
  }

  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}

export default ActionProvider;
