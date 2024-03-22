import './ChatBot.css'
import { useEffect, useRef, useState } from 'react'
import moment from 'moment'
import { IoIosClose } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";


import axios from 'axios'
import botImg from '../../images/download.png'

function ChatBot() {
  const inputValue = useRef(null)
  const [ showChatBot, setShowChatBot ] = useState(false)
  const [ messages, setMessages ] = useState([])
  const [ chatId, setChatId ] = useState(null)
  const [ firstMessage, setFirstMessage ] = useState(false)
  const [ secondMessage, setSecondMessage ] = useState(false)
  const [ forSecondMessage, setForSecondMessage ] = useState(false)
  const [ sendingMessage, setSendingMessage ] = useState(false)
  const [ forRegenerating, setForRegenerating ] = useState(null)
  const [ forSecondText, setForSecondText ] = useState(null)
  const [ forDefaultMessages, setForDefaultMessages ] = useState(false)
  const [ forTextWrapping, setForTextWrapping ] = useState(true)
  const [ defaultAnswers ] = useState([
    {
      id: '1',
      answer: 'I have a question'
    },
    {
      id: '2',
      answer: 'I want to chat with your sales team'
    },
    {
      id: '3',
      answer: "I'm looking to buy"
    }
  ])
  const [ defaultQuestions ] = useState([
    {
      id: '1',
      question: 'What is your name?',
      answer: 'My name is [BotName].'
    },
    {
      id: '2',
      question: 'Where are you from?',
      answer: 'I am from [BotLocation].'
    },
    {
      id: '3',
      question: 'What can you do?',
      answer: 'I can help you with various tasks and provide information.'
    },
    {
      id: '4',
      question: 'How can I contact support?',
      answer: 'You can contact support by emailing [SupportEmail] or visiting our support page.'
    },
    {
      id: '5',
      question: 'I want to chat with your sales team',
      answer: 'Write your email please'
    },
    {
      id: '6',
      question: 'I have a question',
      answer: "Wait a moment, please. You'll be connected with our sales team soon."
    },
    {
      id: '7',
      question: `I'm looking to buy`,
      answer: "That's great to hear!"
    }
  ])
  const messagesEndRef = useRef(null)

  useEffect(() => scrollToBottom(), [ messages, showChatBot ])

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView()

  useEffect(() => {
    if (showChatBot) {
      setTimeout(() => setFirstMessage(true), 500)
    }
  }, [ showChatBot ])

  useEffect(() => {
    if (showChatBot) {
      setTimeout(() => setSecondMessage(true), 1200)
    }
  }, [ showChatBot ])

  useEffect(() => {
    if (secondMessage) {
      setTimeout(() => setForSecondMessage(true), 2000)
    }
  }, [ secondMessage ])

  useEffect(() => {
    if (forSecondMessage) {
      setTimeout(() => setForDefaultMessages(true), 1500)
    }
  }, [ forSecondMessage ])

  useEffect(() => {
    if (forSecondMessage) {
      setTimeout(() => setForSecondText(true), 600)
    }
  }, [ forSecondMessage ])

  useEffect(() => {
    if (chatId) {
      setFirstMessage(true)
      setSecondMessage(true)
      setForSecondMessage(true)
      setForSecondText(true)
      setTimeout(() => setForTextWrapping(false), 600)
    }
  }, [ chatId ])

  useEffect(() => {
    const regenerating = JSON.parse(localStorage.getItem('regenerating'))
    if (regenerating) {
      setForRegenerating(regenerating)
    }
  }, [])

  useEffect(() => {
    const storedChatId = JSON.parse(localStorage.getItem('chatId'))
    if (storedChatId) {
      setChatId(storedChatId)
    }
  }, [])

  useEffect(() => {
    if (chatId) {
      axios
      .get(`http://localhost:3001/chats?chatId=${chatId}`)
      .then(res => setMessages(res.data.messages))
      .catch(err => console.error('Error:',err))
    }
  }, [ chatId ])

  const sendMessage = e => {
    e.preventDefault()

    const messageContent = inputValue.current.value.trim()
    if (!messageContent || sendingMessage) return

    const isEmail = message => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.(com|net|org|ru)$/i
      return emailRegex.test(message)
    }

    const isUserEmail = isEmail(messageContent)
    setSendingMessage(true)

    const matchedQuestion = defaultQuestions.find(question => messageContent.toLowerCase() === question.question.toLowerCase())
    const botResponse = matchedQuestion ? matchedQuestion.answer : "Sorry, I don't have an answer for that question."

    axios
    .post("http://localhost:3001/messages/add", { content: messageContent, chatId, sender: 'user' })
    .then(res => {
      inputValue.current.value = ''
      setMessages(prev => {
        if (prev.some(message => message._id === res.data._id)) {
          return prev
        } else {
          return [...prev, res.data]
        }
      })
      axios
      .post("http://localhost:3001/messages/add", { content: isUserEmail ? 'Thanks!' : botResponse, chatId, sender: 'bot' })
      .then(res => {
        if (isUserEmail) {
          setForRegenerating('true')
          localStorage.setItem('regenerating', JSON.stringify('true'))
        }
        setMessages(prev => {
          if (prev.some(message => message._id === res.data._id)) {
            return prev
          } else {
            return [ ...prev, { ...res.data, loading: true } ]
          }
        })
        setTimeout(() => {
          setMessages(prev => prev.map(message => message._id === res.data._id ? { ...message, loading: false } : message))
        }, 1500)
      })
      .catch(err => console.error('Error:', err))
      .finally(() => setSendingMessage(false))
    })
    .catch(err => console.error('Error:', err))
    .finally(() => setSendingMessage(false))
  }

  const handleAnswerClick = answer => {
    const userMessage = {
      _id: Date.now().toString(),
      content: answer,
      sender: 'user'
    }

    setMessages(() => [ userMessage ])

    axios
    .post('http://localhost:3001/chats/add')
    .then(res => {
      localStorage.setItem('chatId', JSON.stringify(res.data._id))
      setChatId(res.data._id)
      setSendingMessage(true)
      const id = res.data._id
      axios.post("http://localhost:3001/messages/add", { content: answer, chatId: res.data._id, sender: 'user' })
      .then(res => {
        setMessages(prev => {
          if (prev.some(message => message._id === res.data._id)) {
            return prev
          } else {
            return [ res.data ]
          }
        })
        const matchedQuestion = defaultQuestions.find(
          question => answer.toLowerCase() === question.question.toLowerCase()
        )
        axios
        .post("http://localhost:3001/messages/add", { content: matchedQuestion.answer, chatId: id, sender: 'bot' })
        .then(res => {
          setMessages(prev => {
            if (prev.some(message => message._id === res.data._id)) {
              return prev
            } else {
              return [ ...prev, { ...res.data, loading: true } ]
            }
          })
          setSendingMessage(false)
          setTimeout(() => {
            setMessages(prev => prev.map(message => message._id === res.data._id ? { ...message, loading: false } : message))
          }, 1500)
        })
        .catch(err => console.error('Error:', err))
      })
      .catch(err => console.error('Error:', err))
    })
    .catch(err => console.error('Error:', err))
    inputValue.current.value = ''
  }

  const reGenerate = () => {
    localStorage.removeItem('regenerating')
    localStorage.removeItem('chatId')
    setForRegenerating(false)
    setChatId(null)
    setMessages(null)
    axios
    .delete(`http://localhost:3001/chats/${chatId}`)
    .catch(err => console.log('Error:',err))
  }

  return (
    <>
      {
        showChatBot ?
        <div className='chat-bot'>
          <div className='chat-bot-header'>
            <img  src={'./logo.png'} />
            <IoIosClose style={{cursor:"pointer"}}  size={32} onClick={() => setShowChatBot(false)}/>
          </div>
          <div className='chat-bot-container'>
            <p className='chat-bot-container_time'>{moment(Date.now()).format("MMMM Do [at] h:mm A")}</p>
            <div className='chat-bot-container_messages'>
              <div className='message-wrapper'>
                <img style={{ marginBottom: secondMessage && '-35px' }} className='bot-img' src={botImg} alt=''/>
                <div style={{ width: firstMessage ? '114px' : 0, padding: !firstMessage && 0 }} className='bot-message-wrapper'>
                  { secondMessage && <p className={`message ${forTextWrapping && 'nowrap'}`}>Hey there 👋</p> }
                </div>
              </div>
              <div className='message-wrapper'>
                <img className='bot-img hidden_img' src={botImg} alt=''/>
                {
                  secondMessage && !forSecondMessage &&
                  <div className='loader-wrapper'>
                    <div className="loader"></div>
                  </div>
                }
                <div style={{ width: forSecondMessage ? '160px' : 0, padding: !forSecondMessage && 0 }} className='bot-message-wrapper2'>
                  { forSecondText && <p className={`message ${forTextWrapping && 'nowrap'}`}>How can I help you?</p> }
                </div>
              </div>
              <div className='default-answers'>
                {
                  !chatId && forDefaultMessages &&
                  defaultAnswers.map(e =>
                    <div key={e.id} className='message-wrapper'>
                      <div className='user-message-wrapper'>
                        <p onClick={() => handleAnswerClick(e.answer)} className='message'>{e.answer}</p>
                      </div>
                    </div>
                  )
                }
              </div>
              <div className='messages'>
                {
                  messages?.map(e =>
                    <div className={`message-wrapper ${e.sender === 'user' && 'goLeft'}`} key={e._id}>
                      { e.sender === 'bot' && <img className='bot-img' src={botImg} alt=''/> }
                      {
                        e.loading ?
                        <div className='loader-wrapper'>
                          <div className="loader"></div>
                        </div> :
                        <div className={`${e.sender === 'user' ? 'user-message-wrapper' : 'bot-message-wrapper-custom'}`}>
                          <p className='message'>{e.content}</p>
                        </div>
                      }
                    </div>
                  )
                }
                <div ref={messagesEndRef} />
              </div>
            </div>
            {
              forRegenerating ?
              <button className='re-generate' onClick={reGenerate}>Regenerate</button> :
              <form style={{display: !chatId && 'none'}} onSubmit={sendMessage} className='chat-bot-container-form'>
                <input
                  type="text"
                  ref={inputValue}
                  placeholder="Type your message..."
                  className="chat-bot-container-form_input"
                />
                <i onClick={sendMessage} className="fa-solid fa-paper-plane"></i>
              </form>
            }
          </div>
        </div> :
           <div  className='chat-bot_icon' onClick={() => setShowChatBot(true)} >
             <FaMessage color={'white'} size={42} />
           </div>
      }
    </>
  )
}

export default ChatBot
