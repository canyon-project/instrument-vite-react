import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showText, setShowText] = useState(true)
  const [colorIndex, setColorIndex] = useState(0)
  const colors = ['#333', '#e74c3c', '#2ecc71', '#3498db', '#9b59b6']
  console.log(123123);
  
  return (
    <div className="app">
      <h1>按钮功能演示</h1>

      <div className="button-group">
        {/* 计数器按钮 */}
        <button className="btn btn-blue" onClick={() => setCount(c => c + 1)}>
          点击计数：{count}
        </button>

        {/* 重置按钮 */}
        <button className="btn btn-red" onClick={() => { setCount(0); setColorIndex(0); }}>
          重置
        </button>

        {/* 切换显示按钮 */}
        <button className="btn btn-green" onClick={() => setShowText(!showText)}>
          {showText ? '隐藏文字' : '显示文字'}
        </button>

        {/* 切换颜色按钮 */}
        <button className="btn btn-purple" onClick={() => setColorIndex((c + 1) % colors.length)}>
          切换颜色
        </button>

        {/* 快速增加按钮 */}
        <button className="btn btn-orange" onClick={() => setCount(c => c + 10)}>
          +10
        </button>

        {/* 减少按钮 */}
        <button className="btn btn-gray" onClick={() => setCount(c => Math.max(0, c - 1))}>
          -1
        </button>
      </div>

      {/* 状态展示区 */}
      <div className="status-area" style={{ color: colors[colorIndex] }}>
        {showText && (
          <p className="status-text">
            当前计数：<strong>{count}</strong> &nbsp;|&nbsp; 文字颜色：<strong>{colors[colorIndex]}</strong>
          </p>
        )}
        {!showText && <p className="status-text dimmed">文字已隐藏 👻</p>}
      </div>

      {count >= 20 && (
        <div className="achievement">
          🎉 计数器已达到 {count}！继续加油！
        </div>
      )}
    </div>
  )
}

export default App
