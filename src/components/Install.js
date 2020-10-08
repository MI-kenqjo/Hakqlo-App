import React from 'react'
import '../css/install.scss'
import { mouse, ios, safari } from 'platform-detect'
export default class extends React.Component {
  state = {
    installPrompt: null
  }

  componentDidMount() {
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault()
      this.setState({installPrompt: e})
    })
  }

  render() {
    return (
      <div className='install center-content'>
        <h1>Hakqlo</h1>
        <button
          onClick={() => {
            if(mouse){
              alert('PC version unavailable')
            } else if (this.state.installPrompt) {
              this.state.installPrompt.prompt()
              this.state.installPrompt.userChoice.then(choice => {
                if (choice.outcome === 'accepted') {
                  this.setState({
                    installPrompt: null
                  })
                }
              })
            } else if(ios&&safari){
              alert('*shows instruction')
            } else {
              alert('インストールできませんでした')
            }
          }}>
          インストール
        </button>
      </div>
    )
  }
}