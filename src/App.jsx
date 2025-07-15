import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import LeftSide from './components/leftSide/LeftSide'
import RightSide from './components/rightSide/RightSide'
import "./App.css"
import Profile from './components/middle/Profile'
import Home from './components/middle/Home'
import Explore from './components/middle/Explore'
import Notifications from './components/middle/Notification'
import Messages from './components/middle/Messages'
import More from './components/middle/More'
function App() {
  const [searchInput, setSearchInput] = useState('');
  const [tweet, setTweet] = useState([]);
  const [theme, setTheme] = useState("dark");
  return (
    <BrowserRouter>
      <div className='grid grid-cols-[1fr_2fr] sm:grid-cols-[1fr_2fr_1fr] md:grid-cols-[1fr_2fr_1fr] lg:grid-cols-[1fr_2fr_1fr] xl:grid-cols-[1fr_2fr_1fr] 2xl:grid-cols-[1fr_2fr_1fr] bg-[#171717] text-white'>
        <LeftSide theme={theme} />
        <div className='border-x-[2px] border-gray-700'>
          <Routes>
            <Route path="/" element={<Home theme={theme} searchQuery={searchInput} tweet={tweet} setTweet={setTweet} />} />
            <Route path="/explore" element={<Explore theme={theme} />} />
            <Route path="/notifications" element={<Notifications theme={theme} />} />
            <Route path="/messages" element={<Messages theme={theme} />} />
            {/* <Route path="/bookmarks" element={<div>Bookmarks</div>} />
            <Route path="/lists" element={<div>Lists</div>} /> */}
            <Route path="/profile" element={<Profile tweet={tweet} theme={theme} />} />
            <Route path="/more" element={<More theme={theme} setTheme={setTheme} />} />
          </Routes>
        </div>
        <RightSide searchInput={searchInput}
          setSearchInput={setSearchInput} theme={theme} />
      </div>
    </BrowserRouter>
  )
}

export default App
