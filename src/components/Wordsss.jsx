import React from 'react';
import { ListOfWords } from '../data/ListOfWords';
import '../styles/Words.css';

class Words extends React.Component {
  state = {
    myWords: [],
    actualWord: '',
    fontFamilyClass: 'word-poppins',
    theme: [],
  }

  componentDidMount() {
    this.getWords();
  }

  getWords = () => {
    const concatWords = [];
    ListOfWords.forEach((list) => concatWords.push(...list.words));
    this.setState({ myWords: concatWords }, () => this.getRandomWord());
  }

  getRandomIndex = () => {
    const { myWords } = this.state;
    const max = myWords.length;
    return Math.floor(Math.random() * max);
  }

  setFontFamily = () => {
    const fontFamily = ['word-dancing Script', 'word-kalam', 'word-poppins', 'word-vibur'];
    const index = Math.floor(Math.random() * 5);
    this.setState({ fontFamilyClass: fontFamily[index] })
  }

  getRandomWord = () => {
    const { myWords } = this.state
    const actualWord = myWords[this.getRandomIndex()]
    this.setState({ actualWord }, () => this.setFontFamily());
  }

  render (){
    const { actualWord, fontFamilyClass } = this.state
    return (
      <button
        type='button'
        className={ `myWord ${fontFamilyClass}` }
        onClick={ this.getRandomWord }
      >
        { actualWord }
      </button>
    );
  }
}

export default Words;