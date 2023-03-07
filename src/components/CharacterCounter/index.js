import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class CharacterCounter extends Component {
  state = {characterCountList: [], searchText: ''}

  onChangeSearchInput = event => {
    this.setState({searchText: event.target.value})
  }

  addItem = () => {
    const {searchText} = this.state

    const characterCount = {
      id: uuidv4(),
      input: searchText.concat(':', searchText.length),
    }

    // const  = searchText.concat(':', searchText.length)
    this.setState(prevState => ({
      characterCountList: [...prevState.characterCountList, characterCount],
    }))
    this.setState({searchText: ''})
  }

  render() {
    const {characterCountList, searchText} = this.state
    // console.log(characterCountList)

    return (
      <div className="bg-container">
        <div className="left-side-container">
          <div className="count-charcters-heading-container">
            <h1>Count the characters like a Boss...</h1>
          </div>
          {characterCountList.length > 0 ? (
            <ul className="un-orderlist">
              {characterCountList.map(each => (
                <Item each={each} key={each.id} />
              ))}
            </ul>
          ) : (
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png "
                alt="no user inputs"
                className="no-user-inputs-img"
              />
            </div>
          )}
        </div>
        <div className="right-side-container">
          <h1 className="charcter-count-heading">Character Counter</h1>
          <div className="input-container">
            <input
              type="text"
              className="input-element"
              placeholder="Enter the Characters here"
              value={searchText}
              onChange={this.onChangeSearchInput}
            />
            <button type="button" className="add-btn" onClick={this.addItem}>
              Add
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterCounter

const Item = props => {
  const {each} = props
  const {input} = each

  return (
    <li>
      <p className="li-item">{input}</p>
    </li>
  )
}
