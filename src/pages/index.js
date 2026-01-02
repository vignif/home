import React, { useState, useEffect } from "react"
import { Seo } from "../components/seo"

const IndexPage = () => {
  const [clicks, setClicks] = useState(0)
  
  const emojis = ['🚧', '🔧', '⚙️', '🛠️', '⚡', '🚀', '✨', '🎯', '🎉', '📧']
  const messages = [
    'Under Development (do not click on the icon)',
    'Really...?',
    'Ok let\'s go...',
    'Getting closer!',
    'Keep going!',
    'You\'re persistent!',
    'Nice clicking!',
    'Impressive!',
    'Wow!',
    'Legend! 🏆'
  ]
  
  const currentEmoji = emojis[Math.min(clicks, emojis.length - 1)]
  const currentMessage = messages[Math.min(clicks, messages.length - 1)]
  
  useEffect(() => {
    if (clicks === 10) {
      window.location.href = "mailto:vignif@gmail.com?subject=🎉%20I%20Found%20Your%20Secret%20Easter%20Egg!&body=Hey%20Francesco!%0A%0AI%20just%20discovered%20your%20%22under%20development%22%20page%20and%20couldn't%20resist%20clicking%20that%20emoji%2010%20times.%20Looks%20like%20my%20persistence%20paid%20off!%20%F0%9F%98%84%0A%0AI'm%20clearly%20someone%20who%20appreciates%20attention%20to%20detail%20and%20hidden%20gems.%20Since%20I%E2%80%99m%20here%2C%20I%20thought%20I'd%20reach%20out%20and%20say%20hi!%0A%0A%5BFeel%20free%20to%20tell%20me%20why%20you%E2%80%99re%20reaching%20out%20-%20whether%20it's%20about%20a%20project%2C%20collaboration%2C%20or%20just%20to%20connect!%5D%0A%0ACheers%2C%0A%5BYour%20Name%5D"
    }
  }, [clicks])
  
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '40px 20px',
      color: '#000'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '500px' }}>
        <button 
          onClick={() => setClicks(clicks + 1)}
          style={{
            fontSize: '5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            transition: 'transform 0.1s',
            marginBottom: '2rem'
          }}
          onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.9)'}
          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          {currentEmoji}
        </button>
        
        <h1 style={{
          fontSize: '2rem',
          fontWeight: '300',
          marginBottom: '1rem',
          letterSpacing: '-0.5px'
        }}>
          {currentMessage}
        </h1>
        
        {clicks > 0 && (
          <p style={{
            fontSize: '0.9rem',
            color: '#666',
            marginBottom: '2rem'
          }}>
            Clicks: {clicks}
          </p>
        )}
        
        <div style={{
          marginTop: '3rem',
          paddingTop: '2rem',
          borderTop: '1px solid #eee'
        }}>
          <a 
            href="https://apps.francescovigni.com" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              background: '#000',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '0.9rem',
              fontWeight: '500',
              transition: 'opacity 0.2s',
              marginBottom: '1rem'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            View Portfolio →
          </a>
          <p style={{
            fontSize: '0.85rem',
            color: '#999',
            marginTop: '1.5rem'
          }}>
            Francesco Vigni, Ph.D.
          </p>
        </div>
      </div>
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default IndexPage
export const Head = () => <Seo title="Under Development" />
