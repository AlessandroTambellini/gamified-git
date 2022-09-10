function Prompt() {
  return (
    <main className="container bg-primary-dark">
      <samp className="text-neutral">
        <span className="prompt text-primary-orange">
          Utente@DESKTOP-UG4H89G
        </span>
        <span className="text-secondary"> MINGW64 </span>~
        <br />
        <span className="text-neutral">$ </span>
        <kbd className="text-neutral">git --version</kbd>
        <br />
        git version 2.30.0.windows.2
      </samp>
    </main>
  );
}

/* 
    - <kbd>: user input from a keyboard, voice input, or any other text entry device
    - <samp>: sample output from a computer program
    - <output>: container element into which a site or app can inject the results of a 
    calculation or the outcome of a user action
    - <var>: name of a variable in a mathematical expression or a programming context
*/

export default Prompt;
