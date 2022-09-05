import React, { useState, useEffect } from 'react';
import { ListOfWords } from '../data/ListOfWords';
import '../styles/Words.css';

function Words() {

  const [myWords, setMyWords] = useState([]);
  const [actualWord, setActualWord] = useState('');
  const [fontFamilyClass, setFontFamilyClass] = useState('word-poppins');

  useEffect(() => {
    getWords()
  }, [])

  useEffect(() => {
    getRandomWord()
  }, [myWords])

  useEffect(() => {
    setFontFamily()
  }, [actualWord])

  const getWords = () => {
    const concatWords = [];
    ListOfWords.forEach((list) => concatWords.push(...list.words));
    setMyWords(concatWords)
  }

  const getRandomIndex = () => {
    const max = myWords.length;
    return Math.floor(Math.random() * max);
  }

  const setFontFamily = () => {
    const fontFamily = ['word-dancing Script', 'word-kalam', 'word-poppins', 'word-vibur'];
    const index = Math.floor(Math.random() * 5);
    setFontFamilyClass(fontFamily[index])
  }

  const getRandomWord = () => {
    const myActualWord = myWords[getRandomIndex()]
    setActualWord(myActualWord)
  }

    return (
      <button
        type='button'
        className={ `myWord ${fontFamilyClass}` }
        onClick={ getRandomWord }
      >
        { actualWord }
      </button>
    );
}

export default Words;