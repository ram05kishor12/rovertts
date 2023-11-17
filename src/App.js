import './App.css';
import { useState, useEffect } from 'react';
import OpenAi from 'openai';

function App() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [speechUrl, setSpeechUrl] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [voice, setVoice] = useState('');

  useEffect(() => {
    const apiKeyInput = prompt('Enter your OpenAI API key:');
    setApiKey(apiKeyInput || '');
  }, []);

  const openai = new OpenAi({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
  });

  const handleGetSpeech = async () => {
    if(!apiKey) {
      alert('Please enter your API key!');
      return;
    }
    if (!input) {
      alert('Please enter some text!');
      return;
    }

    setLoading(true);
    try {
      const res = await openai.audio.speech.create({
        model: 'tts-1',
        voice: voice,
        input: input,
      });

      const blob = new Blob([await res.arrayBuffer()], { type: 'audio/mpeg' });
      const url = URL.createObjectURL(blob);
      setSpeechUrl(url);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!speechUrl) {
      alert('No speech to download!');
    }
    if (speechUrl) {
      const link = document.createElement('a');
      link.href = speechUrl;
      link.download = 'speech.mp3';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <h1 className="txt">Rovertts</h1>
          <div className="selectBox">
            <select
              className="select"
              value={voice}
              onChange={(e) => setVoice(e.target.value)}
            >
              <option value="alloy">01_Alloy</option>
              <option value="echo">02_Echo</option>
              <option value="fable">03_Fable</option>
              <option value="nova">04_Nova</option>
              <option value="onyx">05_Onyx</option>
              <option value="shimmer">06_Shimmer</option>
            </select>
          </div>

          <div className="input">
            <textarea
              type="text"
              placeholder="Type here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="row">
            <button className="btn" onClick={handleGetSpeech} disabled={loading}>
              Get 
            </button>
            <button className="btn" onClick={handleDownload}>
              Download 
            </button>
          </div>
          {speechUrl && (
            <audio controls>
              <source src={speechUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
