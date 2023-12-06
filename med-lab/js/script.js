// $(document).ready(function(){
  const generateMadLibs = () => {
  
    const noun = document.querySelector('#noun').value;
    const adjective = document.querySelector('#adjective').value;
    const verb = document.querySelector('#verb').value;
    const madLibsStory = `
      <p>Once upon a time, there was a ${adjective} ${noun} who loved to ${verb}.</p>
      <p>One day, while ${verb}ing in the ${noun}, the ${noun} found a magical ${adjective} potion.</p>
      <p>After taking the potion, the ${noun} felt incredibly ${adjective} and started to ${verb} like never before.</p>
      <p>And so, the ${adjective} ${noun} lived happily ever after, always remembering the magical day of ${verb}ing.</p>
    `;

   
    document.querySelector('#madLibsOutput').innerHTML = madLibsStory;
  };
// })