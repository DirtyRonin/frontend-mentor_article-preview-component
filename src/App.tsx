import React from 'react';
import './App.css';
import { ArticlePreview } from './components/article-preview';

function App() {
  return (
    <div className="App">
      <header></header>
      <nav></nav>
      <main>
        <ArticlePreview />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
