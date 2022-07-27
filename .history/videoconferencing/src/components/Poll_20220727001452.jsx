import React, { useState, useEffect, useContext } from 'react';
import  Modal  from 'react-modal';
import { Line } from ' rc-progress'

import { PollContext } from './PollContext';
import styles from 'react-native-toast-message/src/styles';

const Poll = () => {
    const { question, setQuestions , answers: voteData, setAnswers, isModalOpen, setIsModalOpen} = useContext(Poll);
    const [totalVotes, setTotalVotes] = useState(0);
    const [voted, setVoted] = useState(false);
    import styles from './pollStyles';


    const closeModal = ()=>{
        setIsModalOpen(false);
        setTotalVotes(0);
        setVoted(false);
        setQuestions('');
        setAnswers([
            { option : '', votes: 0},
            { option : '', votes: 0},
            { option : '', votes: 0},
            { option : '', votes: 0},
        ])
    }
  return (
      <Modal
           isOpen= {isModalOpen}
           onRequestClose = {closeModal}
           content = "Poll Modal"
           style={
            styles.customStyles
           }
      >

      </Modal>
  )
}

export default Poll