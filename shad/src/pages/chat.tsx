import React, { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';

const DarkModeChatArea = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/noob');
  };

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [position, setPosition] = useState({ x: 200, y: 200 });
  const [size, setSize] = useState({ width: 300, height: 400 });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const messagesEndRef = useRef(null);
  const chatBoxRef = useRef(null);

  const onMouseDownDrag = (event) => {
    setIsDragging(true);
    chatBoxRef.current.style.cursor = 'grabbing';
  };

  const onMouseMoveDrag = (event) => {
    if (isDragging) {
      setPosition(prevPosition => ({
        x: prevPosition.x + event.movementX,
        y: prevPosition.y + event.movementY
      }));
    }
  };

  const onMouseUpDrag = () => {
    setIsDragging(false);
    chatBoxRef.current.style.cursor = 'grab';
  };

  const onMouseDownResize = (event) => {
    setIsResizing(true);
    event.preventDefault();
  };

  const onMouseMoveResize = (event) => {
    if (isResizing) {
      setSize(prevSize => ({
        width: Math.max(300, prevSize.width + event.movementX),
        height: Math.max(300, prevSize.height + event.movementY)
      }));
    }
  };

  const onMouseUpResize = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const handleMouseUp = () => {
      onMouseUpDrag();
      onMouseUpResize();
    };

    const handleMouseMove = (e) => {
      if (isDragging) {
        onMouseMoveDrag(e);
      } else if (isResizing) {
        onMouseMoveResize(e);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: newMessage, sender: 'response' }]);
      }, 1000);
      setNewMessage('');
    }
  };

  return (
    <div
      ref={chatBoxRef}
      className="flex flex-col bg-gray-900 text-white rounded-lg"
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={onMouseDownDrag}
    >

      {/* Chat Header */}
      <div className="p-4 flex items-center border-b border-gray-800">
        <img 
          src="/public/self.jpg" 
          alt="User Name" 
          className="h-10 w-10 rounded-full mr-3" 
        />
        <h3 className="text-lg font-semibold">I Know You Cried</h3>
        <Button variant="outline" onClick={handleLogin}>Button</Button>
      </div>

      {/* Chat messages */}
      <div className="p-4 flex flex-col h-96 overflow-y-auto no-scrollbar">
        <div className="flex flex-col space-y-2 mb-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex flex-row items-start ${message.sender === 'user' ? 'self-end' : 'self-start'}`}>
              <div className={`rounded-md p-2 ${message.sender === 'user' ? 'bg-blue-600' : 'bg-gray-800'}`}>
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Send message input */}
      <div className="p-4 flex flex-row items-center">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-grow bg-gray-800 text-white rounded-md py-2 px-4 border border-gray-700 focus:outline-none"
          placeholder="Type a message..."
          onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
        />
        <button className="ml-2 bg-blue-600 rounded-full p-2" onClick={sendMessage}>
          <Send className="h-5 w-5 text-white" />
        </button>
        <div
          style={{ cursor: 'nwse-resize', position: 'absolute', bottom: '0', right: '0', width: '20px', height: '20px', backgroundColor: 'transparent' }}
          onMouseDown={onMouseDownResize}
        ></div>
      </div>
    </div>
  );
};

export default DarkModeChatArea;
