import React from 'react';

const Projects = () => (
  <section id="projects" className="projects" data-aos="zoom-in-up" style={{ position: 'relative', overflow: 'hidden' }}>
    {/* Animated background */}
    <div
      data-aos="fade-in"
      data-aos-duration="2000"
      style={{
        position: 'absolute',
        top: '-50px',
        left: '-50px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, #667eea 0%, #764ba2 100%)',
        opacity: 0.15,
        zIndex: 0,
        borderRadius: '50%',
        pointerEvents: 'none',
      }}
    />
    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        <div className="project-card" data-aos="fade-up" data-aos-delay="100">
          <div className="project-image">
            <div className="project-placeholder">AI Codebase Chatbot (RAG)</div>
          </div>
          <div className="project-content">
            <h3>AI Codebase Chatbot (RAG)</h3>
            <p>
              Developed a Retrieval-Augmented Generation (RAG) chatbot that answers natural language queries from codebases and documents.<br/>
              • Implemented document embedding using ChromaDB and retrieval via LangChain, with answer generation powered by OpenAI’s GPT-3.5 API.<br/>
              • Designed an intuitive Streamlit-based frontend and achieved 80% accuracy in contextual Q&A responses.
            </p>
            <div className="project-tech">
              <span>Python</span>
              <span>LangChain</span>
              <span>OpenAI GPT-3.5 API</span>
              <span>ChromaDB</span>
              <span>Streamlit</span>
            </div>
            <div className="project-links">
              {/* Add your links here if available */}
            </div>
          </div>
        </div>
        <div className="project-card" data-aos="fade-up" data-aos-delay="200">
          <div className="project-image">
            <div className="project-placeholder">To-Do List Application</div>
          </div>
          <div className="project-content">
            <h3>To-Do List Application</h3>
            <p>
              Designed and developed a responsive task management web app allowing users to add, edit, delete, and filter to-do tasks in real-time.<br/>
              • Implemented localStorage integration to persist tasks across sessions, ensuring a seamless user experience.<br/>
              • Organized modular codebase using clean JavaScript structure and styled UI with custom CSS animations and transitions.
            </p>
            <div className="project-tech">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
            </div>
            <div className="project-links">
              {/* Add your links here if available */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects; 