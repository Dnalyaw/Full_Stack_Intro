import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' //variable actually correcponds to the actual logo
import './App.css'



//npm install vite
// "npm create vite" in terminal, Pick React and Javascript
//npm run dev

import angelGPT from './assets/angelLogo.svg'
import devilGPT from './assets/devilLogo.svg'
import oskiUser from './assets/oskiLogo.svg'
import chatGPT from './assets/ChatGPT.svg'



function App() {

  return (
    <>
    <h1>Pros of using ChatGPT</h1>
    <div className = "container-gpt">
        <div className="chat-bubble">
          <img src = {angelGPT} alt = "Angel GPT Logo" className = "chat-icon" />
          <p className="formatted-paragraph">
            Hello user, what do you want to know?
          </p>
        </div>
      </div>

      <div className = "container-user">
        <div className="chat-bubble">
          <img src = {oskiUser} alt = "Oski User Logo" className = "chat-icon" />
          <p className="formatted-paragraph">
            What are some of the pros of using Chatgpt in today's world?
          </p>
        </div>
      </div>
      
      <div className="container-gpt">
        <div className="chat-bubble">
          <img src = {angelGPT} alt = "Angel GPT Logo" className = "chat-icon" />
          <p className="formatted-paragraph">
          <strong>Versatility:</strong> ChatGPT is a versatile language model that can perform a wide range of natural language understanding and generation tasks. It can be used for answering questions, generating text, providing recommendations, assisting with coding, language translation, and much more. Its versatility makes it a valuable tool in various domains, from education and customer support to content creation.
          <br></br>
          <strong>Scalability:</strong> ChatGPT is scalable, meaning it can be fine-tuned for specific tasks and domains. This makes it adaptable to the unique needs of different businesses and applications. Whether you need a general-purpose chatbot or a specialized AI for a particular industry, ChatGPT can be tailored to meet your requirements.
          <br></br>
          <strong>Time Efficiency:</strong> ChatGPT can significantly reduce the time required for tasks that involve natural language processing. It can quickly generate human-like responses, reducing the time and effort needed for tasks like content creation, data analysis, and customer support. This efficiency can lead to increased productivity.
          <br></br>
          <strong>Consistency:</strong> ChatGPT provides consistency in communication. It generates responses based on patterns and data, ensuring that answers and information provided are consistent across different interactions. This is crucial in maintaining a unified and reliable user experience.
          <br></br>
          <strong>24/7 Availability:</strong> ChatGPT operates around the clock, which is especially beneficial for businesses and organizations that need to provide support or information at all hours. It can handle customer inquiries or assist users at any time, enhancing user satisfaction and engagement.
          <br></br>
          <strong>Multilingual Capabilities:</strong> ChatGPT can communicate in multiple languages, making it a valuable tool for businesses with a global reach. It can assist users in their preferred language, contributing to a more inclusive and accessible user experience.
          <br></br>
          <strong>Enhanced Customer Support:</strong> ChatGPT can be used to augment customer support services. It can answer frequently asked questions, troubleshoot common issues, and provide immediate assistance, reducing the workload on human support agents and improving response times.
          <br></br>
          <strong>Scalable Training:</strong> ChatGPT can be fine-tuned and continuously improved over time. This means that it can learn and adapt to changing user needs and preferences. As more data becomes available, the model's performance can be enhanced through ongoing training.
          <br></br>
          <strong>Accessibility:</strong> ChatGPT can enhance accessibility by assisting individuals with disabilities. It can provide text-to-speech and speech-to-text functionality, assist with reading and writing, and facilitate communication for those with special needs, contributing to a more inclusive digital environment.
          <br></br>
          <strong>Innovation and Research:</strong> ChatGPT serves as a valuable tool for researchers and developers working on natural language processing (NLP) and artificial intelligence. It has opened up opportunities for innovation in NLP, leading to advancements in the field of AI and enabling the development of more intelligent and responsive conversational agents.
          </p>
        </div>
      </div>

      <div className = "container-user">
        <div className="chat-bubble">
          <img src = {oskiUser} alt = "Oski User Logo" className = "chat-icon" />
          <p className="formatted-paragraph">
            Wow, thank you so much ChatGPT!
          </p>
        </div>
      </div>
      <div className = "container-gpt">
        <div className="chat-bubble">
          <img src = {angelGPT} alt = "Angel GPT Logo" className = "chat-icon" />
          <p className="formatted-paragraph">
            As ChatGPT, I am very glad to know that you are willing to look at the positives for AI and what it can do for society.
          </p>
        </div>
      </div>
      <footer>
        <div class="footer-content">
          <div class="footer-title">
              <div id="line"></div>
              <h3>Created by John Teng and Wayland La</h3>
              <div id="line"></div>
          </div>
                  
          <ul class="socials">
            <li><a href="#"><img src={chatGPT} alt="mainSite"></img></a></li>
            <li><a href="#"><img src={angelGPT} alt="angelSite"></img></a></li>
            <li><a href="#"><img src={devilGPT} alt="devilSite"></img></a></li>
            <li><a href="https://chat.openai.com/" target="_blank"><img src={oskiUser} alt="chatGPT Website"></img></a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default App
