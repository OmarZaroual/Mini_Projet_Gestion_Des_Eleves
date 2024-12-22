import React from 'react'

function LeftMenu() {
  return (
    <aside style={{ width: '200px', backgroundColor: '#004D40', color: 'white', padding: '1rem', textAlign: 'center',}}>
            <h3>Menu</h3>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                <li>Home</li>
                <li>Students</li>
            </ul>
    </aside>
  )
}

export default LeftMenu
