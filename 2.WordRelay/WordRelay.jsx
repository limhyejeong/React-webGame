const React = require('react');
const { Component } = React;

class WordRelay extends Component {
   state = {
      word: '시작',
      value: '',
      result: '',
   };

   onSubmit = (e) => {
      e.preventDefault();
      if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
         this.setState({
            result: '⭕️',
            word: this.state.value,
            value: '',
         });
         this.input.focus();
      } else {
         this.setState({
            result: '❌',
            value: '',
         });
         this.input.focus();
      }
   };

   input;

   onRefInput = (c) => {
      this.input = c;
   };

   onChangeInput = (e) => {
      this.setState({ value: e.target.value });
   };

   render() {
      return (
         <>
            <div>
               {this.state.word}
            </div>

            <form onSubmit={this.onSubmit}>
               <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
               <button>Enter</button>
            </form>

            <div>{this.state.result}</div>
         </>
      )
   }
}

module.exports = WordRelay;