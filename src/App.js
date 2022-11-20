import React, { useState } from 'react';
import data from './Component/data'
import Q from './Component/question'

function App() {
  const [question,setQuestion] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>Questions and Answers about login</h3>
        <section className='info'>
         {
           question.map((questions)=>{
             return <Q  key={questions.id} {...questions} />
           })
         }
       </section>
        </div>
        </main>
  );
}

export default App;
