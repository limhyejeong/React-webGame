const React = require('react');
const { useState, useRef } = React;

const GuGuDan = () => { // 클래스와 다른 함수형 객체
   const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
   const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
   const [value, setValue] = useState('');
   const [result, setResult] = useState('');
   const inputRef = useRef(null);

   const onChangeInput = (e) => {
      setValue(e.target.value);
   };

   const onSubmitForm = (e) => {
      e.preventDefault();
      if (parseInt(value) === first * second) {
         setResult(first + ' x ' + second + ' = ' + value + ' ⭕️');
         setFirst(Math.ceil(Math.random() * 9));
         setSecond(Math.ceil(Math.random() * 9));
         setValue('');
         inputRef.current.focus();
      } else {
         setResult('❌');
         setValue('');
      }
   }

   return (
      <>
         <div>{first} x {second} = ? </div>
         <form onSubmit={onSubmitForm}>
            <input ref={inputRef} onChange={onChangeInput} value={value} />
            <button>Enter!</button>
         </form>
         <div id="result">{result}</div>
      </>
   )
}

module.exports = GuGuDan;