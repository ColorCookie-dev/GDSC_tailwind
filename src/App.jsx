import { useEffect, useState } from 'react'
import './App.css'
import { marked } from 'marked'
import NavBar from './components/NavBar'
import Markdown from './components/Markdown'
import Preview from './components/Preview'

function App() {
  const [markdown, setMarkdown] = useState('');
  const [rawtext, setRawText] = useState('');

  useEffect(() => {
    const mdValue = localStorage.getItem('markdown');
    if (mdValue) {
      const mdValue2 = JSON.parse(mdValue);
      if (mdValue2) {
        document.getElementsByTagName('textarea')[0].innerHTML = mdValue2;
        setMarkdown(marked(mdValue2));
      }
    }
  }, []);

  const handleChange = (mdValue) => {
    setMarkdown(marked(mdValue));
    setRawText(mdValue);
  };

  const handleSave = () => {
    localStorage.setItem('markdown', JSON.stringify(rawtext));
  };

  const deleteLocal = () => {
    localStorage.setItem('markdown', '');
    document.getElementsByTagName('textarea')[0].innerHTML = '';
    setMarkdown(marked(''));
  };

  const startDownload = () => {
    const c = document.createElement("a");
    c.download = "YourNotes.md";

    const new_blob = new Blob([rawtext], {
      type: "text/plain"
    });

    c.href = window.URL.createObjectURL(new_blob);
    c.click();
    c.remove();
  };

  return (
    <div className='App bg-gray-600'>
      <NavBar startDownload = {startDownload} saveToLocal = {handleSave} deleteLocal = {deleteLocal}/>
      <div className='flex'>
        <Markdown handleChange = {handleChange}/>
        <Preview mdValue = {markdown}/>
      </div>
    </div>
  )
}

export default App
